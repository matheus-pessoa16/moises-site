import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { WhatsAppButton } from '@/components/WhatsAppLink.jsx';
import { LOGO_URL } from '@/config/site';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/servicos', label: 'Serviços' },
    { path: '/galeria', label: 'Galeria' },
    { path: '/sobre', label: 'Sobre' },
    { path: '/contato', label: 'Contato' },
    { path: '/trabalhe-conosco', label: 'Trabalhe Conosco' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={LOGO_URL} 
              alt="Moisés Nunes Comunicação Visual" 
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold transition-colors duration-200 hover:text-primary ${
                  isActive(link.path) 
                    ? 'text-primary border-b-2 border-primary pb-1' 
                    : 'text-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <WhatsAppButton
              message="Olá! Gostaria de solicitar um orçamento para comunicação visual."
              size="default"
              className="gradient-primary-secondary transition-all duration-300 active:scale-[0.98]"
            >
              Solicitar orçamento
            </WhatsAppButton>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-semibold transition-colors duration-200 hover:text-primary py-2 ${
                      isActive(link.path) ? 'text-primary' : 'text-foreground'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="mt-4">
                  <WhatsAppButton
                    message="Olá! Gostaria de solicitar um orçamento para comunicação visual."
                    size="lg"
                    className="w-full gradient-primary-secondary transition-all duration-300 active:scale-[0.98]"
                  >
                    Solicitar orçamento
                  </WhatsAppButton>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export default Header;