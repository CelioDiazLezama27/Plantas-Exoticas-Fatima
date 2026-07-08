  import { useState } from "react";
  import { Menu, MessageCircle } from "lucide-react"; // Eliminé X si no se usa, o déjalo si lo usas en otro lado
  import { Button } from "@/components/ui/button";
  import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
  import logoFatima from "@/assets/FatimaLogoTpt.png";

  const navLinks = [
    { label: "Colección", href: "#coleccion" },
    { label: "Servicios", href: "#servicios" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Contacto", href: "#contacto" },
  ];

  const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border/50">
        {/* CAMBIO 1: Agregué 'relative' aquí. Esto es vital para que el centrado absoluto funcione */}
        <nav className="container relative mx-auto flex items-center justify-between h-32 px-4 lg:px-18">
          
          {/* CAMBIO 2: Sección del LOGO */}
          <a href="#" className="flex-shrink-0">
            {/* Reemplaza '/logo.png' por la ruta real de tu archivo de logo */}
            <img 
              src={logoFatima}
              className="h-28 w-auto object-contain" // Ajusta h-10 a h-12 si quieres el logo más grande
            />
          </a>

          {/* CAMBIO 3: Centrado de los links */}
          {/* Usamos 'absolute left-1/2 -translate-x-1/2' para forzar el centro exacto de la pantalla */}
          <ul className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-lg font-medium text-foreground/70 hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Botón de WhatsApp (Se mantiene igual, alineado a la derecha por el justify-between del padre) */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              asChild
              size="sm"
              className="bg-emerald-deep text-cream hover:bg-primary gap-2"
            >
              <a href="https://wa.me/51921458497" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </Button>
          </div>

          {/* Mobile menu (Se mantiene igual) */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background">
              <SheetTitle className="font-serif text-primary">Menú</SheetTitle>
              <nav className="flex flex-col gap-6 mt-8">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <Button
                  asChild
                  className="bg-emerald-deep text-cream hover:bg-primary gap-2 mt-4"
                >
                  <a href="https://wa.me/51921458497" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </nav>
      </header>
    );
  };

  export default Navbar;