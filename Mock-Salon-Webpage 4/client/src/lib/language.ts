import { createContext, useContext } from 'react';

export type Language = 'en' | 'es';

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

export const translations = {
  en: {
    // Brand
    'brand.name': 'El Y Ella',
    'brand.tagline': 'Beauty & Style Salon',
    
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.book': 'Book Now',
    
    // Home Page
    'home.hero.title': 'El Y Ella',
    'home.hero.subtitle': 'Where elegance meets expertise. Transform your look with our premium hair and beauty services.',
    'home.hero.book': 'Book Appointment',
    'home.hero.services': 'View Services',
    
    'home.about.title': 'Welcome to El Y Ella',
    'home.about.description1': 'With over 15 years of experience in the beauty industry, our team of expert stylists and beauty professionals are dedicated to making you look and feel your absolute best.',
    'home.about.description2': 'We use only the finest products and latest techniques to ensure every visit leaves you feeling pampered and beautiful. From precision cuts to luxurious treatments, we provide a complete beauty experience in our elegant, welcoming salon.',
    'home.about.years': 'Years Experience',
    'home.about.clients': 'Happy Clients',
    
    'home.services.title': 'Our Services',
    'home.services.subtitle': 'Discover our range of premium beauty services designed to enhance your natural beauty',
    'home.services.hair.title': 'Hair Services',
    'home.services.hair.description': 'Expert cuts, colors, and styling for all hair types. Transform your look with our precision techniques.',
    'home.services.beauty.title': 'Beauty Treatments',
    'home.services.beauty.description': 'Rejuvenating facials, skincare treatments, and beauty services to enhance your natural glow.',
    'home.services.nails.title': 'Nail Care',
    'home.services.nails.description': 'Complete nail care services including manicures, pedicures, and nail art by skilled technicians.',
    'home.services.viewAll': 'View All Services',
    
    'home.gallery.title': 'Our Work',
    'home.gallery.subtitle': 'See the beautiful transformations we create for our clients',
    
    'home.contact.title': 'Visit Us',
    'home.contact.subtitle': 'Find us in the heart of the city, ready to serve you',
    'home.contact.location': 'Location',
    'home.contact.contact': 'Contact',
    'home.contact.hours': 'Hours',
    'home.contact.hours.weekdays': 'Mon-Fri: 9:00 AM - 8:00 PM',
    'home.contact.hours.saturday': 'Saturday: 9:00 AM - 6:00 PM',
    'home.contact.hours.sunday': 'Sunday: 10:00 AM - 5:00 PM',
    
    // Services Page
    'services.hero.title': 'Our Services',
    'services.hero.subtitle': 'Premium beauty services tailored to your unique style',
    
    'services.hair.title': 'Hair Services',
    'services.hair.subtitle': 'Expert hair care and styling by our professional team',
    'services.hair.cuts': 'Cuts & Styling',
    'services.hair.color': 'Color Services',
    
    'services.beauty.title': 'Beauty Treatments',
    'services.beauty.subtitle': 'Rejuvenating treatments for your skin and well-being',
    'services.beauty.facial': 'Facial Treatments',
    'services.beauty.additional': 'Additional Treatments',
    
    'services.nails.title': 'Nail Services',
    'services.nails.subtitle': 'Complete nail care for hands and feet',
    'services.nails.manicure': 'Manicure Services',
    'services.nails.pedicure': 'Pedicure Services',
    
    'services.packages.title': 'Special Packages',
    'services.packages.subtitle': 'Save with our curated service combinations',
    'services.packages.book': 'Book Your Package',
    
    // Reservations Page
    'reservations.hero.title': 'Book Your Appointment',
    'reservations.hero.subtitle': 'Schedule your beauty transformation today',
    'reservations.form.title': 'Reservation Form',
    'reservations.submit': 'Submit Reservation Request',
    
    // Form Labels
    'form.firstName': 'First Name',
    'form.lastName': 'Last Name',
    'form.email': 'Email Address',
    'form.phone': 'Phone Number',
    'form.service': 'Service Category',
    'form.stylist': 'Preferred Stylist',
    'form.date': 'Preferred Date',
    'form.time': 'Preferred Time',
    'form.specificService': 'Specific Service Details',
    'form.specialRequests': 'Special Requests or Notes',
    'form.newClient': 'I am a new client',
    'form.required': '*',
    'form.noPreference': 'No preference',
    
    // Footer
    'footer.company': 'El Y Ella Beauty Salon',
    'footer.description': 'Your premier destination for luxury hair and beauty services. Experience the difference with our expert team.',
    'footer.quickLinks': 'Quick Links',
    'footer.services': 'Services',
    'footer.contact': 'Contact Info',
    'footer.rights': '© 2024 El Y Ella Beauty Salon. All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    
    // Common
    'common.mostPopular': 'Most Popular',
    'common.save': 'Save',
  },
  es: {
    // Brand
    'brand.name': 'El Y Ella',
    'brand.tagline': 'Salón de Belleza y Estilo',
    
    // Navigation
    'nav.home': 'Inicio',
    'nav.services': 'Servicios',
    'nav.book': 'Reservar',
    
    // Home Page
    'home.hero.title': 'El Y Ella',
    'home.hero.subtitle': 'Donde la elegancia se encuentra con la experiencia. Transforma tu look con nuestros servicios premium de cabello y belleza.',
    'home.hero.book': 'Reservar Cita',
    'home.hero.services': 'Ver Servicios',
    
    'home.about.title': 'Bienvenidos a El Y Ella',
    'home.about.description1': 'Con más de 15 años de experiencia en la industria de la belleza, nuestro equipo de estilistas expertos y profesionales de la belleza se dedican a hacer que te veas y sientas absolutamente increíble.',
    'home.about.description2': 'Usamos solo los mejores productos y las técnicas más modernas para asegurar que cada visita te deje sintiéndote mimado y hermoso. Desde cortes de precisión hasta tratamientos lujosos, proporcionamos una experiencia completa de belleza en nuestro elegante y acogedor salón.',
    'home.about.years': 'Años de Experiencia',
    'home.about.clients': 'Clientes Satisfechos',
    
    'home.services.title': 'Nuestros Servicios',
    'home.services.subtitle': 'Descubre nuestra gama de servicios premium de belleza diseñados para realzar tu belleza natural',
    'home.services.hair.title': 'Servicios de Cabello',
    'home.services.hair.description': 'Cortes, colores y peinados expertos para todo tipo de cabello. Transforma tu look con nuestras técnicas de precisión.',
    'home.services.beauty.title': 'Tratamientos de Belleza',
    'home.services.beauty.description': 'Faciales rejuvenecedores, tratamientos para la piel y servicios de belleza para realzar tu brillo natural.',
    'home.services.nails.title': 'Cuidado de Uñas',
    'home.services.nails.description': 'Servicios completos de cuidado de uñas incluyendo manicuras, pedicuras y arte de uñas por técnicos especializados.',
    'home.services.viewAll': 'Ver Todos los Servicios',
    
    'home.gallery.title': 'Nuestro Trabajo',
    'home.gallery.subtitle': 'Mira las hermosas transformaciones que creamos para nuestros clientes',
    
    'home.contact.title': 'Visítanos',
    'home.contact.subtitle': 'Encuéntranos en el corazón de la ciudad, listos para atenderte',
    'home.contact.location': 'Ubicación',
    'home.contact.contact': 'Contacto',
    'home.contact.hours': 'Horarios',
    'home.contact.hours.weekdays': 'Lun-Vie: 9:00 AM - 8:00 PM',
    'home.contact.hours.saturday': 'Sábado: 9:00 AM - 6:00 PM',
    'home.contact.hours.sunday': 'Domingo: 10:00 AM - 5:00 PM',
    
    // Services Page
    'services.hero.title': 'Nuestros Servicios',
    'services.hero.subtitle': 'Servicios premium de belleza adaptados a tu estilo único',
    
    'services.hair.title': 'Servicios de Cabello',
    'services.hair.subtitle': 'Cuidado experto del cabello y peinado por nuestro equipo profesional',
    'services.hair.cuts': 'Cortes y Peinados',
    'services.hair.color': 'Servicios de Color',
    
    'services.beauty.title': 'Tratamientos de Belleza',
    'services.beauty.subtitle': 'Tratamientos rejuvenecedores para tu piel y bienestar',
    'services.beauty.facial': 'Tratamientos Faciales',
    'services.beauty.additional': 'Tratamientos Adicionales',
    
    'services.nails.title': 'Servicios de Uñas',
    'services.nails.subtitle': 'Cuidado completo de uñas para manos y pies',
    'services.nails.manicure': 'Servicios de Manicura',
    'services.nails.pedicure': 'Servicios de Pedicura',
    
    'services.packages.title': 'Paquetes Especiales',
    'services.packages.subtitle': 'Ahorra con nuestras combinaciones de servicios especiales',
    'services.packages.book': 'Reserva Tu Paquete',
    
    // Reservations Page
    'reservations.hero.title': 'Reserva Tu Cita',
    'reservations.hero.subtitle': 'Programa tu transformación de belleza hoy',
    'reservations.form.title': 'Formulario de Reserva',
    'reservations.submit': 'Enviar Solicitud de Reserva',
    
    // Form Labels
    'form.firstName': 'Nombre',
    'form.lastName': 'Apellido',
    'form.email': 'Correo Electrónico',
    'form.phone': 'Teléfono',
    'form.service': 'Categoría de Servicio',
    'form.stylist': 'Estilista Preferido',
    'form.date': 'Fecha Preferida',
    'form.time': 'Hora Preferida',
    'form.specificService': 'Detalles del Servicio Específico',
    'form.specialRequests': 'Solicitudes Especiales o Notas',
    'form.newClient': 'Soy un cliente nuevo',
    'form.required': '*',
    'form.noPreference': 'Sin preferencia',
    
    // Footer
    'footer.company': 'Salón de Belleza El Y Ella',
    'footer.description': 'Tu destino principal para servicios de lujo de cabello y belleza. Experimenta la diferencia con nuestro equipo experto.',
    'footer.quickLinks': 'Enlaces Rápidos',
    'footer.services': 'Servicios',
    'footer.contact': 'Información de Contacto',
    'footer.rights': '© 2024 Salón de Belleza El Y Ella. Todos los derechos reservados.',
    'footer.privacy': 'Política de Privacidad',
    'footer.terms': 'Términos de Servicio',
    
    // Common
    'common.mostPopular': 'Más Popular',
    'common.save': 'Ahorrar',
  }
};

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}