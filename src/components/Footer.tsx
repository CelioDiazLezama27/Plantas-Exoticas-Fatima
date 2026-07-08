import { Instagram, Cat, Facebook, Youtube } from "lucide-react";
import { toast } from "@/hooks/use-toast";

// Componente SVG manual para Pinterest (ya que a veces no viene en Lucide por defecto)
const PinterestIcon = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <path d="M8 12a4 4 0 1 0 8 0"></path> {/* Un pin simplificado o usar el logo real abajo */}
    {/* Para ser más fiel al logo de Pinterest usamos este path: */}
    <path d="M8 20l4-9" stroke="none" /> {/* Limpiamos el anterior para usar el path real abajo si prefieres, pero para mantener estilo lucide geométrico: */}
    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 0v0m0 0v0" stroke="none" fill="none"/>
    <path d="M8 14.5c-3-5.5 1.5-8.5 5.5-5.5 4 3 1 8-2.5 8-2.5 0-2.5-2.5-1-4" />
    <path d="M12 20l-1.5-7" />
  </svg>
);

// O si prefieres el logo oficial de Pinterest adaptado a Lucide:
const PinterestLogo = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M8 14.5c-3-5.5 1.5-8.5 5.5-5.5 4 3 1 8-2.5 8-2.5 0-2.5-2.5-1-4" />
    <path d="M12 20l-1.5-7" />
  </svg>
);


const Footer = () => {
  const handleCuchoClick = () => {
    toast({
      title: "Miau 🐾",
      description: "¡Cucho te saluda!",
    });
  };

  return (
    <footer className="bg-primary text-primary-foreground py-10">
      <div className="container mx-auto px-4">
        {/* Cambié items-center por items-start en md para mejor alineación si hay muchos links, o center si prefieres */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* 1. Marca */}
          <p className="font-serif text-lg font-semibold whitespace-nowrap">
            Plantas Exóticas Fátima
          </p>

          {/* 2. Iconos Sociales */}
          <div className="flex flex-wrap justify-center items-center gap-6">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/plantas.fatima"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm group"
            >
              <Facebook className="h-5 w-5 group-hover:scale-110 transition-transform" />
              <span className="hidden lg:inline">Facebook</span>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/plantas.fatima"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm group"
            >
              <Instagram className="h-5 w-5 group-hover:scale-110 transition-transform" />
              <span className="hidden lg:inline">Instagram</span>
            </a>

            {/* Pinterest */}
            <a
              href="https://www.pinterest.com/jdiaz57701824/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm group"
            >
              <PinterestLogo className="h-5 w-5 group-hover:scale-110 transition-transform" />
              <span className="hidden lg:inline">Pinterest</span>
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/watch?v=3E0IPZMBEwA"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm group"
            >
              <Youtube className="h-5 w-5 group-hover:scale-110 transition-transform" />
              <span className="hidden lg:inline">YouTube</span>
            </a>
          </div>

          {/* 3. Copyright y Cucho */}
          <div className="flex items-center gap-4 whitespace-nowrap">
            <p className="text-sm text-primary-foreground/50">
              © 2026 Plantas Exóticas Fátima
            </p>
            <button
              onClick={handleCuchoClick}
              className="text-primary-foreground/30 hover:text-primary-foreground/80 transition-colors cursor-pointer"
              aria-label="Easter egg: Cucho el gato"
            >
              <Cat className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
