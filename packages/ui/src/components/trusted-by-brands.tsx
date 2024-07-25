import React from 'react';
import FormattedText from './formattedText';
import Image from 'next/image';

export interface TrustedByBrandsProps {
  title?: string;
  subtitle?: string;
  description?: string;

  style: 'style1' | 'style2';

  items: {
    src: string;
    alt: string;
  }[];
}

export default function TrustedByBrands({
  title,
  subtitle,
  description,
  items,
  style,
}: TrustedByBrandsProps) {
  return (
    <section>
      <div className="max-w-7xl px-6 mx-auto">
        {title && (
          <FormattedText className="md:text-4xl text-3xl font-medium text-center text-secondary-color">
            {title}
          </FormattedText>
        )}

        {style == 'style1' && (
          <div className="grid lg:grid-cols-10 gap-6">
            <div className="lg:col-span-2">
              <div className="lg:w-fit w-full flex flex-col items-center justify-center bg-gray-100 px-6 rounded-sm py-2">
                {subtitle && (
                  <FormattedText className="capitalize text-gray-400">{subtitle}</FormattedText>
                )}
                {description && <FormattedText className="font-bold">{description}</FormattedText>}
              </div>
            </div>

            <div className="lg:col-span-8 flex justify-center items-center gap-10 flex-wrap">
              {items.map((item) => (
                <div className="relative max-w-40 w-full aspect-[3/1]">
                  <Image alt={item.alt} src={item.src} fill className="object-contain" />
                </div>
              ))}
            </div>
          </div>
        )}

        {style == 'style2' && (
          <div className="lg:col-span-8 flex justify-center items-center gap-10 flex-wrap mt-16">
            {items.map((item) => (
              <div className="relative max-w-40 w-full aspect-[3/1]">
                <Image alt={item.alt} src={item.src} fill className="object-contain" />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
