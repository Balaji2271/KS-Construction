import { images } from '../assets/images';

const VARIANTS = {
  nav: {
    src: images.logoNav,
    className: 'h-11 w-auto max-w-[min(58vw,240px)] object-contain object-left sm:h-12 sm:max-w-[260px] lg:h-[52px] lg:max-w-[300px]',
    width: 300,
    height: 78,
  },
  mark: {
    src: images.logoMark,
    className: 'h-11 w-auto max-w-[120px] object-contain object-left sm:h-12',
    width: 120,
    height: 80,
  },
  full: {
    src: images.logoFull,
    className: 'h-auto w-full max-w-[280px] object-contain object-left sm:max-w-[320px]',
    width: 320,
    height: 86,
  },
};

export default function Logo({ variant = 'nav', className = '' }) {
  const config = VARIANTS[variant] || VARIANTS.nav;

  return (
    <img
      src={config.src}
      alt="KS Construction"
      className={`${config.className} ${className}`}
      width={config.width}
      height={config.height}
      decoding="async"
    />
  );
}
