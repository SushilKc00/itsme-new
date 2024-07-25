'use client';
import React from 'react';
import { CardProps } from './hero_products';
import Image from 'next/image';
import Link from 'next/link';
import ReactStars from 'react-stars';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import FormattedText from './formattedText';
import { motion } from 'framer-motion';

export interface ProductDetailsProps extends CardProps {}

export default function ProductDetails({
  title,
  subtitle,
  description,
  ratings,
  reviews,
  link,
  images,
}: ProductDetailsProps) {
  return (
    <div className="bg-secondary-color min-h-screen -mt-12 py-12 flex justify-center items-center">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 grid-cols-1 items-center gap-6 mt-20">
        <motion.div
          initial={{
            opacity: 0,
            x: -200,
          }}
          whileInView={{
            opacity: 1,

            x: 0,
          }}
          transition={{
            duration: 1.4,
            type: 'spring',
            bounceDamping: 1,
            bounce: 0.5,
          }}
          className="relative max-w-[480px] mx-auto w-full aspect-[4/4.4] origin-center"
        >
          <Swiper
            slidesPerView={1}
            pagination={true}
            speed={500}
            autoplay={{
              delay: 4000,
            }}
            modules={[Pagination, Autoplay]}
            className="h-full w-full"
          >
            {images?.map((item, index) => (
              <SwiperSlide key={index} className="relative w-full h-full">
                <Image src={item.src} alt={item.alt} fill className="object-cover rounded-md" />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="absolute -top-1 -right-1 w-[100%] h-full bg-white rounded-md" />
        </motion.div>
        <div className="flex flex-col gap-2 text-white">
          {title && (
            <motion.div
              initial={{
                opacity: 0,
                y: 80,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 3,
                type: 'spring',
                bounceDamping: 1,
                bounce: 0.5,
              }}
            >
              <FormattedText className="md:text-4xl text-3xl">{title}</FormattedText>
            </motion.div>
          )}

          <motion.div
            initial={{
              opacity: 0,
              y: 80,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              delay: 0.4,
              duration: 0.6,
            }}
            className="flex gap-8 items-center"
          >
            {ratings && (
              <div className="flex gap-2 items-center">
                <ReactStars
                  // count={Number(ratings)}
                  count={5}
                  value={Number(ratings)}
                  color1={'#fefefe'}
                  edit={false}
                  color2="#E52938"
                  size={24}
                  half
                />
                <FormattedText className="mt-1">{ratings}</FormattedText>
              </div>
            )}

            {reviews && (
              <div>
                <FormattedText className="mt-1">{`${reviews} Reviews`}</FormattedText>
              </div>
            )}
            {/* {ratings && <FormattedText>{ratings}</FormattedText>} */}
          </motion.div>

          {/* {subtitle && <FormattedText>{subtitle}</FormattedText>} */}
          {description && (
            <motion.div
              initial={{
                opacity: 0,
                y: 80,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.8,
                duration: 2,
                type: 'spring',
                bounceDamping: 1,
                bounce: 0.5,
              }}
            >
              <span className="text-sm font-medium text-white">Description</span>
              <FormattedText className="text-tertiary-color">{description}</FormattedText>
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
                delay: 0.4,
                duration: 1,
                type: 'spring',
                bounce: 0.5,
              }}
              className="flex mt-4"
            >
              <Link
                className="bg-primary-color px-6 py-2 text-white hover:scale-95 shadow-md border border-primary-color duration-300 hover:bg-transparent hover:border-white capitalize"
                href={link.href}
              >
                {link.label}
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
