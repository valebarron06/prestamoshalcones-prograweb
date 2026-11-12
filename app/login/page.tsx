"use client";

import Link from "next/link";
import AuthLayout from "@/components/AuthLayout";
import AuthForm from "@/components/AuthForm";

export default function LoginPage() {
  return (
    <AuthLayout
      mode="login"
      title="Iniciar sesión"
      description="Inicia sesión para poder agendar tu préstamo."
    >
      <AuthForm mode="login" />
    </AuthLayout>
  );
}
