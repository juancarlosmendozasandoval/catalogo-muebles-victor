import { Phone, Mail } from 'lucide-react';
import logo from '../assets/logo.png';

export default function Navbar() {
  return (
    <nav className="bg-black text-white py-4 px-6 fixed w-full top-0 z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          {/* Aplicamos invert para que el logo negro se vea blanco sobre fondo negro */}
          <img src={logo} alt="Sillas y Mesas Victor" className="h-12 object-contain invert brightness-200" />
        </div>
        
        <div className="flex items-center gap-6 text-sm font-light">
          <a href="#catalogo" className="hover:text-gray-300 transition-colors uppercase tracking-widest">Catálogo</a>
          <a href="#nosotros" className="hover:text-gray-300 transition-colors uppercase tracking-widest">Nosotros</a>
          
          <div className="flex items-center gap-4 ml-4 border-l border-gray-700 pl-4">
            <a href="https://www.facebook.com/p/Muebles-y-Sillas-V%C3%ADctor-61572647241579/" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="mailto:sillasymesasvictor@gmail.com" className="hover:text-gray-300 transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}