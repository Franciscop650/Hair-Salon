interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  imageAlt?: string;
}

export default function ServiceCard({ image, title, description, imageAlt }: ServiceCardProps) {
  return (
    <div className="service-card">
      <img 
        src={image} 
        alt={imageAlt || title}
        className="w-full h-[250px] object-cover"
      />
      <div className="p-8">
        <h3 className="playfair text-xl font-semibold text-[var(--text-charcoal)] mb-4">
          {title}
        </h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}
