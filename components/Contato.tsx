"use client";

import { track } from "@vercel/analytics";
import { useRef, useState, type FormEvent } from "react";
import { dictionaries, type Lang, type QuoteForm } from "@/lib/content";
import { EMAIL, WHATSAPP, whatsappLink } from "@/lib/empresa";
import { ArrowIcon, ChatIcon, MailIcon, PinIcon } from "./icons";
import Title, { Eyebrow } from "./Title";

const field =
  "w-full rounded-xl border border-linha bg-suave px-4 py-3 text-base text-grafite placeholder:text-muted/70 focus:border-vinho focus:outline-none focus:ring-2 focus:ring-vinho/20";

const empty: QuoteForm = {
  profile: "",
  name: "",
  company: "",
  origin: "",
  destination: "",
  type: "",
  weight: "",
  date: "",
  details: "",
};

function Field({ label, optional, wide, children }: { label: string; optional?: string; wide?: boolean; children: React.ReactNode }) {
  return (
    <label className={`block ${wide ? "sm:col-span-2" : ""}`}>
      <span className="mb-1.5 block text-sm font-medium">
        {label} {optional && <span className="font-normal text-muted">{optional}</span>}
      </span>
      {children}
    </label>
  );
}

export default function Contato({ lang }: { lang: Lang }) {
  const t = dictionaries[lang];
  const c = t.contato;
  const f = c.form;
  const [form, setForm] = useState(empty);
  const formRef = useRef<HTMLFormElement>(null);

  const set = (k: keyof QuoteForm) => (e: { target: { value: string } }) =>
    setForm((prev) => ({ ...prev, [k]: e.target.value }));

  const submit = (e: FormEvent) => {
    e.preventDefault();
    track("cotacao_whatsapp", { lang, perfil: form.profile || "sem perfil" });
    const url = whatsappLink(t.country, f.message(form));
    const win = window.open(url, "_blank", "noopener");
    if (!win) window.location.href = url;
  };

  // Alternativa para quien no tiene WhatsApp en la computadora del trabajo
  const sendEmail = () => {
    if (!formRef.current?.reportValidity()) return;
    track("cotacao_email", { lang, perfil: form.profile || "sem perfil" });
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(f.emailSubject)}&body=${encodeURIComponent(f.message(form))}`;
  };

  // El número del país del visitante va primero
  const countries = t.country === "br" ? (["br", "uy"] as const) : (["uy", "br"] as const);
  const items = [
    ...countries.map((country) => ({
      icon: ChatIcon,
      label: country === "br" ? c.whatsappBr : c.whatsappUy,
      value: WHATSAPP[country].display,
      href: whatsappLink(country, t.whatsappDefault),
      track: `whatsapp_contato_${country}`,
    })),
    { icon: MailIcon, label: c.emailLabel, value: EMAIL, href: `mailto:${EMAIL}`, track: "email_contato" },
    { icon: PinIcon, label: c.baseLabel, value: c.base },
  ];

  return (
    <section id="contato" className="border-t border-linha bg-white/60 py-24 lg:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 px-4 sm:px-6 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
        <div>
          <Eyebrow>{c.eyebrow}</Eyebrow>
          <Title lines={c.title} className="text-3xl leading-tight sm:text-4xl lg:text-5xl" />
          <p data-reveal className="mt-6 max-w-md text-lg leading-relaxed text-muted">
            {c.lead}
          </p>
          <ul className="mt-10 space-y-6">
            {items.map(({ icon: Icon, label, value, href, track: trackName }) => (
              <li key={label} data-reveal className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-linha text-vinho">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-sm text-muted">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                      data-track={trackName}
                      className="font-medium break-words underline-offset-4 hover:underline"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="font-medium">{value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
          <p data-reveal className="mt-10 max-w-md border-l-2 border-linha pl-4 text-sm leading-relaxed text-muted">
            {c.safety}
          </p>
        </div>

        <form
          ref={formRef}
          data-reveal
          onSubmit={submit}
          className="rounded-3xl border border-linha bg-white p-6 sm:p-8 lg:p-10"
          aria-labelledby="form-title"
        >
          <h3 id="form-title" className="text-2xl font-semibold tracking-tight">
            {f.title}
          </h3>
          <p className="mt-1 text-sm text-muted">{f.intro}</p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <Field label={f.profile} wide>
              <select required value={form.profile} onChange={set("profile")} className={field}>
                <option value="">{f.select}</option>
                {f.profiles.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </Field>
            <Field label={f.name}>
              <input required autoComplete="name" value={form.name} onChange={set("name")} placeholder={f.namePh} className={field} />
            </Field>
            <Field label={f.company}>
              <input required autoComplete="organization" value={form.company} onChange={set("company")} placeholder={f.companyPh} className={field} />
            </Field>
            <Field label={f.origin}>
              <input required value={form.origin} onChange={set("origin")} placeholder={f.originPh} className={field} />
            </Field>
            <Field label={f.destination}>
              <input required value={form.destination} onChange={set("destination")} placeholder={f.destinationPh} className={field} />
            </Field>
            <Field label={f.type}>
              <select required value={form.type} onChange={set("type")} className={field}>
                <option value="">{f.select}</option>
                {f.types.map((ty) => (
                  <option key={ty} value={ty}>
                    {ty}
                  </option>
                ))}
              </select>
            </Field>
            <Field label={f.weight}>
              <input required value={form.weight} onChange={set("weight")} placeholder={f.weightPh} className={field} />
            </Field>
            <Field label={f.date} optional={f.optional} wide>
              <input type="date" value={form.date} onChange={set("date")} className={field} />
            </Field>
            <Field label={f.details} optional={f.optional} wide>
              <textarea rows={3} value={form.details} onChange={set("details")} placeholder={f.detailsPh} className={field} />
            </Field>
          </div>

          <button
            type="submit"
            className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-vinho px-6 py-4 font-medium text-suave transition-colors hover:bg-vinho-hover"
          >
            <ChatIcon className="h-5 w-5" />
            {f.submit}
            <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
          <button
            type="button"
            onClick={sendEmail}
            className="mt-3 w-full rounded-full px-6 py-3 text-sm font-medium text-muted underline-offset-4 hover:text-grafite hover:underline"
          >
            {f.email}
          </button>
          <p className="mt-2 text-center text-xs text-muted">{f.footnote}</p>
        </form>
      </div>
    </section>
  );
}
