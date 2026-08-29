import { motion, useReducedMotion } from 'framer-motion';
import { Phone } from 'lucide-react';
import { images } from '../assets/images';
import { COMPANY } from '../data/site';
import Button from './Button.jsx';

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-ink text-white">
      <img
        src={images.hero.villa}
        alt="Modern villa with warm architectural lighting"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/80 via-black/65 to-black/35" />
      <div className="pointer-events-none absolute inset-0 bg-black/20" />

      <div className="container-site relative z-10 pb-24 pt-36 lg:pb-28 lg:pt-44">
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm font-semibold tracking-[0.28em] text-gold-light"
        >
          {COMPANY.navTagline}
        </motion.p>
        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.12] text-white sm:text-5xl lg:text-6xl"
        >
          Building Dreams.
          <br />
          Creating Spaces.
        </motion.h1>
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="mt-6 max-w-xl text-lg leading-relaxed text-white/90 sm:text-xl"
        >
          Quality construction solutions designed around your vision, requirements and budget.
        </motion.p>
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.24 }}
          className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
        >
          <Button to="/contact">Get a Free Consultation</Button>
          <Button to="/projects" variant="secondary">
            View Our Projects
          </Button>
        </motion.div>
        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-8 flex flex-col gap-3 text-lg sm:flex-row sm:items-center sm:gap-8"
        >
          <a href={COMPANY.phoneTel} className="inline-flex min-h-12 items-center gap-2 font-semibold text-white">
            <Phone className="h-5 w-5 text-gold" aria-hidden="true" />
            Call us: {COMPANY.phoneDisplay}
          </a>
          <a
            href={COMPANY.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 items-center font-semibold text-gold-light underline-offset-4 hover:underline"
          >
            WhatsApp Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
