// src/components/Footer.tsx

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-white/[0.06] bg-zinc-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-3">
        <div>
          <Link to="/" className="group flex items-center gap-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 shadow-lg shadow-amber-500/20 transition-shadow duration-300 group-hover:shadow-amber-500/40">
              <svg
                className="h-5 w-5 text-zinc-950"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 17h14M5 17a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1l2-3h8l2 3h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2M7 17v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1M14 17v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1" />
              </svg>
            </div>

            <span className="text-2xl font-bold tracking-tight">Vehicra</span>
          </Link>

          <p className="mt-4 max-w-sm text-sm leading-6 text-zinc-400">
            Tu plataforma confiable para comprar, vender y administrar vehículos
            de forma moderna, segura y eficiente.
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-200">
            Enlaces
          </h4>

          <div className="flex flex-col gap-2">
            <Link
              to="/"
              className="text-sm text-zinc-400 transition-colors hover:text-amber-400"
            >
              Inicio
            </Link>

            <Link
              to="/autos"
              className="text-sm text-zinc-400 transition-colors hover:text-amber-400"
            >
              Autos disponibles
            </Link>

            <Link
              to="/contacto"
              className="text-sm text-zinc-400 transition-colors hover:text-amber-400"
            >
              Contacto
            </Link>

            <Link
              to="/mi-historial"
              className="text-sm text-zinc-400 transition-colors hover:text-amber-400"
            >
              Mi historial
            </Link>
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-200">
            Contacto
          </h4>

          <div className="space-y-3 text-sm text-zinc-400">
            <p>
              <span className="text-zinc-300">Email:</span>{" "}
              contacto@vehicra.com
            </p>

            <p>
              <span className="text-zinc-300">Tel:</span> +506 8888-8888
            </p>

            <p>
              <span className="text-zinc-300">Ubicación:</span> Costa Rica
            </p>
          </div>

          <div className="mt-5">
            <Link
              to="/contacto"
              className="inline-flex rounded-lg bg-gradient-to-r from-amber-400 to-orange-500 px-5 py-2 text-sm font-semibold text-zinc-950 shadow-lg shadow-amber-500/20 transition-all duration-300 hover:shadow-amber-500/40 hover:brightness-110 active:scale-[0.97]"
            >
              Contactar ahora
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/[0.06] px-6 py-5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-sm text-zinc-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} Vehicra. Todos los derechos
            reservados.
          </p>

          <div className="flex gap-5">
            <Link to="/privacidad" className="hover:text-amber-400">
              Privacidad
            </Link>
            <Link to="/terminos" className="hover:text-amber-400">
              Términos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;