import { Link } from 'react-router-dom';

const variants = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  dark: 'btn-dark',
  outline: 'btn-outline',
};

export default function Button({
  children,
  to,
  href,
  type = 'button',
  variant = 'primary',
  className = '',
  ...props
}) {
  const classes = `${variants[variant] || variants.primary} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
}
