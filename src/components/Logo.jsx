import { images } from '../assets/images';

export default function Logo({ variant = 'dark', className = '' }) {
  const onDark = variant === 'light';

  return (
    <span
      className={`inline-flex max-w-[min(72vw,280px)] items-center overflow-hidden rounded-sm ${
        onDark ? 'bg-white p-1.5 shadow-sm' : ''
      } ${className}`}
    >
      <img
        src={images.logo}
        alt="KS Construction"
        className="h-10 w-auto max-w-full object-contain sm:h-12 lg:h-14"
        width="280"
        height="123"
        decoding="async"
      />
    </span>
  );
}
