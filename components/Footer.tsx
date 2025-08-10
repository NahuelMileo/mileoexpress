import Link from "next/link";

export default function Page() {
  return (
    <footer className="bg-neutral-900 py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="font-semibold text-white">Mileo Express</p>
            <p className="mb-4 text-gray-400">
              Transporte internacional confiable entre Montevideo y São Paulo.
              Una empresa familiar con más de 25 años de experiencia.
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-lg font-semibold">Enlaces Rápidos</h4>
            <div className="space-y-2">
              <Link
                href="#inicio"
                className="block text-gray-400 transition-colors hover:text-white"
              >
                Inicio
              </Link>
              <Link
                href="#nosotros"
                className="block text-gray-400 transition-colors hover:text-white"
              >
                Nosotros
              </Link>
              <Link
                href="#servicios"
                className="block text-gray-400 transition-colors hover:text-white"
              >
                Servicios
              </Link>
              <Link
                href="#flota"
                className="block text-gray-400 transition-colors hover:text-white"
              >
                Nuestra Flota
              </Link>
            </div>
          </div>
          <div>
            <h4 className="mb-4 text-lg font-semibold">Contacto</h4>
            <div className="space-y-2 text-gray-400">
              <p>+598 99 123 456</p>
              <p>info@mileoexpress.com</p>
              <p>Montevideo, Uruguay</p>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Mileo Express. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
