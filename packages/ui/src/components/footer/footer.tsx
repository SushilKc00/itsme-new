'use client';
import Image from 'next/image';
import FormattedText from '../formattedText';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export interface FooterProps {
  links: {
    label: string;
    href: string;
  }[];

  footerData: {
    title?: string;
    subtitle?: string;
    logo?: {
      src: string;
      alt: string;
    };
    map?: {
      src: string;
    };
    socailMedia: {
      label: string;
      href: string;
      icon: React.ReactNode;
    }[];
    companyDetails: {
      address: {
        label: string;
      };
      email: {
        label: string;
        href: string;
      };
      contact: {
        label: string;
        href: string;
      };
    };
  };
}

export default function Footer({ links, footerData }: FooterProps) {
  const pathName = usePathname();
  return (
    <footer>
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-6 gap-6 py-12">
        {/* left side logo and company details  */}
        <div className="lg:col-span-3 max-w-xl space-y-3">
          {/* brand logo  */}
          {footerData.logo && (
            <div className="relative max-w-36 aspect-[4/2]">
              <Image
                src={footerData.logo?.src}
                alt={footerData.logo?.alt}
                fill
                className="object-contain"
              />
            </div>
          )}

          {footerData.map && (
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15554.21680724988!2d77.580593!3d12.936349!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15a35d4c0021%3A0x953774d4fe1bfcd4!2sITSEM%20INFOTECH!5e0!3m2!1sen!2sus!4v1719567458186!5m2!1sen!2sus"
                width="320  "
                height="200"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          )}

          {/* subtitle  */}
          <div>
            {footerData.subtitle && (
              <FormattedText className="text-black">{footerData.subtitle}</FormattedText>
            )}
          </div>

          {/* company address and contacts  */}
          <div className="flex flex-col gap-2">
            {footerData.companyDetails.address && (
              <div className="flex items-center gap-2 duration-300 hover:text-primary-color">
                <LocationIcon /> {footerData.companyDetails.address.label}
              </div>
            )}

            {footerData.companyDetails.email && (
              <div className="flex items-center gap-2 duration-300 hover:text-primary-color">
                <MailIcon />
                <Link href={`mailto:${footerData.companyDetails.email.href}`}>
                  {footerData.companyDetails.email.label}
                </Link>
              </div>
            )}

            {footerData.companyDetails.contact && (
              <div className="flex items-center gap-2 duration-300 hover:text-primary-color">
                <PhoneIcon />
                <Link href={`tel:${footerData.companyDetails.contact.href}`}>
                  {footerData.companyDetails.contact.label}
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* right side links  */}
        <div className="lg:col-span-3 flex lg:flex-row flex-col gap-4 justify-around">
          {/* pages links  */}
          <div className="flex flex-col gap-4">
            <FormattedText className="md:text-3xl text-2xl font-bold capitalize">
              Pages
            </FormattedText>
            <ul className="flex flex-col gap-3">
              {links.map((item, index) => (
                <li
                  className={`capitalize font-semibold duration-300 hover:text-primary-color  ${pathName == item.href && 'text-primary-color'}`}
                  key={index}
                >
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* quick links  */}
          <div className="flex flex-col gap-4">
            <FormattedText className="md:text-3xl text-2xl font-bold capitalize ">
              Quick Links
            </FormattedText>
            <ul className="flex flex-col gap-6">
              {footerData.socailMedia.map((item, index) => (
                <li
                  className={`capitalize font-semibold duration-300 hover:text-primary-color ${pathName == item.href && 'text-primary-color'}`}
                  key={index}
                >
                  <Link href={item.href} className="flex items-center gap-2" target="_blank">
                    {item.icon} {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* copyright and developed by softexedge  */}
      <div className="bg-secondary-color flex justify-center">
        <div className="text-white py-3">
          © Developed with ❤️ by{' '}
          <Link href={'https://softexedge.in'} target="_blank">
            SoftEXedge
          </Link>{' '}
          2024
        </div>
      </div>
    </footer>
  );
}

export const LocationIcon = () => {
  return (
    <svg width="24" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_75_2592)">
        <path
          d="M26 13.74C26 22.74 16 29.74 16 29.74C16 29.74 6 22.74 6 13.74C6 11.0878 7.05357 8.54429 8.92893 6.66892C10.8043 4.79356 13.3478 3.73999 16 3.73999C18.6522 3.73999 21.1957 4.79356 23.0711 6.66892C24.9464 8.54429 26 11.0878 26 13.74Z"
          stroke="#171717"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 17.74C18.2091 17.74 20 15.9491 20 13.74C20 11.5309 18.2091 9.73999 16 9.73999C13.7909 9.73999 12 11.5309 12 13.74C12 15.9491 13.7909 17.74 16 17.74Z"
          stroke="#171717"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_75_2592">
          <rect width="32" height="32" fill="white" transform="translate(0 0.73999)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const MailIcon = () => {
  return (
    <svg width="24" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_75_2598)">
        <path
          d="M27.9621 6.0122C28.0103 5.84115 28.0121 5.66033 27.9672 5.48837C27.9223 5.31642 27.8324 5.15953 27.7067 5.03386C27.5811 4.90819 27.4242 4.81829 27.2522 4.77339C27.0803 4.7285 26.8994 4.73025 26.7284 4.77845L2.72839 12.056C2.53245 12.1113 2.35805 12.225 2.22852 12.3821C2.09898 12.5392 2.02047 12.732 2.00349 12.9349C1.9865 13.1378 2.03185 13.341 2.13346 13.5175C2.23508 13.6939 2.38812 13.8351 2.57214 13.9222L13.2746 18.9897C13.483 19.0885 13.6508 19.2563 13.7496 19.4647L18.8184 30.166C18.9055 30.35 19.0467 30.503 19.2231 30.6046C19.3995 30.7062 19.6028 30.7516 19.8057 30.7346C20.0085 30.7176 20.2014 30.6391 20.3585 30.5096C20.5155 30.38 20.6293 30.2056 20.6846 30.0097L27.9621 6.0122Z"
          stroke="#171717"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.5522 19.1877L19.9997 12.7402"
          stroke="#171717"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_75_2598">
          <rect width="32" height="32" fill="white" transform="translate(0 0.73999)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const PhoneIcon = () => {
  return (
    <svg width="24" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_75_2604)">
        <path
          d="M20.5488 18.9079C20.6872 18.8158 20.8465 18.7596 21.0122 18.7446C21.1779 18.7295 21.3447 18.756 21.4975 18.8217L27.3925 21.4629C27.5912 21.5479 27.757 21.6948 27.8651 21.8819C27.9733 22.0689 28.018 22.2859 27.9925 22.5004C27.7983 23.9518 27.0836 25.2831 25.9813 26.247C24.8791 27.2109 23.4642 27.7416 22 27.7404C17.4913 27.7404 13.1673 25.9494 9.97919 22.7613C6.79107 19.5731 5 15.2491 5 10.7405C4.99888 9.27621 5.5296 7.86139 6.49345 6.75912C7.45731 5.65685 8.78869 4.94215 10.24 4.74795C10.4545 4.72246 10.6716 4.76714 10.8586 4.8753C11.0456 4.98346 11.1926 5.14929 11.2775 5.34795L13.9188 11.2479C13.9836 11.3995 14.0101 11.5647 13.9957 11.7289C13.9813 11.8932 13.9265 12.0513 13.8363 12.1892L11.165 15.3655C11.0702 15.5084 11.0142 15.6735 11.0024 15.8447C10.9906 16.0158 11.0233 16.187 11.0975 16.3417C12.1313 18.4579 14.3188 20.6192 16.4413 21.6429C16.5967 21.7168 16.7688 21.7488 16.9404 21.7359C17.112 21.723 17.2773 21.6655 17.42 21.5692L20.5488 18.9079Z"
          stroke="#171717"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 7.73999V12.74H25"
          stroke="#171717"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 12.74L26 6.73999"
          stroke="#171717"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_75_2604">
          <rect width="32" height="32" fill="white" transform="translate(0 0.73999)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const Instagram = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
    </svg>
  );
};

export const FaceBook = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z"></path>
    </svg>
  );
};

export const LinkedIn = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
    </svg>
  );
};
