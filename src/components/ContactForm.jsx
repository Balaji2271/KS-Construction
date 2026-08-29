import { useState } from 'react';
import { COMPANY } from '../data/site';
import Button from './Button.jsx';

const projectTypes = [
  'Residential Construction',
  'Villa Construction',
  'Commercial Construction',
  'Renovation & Remodeling',
  'Interior & Finishing',
  'Turnkey Construction',
  'Other',
];

const initial = {
  name: '',
  phone: '',
  email: '',
  projectType: '',
  area: '',
  message: '',
};

function isValidPhone(value) {
  const digits = value.replace(/\D/g, '');
  // Accept 10-digit Indian numbers, or 12-digit with country code 91.
  return digits.length === 10 || (digits.length === 12 && digits.startsWith('91'));
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default function ContactForm() {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function update(field, value) {
    setValues((prev) => ({ ...prev, [field]: value }));
  }

  function validate() {
    const next = {};
    if (!values.name.trim() || values.name.trim().length < 2) {
      next.name = 'Please enter your full name.';
    }
    if (!isValidPhone(values.phone)) {
      next.phone = 'Please enter a valid phone number.';
    }
    if (values.email.trim() && !isValidEmail(values.email.trim())) {
      next.email = 'Please enter a valid email address, or leave this field blank.';
    }
    return next;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length) return;

    const text = [
      'Hello KS Construction, I would like a construction consultation.',
      `Name: ${values.name}`,
      `Phone: ${values.phone}`,
      values.email ? `Email: ${values.email}` : null,
      values.projectType ? `Project type: ${values.projectType}` : null,
      values.area ? `Approximate area: ${values.area}` : null,
      values.message ? `Message: ${values.message}` : null,
    ]
      .filter(Boolean)
      .join('\n');

    window.open(`${COMPANY.whatsappUrl}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="border border-gold/40 bg-cream p-8">
        <h3 className="text-2xl font-semibold">Enquiry ready to send</h3>
        <p className="mt-3 text-lg text-muted">
          Your details were prepared in WhatsApp. If the chat did not open, tap the button below or call us
          directly.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Button href={COMPANY.whatsappUrl} target="_blank" rel="noreferrer">
            Open WhatsApp
          </Button>
          <Button href={COMPANY.phoneTel} variant="dark">
            Call {COMPANY.phoneDisplay}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div>
        <label htmlFor="name" className="mb-2 block font-semibold">
          Full Name
        </label>
        <input
          id="name"
          name="name"
          autoComplete="name"
          value={values.name}
          onChange={(e) => update('name', e.target.value)}
          className="min-h-12 w-full border border-black/15 bg-white px-4 text-base"
        />
        {errors.name ? <p className="mt-2 text-sm font-medium text-red-700">{errors.name}</p> : null}
      </div>
      <div>
        <label htmlFor="phone" className="mb-2 block font-semibold">
          Phone Number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          value={values.phone}
          onChange={(e) => update('phone', e.target.value)}
          className="min-h-12 w-full border border-black/15 bg-white px-4 text-base"
        />
        {errors.phone ? <p className="mt-2 text-sm font-medium text-red-700">{errors.phone}</p> : null}
      </div>
      <div>
        <label htmlFor="email" className="mb-2 block font-semibold">
          Email <span className="font-normal text-muted">(optional)</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={(e) => update('email', e.target.value)}
          className="min-h-12 w-full border border-black/15 bg-white px-4 text-base"
        />
        {errors.email ? <p className="mt-2 text-sm font-medium text-red-700">{errors.email}</p> : null}
      </div>
      <div>
        <label htmlFor="projectType" className="mb-2 block font-semibold">
          Project Type
        </label>
        <select
          id="projectType"
          name="projectType"
          value={values.projectType}
          onChange={(e) => update('projectType', e.target.value)}
          className="min-h-12 w-full border border-black/15 bg-white px-4 text-base"
        >
          <option value="">Select a project type</option>
          {projectTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="area" className="mb-2 block font-semibold">
          Approximate Area
        </label>
        <input
          id="area"
          name="area"
          value={values.area}
          onChange={(e) => update('area', e.target.value)}
          placeholder="e.g. 1800 sq ft"
          className="min-h-12 w-full border border-black/15 bg-white px-4 text-base"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block font-semibold">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={(e) => update('message', e.target.value)}
          className="w-full border border-black/15 bg-white px-4 py-3 text-base"
        />
      </div>
      <Button type="submit" className="w-full sm:w-auto">
        Send Enquiry
      </Button>
    </form>
  );
}
