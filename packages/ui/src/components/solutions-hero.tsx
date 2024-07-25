'use client';
import React from 'react';
import Image from 'next/image';
import FormattedText from './formattedText';
import { motion } from 'framer-motion';

export interface SolutionsHeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  items: SolutionCardProps[];
}

export interface SolutionCardProps {
  title?: string;
  subtitle?: string;
  description?: string;
  content?: {
    title: string;
    subtitle?: string;
  }[];
  image: {
    src: string;
    alt: string;
    style: 'style1' | 'style2';
  };
  index?: number;
}

export default function SolutionsHero({ items }: SolutionsHeroProps) {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:gap-24 gap-10">
        {items.map((item, index) => (
          <SolutionCard {...item} key={index} index={index} />
        ))}
      </div>
    </div>
  );
}

export const SolutionCard = ({
  title,
  subtitle,
  description,
  content,
  image,
  index,
}: SolutionCardProps) => {
  return (
    <div className="grid lg:grid-cols-2 items-center gap-10">
      {/* left side conten  */}
      <div className={`relative space-y-6 ${index! % 2 == 0 ? 'md:order-1' : 'md:order-2'}`}>
        {/* title and subtitle  */}
        <motion.div>
          {title && (
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -40,
                },
                show: {
                  x: 0,
                  opacity: 1,
                },
              }}
              initial="hidden"
              whileInView="show"
              transition={{
                delay: 0.2,
                duration: 0.4,
              }}
            >
              <FormattedText
                className={`md:text-4xl text-3xl font-normal ${image.style == 'style1' ? 'text-secondary-color' : ' text-white'}`}
              >
                {title}
              </FormattedText>
            </motion.div>
          )}

          {subtitle && (
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -40,
                },
                show: {
                  x: 0,
                  opacity: 1,
                },
              }}
              initial="hidden"
              whileInView="show"
              transition={{
                delay: 0.6,
                duration: 0.4,
              }}
            >
              <FormattedText className="text-primary-color mt-2">{subtitle}</FormattedText>
            </motion.div>
          )}

          {description && (
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -40,
                },
                show: {
                  x: 0,
                  opacity: 1,
                },
              }}
              initial="hidden"
              whileInView="show"
              transition={{
                delay: 0.8,
                duration: 0.4,
              }}
            >
              <FormattedText className="text-tertiary-color mt-2">{description}</FormattedText>
            </motion.div>
          )}
        </motion.div>

        {/* content  */}
        {content && (
          <div className="flex flex-col gap-4">
            {content.map((item, index) => (
              <div key={index}>
                {item.title && (
                  <FormattedText className="text-tertiary-color font-medium">
                    {item.title}
                  </FormattedText>
                )}
                {item.subtitle && (
                  <FormattedText className="text-tertiary-color mt-1">
                    {item.subtitle}
                  </FormattedText>
                )}
              </div>
            ))}
          </div>
        )}

        {/* line animation  */}
        {/* {image.style == 'style1' && (
          <motion.div className="w-full h-full top-0 left-0 z-20 absolute flex flex-col justify-between gap-2">
            {new Array(7).fill('').map((_, index) => (
              <motion.div
                initial={{
                  width: `${(index + 1) * 10}%`,
                  opacity: 1,
                }}
                whileInView={{
                  width: 0,
                  opacity: 0.7,
                }}
                // viewport={{
                //   once: true,
                // }}
                transition={{
                  delay: Number(`0.${index * 2}`),
                  duration: 0.3,
                }}
                className=" h-6 bg-secondary-color/90 rounded-sm"
              />
            ))}
          </motion.div>
        )} */}
      </div>

      {/* right side image  */}

      {image.style == 'style1' && (
        <div className={`${index! % 2 == 0 ? 'order-2' : 'order-1'} relative`}>
          <motion.div
            initial={{
              opacity: 0,
              scaleY: 0,
            }}
            whileInView={{
              opacity: 1,
              scaleY: 1,
            }}
            transition={{
              delay: 0.2,
              duration: 0.6,
            }}
            className={`relative origin-center max-w-xl border-t border-r-primary-color border-l-red-500 mx-auto border-t-red-500 border-dashed md:aspect-[4/3.2] aspect-[1/1] p-2 z-10 ${index! % 2 == 0 ? 'border-l' : 'border-r'}`}
          >
            <div className="relative w-full h-full">
              <Image src={image.src} alt="test" fill className="object-cover" />
            </div>
            <div
              className={`bg-white w-32 h-32 absolute -top-1  -z-10 ${index! % 2 == 0 ? '-left-2' : '-right-2'}`}
            >
              <div className="w-full h-[70%] bg-red-600"></div>
            </div>

            <div
              className={`border border-red-600 w-32 h-16 absolute -bottom-5 -z-10 ${index! % 2 == 0 ? 'right-0' : 'left-0'}`}
            ></div>
          </motion.div>
        </div>
      )}

      {image.style == 'style2' && (
        <div>
          <div className="relative max-w-xl w-full aspect-[4/4.4]">
            <Image src={image.src} alt={image.alt} fill className="object-cover" />
          </div>
        </div>
      )}
    </div>
  );
};
