import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, MessageCircle } from 'lucide-react';
import { LOGO_URL, INSTAGRAM_URL, WHATSAPP_URL } from '@/config/site';

function Footer() {
  return (
    <footer className="bg-[hsl(var(--navy))] text-white border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="inline-block bg-white p-3 rounded-xl shadow-lg">
              <img 
                src={LOGO_URL} 
                alt="Moisés Nunes Comunicação Visual" 
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-white/80 text-sm leading-relaxed max-w-xs">
              Soluções completas e vibrantes em comunicação visual para destacar sua marca, eventos e empresas com máxima qualidade.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <span className="font-bold text-white block mb-6 uppercase tracking-wider text-sm">Navegação</span>
            <nav className="flex flex-col gap-3">
              <Link to="/" className="text-sm text-white/80 hover:text-[hsl(var(--secondary))] transition-colors duration-200">
                Home
              </Link>
              <Link to="/servicos" className="text-sm text-white/80 hover:text-[hsl(var(--secondary))] transition-colors duration-200">
                Serviços
              </Link>
              <Link to="/galeria" className="text-sm text-white/80 hover:text-[hsl(var(--secondary))] transition-colors duration-200">
                Galeria
              </Link>
              <Link to="/sobre" className="text-sm text-white/80 hover:text-[hsl(var(--secondary))] transition-colors duration-200">
                Sobre
              </Link>
              <Link to="/contato" className="text-sm text-white/80 hover:text-[hsl(var(--secondary))] transition-colors duration-200">
                Contato
              </Link>
              <Link to="/trabalhe-conosco" className="text-sm text-white/80 hover:text-[hsl(var(--secondary))] transition-colors duration-200">
                Trabalhe Conosco
              </Link>
              <Link to="/privacidade" className="text-sm text-white/80 hover:text-[hsl(var(--secondary))] transition-colors duration-200">
                Política de Privacidade
              </Link>
              <Link to="/termos" className="text-sm text-white/80 hover:text-[hsl(var(--secondary))] transition-colors duration-200">
                Termos de Uso
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <span className="font-bold text-white block mb-6 uppercase tracking-wider text-sm">Contato</span>
            <div className="flex flex-col gap-4">
              <a href="tel:+5584921768017" className="flex items-center gap-3 text-sm text-white/80 hover:text-[hsl(var(--secondary))] transition-colors duration-200">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                <span>(84) 92176-8017</span>
              </a>
              <a href="mailto:moises.nunes.cvisual@outlook.com" className="flex items-center gap-3 text-sm text-white/80 hover:text-[hsl(var(--secondary))] transition-colors duration-200">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="truncate">moises.nunes.cvisual@outlook.com</span>
              </a>
              <div className="flex items-start gap-3 text-sm text-white/80">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>Pau dos Ferros, RN<br />Brasil</span>
              </div>
            </div>
          </div>

          {/* Social & Hours */}
          <div>
            <span className="font-bold text-white block mb-6 uppercase tracking-wider text-sm">Redes sociais</span>
            <div className="flex gap-3 mb-8">
              <a 
                href={INSTAGRAM_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[hsl(var(--accent))] hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href={WHATSAPP_URL('Olá! Gostaria de mais informações sobre comunicação visual.')} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[hsl(var(--secondary))] hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
            <div className="bg-white/5 p-4 rounded-xl text-sm border border-white/10">
              <span className="font-semibold text-white block mb-2">Horário de atendimento</span>
              <p className="text-white/80">Seg - Sex: 07:30 às 17:30</p>
              <p className="text-white/80">Sáb: 08:00 às 12:00</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/60">
            © 2026 Moisés Nunes Comunicação Visual. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/privacidade" className="text-white/60 hover:text-white transition-colors duration-200 font-medium">
              Política de privacidade
            </Link>
            <Link to="/termos" className="text-white/60 hover:text-white transition-colors duration-200 font-medium">
              Termos de uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;