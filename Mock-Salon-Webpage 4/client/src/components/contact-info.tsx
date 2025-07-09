import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

interface ContactInfoProps {
  icon: LucideIcon;
  title: string;
  children: ReactNode;
}

export default function ContactInfo({ icon: Icon, title, children }: ContactInfoProps) {
  return (
    <div className="contact-info">
      <h4 className="flex items-center text-[var(--primary-gold)] text-lg font-semibold mb-4">
        <Icon className="h-5 w-5 mr-2" />
        {title}
      </h4>
      <div className="text-gray-600">
        {children}
      </div>
    </div>
  );
}
