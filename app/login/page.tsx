import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="relatve flex min-h-screen items-center justify-center overflow-hidden bg-[#e1f6fd] px-6 py-12 text-on-surface">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2" />
      <div className="relative z-10 w-full max-w-md">
        <Link href="/" className="mb-10 flex items-center justify-center gap-3">
          <span className="material-symbols-outlined text-4xl text-[#195aec]">
            Home
          </span>
          <span className="font-mono text2xl font-bold text-[#195aec]">
            Préstamos <span className="text-primary">Halcones</span>
          </span>
        </Link>
        <div className="rounded-2xl border border-[#195aec]/100 bg-white p-8 shadow-2xl">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-[#195aec] tracking-light">
              Bienvenido de nuevo
            </h1>
            <p className="mt-3 text-sm text-[#000000]">
              Inicia sesión para poder agendar tu préstamo.
            </p>
          </div>
          <form className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm text-[#195aec] font-bold"
              >
                Correo electrónico
              </label>
              <input
                id="email"
                type="email"
                placeholder="ejemplo@correo.com"
                autoComplete="email"
                required
                className="w-full rounded-lg border-[#195aec] bg-[#195aec]/10 px-4 py-3 text-sm text-[#63b3fd] transition focus:border-[#2935cc] focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div>
              <div className="mb-2 flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-sm text-[#195aec] font-bold"
                >
                  Contraseña
                </label>
                <Link
                  href="#"
                  className="text-xs text-[#fb7000] hover:underline"
                >
                  ¿Olvidaste tu contraseña?
                </Link>
              </div>
              <input
                id="password"
                type="password"
                placeholder="**********"
                autoComplete="current-password"
                required
                className="w-full rounded-lg border-[#195aec] bg-[#195aec]/10 px-4 py-3 text-sm text-[#63b3fd] transition focus:border-[#2935cc] focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <button
              type="submit"
              className="flext w-full items-center justify-center gap-2 rounded-lg bg-[#00ab00] px-4 py-3 font-semibold text-white trasnistion hover:opacity-90"
            >
              Iniciar sesión
              <span className="material-symbols-outlined text-xl">
                arrow_forward
              </span>
            </button>
            <div className="mt-6 text-center text-sm">
              <span className="text-[#000000]">¿No tienes cuenta? </span>
              <Link
                href="/signup"
                className="font-bold text-[#195aec] hover:underline transition-colors"
              >
                Regístrate aquí
              </Link>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
