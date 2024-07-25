'use client';
import FormattedText from './formattedText';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export interface CustomerTestimonialProps {
  title?: string;
  subtitle?: string;
  description?: string;
  items: CustomerTestimonialCardProps[];
}

export interface CustomerTestimonialCardProps {
  title: string;
  subtitle: string;
  description?: string;
  image?: {
    src: string;
    alt: string;
  };
}

export default function CustomerTestimonial({
  title,
  subtitle,
  description,
  items,
}: CustomerTestimonialProps) {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-6">
        <div className="space-y-4 max-w-4xl mx-auto">
          {title && (
            <FormattedText className="text-center md:text-4xl text-3xl">{title}</FormattedText>
          )}
          {subtitle && (
            <FormattedText className="text-center text-tertiary-color">{subtitle}</FormattedText>
          )}
          {description && (
            <FormattedText className="text-center text-tertiary-color">{description}</FormattedText>
          )}
        </div>

        <div className="mt-10">
          <Swiper
            slidesPerView={1}
            speed={500}
            // autoplay={{
            //   delay: 4000,
            // }}
            modules={[Autoplay]}
            breakpoints={{
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
            }}
            className="w-full h-full "
          >
            {items?.map((item, index) => (
              <SwiperSlide key={index}>
                <TestimonialCard {...item} key={index} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export const TestimonialCard = ({ title, subtitle, image }: CustomerTestimonialCardProps) => {
  return (
    <div className="space-y-4 border py-6 px-8 shadow-md rounded-sm hover:translate-y-1 origin-top-right duration-300">
      <div className="flex items-center gap-5">
        {image && (
          <div className="relative w-14 aspect-square rounded-full ">
            <Image src={image.src} alt={image.alt} fill className="object-cover" />
          </div>
        )}

        <FormattedText className="font-medium max-w-64">{title}</FormattedText>
      </div>

      <FormattedText className="text-tertiary-color ">{subtitle}</FormattedText>
    </div>
  );
};
