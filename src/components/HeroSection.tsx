import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-cream leading-tight mb-6"
        >
          Traemos la naturaleza
          <br />
          <span className="italic">exótica</span> a tu hogar
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-cream/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-sans"
        >
          Ventas, mantenimiento y asesoría experta en Lima
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            asChild
            size="lg"
            className="bg-gold text-gold-foreground hover:bg-gold/90 font-semibold text-base px-8 py-6 rounded-full shadow-lg"
          >
            <a href="#coleccion">Ver Colección</a>
          </Button>
          <Button
            asChild            
            size="lg"
            className=" text-cream hover:bg-cream/10 font-semibold text-base px-8 py-6 rounded-full"
          >
            <a href="#contacto">Contáctanos</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
