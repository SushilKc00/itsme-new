import React from 'react';
import FormattedText from './formattedText';
import Link from 'next/link';

export interface ContactDetailsProps {
  title?: string;
  items: {
    title: string;
    link: {
      label: string;
      href: string;
    };
    type: 'email' | 'contact' | 'address';
  }[];
}

export default function ContactDetails({ title, items }: ContactDetailsProps) {
  return (
    <div className="max-w-7xl mx-auto px-6">
      {title && (
        <FormattedText className="text-center text-white md:text-4xl text-3xl">
          {title}
        </FormattedText>
      )}

      <div className="grid md:grid-cols-3 gap-3 mt-6">
        {items.map((item, index) => (
          <div className="bg-penta-color p-5 border border-white/60 flex flex-col gap-4">
            <div>{icons[index]}</div>
            <div>
              <FormattedText className="text-white/50">{item.title}</FormattedText>
              {item.type == 'email' && (
                <Link href={`mailto:${item.link.href}`} className="text-white">
                  {item.link.label}
                </Link>
              )}

              {item.type == 'contact' && (
                <Link href={`tel:${item.link.href}`} className="text-white">
                  {item.link.label}
                </Link>
              )}

              {item.type == 'address' && (
                <div className="text-white max-w-56 inline-block">{item.link.label}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export const MailIcon = () => {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8 40C6.9 40 5.95867 39.6087 5.176 38.826C4.39333 38.0433 4.00133 37.1013 4 36V12C4 10.9 4.392 9.95867 5.176 9.176C5.96 8.39333 6.90133 8.00133 8 8H40C41.1 8 42.042 8.392 42.826 9.176C43.61 9.96 44.0013 10.9013 44 12V36C44 37.1 43.6087 38.042 42.826 38.826C42.0433 39.61 41.1013 40.0013 40 40H8ZM24 26L40 16V12L24 22L8 12V16L24 26Z"
        fill="white"
      />
    </svg>
  );
};

export const PhoneIcon = () => {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M39.9 42C35.7333 42 31.6167 41.092 27.55 39.276C23.4833 37.46 19.7833 34.8847 16.45 31.55C13.1167 28.2167 10.542 24.5167 8.726 20.45C6.91 16.3833 6.00133 12.2667 6 8.1C6 7.5 6.2 7 6.6 6.6C7 6.2 7.5 6 8.1 6H16.2C16.6667 6 17.0833 6.15867 17.45 6.476C17.8167 6.79333 18.0333 7.168 18.1 7.6L19.4 14.6C19.4667 15.1333 19.45 15.5833 19.35 15.95C19.25 16.3167 19.0667 16.6333 18.8 16.9L13.95 21.8C14.6167 23.0333 15.408 24.2247 16.324 25.374C17.24 26.5233 18.2487 27.632 19.35 28.7C20.3833 29.7333 21.4667 30.692 22.6 31.576C23.7333 32.46 24.9333 33.268 26.2 34L30.9 29.3C31.2 29 31.592 28.7753 32.076 28.626C32.56 28.4767 33.0347 28.4347 33.5 28.5L40.4 29.9C40.8667 30.0333 41.25 30.2753 41.55 30.626C41.85 30.9767 42 31.368 42 31.8V39.9C42 40.5 41.8 41 41.4 41.4C41 41.8 40.5 42 39.9 42Z"
        fill="white"
      />
    </svg>
  );
};

export const AddressIcon = () => {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M24 23C22.6739 23 21.4021 22.4732 20.4645 21.5355C19.5268 20.5979 19 19.3261 19 18C19 16.6739 19.5268 15.4021 20.4645 14.4645C21.4021 13.5268 22.6739 13 24 13C25.3261 13 26.5979 13.5268 27.5355 14.4645C28.4732 15.4021 29 16.6739 29 18C29 18.6566 28.8707 19.3068 28.6194 19.9134C28.3681 20.52 27.9998 21.0712 27.5355 21.5355C27.0712 21.9998 26.52 22.3681 25.9134 22.6194C25.3068 22.8707 24.6566 23 24 23ZM24 4C20.287 4 16.726 5.475 14.1005 8.1005C11.475 10.726 10 14.287 10 18C10 28.5 24 44 24 44C24 44 38 28.5 38 18C38 14.287 36.525 10.726 33.8995 8.1005C31.274 5.475 27.713 4 24 4Z"
        fill="white"
      />
    </svg>
  );
};

const icons = [<MailIcon />, <PhoneIcon />, <AddressIcon />];
