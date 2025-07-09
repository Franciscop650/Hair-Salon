import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PricingItem {
  service: string;
  price: string | number;
}

interface PricingCardProps {
  title: string;
  items?: PricingItem[];
  children?: ReactNode;
  featured?: boolean;
  className?: string;
}

export default function PricingCard({ 
  title, 
  items, 
  children, 
  featured = false,
  className 
}: PricingCardProps) {
  return (
    <div className={cn("pricing-card", featured && "featured", className)}>
      {featured && (
        <div className="text-center mb-3">
          <span className="inline-block bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-medium">
            Most Popular
          </span>
        </div>
      )}
      <h3 className={cn("playfair text-xl font-semibold mb-6", featured && "text-center")}>
        {title}
      </h3>
      
      {items && (
        <div className="space-y-3">
          {items.map((item, index) => (
            <div key={index} className="flex justify-between items-center">
              <span className="text-gray-700">{item.service}</span>
              <span className="price text-[var(--primary-gold)] font-bold">
                ${item.price}
              </span>
            </div>
          ))}
        </div>
      )}
      
      {children}
    </div>
  );
}
