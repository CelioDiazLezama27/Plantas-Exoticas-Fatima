import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import servicePoda from "@/assets/service-poda.jpg";
import serviceFumigacion from "@/assets/service-fumigacion.jpg";
import serviceGrass from "@/assets/grass.jpg";
import serviceDiseno from "@/assets/Antes.jpg";

const services = [
  {
    title: "Servicio de Mantenimiento y Poda",
    description: "Poda profesional para promover el crecimiento saludable y la forma ideal de tus plantas. Nuestro equipo experto cuida cada detalle para que tu jardín luzca impecable.",
    image: servicePoda,
    alt: "Servicio de mantenimiento y poda profesional de plantas"
  },
  {
    title: "Fumigación de Jardines",
    description: "Control de plagas especializado para proteger la salud de tu jardín y plantas de interior. Utilizamos productos seguros y efectivos para mantener tus plantas libres de amenazas.",
    image: serviceFumigacion,
    alt: "Fumigación y control de plagas en jardines y plantas"
  },
  {
    title: "Plantación de Grass Natural",
    description: "Instalación de césped natural de alta calidad para transformar tus espacios exteriores. Creamos alfombras verdes perfectas que embellecen cualquier ambiente.",
    image: serviceGrass,
    alt: "Instalación y plantación de grass natural para exteriores"
  },
  {
    title: "Diseño de Jardines Personalizados",
    description: "Creación de jardines personalizados que reflejan tu estilo y armonizan con tu espacio. Diseñamos paisajes únicos que combinan estética y funcionalidad.",
    image: serviceDiseno,
    alt: "Diseño de jardines y paisajismo personalizado"
  },
];

const ServicesSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  const scrollTo = useCallback(
    (index: number) => api?.scrollTo(index),
    [api]
  );

  return (
    <section id="servicios" className="py-20 md:py-28 bg-primary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          {/* Tagline superior opcional para contexto SEO */}
          <span className="block text-accent font-medium text-sm tracking-widest uppercase mb-3">
            Servicios de Jardinería Profesional
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary">
            Cuidamos y Transformamos
            <br className="hidden sm:block" />
            tu Espacio Verde
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <Carousel
            setApi={setApi}
            opts={{ loop: true }}
            plugins={[Autoplay({ delay: 5000, stopOnInteraction: true })]}
            className="relative"
          >
            <CarouselContent>
              {services.map((service) => (
                <CarouselItem key={service.title}>
                  <article className="flex flex-col md:flex-row items-center gap-6 md:gap-10 rounded-2xl overflow-hidden bg-card border border-border/50 shadow-lg">
                    <div className="w-full md:w-1/2 h-64 md:h-[400px] overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.alt}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
                      {/* H3 para cada servicio individual */}
                      <h3 className="font-serif text-2xl md:text-3xl font-semibold text-primary mb-4">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                        {service.description}
                      </p>
                    </div>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation arrows */}
            <button
              onClick={() => api?.scrollPrev()}
              className="absolute left-2 md:-left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card/80 backdrop-blur border border-border/50 flex items-center justify-center text-primary hover:bg-card transition-colors shadow-md"
              aria-label="Ver servicio anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => api?.scrollNext()}
              className="absolute right-2 md:-right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card/80 backdrop-blur border border-border/50 flex items-center justify-center text-primary hover:bg-card transition-colors shadow-md"
              aria-label="Ver siguiente servicio"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </Carousel>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {services.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === current
                    ? "bg-primary w-8"
                    : "bg-primary/30 hover:bg-primary/50"
                }`}
                aria-label={`Ir al servicio de ${services[i].title}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
