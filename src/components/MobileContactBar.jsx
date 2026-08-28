import { Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { COMPANY } from '../data/site';

export default function MobileContactBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-black/10 bg-white/97 px-3 py-2 shadow-nav backdrop-blur lg:hidden">
      <div className="grid grid-cols-2 gap-2">
        <a
          href={COMPANY.phoneTel}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-ink text-base font-semibold text-white"
        >
          <Phone className="h-5 w-5" aria-hidden="true" />
          Call Now
        </a>
        <Link
          to="/contact"
          className="relative z-10 inline-flex min-h-12 items-center justify-center rounded-sm bg-gold text-base font-semibold text-ink"
        >
          Get a Quote
        </Link>
      </div>
    </div>
  );
}
