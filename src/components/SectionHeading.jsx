export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  light = false,
  align = 'left',
}) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow ? (
        <p
          className={`mb-3 text-sm font-semibold tracking-[0.22em] ${
            light ? 'text-gold-light' : 'text-gold'
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <div className={`gold-rule mb-5 ${align === 'center' ? 'mx-auto' : ''}`} />
      <h2 className={`text-3xl font-semibold leading-tight sm:text-4xl ${light ? 'text-white' : 'text-ink'}`}>
        {title}
      </h2>
      {subtitle ? (
        <p className={`mt-4 text-lg leading-relaxed ${light ? 'text-white/80' : 'text-muted'}`}>{subtitle}</p>
      ) : null}
    </div>
  );
}
