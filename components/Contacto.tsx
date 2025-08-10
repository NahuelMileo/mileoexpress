"use client";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";
import { Button } from "./ui/button";

const contactItems = [
  {
    icon: <Phone className="h-5 w-5 text-red-900" />,
    title: "Teléfono",
    value: "+598 99 123 456",
    bgColor: "bg-red-100",
  },
  {
    icon: <MessageCircle className="h-5 w-5 text-red-900" />,
    title: "WhatsApp",
    value: "+598 99 123 456",
    bgColor: "bg-red-100",
  },
  {
    icon: <Mail className="h-5 w-5 text-red-900" />,
    title: "Email",
    value: "info@mileoexpress.com",
    bgColor: "bg-red-100",
  },
  {
    icon: <MapPin className="h-5 w-5 text-red-900" />,
    title: "Ubicación",
    value: "Montevideo, Uruguay",
    bgColor: "bg-red-100",
  },
];

export default function Page() {
  return (
    <section
      id="contacto"
      className="bg-gradient-to-br from-red-50 to-gray-100 py-20"
    >
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">
            Contactanos
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            Estamos listos para transportar tu carga. Pedí tu cotización sin
            compromiso y descubrí por qué somos la mejor opción para tus envíos
            internacionales.
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="flex flex-col gap-8 lg:grid lg:grid-cols-2 lg:gap-12">
            <div className="w-full">
              <div className="rounded-2xl bg-white p-6 shadow-lg lg:p-8">
                <h3 className="mb-6 text-xl font-semibold text-gray-900 lg:text-2xl">
                  Información de Contacto
                </h3>
                <div className="space-y-6">
                  {contactItems.map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className={`rounded-lg p-3 ${item.bgColor}`}>
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {item.title}
                        </h4>
                        <p className="text-gray-600">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="w-full">
              <div className="rounded-2xl bg-white p-6 shadow-lg lg:p-8">
                <h3 className="mb-6 text-xl font-semibold text-gray-900 lg:text-2xl">
                  Pedí tu Cotización
                </h3>
                <div className="space-y-6">
                  <p className="text-gray-600">
                    Contactanos por WhatsApp para recibir una cotización
                    personalizada para tu carga. Te responderemos a la brevedad.
                  </p>
                  <Button
                    size="lg"
                    className="w-full bg-green-600 py-4 text-base text-white hover:bg-green-700 lg:py-6 lg:text-lg"
                    onClick={() => window.open("https://wa.me/+555391338841")}
                  >
                    <MessageCircle className="mr-2 h-5 w-5 flex-shrink-0 lg:mr-3 lg:h-6 lg:w-6" />
                    <span className="truncate">
                      Pedí tu cotización por WhatsApp
                    </span>
                  </Button>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="rounded-lg bg-gray-50 p-3 text-center lg:p-4">
                      <div className="text-xl font-bold text-red-900 lg:text-2xl">
                        24h
                      </div>
                      <div className="text-xs text-gray-600 lg:text-sm">
                        Respuesta rápida
                      </div>
                    </div>
                    <div className="rounded-lg bg-gray-50 p-3 text-center lg:p-4">
                      <div className="text-xl font-bold text-red-900 lg:text-2xl">
                        0$
                      </div>
                      <div className="text-xs text-gray-600 lg:text-sm">
                        Cotización gratuita
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
