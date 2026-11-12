"use client";

import Link from "next/link";
import { useState } from "react";
import { firebaseAuth } from "@/lib/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";

type AuthFormProps = { mode: "login" | "signup" };

export default function AuthForm({ mode }: AuthFormProps) {
  const esRegistro = mode === "signup";
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [mostrarCuadroBienvenida, setMostrarCuadroBienvenida] = useState(false);

  const labelClass = "block text-xs text-[#195aec] font-bold mb-1";
  const inputClass =
    "w-full rounded-xl border border-[#195aec]/20 bg-[#195aec]/5 px-3 py-2.5 text-xs text-slate-800 placeholder:text-slate-400 outline-none transition focus:border-[#195aec] focus:bg-white focus:ring-2 focus:ring-[#195aec]/20";

  async function sendForm(event: React.FormEvent<HTMLFormElement>) {
    setError("");
    event.preventDefault();

    if (esRegistro && password !== confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    try {
      if (esRegistro) {
        const resultado = await createUserWithEmailAndPassword(
          firebaseAuth,
          email.trim(),
          password,
        );
        await updateProfile(resultado.user, { displayName: name.trim() });
        setMostrarCuadroBienvenida(true);
      } else {
        await signInWithEmailAndPassword(firebaseAuth, email.trim(), password);
        window.location.href = "/dashboard";
      }
    } catch (error) {
      console.log("Error al enviar el formulario", error);
      setError(
        esRegistro ? "Error al crear la cuenta" : "Error al iniciar sesión",
      );
    }
  }

  return (
    <form className="space-y-3" onSubmit={sendForm}>
      {esRegistro && (
        <div>
          <label htmlFor="nombre" className={labelClass}>
            Nombre completo
          </label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            autoComplete="name"
            required
            placeholder="Tu nombre completo"
            className={inputClass}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      )}

      <div>
        <label className={labelClass} htmlFor="email">
          Correo electrónico
        </label>
        <input
          className={inputClass}
          id="email"
          name="email"
          placeholder="ejemplo@correo.com"
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <div className="mb-1 flex items-center justify-between">
          <label className={labelClass} htmlFor="password">
            Contraseña
          </label>
          {!esRegistro && (
            <Link
              className="text-[11px] font-bold text-[#fb7000] hover:underline"
              href="#"
            >
              ¿Olvidaste tu contraseña?
            </Link>
          )}
        </div>
        <div className="relative">
          <input
            className={`${inputClass} pr-10`}
            id="password"
            name="password"
            placeholder="**********"
            required
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#195aec] hover:opacity-75 focus:outline-none cursor-pointer"
            type="button"
            onClick={() => setShowPassword((currentValue) => !currentValue)}
          >
            <span className="material-symbols-outlined text-base">
              {showPassword ? "visibility_off" : "visibility"}
            </span>
          </button>
        </div>
      </div>

      {esRegistro && (
        <div>
          <label className={labelClass} htmlFor="confirmPassword">
            Confirmar contraseña
          </label>
          <div className="relative">
            <input
              className={`${inputClass} pr-10`}
              id="confirmPassword"
              name="confirmPassword"
              placeholder="**********"
              required
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#195aec] hover:opacity-75 focus:outline-none cursor-pointer"
              type="button"
              onClick={() =>
                setShowConfirmPassword((currentValue) => !currentValue)
              }
            >
              <span className="material-symbols-outlined text-base">
                {showConfirmPassword ? "visibility_off" : "visibility"}
              </span>
            </button>
          </div>
        </div>
      )}

      {error && (
        <p role="alert" className="text-red-500 text-xs font-medium">
          {error}
        </p>
      )}

      <div className="pt-1">
        <button
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#00ab00] px-4 py-3 font-bold text-white transition hover:opacity-90 cursor-pointer shadow-lg shadow-green-600/20 text-sm"
          type="submit"
        >
          <span>{esRegistro ? "Crear cuenta" : "Iniciar sesión"}</span>
          <span className="material-symbols-outlined text-lg">
            arrow_forward
          </span>
        </button>
      </div>

      <div className="mt-3 pt-3 border-t border-slate-100 text-center text-xs">
        <span className="text-slate-600">
          {esRegistro
            ? "¿Ya tienes una cuenta? "
            : "¿No tienes una cuenta aún? "}
        </span>
        <Link
          href={esRegistro ? "/login" : "/signup"}
          className="font-bold text-[#195aec] hover:underline transition-colors"
        >
          {esRegistro ? "Inicia sesión aquí" : "Regístrate aquí"}
        </Link>
      </div>

      {mostrarCuadroBienvenida && (
        <div className="fixed inset-0 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm z-50 p-4">
          <div className="w-full max-w-[480px]">
            <div className="bg-white/95 backdrop-blur-xl border border-[#195aec]/35 rounded-3xl shadow-xl shadow-blue-900/15 relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-[#195aec] via-[#fb7000] to-[#195aec]"></div>
              <div className="p-6 md:p-8">
                <div className="flex flex-col items-center text-center mb-5">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#195aec]/10 border border-[#195aec]/25 text-[#195aec] font-mono text-xs mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00ab00] animate-pulse"></span>
                    <span>Portal Halcones</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl text-[#195aec] font-extrabold tracking-tight mb-2">
                    BIENVENIDO !!!
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 max-w-[380px] leading-relaxed">
                    Gracias por registrarte en{" "}
                    <span className="font-semibold text-[#195aec]">
                      Préstamos Halcones
                    </span>
                    , por favor inicia sesión para realizar tu préstamo.
                  </p>
                </div>
                <div className="relative my-5 flex items-center justify-center">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-slate-200"></div>
                  </div>
                  <div className="relative bg-white px-3">
                    <span className="font-mono text-[11px] text-[#195aec]/80 uppercase tracking-wider font-semibold">
                      acceso al sistema
                    </span>
                  </div>
                </div>
                <div className="text-center">
                  <Link
                    href="/login"
                    onClick={() => setMostrarCuadroBienvenida(false)}
                    className="inline-block font-extrabold text-sm md:text-base text-[#195aec] hover:text-[#fb7000] underline-offset-4 hover:underline transition-colors"
                  >
                    Iniciar sesión
                  </Link>
                </div>
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
            <div className="mt-3 flex items-center justify-between px-2 font-mono text-[11px] text-white/90 font-semibold">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00ab00]"></span>
                <span>ESTADO: ACTIVO</span>
              </div>
              <div>
                <span>HALCONES</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </form>
  );
}
