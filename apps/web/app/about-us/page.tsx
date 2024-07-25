import ChooseUs from '@repo/ui/components/choose-us';
import Common_Hero, { CommonHeroProps } from '@repo/ui/components/common_hero';
import CustomerTestimonial, {
  CustomerTestimonialProps,
} from '@repo/ui/components/customer-testimonial';
import SecureProperties, { SecurePropertiesProps } from '@repo/ui/components/secure-properties';
import Stepper, { StepperProps } from '@repo/ui/components/stepper';
import TrustedByBrands, { TrustedByBrandsProps } from '@repo/ui/components/trusted-by-brands';
import { notFound } from 'next/navigation';

import React from 'react';
import pageBySlug from '../_lib/pageBySlug';
import getMedia from '../_lib/get-media';
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
  const pageData = await pageBySlug('/about-us');
  console.log(pageData);

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

async function page() {
  const pageData = await pageBySlug('/about-us');

  if (!pageData || pageData.length === 0) return notFound();

  const HeroData: CommonHeroProps = {
    style: 'style2',
    title: pageData[0]?.components[0]?.item?.title,
    // features: pageData[0]?.components[0].item.list.map((item) => {
    //   return {
    //     title: item.title,
    //   };
    // }),

    // links: [
    //   {
    //     // @ts-expect-error type not required
    //     // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
    //     label: pageData[0]?.components[0].item.links[0].label,
    //     // @ts-expect-error type not required
    //     // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
    //     href: pageData[0]?.components[0].item.links[0].href,
    //     style: 'button1',
    //   },
    //   {
    //     // @ts-expect-error type not required
    //     // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
    //     label: pageData[0]?.components[0].item.links[1].label,
    //     // @ts-expect-error type not required
    //     // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
    //     href: pageData[0]?.components[0].item.links[1].href,
    //     style: 'button2',
    //   },
    // ],
    // images: [
    //   {
    //     src: camera1,
    //     alt: 'Document1',
    //   },
    //   {
    //     src: camera1,
    //     alt: 'Document1',
    //   },
    //   {
    //     src: camera1,
    //     alt: 'Document1',
    //   },
    // ],

    backgroundImage: {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
      src: getMedia(pageData[0]?.components[0]?.item.bg_image?.filename_disk),

      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
      alt: pageData[0]?.components[0]?.item.bg_image?.title,
    },
  };

  const StepperData: StepperProps = {
    // @ts-expect-error type not required
    items: pageData[0]?.components[1]?.item?.items?.map((item) => {
      return {
        title: item.card_id.title,
        subtitle: item.card_id.subtitle,
        description: item.card_id.description,
      };
    }),
    // items: [
    //   {
    //     title: 'Established Parent Company',
    //     subtitle: '1997',
    //     description: 'We stablish our Parent company in Yr 1997 in the name of Acme Computers',
    //   },
    //   {
    //     title: 'Started ITSEM Infotech',
    //     subtitle: '2013',
    //     description: 'We started itsem infotech as sister concern.',
    //   },
    //   {
    //     title: 'CP Plus most consistent distributor’s Award',
    //     subtitle: '2018',
    //     description:
    //       'We got the award of most consistent distributor of cp plus in india in Yr 2018-19.',
    //   },
    //   {
    //     title: 'UNV’s sole distributor',
    //     subtitle: '2023',
    //     description: 'We are the sole distributor of The brand UNV in karnataka from FY 2023-24.',
    //   },
    // ],
  };

  const BrandData: TrustedByBrandsProps = {
    title: pageData[0]?.components[2]?.item?.title,
    description: pageData[0]?.components[2]?.item?.description,
    style: 'style2',

    // @ts-expect-error type not required
    items: pageData[0]?.components[2].item?.images?.map((item) => {
      return {
        src: getMedia(item.directus_files_id.filename_disk),
        alt: item.directus_files_id.title,
      };
    }),
  };

  const KnowMore_Data = {
    title: pageData[0]?.components[3]?.item?.title,
    subtitle: pageData[0]?.components[3]?.item?.subtitle,
    video: {
      src: 'https://www.youtube.com/embed/7RyX-4x7nnQ?si=gxYR6VH-yg1a5L1s&autoplay=1&loop=1&playlist=7RyX-4x7nnQ&showinfo=0&rel=0&mute=1',
    },
  };

  const TestimoinalCustomer_Data: CustomerTestimonialProps = {
    title: pageData[0]?.components[4]?.item?.title,

    subtitle: pageData[0]?.components[4]?.item?.subtitle,
    // @ts-expect-error type not required
    items: pageData[0]?.components[4]?.item?.items?.map((item) => {
      return {
        title: item.card_id.title,
        subtitle: item.card_id.subtitle,
        image: {
          src: getMedia(item.card_id.image.filename_disk),
          alt: item.card_id.image.title,
        },
      };
    }),
    // items: [
    //   {
    //     title: 'Janny Smith, CEO of XYZ Enterprises',
    //     subtitle:
    //       '“ITSEM Infotech truly understands our business needs and goes above and beyond to deliver tailored solutions that drive results. Their exceptional customer service and attention to detail have made them a trusted partner for our company. We highly recommend ITSEM Infotech to anyone seeking reliable and innovative technology solutions.”',
    //     // image: {
    //     //   src: customerimg,
    //     //   alt: 'Document1',
    //     // },
    //   },
    //   {
    //     title: 'Janny Smith, CEO of XYZ Enterprises',
    //     subtitle:
    //       '“ITSEM Infotech truly understands our business needs and goes above and beyond to deliver tailored solutions that drive results. Their exceptional customer service and attention to detail have made them a trusted partner for our company. We highly recommend ITSEM Infotech to anyone seeking reliable and innovative technology solutions.”',
    //     image: {
    //       src: customerimg,
    //       alt: 'Document1',
    //     },
    //   },
    //   {
    //     title: 'Janny Smith, CEO of XYZ Enterprises',
    //     subtitle:
    //       '“ITSEM Infotech truly understands our business needs and goes above and beyond to deliver tailored solutions that drive results. Their exceptional customer service and attention to detail have made them a trusted partner for our company. We highly recommend ITSEM Infotech to anyone seeking reliable and innovative technology solutions.”',
    //     image: {
    //       src: customerimg,
    //       alt: 'Document1',
    //     },
    //   },
    //   {
    //     title: 'Janny Smith, CEO of XYZ Enterprises',
    //     subtitle:
    //       '“ITSEM Infotech truly understands our business needs and goes above and beyond to deliver tailored solutions that drive results. Their exceptional customer service and attention to detail have made them a trusted partner for our company. We highly recommend ITSEM Infotech to anyone seeking reliable and innovative technology solutions.”',
    //     image: {
    //       src: customerimg,
    //       alt: 'Document1',
    //     },
    //   },
    // ],
  };

  const SecurePropertiesData: SecurePropertiesProps = {
    title: pageData[0]?.components[5]?.item?.title,

    link: {
      label: pageData[0]?.components[5]?.item?.links[0]?.label,

      href: pageData[0]?.components[5]?.item?.links[0]?.href,
    },
  };

  return (
    <div>
      <Common_Hero {...HeroData} />

      <div className="py-12">
        <Stepper {...StepperData} />
      </div>

      <div className="py-12">
        <TrustedByBrands {...BrandData} />
      </div>

      <div className="py-12 bg-secondary-color">
        <ChooseUs {...KnowMore_Data} />
      </div>

      <div className="py-12">
        <CustomerTestimonial {...TestimoinalCustomer_Data} />
      </div>

      <div className="py-12 bg-primary-color">
        <SecureProperties {...SecurePropertiesData} />
      </div>
    </div>
  );
}

export default page;
