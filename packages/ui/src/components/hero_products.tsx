'use client';
import Image from 'next/image';
import Link from 'next/link';
import FormattedText from './formattedText';
import { ReactElement, useState } from 'react';
import { motion } from 'framer-motion';

export interface HeroProductsProps {
  title?: string;
  subtitle?: string;
  desription?: string;

  link: {
    label: string;
    href: string;
    position: 'top' | 'bottom';
  };

  items: CardProps[];
}

export interface CardProps {
  title?: string;
  subtitle?: string;
  description?: string;
  reviews?: string;
  ratings?: string;
  link: {
    label: string;
    href: string;
  };
  images: {
    src: string;
    alt: string;
  }[];
  index?: number;
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

export default function HeroProducts({ title, link, items }: HeroProductsProps) {
  const [visibleProductCount, setVisibilbeProductCount] = useState<number>(4);

  const loadMore = (e: React.MouseEvent<HTMLButtonElement>) => {
    // to prevent default behavior
    e.preventDefault();
    // increse count less that items length
    // if (visibleProductCount < items.length) setVisibilbeProductCount((prev) => prev + 4);
    setVisibilbeProductCount(items.length);
  };

  return (
    <section>
      <div className="max-w-7xl px-6 mx-auto">
        <div className="flex justify-between items-center">
          {title && <FormattedText className="text-3xl  font-medium">{title}</FormattedText>}

          {link.position == 'top' && (
            <button
              className="hidden lg:block relative border capitalize border-black text-lg rounded-sm font-bold px-6 py-2 hover:scale-105 duration-200 before:absolute before:top-[50%] before:left-[50%] before:-translate-x-[50%] before:-translate-y-[50%] before:conten-[''] before:w-[98%] before:h-[98%] before:bg-primary-color before:scale-x-0 before:hover:scale-x-100 before:duration-300 before:-z-10 hover:text-white before:rounded-sm"
              // href={link.href}
              onClick={(e) => loadMore(e)}
            >
              {link.label}
            </button>
          )}
        </div>

        {/* show porducts cards  */}
        <motion.div className="grid lg:grid-cols-4 md:grid-cols-3  gap-4 mt-8">
          {items.slice(0, visibleProductCount).map((item, index) => (
            <motion.div
              key={index}
              variants={CardVariants}
              initial="hidden"
              whileInView="show"
              // viewport={{
              //   once: true,
              // }}
              transition={{ delay: Number(`0.${index * 2}`), duration: 0.5 }}
            >
              <Card {...item} key={index} />
            </motion.div>
          ))}
        </motion.div>

        {/* bottom link if bottom link there  */}
        {link.position == 'bottom' && (
          <div className="flex justify-center mt-6">
            <button
              className="relative border capitalize border-black text-lg rounded-sm font-bold px-6 py-2 hover:scale-105 duration-200 before:absolute before:top-[50%] before:left-[50%] before:-translate-x-[50%] before:-translate-y-[50%] before:conten-[''] before:w-[98%] before:h-[98%] before:bg-primary-color before:scale-x-0 before:hover:scale-x-100 before:duration-300 before:-z-10 hover:text-white before:rounded-sm "
              onClick={(e) => loadMore(e)}
            >
              {link.label}
            </button>
          </div>
        )}

        {/* if bottom link is not there then show link for mobile view  */}
        {link.position != 'bottom' && (
          <div className="lg:hidden flex justify-center mt-6">
            <button
              className="border border-black text-lg rounded-sm font-bold px-6 py-2 hover:scale-105 duration-200"
              onClick={(e) => loadMore(e)}
              // href={link.href}
            >
              {link.label}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export const Card = ({ title, subtitle, ratings, reviews, link, images, index }: CardProps) => {
  // const hrefLink = title?.split(' ').slice(0, 3).join('-').toLowerCase().replace(',', '');
  const hrefLink = title
    ?.replace(/[^a-zA-Z0-9\s]/g, '')
    .split(' ')
    .slice(0, 3)
    .join('-')
    .toLowerCase();

  return (
    <div className="border rounded-sm p-3 shadow-xl  hover:-translate-y-1 duration-300 hover:bg-gray-200/60">
      <Link href={`/products/${hrefLink}`}>
        {images && (
          <div className="relative max-w-96 mx-auto w-full aspect-[4/2.5]">
            <Image src={images[0]!.src} alt={images[0]!.alt} className="object-contain" fill />
          </div>
        )}

        <div className="space-y-3 mt-3">
          <div className="flex items-center gap-3 text-tertiary-color text-md font-normal">
            {reviews && <span>{reviews} Reviews</span>}
            {ratings && <span>{ratings} Ratings</span>}
          </div>

          <div className="space-y-1">
            {title && (
              <FormattedText className="text-xl font-medium text-black">
                {`${title.substring(0, 40)} ...`}
              </FormattedText>
            )}

            {subtitle && (
              <FormattedText className="text-sm text-gray-600 font-normal">
                {`${subtitle.substring(0, 100)}...`}
              </FormattedText>
            )}
          </div>
        </div>
      </Link>
      <div>
        <Link
          href={`${link.href}`}
          className="relative text-lg text-primary-color font-bold capitalize before:absolute before:-bottom-1 before:left-0 before:conten-[''] before:w-0 before:h-[0.1rem] before:bg-primary-color before:hover:w-full before:duration-300 before:rounded-sm mt-2 inline-block"
        >
          {link.label}
        </Link>
      </div>
    </div>
  );
};
