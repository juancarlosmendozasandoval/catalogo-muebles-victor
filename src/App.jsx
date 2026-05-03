import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import { catalogData } from './data';
import { ArrowRight } from 'lucide-react';

function App() {
  const waLink = "https://wa.me/593981343275?text=Hola,%20deseo%20el%20catálogo%20completo.";

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-zinc-50 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImg} 
            alt="Fondo de Muebles Víctor" 
            className="w-full h-full object-cover"
          />
          {/* Capa clara para asegurar que el texto oscuro sea legible */}
          <div className="absolute inset-0 bg-white/80"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 text-center z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold text-zinc-900 mb-6 tracking-tight">
            Diseño, Confort y <span className="text-zinc-500">Elegancia</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-700 max-w-2xl mx-auto mb-10">
            Fabricantes directos de mobiliario de alta calidad para oficinas, hogares, salas de espera y auditorios. Catálogo 2025 ya disponible.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#catalogo" className="bg-zinc-900 text-white px-8 py-4 rounded font-bold hover:bg-zinc-800 transition-colors">
              Ver Colecciones
            </a>
            <a href={waLink} target="_blank" rel="noreferrer" className="border-2 border-zinc-900 text-zinc-900 px-8 py-4 rounded font-bold hover:bg-zinc-900 hover:text-white transition-colors flex items-center justify-center gap-2">
              Cotizar ahora <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* SECCIÓN CATÁLOGO */}
      <section id="catalogo" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 uppercase tracking-wider mb-2">Nuestro Catálogo</h2>
            <div className="h-1 w-20 bg-black mx-auto mb-4"></div>
            <p className="text-gray-600">Explora nuestras líneas de productos destacadas</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {catalogData.map((item) => (
              <div key={item.id} className="group bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-black text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">
                    {item.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{item.description}</p>
                  <a href={waLink} target="_blank" rel="noreferrer" className="text-black font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all">
                    Consultar precios <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BANNER DE LLAMADO A LA ACCIÓN */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Necesitas amoblar un proyecto completo?</h2>
          <p className="text-gray-400 mb-8">Contáctanos para atención personalizada y cotizaciones al por mayor.</p>
          <a href={waLink} target="_blank" rel="noreferrer" className="bg-green-500 text-white px-8 py-3 rounded font-bold hover:bg-green-600 transition-colors inline-block">
            Contactar por WhatsApp
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;