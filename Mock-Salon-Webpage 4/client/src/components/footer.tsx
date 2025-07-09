import { Link } from "wouter";
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin, Globe } from "lucide-react";
import { useLanguage } from "@/lib/language";

export default function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-[var(--text-charcoal)] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h5 className="text-[var(--primary-gold)] text-lg font-semibold mb-4">
              {t('footer.company')}
            </h5>
            <p className="text-gray-300 mb-4">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[var(--primary-gold)] transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[var(--primary-gold)] transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[var(--primary-gold)] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-[var(--primary-gold)] text-lg font-semibold mb-4">
              {t('footer.quickLinks')}
            </h5>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-[var(--primary-gold)] transition-colors">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-[var(--primary-gold)] transition-colors">
                  {t('nav.services')}
                </Link>
              </li>
              <li>
                <Link href="/reservations" className="text-gray-300 hover:text-[var(--primary-gold)] transition-colors">
                  {t('nav.book')}
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[var(--primary-gold)] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[var(--primary-gold)] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h5 className="text-[var(--primary-gold)] text-lg font-semibold mb-4">
              {t('footer.services')}
            </h5>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-[var(--primary-gold)] transition-colors">
                  Hair Cuts & Styling
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[var(--primary-gold)] transition-colors">
                  Hair Coloring
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[var(--primary-gold)] transition-colors">
                  Facial Treatments
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[var(--primary-gold)] transition-colors">
                  Nail Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[var(--primary-gold)] transition-colors">
                  Special Packages
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h5 className="text-[var(--primary-gold)] text-lg font-semibold mb-4">
              {t('footer.contact')}
            </h5>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-[var(--primary-gold)] mt-0.5" />
                <div className="text-gray-300">
                  <div>123 Beauty Avenue</div>
                  <div>Downtown District, State 12345</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-[var(--primary-gold)]" />
                <span className="text-gray-300">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-[var(--primary-gold)]" />
                <span className="text-gray-300">info@elyella.com</span>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-8 border-gray-700" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            {t('footer.rights')}
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-[var(--primary-gold)] text-sm transition-colors">
              {t('footer.privacy')}
            </a>
            <a href="#" className="text-gray-400 hover:text-[var(--primary-gold)] text-sm transition-colors">
              {t('footer.terms')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
