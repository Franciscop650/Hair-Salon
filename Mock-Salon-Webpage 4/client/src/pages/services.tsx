import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/hero-section";
import PricingCard from "@/components/pricing-card";
import { Check } from "lucide-react";
import { useLanguage } from "@/lib/language";

export default function Services() {
  const { t } = useLanguage();
  const hairCutsData = [
    { service: "Women's Cut & Style", price: 75 },
    { service: "Men's Cut & Style", price: 45 },
    { service: "Children's Cut (12 & under)", price: 35 },
    { service: "Blow Dry & Style", price: 40 },
    { service: "Deep Conditioning Treatment", price: 25 }
  ];

  const colorServicesData = [
    { service: "Full Color", price: 120 },
    { service: "Root Touch-up", price: 80 },
    { service: "Highlights (Full)", price: 150 },
    { service: "Highlights (Partial)", price: 100 },
    { service: "Balayage", price: 180 }
  ];

  const facialTreatmentsData = [
    { service: "Classic European Facial", price: 85 },
    { service: "Anti-Aging Facial", price: 110 },
    { service: "Hydrating Facial", price: 95 },
    { service: "Acne Treatment Facial", price: 100 },
    { service: "Express Facial (30 min)", price: 65 }
  ];

  const additionalTreatmentsData = [
    { service: "Eyebrow Shaping", price: 25 },
    { service: "Eyebrow Tinting", price: 20 },
    { service: "Eyelash Extensions", price: 150 },
    { service: "Makeup Application", price: 60 },
    { service: "Bridal Makeup Trial", price: 75 }
  ];

  const manicureServicesData = [
    { service: "Classic Manicure", price: 35 },
    { service: "Gel Manicure", price: 45 },
    { service: "French Manicure", price: 40 },
    { service: "Nail Art (per nail)", price: 5 },
    { service: "Manicure with Extensions", price: 65 }
  ];

  const pedicureServicesData = [
    { service: "Classic Pedicure", price: 45 },
    { service: "Spa Pedicure", price: 60 },
    { service: "Gel Pedicure", price: 55 },
    { service: "Callus Treatment", price: 15 },
    { service: "Paraffin Treatment", price: 20 }
  ];

  return (
    <div className="pt-16">
      {/* Services Hero */}
      <HeroSection
        backgroundImage="https://images.unsplash.com/photo-1552693673-1bf958298935?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080"
        title={t('services.hero.title')}
        subtitle={t('services.hero.subtitle')}
        height="60vh"
      />

      {/* Hair Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="playfair text-4xl font-bold mb-4">{t('services.hair.title')}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('services.hair.subtitle')}
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <PricingCard title={t('services.hair.cuts')} items={hairCutsData} />
            <PricingCard title={t('services.hair.color')} items={colorServicesData} />
          </div>
        </div>
      </section>

      {/* Beauty Treatments */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="playfair text-4xl font-bold mb-4">Beauty Treatments</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Rejuvenating treatments for your skin and well-being
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <PricingCard title="Facial Treatments" items={facialTreatmentsData} />
            <PricingCard title="Additional Treatments" items={additionalTreatmentsData} />
          </div>
        </div>
      </section>

      {/* Nail Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="playfair text-4xl font-bold mb-4">Nail Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Complete nail care for hands and feet
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <PricingCard title="Manicure Services" items={manicureServicesData} featured />
            <PricingCard title="Pedicure Services" items={pedicureServicesData} />
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="playfair text-4xl font-bold mb-4">Special Packages</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Save with our curated service combinations
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            <PricingCard title="Bridal Package">
              <p className="text-center text-gray-600 mb-4">Perfect for your special day</p>
              <div className="text-center mb-6">
                <span className="price text-4xl">$350</span>
                <div className="text-sm text-gray-500">Save $50</div>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  Hair Trial
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  Makeup Trial
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  Wedding Day Hair
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  Wedding Day Makeup
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  Manicure & Pedicure
                </li>
              </ul>
            </PricingCard>

            <PricingCard title="Pamper Package">
              <p className="text-center text-gray-600 mb-4">A day of complete relaxation</p>
              <div className="text-center mb-6">
                <span className="price text-4xl">$200</span>
                <div className="text-sm text-gray-500">Save $30</div>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  European Facial
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  Spa Pedicure
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  Gel Manicure
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  Blow Dry & Style
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  Complimentary Refreshments
                </li>
              </ul>
            </PricingCard>

            <PricingCard title="Maintenance Package">
              <p className="text-center text-gray-600 mb-4">Monthly beauty maintenance</p>
              <div className="text-center mb-6">
                <span className="price text-4xl">$120</span>
                <div className="text-sm text-gray-500">Save $25</div>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  Cut & Style
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  Eyebrow Shaping
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  Classic Manicure
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  Deep Conditioning
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  10% off additional services
                </li>
              </ul>
            </PricingCard>
          </div>
          <div className="text-center mt-12">
            <Link href="/reservations">
              <Button className="btn-primary-custom">Book Your Package</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
