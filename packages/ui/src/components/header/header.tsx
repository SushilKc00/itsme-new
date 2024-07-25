'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export interface HeaderProps {
  logo: {
    src: string;
    alt: string;
  };
  links: {
    label: string;
    href: string;
  }[];

  headerData: {
    contact?: {
      label: string;
      href: string;
    };
  };
}

export default function Header({ logo, links, headerData }: HeaderProps) {
  const pathName = usePathname();
  const [openMenu, setOpenMenu] = useState(false);
  const [color, setColor] = useState('white');
  const [isShadow, setIsShadow] = useState(false);
  const [navBg, setNavBg] = useState('');

  // check the scroll progress fuction
  const checkScrollProgress = () => {
    if (window.scrollY > 10) {
      setColor('black');
      setNavBg('white');
      setIsShadow(true);
    } else {
      setColor('white');
      setIsShadow(false);
      setNavBg('transparent');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollProgress);
    // cleanup function for listner
    return () => window.removeEventListener('scroll', checkScrollProgress);
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 ${isShadow && 'animate-nav-down'}`}
      style={{
        background: navBg ? navBg : 'transparent',
        boxShadow: isShadow ? '0 0 6px #858484' : 'none',
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between py-4">
        {/* left side logo and links  */}
        <div className="flex gap-4 items-center">
          <Link href={'/'} className="relative w-40 aspect-[3/1]">
            <Image src={logo.src} alt={logo.alt} fill className="object-contain" />
          </Link>

          <ul
            className="hidden lg:flex gap-8 text-white capitalize"
            style={{
              color: color,
            }}
          >
            {links.map((item, index) => (
              <li
                className={`font-medium hover:text-primary-color duration-200 ${pathName == item.href && 'text-primary-color'}`}
                key={index}
              >
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right side Contact details  */}
        <div
          className="hidden lg:flex items-center gap-6"
          style={{
            color: color,
          }}
        >
          {headerData.contact && (
            <Link
              href={`tel:${headerData.contact.href}`}
              className="flex items-center hover:text-primary-color duration-200"
            >
              <PhoneIcon />
              {headerData.contact.label}
            </Link>
          )}

          <Link
            href={`/contact-us`}
            className="flex items-center border border-primary-color capitalize bg-primary-color text-white font-semibold px-3 py-2 rounded-sm hover:bg-transparent hover:scale-95 duration-150 hover:text-primary-color"
          >
            get in touch
          </Link>
        </div>

        {/* HamMenu  */}
        <div
          className="lg:hidden z-[60]"
          onClick={() => {
            document.body.classList.toggle('overflow-hidden');
            setOpenMenu(!openMenu);
          }}
        >
          {openMenu ? (
            <div className="text-primary-color font-bold text-4xl transition-transform duration-200 rotate-180">
              x
            </div>
          ) : (
            <div className={`transition-transform duration-200  scale-125`}>
              <HamMenu />
            </div>
          )}
        </div>

        {/* Mobile View Navbar  */}
        <div
          className="fixed top-0 left-0 w-full h-screen z-50 bg-secondary-color duration-500 origin-left overflow-scroll-ns"
          style={{
            scale: openMenu ? 1 : 0,
          }}
        >
          <ul className="flex flex-col items-center mt-20  gap-8 text-white capitalize h-full">
            {links.map((item, index) => (
              <li
                className={`font-medium hover:text-primary-color duration-200 ${pathName == item.href && 'text-primary-color'}`}
                onClick={() => {
                  document.body.classList.remove('overflow-hidden');
                  setOpenMenu(false);
                }}
                key={index}
              >
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export const PhoneIcon = () => {
  return (
    <svg width="27" height="17" viewBox="0 0 27 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_75_2670)">
        <path
          d="M3.95679 0.121094C3.95679 0.121094 3.73283 0.121094 3.28491 0.121094C2.837 0.121094 2.57137 0.121094 2.48804 0.121094C2.45679 0.121094 2.33179 0.199219 2.11304 0.355469C1.89429 0.511719 1.65731 0.727864 1.4021 1.00391C1.14689 1.27995 0.920329 1.61068 0.722412 1.99609C0.514079 2.38151 0.409912 2.79297 0.409912 3.23047C0.409912 3.5638 0.409912 3.82943 0.409912 4.02734C0.409912 4.22526 0.409912 4.44401 0.409912 4.68359C0.409912 4.79818 0.503662 5.11589 0.691162 5.63672C0.878662 6.15755 1.16252 6.77995 1.54272 7.50391C1.92293 8.22786 2.39429 8.99609 2.95679 9.80859C3.51929 10.6211 4.17033 11.3815 4.90991 12.0898C5.65991 12.7982 6.38908 13.4023 7.09741 13.9023C7.80575 14.4023 8.49585 14.8138 9.16772 15.1367C9.8396 15.4596 10.4932 15.694 11.1287 15.8398C11.7641 15.9857 12.3891 16.0586 13.0037 16.0586C13.5557 16.0586 14.0453 15.9492 14.4724 15.7305C14.8995 15.5117 15.2563 15.2669 15.5427 14.9961C15.8292 14.7253 16.0453 14.4701 16.1912 14.2305C16.337 13.9909 16.4099 13.8451 16.4099 13.793C16.4099 13.6992 16.4099 13.4232 16.4099 12.9648C16.4099 12.5065 16.4099 12.2253 16.4099 12.1211C16.4099 12.0273 16.3735 11.9414 16.3005 11.8633C16.2276 11.7852 16.1287 11.6992 16.0037 11.6055C15.9516 11.5638 15.7693 11.4596 15.4568 11.293C15.1547 11.1159 14.8344 10.9336 14.4958 10.7461C14.1573 10.5586 13.8474 10.3867 13.5662 10.2305C13.2953 10.0846 13.1599 10.0117 13.1599 10.0117C13.1599 10.0117 13.0505 10.0091 12.8318 10.0039C12.613 9.9987 12.4255 10.0794 12.2693 10.2461C12.1547 10.4128 11.8604 10.7487 11.3865 11.2539C10.9125 11.7591 10.6755 12.0117 10.6755 12.0117C10.6755 12.0117 10.3917 12.0091 9.82397 12.0039C9.25627 11.9987 8.33179 11.3503 7.05054 10.0586C5.76929 8.76693 5.0245 7.83724 4.81616 7.26953C4.60783 6.70182 4.57137 6.35547 4.70679 6.23047C4.8422 6.09505 5.07658 5.85547 5.40991 5.51172C5.74325 5.16797 5.90991 4.89193 5.90991 4.68359C5.90991 4.46484 5.90991 4.34245 5.90991 4.31641C5.90991 4.29036 5.90991 4.22526 5.90991 4.12109C5.90991 4.06901 5.82658 3.85026 5.65991 3.46484C5.50366 3.06901 5.33179 2.64453 5.14429 2.19141C4.95679 1.73828 4.7797 1.32943 4.61304 0.964844C4.45679 0.589844 4.37866 0.402344 4.37866 0.402344C4.37866 0.402344 4.32137 0.355469 4.20679 0.261719C4.0922 0.167969 4.00887 0.121094 3.95679 0.121094Z"
          fill="red"
        />
      </g>
      <defs>
        <clipPath id="clip0_75_2670">
          <rect width="16" height="16" fill="white" transform="matrix(1 0 0 -1 0.409912 16.0898)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const HamMenu = () => {
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3 17H21M3 12H21M3 7H21"
        stroke="#E52938"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
