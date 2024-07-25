import Footer, {
  FaceBook,
  FooterProps,
  Instagram,
  LinkedIn,
} from '@repo/ui/components/footer/footer';
import Header, { HeaderProps } from '@repo/ui/components/header/header';
import '@repo/ui/global.css';
import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';

const Logo = '/images/logo.svg';
const FooterLogo = '/images/footerbrandlogo.png';

const manrope = Manrope({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

const Header_Data: HeaderProps = {
  logo: {
    src: Logo,
    alt: 'itsem-infotech-logo',
  },
  links: [
    {
      label: 'home',
      href: '/',
    },
    {
      label: 'about us',
      href: '/about-us',
    },
    {
      label: 'products',
      href: '/products',
    },
    {
      label: 'solutions',
      href: '/solutions',
    },
  ],
  headerData: {
    contact: {
      label: '+91 7022271217',
      href: '+917022271217',
    },
  },
};

const Footer_Data: FooterProps = {
  links: [
    {
      label: 'home',
      href: '/',
    },
    {
      label: 'about us',
      href: '/about-us',
    },
    {
      label: 'products',
      href: '/products',
    },
    {
      label: 'solutions',
      href: '/solutions',
    },
    {
      label: 'blogs',
      href: '/blogs',
    },
    {
      label: 'get in touch',
      href: '/contact-us',
    },
  ],
  footerData: {
    // subtitle:
    //   'Welcome to our cutting-edge digital agency, where innovation meets expertise to transform your digital presence. At Webhood, we pride ourselves on being a dynamic force in the ever-evolving landscape of technology and online marketing. With a passion for creating impactful digital experiences, we offer a comprehensive suite of services that encompass web development, application development, and digital marketing.',
    logo: {
      src: FooterLogo,
      alt: 'brand-logo',
    },
    socailMedia: [
      {
        label: 'instagram',
        href: 'https://www.instagram.com/itseminfotech/',
        icon: <Instagram />,
      },
      {
        label: 'facebook',
        href: 'https://www.facebook.com/people/ITSEM-Infotech/100063718188684/?mibextid=LQQJ4d',
        icon: <FaceBook />,
      },
      {
        label: 'linkedin',
        href: 'https://www.linkedin.com/company/itsem-infotech/',
        icon: <LinkedIn />,
      },
    ],
    map: {
      src: '',
    },
    companyDetails: {
      address: {
        label: 'Bengaluru, Karnatka',
      },
      email: {
        label: 'accounts@itseminfotech.com',
        href: 'accounts@itseminfotech.com',
      },
      contact: {
        label: '+91 7022271217',
        href: '+917022271217',
      },
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <Header {...Header_Data} />
        {children}
        <Footer {...Footer_Data} />
      </body>
    </html>
  );
}
