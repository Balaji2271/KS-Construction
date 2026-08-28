import { images } from '../assets/images';

export default function Logo({ variant = 'dark', className = '' }) {
  const src = variant === 'light' ? images.logoLight : images.logo;
  return (
    <img
      src={src}
      alt="KS Construction"
      className={`h-12 w-auto sm:h-14 ${className}`}
      width="220"
      height="67"
    />
  );
}
