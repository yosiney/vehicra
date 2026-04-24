// src/components/Navbar.tsx

import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-zinc-950/80 border-b border-white/[0.06]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="group flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 shadow-lg shadow-amber-500/20 transition-shadow duration-300 group-hover:shadow-amber-500/40">
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
          <span className="text-xl font-bold tracking-tight text-white">
            Vehicra
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 md:flex">
          {[
            { to: "/", label: "Inicio" },
            { to: "/autos", label: "Autos" },
            { to: "/contacto", label: "Contacto" },
          ].map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="relative rounded-lg px-4 py-2 text-sm font-medium text-zinc-400 transition-colors duration-200 hover:bg-white/[0.06] hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="rounded-lg bg-gradient-to-r from-amber-400 to-orange-500 px-5 py-2 text-sm font-semibold text-zinc-950 shadow-lg shadow-amber-500/20 transition-all duration-300 hover:shadow-amber-500/40 hover:brightness-110 active:scale-[0.97]"
          >
            Iniciar sesión
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative flex h-9 w-9 items-center justify-center rounded-lg text-zinc-400 transition-colors hover:bg-white/[0.06] hover:text-white md:hidden"
            aria-label="Menú"
          >
            <div className="flex w-5 flex-col items-end gap-[5px]">
              <span
                className={`block h-[2px] rounded-full bg-current transition-all duration-300 ${
                  mobileOpen ? "w-5 translate-y-[7px] rotate-45" : "w-5"
                }`}
              />
              <span
                className={`block h-[2px] rounded-full bg-current transition-all duration-300 ${
                  mobileOpen ? "w-5 opacity-0" : "w-3.5"
                }`}
              />
              <span
                className={`block h-[2px] rounded-full bg-current transition-all duration-300 ${
                  mobileOpen ? "w-5 -translate-y-[7px] -rotate-45" : "w-4"
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-white/[0.06] transition-all duration-300 md:hidden ${
          mobileOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0 border-t-0"
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-3">
          {[
            { to: "/", label: "Inicio" },
            { to: "/autos", label: "Autos" },
            { to: "/contacto", label: "Contacto" },
          ].map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-4 py-2.5 text-sm font-medium text-zinc-400 transition-colors hover:bg-white/[0.06] hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;