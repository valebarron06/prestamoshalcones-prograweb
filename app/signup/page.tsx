import AuthForm from "@/components/AuthForm";
import AuthLayout from "@/components/AuthLayout";

export default function SignupPage() {
  return (
    <AuthLayout
      mode="signup"
      title="Crear cuenta"
      description="Registrate para hacer tu prestamo."
    >
      <AuthForm mode="signup" />
    </AuthLayout>
  );
}
