import Common_Hero, { CommonHeroProps } from '@repo/ui/components/common_hero';
import DiscoverFuture, { DiscoverFutureProps } from '@repo/ui/components/discover-future';
import HowProductsDifferent, {
  HowProductsDifferentProps,
} from '@repo/ui/components/how-products-different';
import SolutionsHero, { SolutionsHeroProps } from '@repo/ui/components/solutions-hero';
import React from 'react';
import pageBySlug from '../_lib/pageBySlug';
import { notFound } from 'next/navigation';
import getMedia from '../_lib/get-media';
import SecureProperties, { SecurePropertiesProps } from '@repo/ui/components/secure-properties';
import { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: { id: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // fetch data
  const pageData = await pageBySlug('/solutions');

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

export default async function Solutions() {
  const pageData = await pageBySlug('/solutions');

  if (!pageData || pageData?.length === 0) return notFound();

  const HeroData: CommonHeroProps = {
    style: 'style2',
    title: pageData[0]?.components[0].item.title,
    backgroundImage: {
      src: getMedia(pageData[0]?.components[0].item.bg_image.filename_disk),
      alt: pageData[0]?.components[0].item.bg_image.title,
    },
  };

  const Solutions_HeroData: SolutionsHeroProps = {
    // @ts-expect-error type not required
    items: pageData[0]?.components[1].item.items.map((item) => {
      return {
        title: item.card_id.title,
        subtitle: item.card_id.subtitle,
        description: item.card_id.description,

        image: {
          src: getMedia(item.card_id.image.filename_disk),
          alt: item.card_id.image.filename_disk,
          style: 'style1',
        },
        // content: [
        //   {
        //     title: 'Biometric Access Control Systems',
        //     subtitle:
        //       'Provide hospitals with advanced biometric access control systems, ensuring only authorized personnel can access sensitive areas such as operating rooms and medication storage facilities.',
        //   },
        //   {
        //     title: 'Biometric Access Control Systems',
        //     subtitle:
        //       'Provide hospitals with advanced biometric access control systems, ensuring only authorized personnel can access sensitive areas such as operating rooms and medication storage facilities.',
        //   },
        // ],
      };
    }),
  };

  const DiscoverFutureData: DiscoverFutureProps = {
    title: pageData[0]?.components[2].item.title,
    subtitle: pageData[0]?.components[2].item.subtitle,

    image: {
      src: getMedia(pageData[0]?.components[2].item.image.filename_disk),
      alt: pageData[0]?.components[2].item.image.title,
      style: 'style2',
    },
    // @ts-expect-error type not required
    content: pageData[0]?.components[2].item.lists.map((item) => {
      return {
        title: item.title,
      };
    }),
  };

  const DifferentProductsData: HowProductsDifferentProps = {
    title: pageData[0]?.components[3].item.title,

    subtitle: pageData[0]?.components[3].item.subtitle,
    link: {
      label: pageData[0]?.components[3].item.links[0].label,
      href: pageData[0]?.components[3].item.links[0].href,
    },

    // @ts-expect-error type not required
    items: pageData[0]?.components[3].item.items.map((item) => {
      return {
        title: item.card_id.title,
        subtitle: item.card_id.subtitle,
        positon: 'center',
        icon: {
          src: getMedia(item.card_id.image.filename_disk),
          alt: item.card_id.image.title,
        },
      };
    }),
  };

  const SecurePropertiesData: SecurePropertiesProps = {
    title: pageData[0]?.components[4].item.title,

    link: {
      label: pageData[0]?.components[4].item.links[0].label,

      href: pageData[0]?.components[4].item.links[0].href,
    },
  };

  return (
    <div>
      <Common_Hero {...HeroData} />

      <div className="py-12">
        <SolutionsHero {...Solutions_HeroData} />
      </div>

      <div className="py-12 bg-secondary-color">
        <DiscoverFuture {...DiscoverFutureData} />
      </div>

      <div className="py-12 ">
        <HowProductsDifferent {...DifferentProductsData} />
      </div>

      <div className="py-12 bg-primary-color">
        <SecureProperties {...SecurePropertiesData} />
      </div>
    </div>
  );
}
