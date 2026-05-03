import { Phone, Mail } from 'lucide-react';
import logo from '../assets/logo.png';

export default function Footer() {
  return (
    <footer className="bg-zinc-100 text-zinc-600 py-12 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          {/* Logo en su color original */}
          <img src={logo} alt="Logo" className="h-16 mb-4" />
          <p className="text-sm text-zinc-500">
            Fabricantes directos de mobiliario para oficina, hogar, eventos y más. Calidad y elegancia en cada detalle desde Guayaquil.
          </p>
        </div>
        
        <div>
          <h3 className="text-zinc-900 text-lg font-bold mb-4 uppercase tracking-wider">Contacto</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-zinc-400" />
              <span className="text-zinc-700">+593 98 134 3275</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-zinc-400" />
              <span className="text-zinc-700">sillasymesasvictor@gmail.com</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="text-zinc-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </div>
              <a href="https://www.facebook.com/p/Muebles-y-Sillas-V%C3%ADctor-61572647241579/" target="_blank" rel="noreferrer" className="text-zinc-700 hover:text-blue-600 transition-colors">
                Muebles y Sillas Víctor
              </a>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-zinc-900 text-lg font-bold mb-4 uppercase tracking-wider">Horario de Atención</h3>
          <p className="text-sm text-zinc-500 mb-2">Lunes a Viernes: 08:00 - 18:00</p>
          <p className="text-sm text-zinc-500">Sábados: 09:00 - 14:00</p>
        </div>
      </div>
      <div className="text-center mt-12 pt-8 border-t border-zinc-200 text-xs text-zinc-400">
        © {new Date().getFullYear()} Sillas y Mesas Víctor. Todos los derechos reservados.
      </div>
    </footer>
  );
}