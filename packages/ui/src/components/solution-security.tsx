'use client';
import { ReactNode } from 'react';
import FormattedText from './formattedText';
import Image from 'next/image';
import { motion } from 'framer-motion';

export interface SolutionSecurityProps {
  title?: string;
  subtitle?: string;
  description?: string;
  items: SecurityCardProps[];
}

export interface SecurityCardProps {
  title: string;
  subtitle: string;
  index?: number;
  icon: {
    src: string;
    alt: string;
  };
  positon: 'start' | 'center' | 'end';
}

export default function SolutionSecurity({ title, subtitle, items }: SolutionSecurityProps) {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-4">
          {title && (
            <motion.div
              initial={{
                opacity: 0,
                y: -80,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.2,
                  duration: 0.8,
                },
              }}
            >
              <FormattedText className="md:text-4xl text-3xl font-medium text-center text-white">
                {title}
              </FormattedText>
            </motion.div>
          )}

          {subtitle && (
            <motion.div
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.6,
                  duration: 0.8,
                },
              }}
            >
              <FormattedText className="text-tertiary-color text-center">{subtitle}</FormattedText>
            </motion.div>
          )}
        </div>

        <div className="flex flex-wrap gap-6 justify-center mt-16">
          {items.map((item, index) => (
            <SecurityCard key={index} {...item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export const SecurityCard = ({ title, subtitle, icon, positon }: SecurityCardProps) => {
  return (
    <div
      className={`space-y-2 max-w-96 flex flex-col ${positon == 'center' && 'items-center text-secondary-color'} ${positon == 'start' && 'items-start text-white'}`}
    >
      <div className="relative w-16 aspect-[3/3]">
        <Image src={icon.src} alt={icon.alt} fill className="object-contain" />
      </div>
      {title && (
        <FormattedText
          className={`md:text-2xl  ${positon == 'center' && 'text-center'} ${positon == 'start' && 'text-start'}`}
        >
          {title}
        </FormattedText>
      )}
      {subtitle && (
        <FormattedText
          className={`text-tertiary-color text-center ${positon == 'center' && 'text-center'} ${positon == 'start' && 'text-start'}`}
        >
          {subtitle}
        </FormattedText>
      )}
    </div>
  );
};

export const CCTVIcons = () => {
  return (
    <svg width="64" height="65" viewBox="0 0 64 65" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_75_2500)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M50.6666 12.8928V21.5835C51.7172 21.5835 52.7575 21.7904 53.7281 22.1924C54.6987 22.5945 55.5806 23.1838 56.3235 23.9266C57.0664 24.6695 57.6556 25.5514 58.0577 26.522C58.4597 27.4926 58.6666 28.5329 58.6666 29.5835C58.6666 30.6341 58.4597 31.6743 58.0577 32.6449C57.6556 33.6156 57.0664 34.4975 56.3235 35.2403C55.5806 35.9832 54.6987 36.5725 53.7281 36.9745C52.7575 37.3766 51.7172 37.5835 50.6666 37.5835V45.5835C50.6666 49.9781 45.6506 52.4875 42.1333 49.8501L36.64 45.7275C33.7036 43.5258 30.2846 42.0558 26.6666 41.4395V49.0235C26.6669 50.7668 26.037 52.4515 24.893 53.7669C23.7491 55.0824 22.1681 55.94 20.4416 56.1816C18.7151 56.4232 16.9595 56.0326 15.4983 55.0818C14.0372 54.1309 12.969 52.6839 12.4906 51.0075L8.30398 36.3515C6.79736 34.5723 5.81688 32.4081 5.47274 30.1022C5.12861 27.7963 5.43447 25.4401 6.35594 23.2985C7.27741 21.1569 8.77796 19.3148 10.6889 17.9792C12.5999 16.6436 14.8455 15.8675 17.1733 15.7381L25.2213 15.2901C29.159 15.071 32.9884 13.9204 36.3946 11.9328L42.6453 8.28481C46.2026 6.21281 50.6666 8.77548 50.6666 12.8928ZM15.024 40.4581L17.6186 49.5435C17.7435 49.9833 18.0233 50.363 18.4063 50.6126C18.7893 50.8622 19.2497 50.9648 19.7025 50.9014C20.1552 50.838 20.5697 50.6129 20.8695 50.2678C21.1692 49.9226 21.334 49.4806 21.3333 49.0235V40.9968L17.1733 40.7648C16.4494 40.7246 15.7303 40.622 15.024 40.4581ZM45.3333 12.8928L39.08 16.5435C35.281 18.758 31.0448 20.1176 26.6666 20.5275V36.0448C31.432 36.7008 35.968 38.5595 39.84 41.4608L45.3333 45.5835V12.8928ZM21.3333 20.8475L17.4666 21.0608C15.6678 21.1601 13.9716 21.9302 12.7128 23.219C11.454 24.5078 10.7241 26.2217 10.6672 28.0223C10.6103 29.823 11.2304 31.5796 12.4053 32.9453C13.5802 34.311 15.2244 35.1867 17.0133 35.3995L17.4666 35.4395L21.3333 35.6528V20.8475ZM50.6666 26.9168V32.2501C51.3463 32.2494 52.0001 31.9891 52.4943 31.5226C52.9885 31.056 53.2859 30.4183 53.3258 29.7398C53.3656 29.0612 53.1448 28.3931 52.7086 27.8719C52.2724 27.3507 51.6536 27.0158 50.9786 26.9355L50.6666 26.9168Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_75_2500">
          <rect width="64" height="64" fill="white" transform="translate(0 0.250122)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const BankingIcon = () => {
  return (
    <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M56.0003 55.9165H2.66699" stroke="white" strokeWidth="4" strokeLinecap="round" />
      <path
        d="M42.6672 55.9167V13.25C42.6672 8.22071 42.6672 5.70871 41.1045 4.14604C39.5418 2.58337 37.0298 2.58337 32.0005 2.58337H26.6672C21.6378 2.58337 19.1258 2.58337 17.5632 4.14604C16.0005 5.70871 16.0005 8.22071 16.0005 13.25V55.9167"
        stroke="white"
        strokeWidth="4"
      />
      <path
        d="M29.3338 55.9167V47.9167M24.0005 29.25H34.6672M12.0005 26.5834H16.0005M12.0005 34.5834H16.0005M42.6672 26.5834H46.6672M42.6672 34.5834H46.6672M12.0005 18.5834H16.0005M42.6672 18.5834H46.6672"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M29.3338 21.25V10.5834M34.6672 15.9167H24.0005"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M51.3335 19.9167C51.3335 20.4471 51.5442 20.9559 51.9193 21.3309C52.2944 21.706 52.8031 21.9167 53.3335 21.9167C53.8639 21.9167 54.3726 21.706 54.7477 21.3309C55.1228 20.9559 55.3335 20.4471 55.3335 19.9167H51.3335ZM55.3335 30.5834C55.3335 30.0529 55.1228 29.5442 54.7477 29.1692C54.3726 28.7941 53.8639 28.5834 53.3335 28.5834C52.8031 28.5834 52.2944 28.7941 51.9193 29.1692C51.5442 29.5442 51.3335 30.0529 51.3335 30.5834H55.3335ZM44.0002 12.5834C45.9148 12.5834 47.2002 12.5834 48.1788 12.6847C49.1255 12.7807 49.5628 12.9514 49.8535 13.146L52.0748 9.81804C51.0188 9.11404 49.8482 8.83405 48.5842 8.70605C47.3548 8.58071 45.8322 8.58338 44.0002 8.58338V12.5834ZM55.3335 19.9167C55.3335 18.0847 55.3335 16.562 55.2108 15.3327C55.0828 14.0714 54.8028 12.898 54.0962 11.842L50.7708 14.066C50.9655 14.354 51.1362 14.7914 51.2322 15.738C51.3308 16.7167 51.3335 18.0047 51.3335 19.9167H55.3335ZM49.8535 13.146C50.2162 13.3914 50.5282 13.7034 50.7708 14.066L54.0962 11.842C53.5628 11.042 52.8748 10.354 52.0748 9.81804L49.8535 13.146ZM51.3335 30.5834V55.9167H55.3335V30.5834H51.3335ZM7.3335 42.5834C7.3335 42.0529 7.12279 41.5442 6.74771 41.1692C6.37264 40.7941 5.86393 40.5834 5.3335 40.5834C4.80307 40.5834 4.29436 40.7941 3.91929 41.1692C3.54421 41.5442 3.3335 42.0529 3.3335 42.5834H7.3335ZM3.3335 31.9167C3.3335 32.4471 3.54421 32.9559 3.91929 33.3309C4.29436 33.706 4.80307 33.9167 5.3335 33.9167C5.86393 33.9167 6.37264 33.706 6.74771 33.3309C7.12279 32.9559 7.3335 32.4471 7.3335 31.9167H3.3335ZM14.6668 8.58338C12.8348 8.58338 11.3122 8.58338 10.0828 8.70605C8.8215 8.83405 7.64817 9.11404 6.59217 9.81804L8.81617 13.146C9.10417 12.9514 9.5415 12.7807 10.4882 12.6847C11.4668 12.586 12.7548 12.5834 14.6668 12.5834V8.58338ZM7.3335 19.9167C7.3335 18.002 7.3335 16.7167 7.43483 15.738C7.53083 14.7914 7.7015 14.354 7.89617 14.066L4.56817 11.842C3.86417 12.898 3.58417 14.0714 3.45617 15.3327C3.33083 16.562 3.3335 18.0847 3.3335 19.9167H7.3335ZM6.59217 9.81804C5.79129 10.3545 5.1036 11.0405 4.56817 11.842L7.89617 14.066C8.13943 13.7019 8.45205 13.3893 8.81617 13.146L6.59217 9.81804ZM3.3335 42.5834V55.9167H7.3335V42.5834H3.3335ZM3.3335 19.9167V31.9167H7.3335V19.9167H3.3335Z"
        fill="white"
      />
      <path
        d="M24.0005 37.2502H25.3338M34.6672 37.2502H30.6672"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
};

export const DegreeIcon = () => {
  return (
    <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M32.3333 56.2504L13.6667 46.117V30.117L3 24.2504L32.3333 8.25037L61.6667 24.2504V45.5837H56.3333V27.1837L51 30.117V46.117L32.3333 56.2504ZM32.3333 34.117L50.6 24.2504L32.3333 14.3837L14.0667 24.2504L32.3333 34.117ZM32.3333 50.1837L45.6667 42.9837V32.917L32.3333 40.2504L19 32.917V42.9837L32.3333 50.1837Z"
        fill="white"
      />
    </svg>
  );
};
