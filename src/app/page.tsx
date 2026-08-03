import Header from "@/components/Header";
import Hero from "@/components/Hero";
import QueHacemos from "@/components/QueHacemos";
import Diferenciales from "@/components/Diferenciales";
import Productos from "@/components/Productos";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <QueHacemos />
        <Diferenciales />
        <Productos />
        <Contacto />
      </main>
      <Footer />
    </div>
  );
}
