import { Phone, Mail } from 'lucide-react';
import logo from '../assets/logo.png';

export default function Navbar() {
  return (
    <nav className="bg-white text-zinc-900 py-4 px-6 fixed w-full top-0 z-50 border-b border-zinc-200 shadow-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          {/* Logo en su color original (sin el invert) para que resalte en el fondo blanco */}
          <img src={logo} alt="Sillas y Mesas Victor" className="h-12 object-contain" />
        </div>
        
        <div className="flex items-center gap-6 text-sm font-medium">
          <a href="#catalogo" className="hover:text-zinc-500 transition-colors uppercase tracking-widest">Catálogo</a>
          <a href="#nosotros" className="hover:text-zinc-500 transition-colors uppercase tracking-widest">Nosotros</a>
          
          <div className="flex items-center gap-4 ml-4 border-l border-zinc-300 pl-4">
            <a href="https://www.facebook.com/p/Muebles-y-Sillas-V%C3%ADctor-61572647241579/" target="_blank" rel="noreferrer" className="text-zinc-600 hover:text-blue-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="mailto:sillasymesasvictor@gmail.com" className="text-zinc-600 hover:text-zinc-900 transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}