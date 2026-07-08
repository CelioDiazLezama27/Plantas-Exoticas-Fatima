import { motion } from "framer-motion";
import { Cat } from "lucide-react";
import aboutImg from "@/assets/cuchito.png";

const AboutSection = () => {
  return (
    <section id="nosotros" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={aboutImg}
                alt="Interior del vivero Plantas Exóticas Fátima con Cucho el gato"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-accent font-medium text-sm tracking-widest uppercase mb-3">Sobre Nosotros</p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary mb-8">
              Nuestra Historia
            </h2>

            <div className="space-y-5 text-muted-foreground leading-relaxed mb-10">
              <p>
                Plantas Exóticas Fátima nació de una profunda pasión por la naturaleza y el deseo de compartir 
                la belleza de las plantas más extraordinarias del mundo con los hogares del país.
              </p>
              <p>
                Cada planta en nuestro vivero es cuidadosamente seleccionada y cultivada con cariño, 
                garantizando que llegue a tu hogar en perfectas condiciones. Más que un vivero, 
                somos una comunidad de amantes de lo verde.
              </p>
            </div>

            {/* Cucho Card */}
            <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 flex gap-5 items-start">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Cat className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-primary mb-1">
                  Cucho 🐈‍⬛
                </h3>
                <p className="text-sm text-muted-foreground italic">
                  "Recibidor Oficial" — Nuestro carismático gato negro que recibe a cada visitante 
                  con ronroneos y acompaña tus paseos entre las plantas.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
