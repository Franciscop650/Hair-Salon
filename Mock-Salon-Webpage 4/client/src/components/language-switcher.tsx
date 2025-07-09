import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/language';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <Globe className="h-4 w-4 text-[var(--primary-gold)]" />
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
        className="text-sm font-medium hover:text-[var(--primary-gold)]"
      >
        {language === 'en' ? 'ES' : 'EN'}
      </Button>
    </div>
  );
}