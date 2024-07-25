import Common_Hero, { CommonHeroProps } from '@repo/ui/components/common_hero';
import ContactDetails, { ContactDetailsProps } from '@repo/ui/components/contact-details';
import GetInTouchForm from '@repo/ui/components/get-in-touch-form';
import React from 'react';
import getMedia from '../_lib/get-media';
import { notFound } from 'next/navigation';
import pageBySlug from '../_lib/pageBySlug';
import { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // fetch data
  const pageData = await pageBySlug('/contact-us');

  if (!pageData || pageData.length === 0) {
    return {
      title: 'Page not found',
      description: 'The page you are looking for does not exist.',
    };
  }

  return {
    title: pageData[0]?.seo_detail?.meta_title || 'Default Title',
    description: pageData[0]?.seo_detail?.meta_description || 'Default Description',
  };
}

export default async function page() {
  const pageData = await pageBySlug('/contact-us');
  // console.log(pageData);

  if (!pageData || pageData?.length === 0) return notFound();

  const HeroData: CommonHeroProps = {
    style: 'style2',

    title: pageData[0]?.components[0].item.title,
    backgroundImage: {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
      src: getMedia(pageData[0]?.components[0].item.bg_image.filename_disk),

      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
      alt: pageData[0]?.components[0].item.bg_image.title,
    },
  };

  const ContactDetailsData: ContactDetailsProps = {
    title: pageData[0]?.components[1].item.title,

    // @ts-expect-error type not required
    items: pageData[0]?.components[1].item.items.map((item, index) => {
      return {
        title: item.contact_card_id.title,
        link: {
          label: item.contact_card_id.link.label,
          href: item.contact_card_id.link.href,
        },
        type: item.contact_card_id.link.type,
      };
    }),
    // items: [
    //   {
    //     title: 'E-mail Address',
    //     link: {
    //       label: 'accounts@itseminfotech.com',
    //       href: 'accounts@itseminfotech.com',
    //     },
    //     type: 'email',
    //   },
    //   {
    //     title: 'Contact Number',
    //     link: {
    //       label: '+91 XXXXX XXXXX',
    //       href: '+91 XXXXX XXXXX',
    //     },
    //     type: 'contact',
    //   },
    //   {
    //     title: 'Office Address',
    //     link: {
    //       label: '123 Main Street, Belandur, Bengaluru, 12345',
    //       href: '',
    //     },
    //     type: 'address',
    //   },
    // ],
  };

  return (
    <div>
      <Common_Hero {...HeroData} />

      <div>
        <GetInTouchForm />
      </div>

      <div className="py-12 bg-primary-color">
        <ContactDetails {...ContactDetailsData} />
      </div>
    </div>
  );
}
