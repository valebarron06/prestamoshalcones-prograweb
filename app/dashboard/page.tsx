"use client";

import { useEffect, useState } from "react";
import { firebaseAuth } from "@/lib/firebaseConfig";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (!currentUser) {
        router.push("/login");
      } else {
        setUser(currentUser);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [router]);

  const handleLogout = async () => {
    await signOut(firebaseAuth);
    router.push("/login");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#8ec5ff] via-[#d0e6ff] to-[#fdbb74] text-[#195aec] font-mono font-bold">
        Cargando Portal Halcones...
      </div>
    );
  }

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

          <button
            onClick={handleLogout}
            className="inline-flex items-center gap-1.5 bg-white/80 hover:bg-red-50 text-slate-800 hover:text-red-600 border border-[#195aec]/20 hover:border-red-200 transition-colors duration-150 text-xs px-3.5 py-2 rounded-xl font-bold cursor-pointer shadow-sm"
          >
            <span className="material-symbols-outlined text-base">logout</span>
            <span>Cerrar sesión</span>
          </button>
        </div>
      </header>

      <main
        className="flex-1 flex items-center justify-center px-4 md:px-8 py-10 relative z-10"
        style={{
          backgroundSize: "32px 32px",
          backgroundImage:
            "linear-gradient(to right, rgba(25, 90, 236, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(25, 90, 236, 0.1) 1px, transparent 1px)",
        }}
      >
        <div className="w-full max-w-[760px]">
          <div className="bg-white/95 backdrop-blur-xl border border-[#195aec]/35 rounded-3xl shadow-xl shadow-blue-900/15 relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-[4px] bg-gradient-to-r from-[#195aec] via-[#fb7000] to-[#195aec]"></div>

            <div className="p-8 md:p-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#195aec]/10 border border-[#195aec]/25 text-[#195aec] font-mono text-xs mb-4">
                <span className="w-2 h-2 rounded-full bg-[#00ab00] animate-pulse"></span>
                <span>SESIÓN ACTIVA · PORTAL HALCONES</span>
              </div>

              <h1 className="text-3xl md:text-4xl font-extrabold text-[#195aec] tracking-tight">
                ¡Qué gusto verte de nuevo,{" "}
                <span className="text-[#fb7000]">
                  {user?.displayName || "Halcón"}
                </span>
                !
              </h1>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
