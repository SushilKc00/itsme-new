import ProductDetails, { ProductDetailsProps } from '@repo/ui/components/product-details';
import SuggestProductsHero, {
  SuggestProductsHeroProps,
} from '@repo/ui/components/suggest-products-hero';
import React from 'react';
import pageBySlug from '../../_lib/pageBySlug';
import { notFound } from 'next/navigation';
import getMedia from '../../_lib/get-media';
import SecureProperties, { SecurePropertiesProps } from '@repo/ui/components/secure-properties';
import { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: {
    'product-name': string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // fetch data
  const pageData = await pageBySlug(`/products/${params['product-name']}`);
  return {
    // @ts-expect-error type not required
    title: pageData[0]?.seo_detial?.meta_title,

    // @ts-expect-error type not required
    description: pageData[0]?.seo_detail?.meta_description,
  };
}

export default async function page({
  params,
}: {
  params: {
    'product-name': string;
  };
}) {
  const pageData = await pageBySlug(`/products/${params['product-name']}`);
  // console.log(pageData[0]);

  if (pageData?.length === 0) return notFound();

  const ProductDetailsData: ProductDetailsProps = {
    // @ts-expect-error type not required
    title: pageData[0]?.components[0].item.item.title,
    // @ts-expect-error type not required
    subtitle: pageData[0]?.components[0].item.item.subtitle,
    // @ts-expect-error type not required
    description: pageData[0]?.components[0].item.item.fulldescription,

    link: {
      // @ts-expect-error type not required
      label: pageData[0]?.components[0].item.item.links[0].label,

      // @ts-expect-error type not required
      href: pageData[0]?.components[0].item.item.links[0].href,
    },
    // @ts-expect-error type not required
    reviews: pageData[0]?.components[0].item.item.reviews,
    // @ts-expect-error type not required
    ratings: pageData[0]?.components[0].item.item.ratings,

    // @ts-expect-error type not required
    images: pageData[0]?.components[0].item.item.images.map((item) => {
      return {
        src: getMedia(item.directus_files_id.filename_disk),
        alt: item.directus_files_id.title,
      };
    }),
  };

  const BestSellerData: SuggestProductsHeroProps = {
    // @ts-expect-error type not required
    title: pageData[0]?.components[1].item.title,
    // @ts-expect-error type not required
    subtitle: pageData[0]?.components[1].item.subtitle,

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

  const RelatedProductData: SuggestProductsHeroProps = {
    // @ts-expect-error type not required
    title: pageData[0]?.components[2].item.title,
    // @ts-expect-error type not required
    subtitle: pageData[0]?.components[2].item.subtitle,

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
  };

  const SecurePropertiesData: SecurePropertiesProps = {
    // @ts-expect-error type not required
    title: pageData[0]?.components[3].item.title,

    link: {
      // @ts-expect-error type not required
      label: pageData[0]?.components[3].item.links[0].label,
      // @ts-expect-error type not required
      href: pageData[0]?.components[3].item.links[0].href,
    },
  };

  return (
    <div>
      <div className="py-12">
        <ProductDetails {...ProductDetailsData} />
      </div>

      <div className="py-12">
        <SuggestProductsHero {...BestSellerData} />
      </div>

      <div className="py-12">
        <SuggestProductsHero {...RelatedProductData} />
      </div>

      <div className="py-12 bg-primary-color">
        <SecureProperties {...SecurePropertiesData} />
      </div>
    </div>
  );
}
