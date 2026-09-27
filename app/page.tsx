import Image from "next/image";
import Navbar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Prestamos from "@/components/SolicitudPrestamo"
import Asistencia from "@/components/Asistencia"
import Footer from "@/components/Footer"
import Incidencias from "@/components/Incidencias"
import Features from "@/components/Features"
export default function Home() {
  return (
    <main >
    <Navbar />
    <Hero />
    <Features />
    <Prestamos />
    <Incidencias />
    <Asistencia />
    <Footer />
    

   </main>  
  );
}
