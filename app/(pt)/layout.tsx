import "../globals.css";
import { buildMetadata, RootShell, siteViewport } from "@/lib/site";

export const metadata = buildMetadata("pt");
export const viewport = siteViewport;

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootShell lang="pt">{children}</RootShell>;
}
