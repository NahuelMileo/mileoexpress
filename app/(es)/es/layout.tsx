import "../../globals.css";
import { buildMetadata, RootShell, siteViewport } from "@/lib/site";

export const metadata = buildMetadata("es");
export const viewport = siteViewport;

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootShell lang="es">{children}</RootShell>;
}
