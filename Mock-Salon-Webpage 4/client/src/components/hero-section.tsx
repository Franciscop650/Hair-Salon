import { ReactNode } from "react";

interface HeroSectionProps {
  backgroundImage: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
  height?: string;
}

export default function HeroSection({
  backgroundImage,
  title,
  subtitle,
  children,
  height = "100vh"
}: HeroSectionProps) {
  return (
    <section 
      className="hero relative flex items-center justify-center text-white text-center"
      style={{ 
        backgroundImage: `url(${backgroundImage})`,
        height 
      }}
    >
      <div className="hero-content max-w-4xl px-4">
        <h1 className="playfair hero-content h1 mb-4">{title}</h1>
        {subtitle && (
          <p className="cormorant hero-content p mb-8">{subtitle}</p>
        )}
        {children}
      </div>
    </section>
  );
}
