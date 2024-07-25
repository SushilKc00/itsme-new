'use client';
import { motion } from 'framer-motion';
import FormattedText from './formattedText';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export interface ChooseUsProps {
  title?: string;
  subtitle?: string;
  image?: {
    src: string;
    alt: string;
  };
  video?: {
    src: string;
  };
  items?: {
    title: string;
    subtitle: string;
  }[];
}

const defaultVariants = {
  hidden: {
    opacity: 0,
    y: -8,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function ChooseUs({ title, subtitle, image, video, items }: ChooseUsProps) {
  const [videoVisible, setVideoVissible] = useState(0);

  const checkScrollProgress = () => {
    // console.log(scrollY);
    if (window.scrollY > 800) setVideoVissible(1);
    else setVideoVissible(0);
  };

  useEffect(() => {
    // fire scoll event listner for checking scroll progress
    window.addEventListener('scroll', checkScrollProgress);

    // clear function
    return () => window.removeEventListener('scroll', checkScrollProgress);
  }, []);
  return (
    <section>
      <div className="max-w-7xl mx-auto px-6">
        {/* top heading and subheading**** */}
        <div className="max-w-3xl mx-auto">
          {title && (
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              whileInView={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              transition={{
                delay: 0.2,
                duration: 0.7,
              }}
            >
              <FormattedText className="text-center text-white md:text-5xl text-3xl">
                {title}
              </FormattedText>
            </motion.div>
          )}
          {subtitle && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                delay: 0.2,
                duration: 0.7,
              }}
            >
              <FormattedText className="text-center text-tertiary-color mt-4">
                {subtitle}
              </FormattedText>
            </motion.div>
          )}
        </div>

        {/* middle images section** */}
        {image && (
          <div className="relative w-full aspect-[4/2] mt-10 overflow-hidden">
            <Image
              src={image.src}
              alt="test"
              fill
              className="object-cover hover:scale-105 duration-500"
            />
          </div>
        )}

        {/* video section if there is video  */}
        {videoVisible && video && (
          <div className="relative w-full aspect-video mt-10 overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              src={video.src}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        )}

        {/* items cards  */}
        {items && (
          <motion.div
            initial="hidden"
            whileInView="show"
            transition={{
              staggerChildren: 0.2,
            }}
            className="flex gap-6 justify-center flex-wrap mt-6"
          >
            {items.map((item, index) => (
              <motion.div
                key={index}
                variants={defaultVariants}
                // transition={{ delay: Number(`0.${index * 2}`), duration: 0.2, ease: 'linear' }}

                className="space-y-2 border border-gray-800 bg-quaternary-color p-6 rounded-sm max-w-96 hover:scale-105 hover:-translate-y-2 hover:bg-gray-800 duration-300"
              >
                <FormattedText className="text-white text-xl">{item.title}</FormattedText>
                <FormattedText className="text-tertiary-color text-md">
                  {item.subtitle}
                </FormattedText>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
