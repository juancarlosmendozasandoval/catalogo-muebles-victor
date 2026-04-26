import imgEjecutiva from './assets/ejecutiva.png'; 
import imgEscritorio from './assets/escritorio.png';
import imgSala from './assets/sala.png';
import imgAuditorio from './assets/auditorio.png';
import imgCamilla from './assets/camilla.png';

export const catalogData = [
  {
    id: 1,
    category: "Línea de Oficina",
    title: "Sillas Ergonómicas y Ejecutivas",
    description: "Diseños anatómicos para largas jornadas de trabajo. Sillas gerenciales, operativas y de espera.",
    image: imgEjecutiva,
  },
  {
    id: 2,
    category: "Línea Ejecutiva",
    title: "Escritorios y Mesas de Reunión",
    description: "Escritorios gerenciales en L, modulares y mesas de reunión de madera con acabados premium.",
    image: imgEscritorio,
  },
  {
    id: 3,
    category: "Línea de Hogar",
    title: "Salas, Sofás y Pufs",
    description: "Juegos de sala modulares, sofás elegantes y pufs cuadrados o redondos para tu máxima comodidad.",
    image: imgSala,
  },
  {
    id: 4,
    category: "Eventos y Educación",
    title: "Sillas de Auditorio y Pupitres",
    description: "Mobiliario resistente para eventos, sillas apilables, pupitres metálicos y pizarras.",
    image: imgAuditorio,
  },
  {
    id: 5,
    category: "Línea Médica",
    title: "Camillas y Divanes",
    description: "Camillas plegables de 180x75cm y mobiliario especializado de alta resistencia.",
    image: imgCamilla,
  }
];