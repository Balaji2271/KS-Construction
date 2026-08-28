import { MessageCircle } from 'lucide-react';
import { COMPANY } from '../data/site';

export default function WhatsAppButton() {
  return (
    <a
      href={COMPANY.whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp us"
      className="fixed bottom-24 right-4 z-40 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-base font-semibold text-white shadow-lift transition hover:brightness-110 lg:bottom-6 lg:right-6 lg:px-5"
    >
      <MessageCircle className="h-6 w-6" aria-hidden="true" />
      <span className="hidden sm:inline">WhatsApp Us</span>
    </a>
  );
}
