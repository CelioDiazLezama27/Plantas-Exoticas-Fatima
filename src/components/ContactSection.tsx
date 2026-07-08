import { motion } from "framer-motion";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contacto" className="py-20 md:py-28 bg-primary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-medium text-sm tracking-widest uppercase mb-3">Encuéntranos</p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary">
            Visítanos
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-8 mb-10">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-primary text-lg">Ubicación</h3>
                  <p className="text-muted-foreground">Las Camelias Mz.D1 Lt.6 Bello Horizonte, Chorrilos</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-primary text-lg">Pedidos y Consultas</h3>
                  <p className="text-muted-foreground">+51 921 458 497</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-primary text-lg">Horario</h3>
                  <p className="text-muted-foreground">Lunes a Domingo: 7:00 AM – 6:00 PM</p>
                </div>
              </div>
            </div>

            <Button
              asChild
              size="lg"
              className="bg-emerald-deep text-cream hover:bg-primary gap-3 rounded-full font-semibold text-base px-8 py-6 w-fit shadow-lg"
            >
              <a href="https://wa.me/51921458497" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                Chatea con nosotros
              </a>
            </Button>
          </motion.div>

          {/* Google Maps iframe */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-3xl overflow-hidden shadow-xl border border-border/30"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3899.7254356505255!2d-77.01667002517215!3d-12.199076188049828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b75e5a1818e7%3A0x12832e115673978a!2sVivero%20Plantas%20ex%C3%B3ticas%20F%C3%A1tima!5e0!3m2!1ses-419!2spe!4v1771026691586!5m2!1ses-419!2spe"
              width="100%"
              height="450"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Plantas Exóticas Fátima en Google Maps"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
