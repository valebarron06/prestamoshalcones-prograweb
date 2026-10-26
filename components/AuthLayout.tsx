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
    <div>
      <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#e1f6fd] px-6 py-12 text-on-surface">
        <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2" />
        <div className="relative z-10 w-full max-w-md">
          <Link
            href="/"
            className="mb-10 flex items-center justify-center gap-3"
          >
            <span className="material-symbols-outlined text-4xl text-[#195aec]">
              Home
            </span>
            <span className="font-mono text-2xl font-bold text-[#195aec]">
              Préstamos <span className="text-primary">Halcones</span>
            </span>
          </Link>
          <div className="rounded-2xl border border-[#195aec]/100 bg-white p-8 shadow-2xl">
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-bold text-[#195aec] tracking-light">
                {title}
              </h1>
              <p className="mt-3 text-sm text-[#000000]">{description}</p>
            </div>
            {children}
          </div>
          <p className="mt-8 text-center text-xs text-[#000000]">
            {new Date().getFullYear()} Préstamos Halcones
          </p>
        </div>
      </main>
    </div>
  );
}
