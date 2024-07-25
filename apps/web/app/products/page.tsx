// 'use client';
import React from 'react';
import ChooseUs from '@repo/ui/components/choose-us';
import Common_Hero, { CommonHeroProps } from '@repo/ui/components/common_hero';
import CustomerTestimonial, {
  CustomerTestimonialProps,
} from '@repo/ui/components/customer-testimonial';
import SecureProperties, { SecurePropertiesProps } from '@repo/ui/components/secure-properties';
import Stepper, { StepperProps } from '@repo/ui/components/stepper';
import TrustedByBrands, { TrustedByBrandsProps } from '@repo/ui/components/trusted-by-brands';
import HeroProducts, { HeroProductsProps } from '@repo/ui/components/hero_products';
import { notFound } from 'next/navigation';
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
  const pageData = await pageBySlug('/products');

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

async function Products() {
  const pageData = await pageBySlug('/products');
  // console.log(pageData[0].components[2]);

  if (!pageData || pageData?.length === 0) return notFound();

  const HeroData: CommonHeroProps = {
    style: 'style2',
    title: pageData[0]?.components[0].item.title,

    backgroundImage: {
      src: getMedia(pageData[0]?.components[0].item.bg_image.filename_disk),
      alt: pageData[0]?.components[0].item.bg_image.title,
    },
  };

  const Product_Data: HeroProductsProps = {
    title: pageData[0]?.components[1].item.title,

    link: {
      label: pageData[0]?.components[1].item.links[0].label,

      href: pageData[0]?.components[1].item.links[0].href,
      position: 'top',
    },
    // @ts-expect-error type not required
    items: pageData[0]?.components[1].item.items.map((item) => {
      return {
        title: item.product_card_id.title,
        subtitle: item.product_card_id.subtitle,
        link: {
          label: item.product_card_id.links[0].label,
          href: item.product_card_id.links[0].href,
        },
        reviews: item.product_card_id.reviews,
        ratings: item.product_card_id.ratings,

        // @ts-expect-error type not required
        images: item.product_card_id.images.map((item) => {
          return {
            src: getMedia(item.directus_files_id.filename_disk),
            alt: item.directus_files_id.title,
          };
        }),
      };
    }),
  };

  const OurProduct_Data: HeroProductsProps = {
    title: pageData[0]?.components[2].item.title,

    link: {
      label: pageData[0]?.components[2].item.links[0].label,

      href: pageData[0]?.components[2].item.links[0].href,
      position: 'top',
    },
    // @ts-expect-error type not required
    items: pageData[0]?.components[2].item.items.map((item) => {
      return {
        title: item.product_card_id.title,
        subtitle: item.product_card_id.subtitle,
        link: {
          label: item.product_card_id.links[0].label,
          href: item.product_card_id.links[0].href,
        },
        reviews: item.product_card_id.reviews,
        ratings: item.product_card_id.ratings,
        // @ts-expect-error type not required
        images: item.product_card_id.images.map((item) => {
          return {
            src: getMedia(item.directus_files_id.filename_disk),
            alt: item.directus_files_id.title,
          };
        }),
      };
    }),
    // items: [
    //   {
    //     title: 'HD & IP Solutions',
    //     subtitle: 'This is going to be the small product description of the product',
    //     link: {
    //       label: 'Get Quotes',
    //       href: '/',
    //     },
    //     reviews: '546 ',
    //     ratings: '4.6',
    //     images: [
    //       {
    //         src: camera2,
    //         alt: 'Document1',
    //       },
    //       {
    //         src: camera2,
    //         alt: 'Document1',
    //       },
    //     ],
    //   },
    //   {
    //     title: 'HD & IP Solutions',
    //     subtitle: 'This is going to be the small product description of the product',
    //     link: {
    //       label: 'Get Quotes',
    //       href: '/',
    //     },
    //     reviews: '546 ',
    //     ratings: '4.6',
    //     images: [
    //       {
    //         src: camera3,
    //         alt: 'Document1',
    //       },
    //       {
    //         src: camera3,
    //         alt: 'Document1',
    //       },
    //     ],
    //   },
    //   {
    //     title: 'HD & IP Solutions',
    //     subtitle: 'This is going to be the small product description of the product',
    //     link: {
    //       label: 'Get Quotes',
    //       href: '/',
    //     },
    //     reviews: '546 ',
    //     ratings: '4.6',
    //     images: [
    //       {
    //         src: camera2,
    //         alt: 'Document1',
    //       },
    //       {
    //         src: camera2,
    //         alt: 'Document1',
    //       },
    //     ],
    //   },
    //   {
    //     title: 'HD & IP Solutions',
    //     subtitle: 'This is going to be the small product description of the product',
    //     link: {
    //       label: 'Get Quotes',
    //       href: '/',
    //     },
    //     reviews: '546 ',
    //     ratings: '4.6',
    //     images: [
    //       {
    //         src: camera3,
    //         alt: 'Document1',
    //       },
    //       {
    //         src: camera3,
    //         alt: 'Document1',
    //       },
    //     ],
    //   },
    //   {
    //     title: 'HD & IP Solutions',
    //     subtitle: 'This is going to be the small product description of the product',
    //     link: {
    //       label: 'Get Quotes',
    //       href: '/',
    //     },
    //     reviews: '546 ',
    //     ratings: '4.6',
    //     images: [
    //       {
    //         src: camera2,
    //         alt: 'Document1',
    //       },
    //       {
    //         src: camera2,
    //         alt: 'Document1',
    //       },
    //     ],
    //   },
    //   {
    //     title: 'HD & IP Solutions',
    //     subtitle: 'This is going to be the small product description of the product',
    //     link: {
    //       label: 'Get Quotes',
    //       href: '/',
    //     },
    //     reviews: '546 ',
    //     ratings: '4.6',
    //     images: [
    //       {
    //         src: camera3,
    //         alt: 'Document1',
    //       },
    //       {
    //         src: camera3,
    //         alt: 'Document1',
    //       },
    //     ],
    //   },
    // ],
  };

  const SecurePropertiesData: SecurePropertiesProps = {
    title: pageData[0]?.components[3].item.title,
    link: {
      label: pageData[0]?.components[3].item.links[0].label,
      href: pageData[0]?.components[3].item.links[0].href,
    },
  };
  return (
    <div>
      <Common_Hero {...HeroData} />

      <div className="py-12">
        <HeroProducts {...Product_Data} />
      </div>

      <div className="py-12">
        <HeroProducts {...OurProduct_Data} />
      </div>

      <div className="py-12 bg-primary-color">
        <SecureProperties {...SecurePropertiesData} />
      </div>
    </div>
  );
}

export default Products;
