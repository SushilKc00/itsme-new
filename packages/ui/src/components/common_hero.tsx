'use client';
import FormattedText from './formattedText';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from './ui/breadcrumb';

import { delay, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export interface CommonHeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  style: 'style1' | 'style2';
  // breadCrumb?: {
  //   label: string;
  //   href: string;
  // };

  features?: {
    title: string;
  }[];

  links?: {
    label: string;
    href: string;
    style: 'button1' | 'button2';
  }[];

  images?: {
    src: string;
    alt: string;
  }[];

  backgroundImage: {
    src: string;
    alt: string;
  };
}

const TextVariants = {
  hidden: {
    y: 200,
    opacity: 0,
  },

  show: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.8,
      staggerChildren: 0.4,
    },
  },
};

const TextVariantsTwo = {
  hidden: {
    y: -60,
    opacity: 0,
  },

  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
};

export default function Common_Hero({
  style,
  title,
  images,
  features,
  links,
  backgroundImage,
}: CommonHeroProps) {
  const pathName = usePathname();
  const [currentPath, setCurrentPath] = useState<string>('');
  const [previousPath, setPreviousPath] = useState<string>('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentPath(window.location.pathname);
      // You might want to also setPreviousPath using localStorage or some other mechanism
    }

    const updateBreadcrumbs = () => {
      // Update breadcrumbs based on previous and current paths
      if (currentPath !== previousPath) {
        setPreviousPath(currentPath);
      }
    };

    updateBreadcrumbs();

    // Add event listener for route changes
    const handleRouteChange = () => {
      setCurrentPath(pathName);
    };

    // Listen to route changes
    window.addEventListener('popstate', handleRouteChange);

    return () => {
      // Clean up the event listener
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, [currentPath, previousPath, pathName]);

  return (
    <section
      className={`relative ${style == 'style1' && 'min-h-screen'} ${style == 'style2' && `${pathName == '/contact-us' ? 'min-h-[635px]' : 'min-h-[460px]'}`} bg-no-repeat bg-cover bg-center flex justify-center items-center`}
      style={{
        backgroundImage: `url(${backgroundImage.src})`,
      }}
    >
      {style == 'style1' && (
        <div className="max-w-7xl w-full mx-auto px-6 grid lg:grid-cols-5 grid-cols-1 gap-6 items-center z-10 lg:mt-0  mt-28">
          {/* left hero content */}
          <motion.div
            variants={TextVariants}
            initial="hidden"
            animate="show"
            className="lg:col-span-3 col-span-1 space-y-8"
          >
            {/* top heading  */}
            {title && (
              <FormattedText className="md:text-6xl text-4xl text-white">{title}</FormattedText>
            )}

            {/* features items */}
            {features && (
              <motion.div
                variants={TextVariants}
                className="flex flex-wrap gap-4 items-center border-y border-y-gray-800 p-2 bg-overlay-color"
              >
                {features.map((item, index) => (
                  <div className="flex items-center gap-1" key={index}>
                    <CheckIcon />
                    <FormattedText className="text-white md:text-lg text-sm font-medium">
                      {item.title}
                    </FormattedText>
                  </div>
                ))}
              </motion.div>
            )}

            {/* links items  */}
            {links && (
              <motion.div variants={TextVariants} className="flex gap-4 flex-wrap">
                {links.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className={`sm:px-6 px-2 py-3 shadow-xl hover:-translate-y-1 duration-200 font-medium capitalize rounded-sm ${item.style == 'button1' ? 'bg-primary-color text-white' : 'bg-white font-semibold'}`}
                  >
                    {item.label}
                  </Link>
                ))}
              </motion.div>
            )}
          </motion.div>

          {/* right hero images slider section  */}
          <motion.div
            initial={{
              opacity: 0,
              y: -200,
            }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 0.4,
                duration: 1,
              },
            }}
            className="lg:col-span-2 col-span-1"
          >
            {images && (
              <Swiper
                slidesPerView={1}
                pagination={true}
                speed={500}
                autoplay={{
                  delay: 4000,
                }}
                modules={[Pagination, Autoplay]}
                className="w-full h-full "
              >
                {images?.map((item, index) => (
                  <SwiperSlide key={index} className="relative w-full aspect-[2/1.5]">
                    <Image src={item.src} alt={item.alt} fill className="object-contain" />
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </motion.div>
        </div>
      )}

      {style == 'style2' && (
        <div className="space-y-4 z-10">
          {
            title && (
              // <motion.div
              //   initial="hidden"
              //   animate="show"
              //   transition={{
              //     staggerChildren: 0.12,
              //     duration: 10,
              //   }}
              //   className="md:text-6xl text-4xl max-w-5xl px-6 text-white text-center"
              // >
              //   {title.split(' ').map((item, index) => (
              //     <motion.span
              //       variants={TextVariantsTwo}
              //       key={index}
              //       className=" inline-block mr-2"
              //     >
              //       {item}
              //     </motion.span>
              //   ))}
              // </motion.div>

              <motion.div
                variants={TextVariantsTwo}
                initial="hidden"
                animate="show"
                transition={{
                  staggerChildren: 0.12,
                  duration: 10,
                }}
                className="md:text-6xl text-4xl max-w-5xl px-6 text-white text-center"
              >
                {title}
              </motion.div>
            )
            // <FormattedText className="md:text-6xl text-4xl max-w-5xl px-6 text-white text-center">
            //   {title}
            // </FormattedText>
          }

          <div className="flex justify-center">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  {previousPath === '/' ? (
                    <BreadcrumbLink href="/" className="text-white capitalize hover:text-white">
                      Home
                    </BreadcrumbLink>
                  ) : (
                    <BreadcrumbLink
                      href={previousPath}
                      className="text-white capitalize hover:text-white"
                    >
                      {previousPath.replace('/', '')}
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink
                    href={pathName}
                    className="text-primary-color capitalize hover:text-white"
                  >
                    {pathName.replace('/', '')}
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      )}

      <div className="md:hidden w-full h-full absolute top-0 left-0 bg-gradient-to-b from-secondary-color to-secondary-color" />
    </section>
  );
}

export const CheckIcon = () => {
  return (
    <svg width="23" height="19" viewBox="0 0 23 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20.1221 9.93994C20.1221 14.7563 16.1846 18.6587 11.4033 18.6587C6.58691 18.6587 2.68457 14.7563 2.68457 9.93994C2.68457 5.15869 6.58691 1.22119 11.4033 1.22119C16.1846 1.22119 20.1221 5.15869 20.1221 9.93994ZM10.3838 14.5806L16.8525 8.11182C17.0635 7.90088 17.0635 7.51416 16.8525 7.30322L16.0439 6.52979C15.833 6.28369 15.4814 6.28369 15.2705 6.52979L9.99707 11.8032L7.50098 9.34229C7.29004 9.09619 6.93848 9.09619 6.72754 9.34229L5.91895 10.1157C5.70801 10.3267 5.70801 10.7134 5.91895 10.9243L9.5752 14.5806C9.78613 14.7915 10.1729 14.7915 10.3838 14.5806Z"
        fill="#E52938"
      />
    </svg>
  );
};
