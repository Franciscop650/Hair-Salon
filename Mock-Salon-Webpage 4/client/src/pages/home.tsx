import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/hero-section";
import ServiceCard from "@/components/service-card";
import ContactInfo from "@/components/contact-info";
import { MapPin, Phone, Clock, Search } from "lucide-react";
import { useLanguage } from "@/lib/language";

export default function Home() {
  const { t } = useLanguage();
  
  const services = [
    {
      image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      title: t('home.services.hair.title'),
      description: t('home.services.hair.description'),
      alt: "Professional hair cutting and styling session"
    },
    {
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      title: t('home.services.beauty.title'),
      description: t('home.services.beauty.description'),
      alt: "Relaxing facial treatment being performed at a spa"
    },
    {
      image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      title: t('home.services.nails.title'),
      description: t('home.services.nails.description'),
      alt: "Professional nail care and manicure service"
    }
  ];

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Hair color transformation before and after"
    },
    {
      src: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Stylish modern haircut and blow dry"
    },
    {
      src: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Relaxing spa facial treatment in progress"
    },
    {
      src: "https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Elegant nail art and manicure design"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <HeroSection
        backgroundImage="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080"
        title={t('home.hero.title')}
        subtitle={t('home.hero.subtitle')}
      >
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/reservations">
            <Button className="btn-primary-custom">{t('home.hero.book')}</Button>
          </Link>
          <Link href="/services">
            <Button className="btn-outline-custom">{t('home.hero.services')}</Button>
          </Link>
        </div>
      </HeroSection>

      {/* About Section */}
      <section className="py-20 bg-[var(--secondary-cream)]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="playfair text-4xl font-bold mb-6">{t('home.about.title')}</h2>
              <p className="text-lg mb-6 text-gray-700">
                {t('home.about.description1')}
              </p>
              <p className="mb-8 text-gray-600">
                {t('home.about.description2')}
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <h4 className="text-3xl font-bold text-[var(--primary-gold)]">15+</h4>
                  <p className="text-gray-600">{t('home.about.years')}</p>
                </div>
                <div className="text-center">
                  <h4 className="text-3xl font-bold text-[var(--primary-gold)]">500+</h4>
                  <p className="text-gray-600">{t('home.about.clients')}</p>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Professional hair stylist working on a client's hair in a modern salon"
                className="w-full rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="playfair text-4xl font-bold mb-4">{t('home.services.title')}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('home.services.subtitle')}
            </p>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                image={service.image}
                title={service.title}
                description={service.description}
                imageAlt={service.alt}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/services">
              <Button className="btn-primary-custom">{t('home.services.viewAll')}</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="playfair text-4xl font-bold mb-4">{t('home.gallery.title')}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('home.gallery.subtitle')}
            </p>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="gallery-item">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-[300px] object-cover rounded-2xl"
                />
                <div className="gallery-overlay rounded-2xl">
                  <Search className="h-8 w-8 text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="playfair text-4xl font-bold mb-4">{t('home.contact.title')}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('home.contact.subtitle')}
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            <ContactInfo icon={MapPin} title={t('home.contact.location')}>
              <div>
                <div>123 Beauty Avenue</div>
                <div>Downtown District</div>
                <div>City, State 12345</div>
              </div>
            </ContactInfo>

            <ContactInfo icon={Phone} title={t('home.contact.contact')}>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 text-[var(--primary-gold)] mr-2" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <span className="text-[var(--primary-gold)] mr-2">✉</span>
                  <span>info@elyella.com</span>
                </div>
                <div className="flex items-center">
                  <span className="text-[var(--primary-gold)] mr-2">🌐</span>
                  <span>www.elyella.com</span>
                </div>
              </div>
            </ContactInfo>

            <ContactInfo icon={Clock} title={t('home.contact.hours')}>
              <div className="space-y-1">
                <div><strong>{t('home.contact.hours.weekdays')}</strong></div>
                <div><strong>{t('home.contact.hours.saturday')}</strong></div>
                <div><strong>{t('home.contact.hours.sunday')}</strong></div>
              </div>
            </ContactInfo>
          </div>
        </div>
      </section>
    </div>
  );
}
