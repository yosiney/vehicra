// src/pages/HomePage.tsx

import { Link } from "react-router-dom";

const featuredCars = [
  {
    id: "1",
    brand: "Toyota",
    model: "Corolla",
    year: 2021,
    price: 14500,
    mileage: 52000,
    type: "Sedán",
    condition: "Usado",
    image:
      "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "2",
    brand: "Hyundai",
    model: "Tucson",
    year: 2022,
    price: 23800,
    mileage: 34000,
    type: "SUV",
    condition: "Usado",
    image:
      "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "3",
    brand: "Ford",
    model: "Ranger",
    year: 2020,
    price: 28500,
    mileage: 61000,
    type: "Pick-up",
    condition: "Usado",
    image:
      "https://images.unsplash.com/photo-1609521263047-f8f205293f24?q=80&w=1200&auto=format&fit=crop",
  },
];

const categories = ["Sedán", "SUV", "Pick-up", "Eléctrico", "Híbrido", "Familiar"];

const HomePage = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <section className="relative overflow-hidden border-b border-white/[0.06]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.18),transparent_35%),radial-gradient(circle_at_top_left,rgba(249,115,22,0.12),transparent_35%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-flex rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-sm font-medium text-amber-300">
              Compra, vende y aparta autos en un solo lugar
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
              Encuentra tu próximo vehículo con{" "}
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                Vehicra
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-8 text-zinc-400">
              Explora autos disponibles, revisa detalles, solicita cotización,
              agenda una prueba de manejo o aparta el vehículo que te interesa.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/autos"
                className="rounded-lg bg-gradient-to-r from-amber-400 to-orange-500 px-6 py-3 text-sm font-semibold text-zinc-950 shadow-lg shadow-amber-500/20 transition hover:brightness-110"
              >
                Ver catálogo
              </Link>

              <Link
                to="/contacto"
                className="rounded-lg border border-white/[0.10] px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.06]"
              >
                Solicitar información
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-white/[0.08] bg-white/[0.04] p-4 shadow-2xl shadow-black/30">
            <img
              src="https://images.unsplash.com/photo-1619767886558-efdc259cde1a?q=80&w=1400&auto=format&fit=crop"
              alt="Vehículo destacado"
              className="h-[360px] w-full rounded-2xl object-cover"
            />

            <div className="mt-4 grid grid-cols-3 gap-3 text-center">
              <div className="rounded-xl bg-zinc-900 p-4">
                <p className="text-2xl font-bold text-amber-400">+120</p>
                <p className="text-xs text-zinc-400">Autos</p>
              </div>
              <div className="rounded-xl bg-zinc-900 p-4">
                <p className="text-2xl font-bold text-amber-400">24/7</p>
                <p className="text-xs text-zinc-400">Consultas</p>
              </div>
              <div className="rounded-xl bg-zinc-900 p-4">
                <p className="text-2xl font-bold text-amber-400">100%</p>
                <p className="text-xs text-zinc-400">Control</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="rounded-2xl border border-white/[0.08] bg-zinc-900/70 p-5">
          <h2 className="text-lg font-semibold">Búsqueda rápida</h2>

          <div className="mt-4 grid gap-4 md:grid-cols-5">
            <input className="rounded-lg border border-white/[0.08] bg-zinc-950 px-4 py-3 text-sm outline-none" placeholder="Marca" />
            <input className="rounded-lg border border-white/[0.08] bg-zinc-950 px-4 py-3 text-sm outline-none" placeholder="Modelo" />
            <input className="rounded-lg border border-white/[0.08] bg-zinc-950 px-4 py-3 text-sm outline-none" placeholder="Año" />
            <input className="rounded-lg border border-white/[0.08] bg-zinc-950 px-4 py-3 text-sm outline-none" placeholder="Precio máximo" />
            <Link to="/autos" className="rounded-lg bg-amber-400 px-4 py-3 text-center text-sm font-semibold text-zinc-950">
              Buscar autos
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold">Categorías</h2>
            <p className="mt-2 text-zinc-400">Filtra vehículos según tu necesidad.</p>
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {categories.map((category) => (
            <Link
              key={category}
              to="/autos"
              className="rounded-2xl border border-white/[0.08] bg-white/[0.04] p-5 text-center font-medium text-zinc-300 transition hover:border-amber-400/40 hover:text-amber-400"
            >
              {category}
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold">Autos destacados</h2>
            <p className="mt-2 text-zinc-400">Vehículos disponibles para consulta, cotización o apartado.</p>
          </div>

          <Link to="/autos" className="hidden text-sm font-semibold text-amber-400 hover:text-amber-300 md:block">
            Ver todos
          </Link>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {featuredCars.map((car) => (
            <div key={car.id} className="overflow-hidden rounded-2xl border border-white/[0.08] bg-zinc-900">
              <img src={car.image} alt={`${car.brand} ${car.model}`} className="h-52 w-full object-cover" />

              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-bold">
                      {car.brand} {car.model}
                    </h3>
                    <p className="text-sm text-zinc-400">
                      {car.year} · {car.type} · {car.condition}
                    </p>
                  </div>

                  <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium text-green-400">
                    Disponible
                  </span>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <p className="text-2xl font-bold text-amber-400">
                    ${car.price.toLocaleString()}
                  </p>
                  <p className="text-sm text-zinc-400">
                    {car.mileage.toLocaleString()} km
                  </p>
                </div>

                <div className="mt-5 flex gap-3">
                  <Link
                    to={`/autos/${car.id}`}
                    className="flex-1 rounded-lg bg-white px-4 py-2 text-center text-sm font-semibold text-zinc-950"
                  >
                    Ver detalle
                  </Link>
                  <Link
                    to="/contacto"
                    className="flex-1 rounded-lg border border-white/[0.10] px-4 py-2 text-center text-sm font-semibold text-white hover:bg-white/[0.06]"
                  >
                    Cotizar
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            "Solicitud de cotización rápida",
            "Agendar prueba de manejo",
            "Apartar vehículo disponible",
          ].map((item) => (
            <div key={item} className="rounded-2xl border border-white/[0.08] bg-white/[0.04] p-6">
              <h3 className="text-lg font-semibold">{item}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-400">
                Gestiona tus consultas desde la plataforma y mantén trazabilidad
                del proceso con Vehicra.
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;