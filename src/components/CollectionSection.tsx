import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import anturioImg from "@/assets/anturio.png";
import orquidearosadaImg from "@/assets/orquidea rosada flor.png";
import suculentaImg from "@/assets/suculenta.png";
import cactaseaImg from "@/assets/cactasea.png";

const plants = [
  {
    name: "Anturio Clarinervium",
    description: "Hojas aterciopeladas con venas plateadas que hipnotizan.",
    image: anturioImg,
  },
  {
    name: "Orquídea Phalaenopsis",
    description: "Delicada fusión de tonos crema y rosados que irradia elegancia natural.",
   
    image: orquidearosadaImg,
  },
  {
    name: "Echeveria Perle von Nürnberg",
    description: "Roseta de suaves tonos lilas y rosados con un delicado acabado perlado.",
   
    image: suculentaImg,
  },
  {
    name: "Echinocactus grusonii",
    description: "Esfera geométrica con espinas doradas que actúa como una escultura viva de luz.",
   
    image: cactaseaImg,
  },
];

const CollectionSection = () => {
  return (
    <section id="coleccion" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-medium text-sm tracking-widest uppercase mb-3">Nuestra Colección</p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary">
            Nuestras Joyas
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {plants.map((plant, i) => (
            <motion.div
              key={plant.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="group overflow-hidden border-border/50 bg-card hover:shadow-xl transition-shadow duration-500 cursor-pointer">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={plant.image}
                    alt={plant.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <CardContent className="p-5">
                  <h3 className="font-serif text-lg font-semibold text-primary mb-1">
                    {plant.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                    {plant.description}
                  </p>
                  
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionSection;
