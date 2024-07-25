'use client';
import { SecurityCard, SecurityCardProps } from './solution-security';
import FormattedText from './formattedText';
import Link from 'next/link';
import { motion } from 'framer-motion';

export interface HowProductsDifferentProps {
  title?: string;
  subtitle?: string;
  description?: string;
  link: {
    label: string;
    href: string;
  };
  items: SecurityCardProps[];
}

const CardVariants = {
  hidden: {
    opacity: 0,
    y: -50,
  },
  show: {
    y: 0,
    opacity: 1,
  },
};

export default function HowProductsDifferent({
  title,
  subtitle,
  link,
  items,
}: HowProductsDifferentProps) {
  return (
    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-5 gap-6 items-center">
      <div className="col-span-2 space-y-3">
        {title && (
          <motion.div
            initial={{
              x: -60,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              delay: 0.2,
              duration: 0.4,
              ease: 'linear',
            }}
          >
            <FormattedText className="md:text-4xl text-3xl font-medium text-secondary-color">
              {title}
            </FormattedText>
          </motion.div>
        )}
        {subtitle && (
          <motion.div
            initial={{
              x: -60,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              delay: 0.6,
              duration: 0.4,
              ease: 'linear',
            }}
          >
            <FormattedText className="text-tertiary-color">{subtitle}</FormattedText>
          </motion.div>
        )}

        {link && (
          <motion.div
            initial={{
              opacity: 0,
              x: -80,
              rotateX: 180,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
              rotateX: 0,
            }}
            transition={{
              delay: 0.8,
              duration: 1.2,
              type: 'spring',
              bounce: 0.5,
            }}
            className="flex"
          >
            <Link
              href={link.href}
              className="bg-primary-color px-6 border border-primary-color py-3 text-white font-medium rounded-sm hover:bg-transparent duration-300 hover:text-secondary-color hover:scale-105 capitalize"
            >
              {link.label}
            </Link>
          </motion.div>
        )}
      </div>
      <div className="col-span-3 grid sm:grid-cols-2 gap-5">
        {items.map((item, index) => (
          <motion.div
            key={index}
            variants={CardVariants}
            initial="hidden"
            whileInView="show"
            // viewport={{
            //   once: true,
            // }}
            transition={{
              delay: Number(`0.${index * 3}`),
              duration: 0.5,
            }}
          >
            <SecurityCard {...item} key={index} index={index} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
