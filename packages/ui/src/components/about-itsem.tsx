'use client';
import React from 'react';
import FormattedText from './formattedText';
import Image from 'next/image';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

export interface AboutItsemProps {
  title?: string;
  subtitle?: string;
  description?: string;

  image: {
    src: string;
    alt: string;
  };

  items: {
    title: string;
    subtitle: string;
  }[];
}

export default function AboutItsem({ title, subtitle, items, image }: AboutItsemProps) {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10">
        <div className="space-y-4">
          {title && (
            <motion.div
              initial={{
                opacity: 0,
                x: -60,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  delay: 0.2,
                  duration: 0.8,
                },
              }}
            >
              <FormattedText className="md:text-5xl text-3xl font-normal text-secondary-color">
                {title}
              </FormattedText>
            </motion.div>
          )}

          {subtitle && (
            <motion.div
              initial={{
                opacity: 0,
                x: -80,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  delay: 0.6,
                  duration: 0.8,
                },
              }}
            >
              <FormattedText className="text-tertiary-color">{subtitle}</FormattedText>
            </motion.div>
          )}

          <div className="flex gap-3">
            {items.map((item, index) => (
              <div
                key={index}
                className="border max-w-44 py-5 w-full flex flex-col justify-center items-center"
              >
                {item.title && (
                  <FormattedText className="text-primary-color font-bold md:text-4xl">
                    {item.title}
                  </FormattedText>
                )}
                {item.subtitle && (
                  <FormattedText className="text-secondary-color">{item.subtitle}</FormattedText>
                )}
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{
            scale: 0,
          }}
          whileInView={{
            scale: 1,
            transition: {
              duration: 0.6,
            },
          }}
          className="relative w-full aspect-[4/3]"
        >
          <Image src={image.src} alt={image.alt} fill className="object-cover" />
        </motion.div>
      </div>
    </section>
  );
}
