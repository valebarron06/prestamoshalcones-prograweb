import Link from "next/link";
import { ReactNode } from "react";

type AuthLayoutProps = {
  title: string;
  description: string;
  mode: "login" | "signup";
  children: ReactNode;
};

export default function AuthLayout({
  title,
  description,
  mode,
  children,
}: AuthLayoutProps) {
  return (
    <div className="bg-gradient-to-br from-[#8ec5ff] via-[#d0e6ff] to-[#fdbb74] text-slate-800 min-h-screen flex flex-col font-sans antialiased relative">
      <div className="pointer-events-none fixed inset-0 overflow-hidden flex justify-center z-0">
        <div className="w-[720px] h-[360px] bg-[#195aec]/25 blur-[120px] rounded-full -top-32 absolute"></div>
        <div className="w-[500px] h-[280px] bg-[#fb7000]/30 blur-[100px] top-40 right-1/4 absolute"></div>
      </div>

      <header className="w-full bg-gradient-to-r from-[#8ec5ff]/95 via-[#d0e6ff]/95 to-[#fdbb74]/95 backdrop-blur-md border-b border-[#195aec]/25 sticky top-0 z-50 shadow-sm">
        <div className="w-full max-w-[1440px] mx-auto px-6 flex items-center justify-between h-16">
          <Link
            className="flex items-center gap-3 group focus:outline-none"
            href="/"
          >
            <div className="w-8 h-8 rounded-lg bg-[#195aec]/15 border border-[#195aec]/40 flex items-center justify-center text-[#195aec]">
              <span className="material-symbols-outlined text-lg">Home</span>
            </div>
            <span className="font-mono text-xl font-bold text-[#195aec] tracking-tight">
              Préstamos <span className="text-[#fb7000]">Halcones</span>
            </span>
          </Link>
          <Link
            className="inline-flex items-center gap-1.5 text-slate-800 hover:text-[#195aec] transition-colors duration-150 text-sm px-3 py-1.5 rounded-lg hover:bg-white/75 font-semibold"
            href="/"
          >
            <span className="material-symbols-outlined text-lg">
              arrow_back
            </span>
            <span>Volver al inicio</span>
          </Link>
        </div>
      </header>

      <main
        className="flex-1 flex items-center justify-center px-4 md:px-8 py-8 relative z-10"
        style={{
          backgroundSize: "32px 32px",
          backgroundImage:
            "linear-gradient(to right, rgba(25, 90, 236, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(25, 90, 236, 0.1) 1px, transparent 1px)",
        }}
      >
        <div className="w-full max-w-[480px]">
          <div className="bg-white/95 backdrop-blur-xl border border-[#195aec]/35 rounded-3xl shadow-xl shadow-blue-900/15 relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-[#195aec] via-[#fb7000] to-[#195aec]"></div>
            <div className="p-6 md:p-8">
              <div className="flex flex-col items-center text-center mb-5">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#195aec]/10 border border-[#195aec]/25 text-[#195aec] font-mono text-xs mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00ab00] animate-pulse"></span>
                  <span>Portal Halcones</span>
                </div>
                <h1 className="text-2xl md:text-3xl text-[#195aec] font-extrabold tracking-tight mb-1">
                  {title}
                </h1>
                <p className="text-xs md:text-sm text-slate-600 max-w-[380px] leading-relaxed">
                  {description}
                </p>
              </div>

              <div className="relative my-4 flex items-center justify-center">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-200"></div>
                </div>
                <div className="relative bg-white px-3">
                  <span className="font-mono text-[11px] text-[#195aec]/80 uppercase tracking-wider font-semibold">
                    ingresa con correo
                  </span>
                </div>
              </div>

              {children}
            </div>

            <div className="bg-slate-50/95 border-t border-slate-100 px-6 py-2.5 flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-[#00ab00] text-sm">
                verified_user
              </span>
              <span className="font-mono text-[11px] text-slate-500 tracking-tight text-center">
                Sistema Oficial · Préstamos Halcones
              </span>
            </div>
          </div>

          <div className="mt-3 flex items-center justify-between px-2 font-mono text-[11px] text-slate-700 font-semibold">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00ab00]"></span>
              <span>ESTADO: ACTIVO</span>
            </div>
            <div>
              <span>HALCONES</span>
            </div>
          </div>
        </div>
      </main>

      <footer className="w-full bg-white/95 border-t border-slate-200 py-4 relative z-10">
        <div className="w-full max-w-[1440px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="text-xs text-slate-500">
            {new Date().getFullYear()} Préstamos Halcones. Todos los derechos
            reservados.
          </p>
          <div className="flex items-center gap-3 font-mono text-xs text-slate-500">
            <Link
              className="hover:text-[#195aec] transition-colors duration-150"
              href="#"
            >
              Soporte
            </Link>
            <span className="text-slate-300">•</span>
            <Link
              className="hover:text-[#195aec] transition-colors duration-150"
              href="#"
            >
              Términos y Privacidad
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
