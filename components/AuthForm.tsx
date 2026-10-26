"use client";
import Link from "next/link";
import { useState } from "react";

type AuthFormProps = { mode: "login" | "signup" };

export default function AuthForm({ mode }: AuthFormProps) {
  const esRegistro = mode === "signup";
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Variables con los colores de Halcones
  const labelClass = "block text-sm text-[#195aec] font-bold";
  const inputClass =
    "w-full rounded-lg border-[#195aec] bg-[#195aec]/10 px-4 py-3 text-sm text-[#63b3fd] transition focus:border-[#2935cc] focus:ring-2 focus:ring-primary/20";

  return (
    <form className="space-y-5">
      {esRegistro && (
        <div className="space-y-1.5">
          <label htmlFor="nombre" className={labelClass}>
            Nombre Completo
          </label>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#195aec]">
              person
            </span>
            <input
              id="nombre"
              name="nombre"
              type="text"
              autoComplete="name"
              required
              placeholder="Tu nombre completo"
              className={`${inputClass} pl-10`}
            />
          </div>
        </div>
      )}
      <div>
        <label htmlFor="email" className={`${labelClass} mb-2`}>
          Correo electrónico
        </label>
        <input
          id="email"
          type="email"
          placeholder="ejemplo@correo.com"
          autoComplete="email"
          required
          className={inputClass}
        />
      </div>
      <div>
        <div className="mb-2 flex items-center justify-between">
          <label htmlFor="password" className={labelClass}>
            Contraseña
          </label>
          <Link href="#" className="text-xs text-[#fb7000] hover:underline">
            ¿Olvidaste tu contraseña?
          </Link>
        </div>

        <div className="relative rounded-lg">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#195aec]">
            <span className="material-symbols-outlined">lock</span>
          </div>
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="**********"
            autoComplete={esRegistro ? "new-password" : "current-password"}
            required
            className={`${inputClass} pl-10 pr-10`}
          />
          <button
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#195aec] hover:opacity-75 focus:outline-none transition-opacity"
            type="button"
            onClick={() => setShowPassword((currentValue) => !currentValue)}
          >
            <span className="material-symbols-outlined">
              {showPassword ? "visibility_off" : "visibility"}
            </span>
          </button>
        </div>

        {esRegistro && (
          <div className="relative mt-4">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#195aec]">
              <span className="material-symbols-outlined">lock</span>
            </div>
            <input
              id="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="**********"
              autoComplete="new-password"
              required
              className={`${inputClass} pl-10 pr-10`}
            />
            <button
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#195aec] hover:opacity-75 focus:outline-none transition-opacity"
              type="button"
              onClick={() =>
                setShowConfirmPassword((currentValue) => !currentValue)
              }
            >
              <span className="material-symbols-outlined">
                {showConfirmPassword ? "visibility_off" : "visibility"}
              </span>
            </button>
          </div>
        )}
      </div>

      <button
        type="submit"
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#00ab00] px-4 py-3 font-semibold text-white transition hover:opacity-90"
      >
        <span>{esRegistro ? "Crear cuenta" : "Iniciar sesión"}</span>
        <span className="material-symbols-outlined text-xl">arrow_forward</span>
      </button>

      {esRegistro && (
        <div className="mt-6 text-center text-sm">
          <span className="text-[#000000]">¿Ya tienes cuenta? </span>
          <Link
            href="/login"
            className="font-bold text-[#195aec] hover:underline transition-colors"
          >
            Inicia sesión aquí
          </Link>
        </div>
      )}
    </form>
  );
}
