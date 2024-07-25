import ChooseUs from '@repo/ui/components/choose-us';
import AboutItsem, { AboutItsemProps } from '@repo/ui/components/about-itsem';
import Common_Hero, { CommonHeroProps } from '@repo/ui/components/common_hero';
import TrustedByBrands, { TrustedByBrandsProps } from '@repo/ui/components/trusted-by-brands';
import HeroProducts, { HeroProductsProps } from '@repo/ui/components/hero_products';
import OurBlogs, { OurBlogsProps } from '@repo/ui/components/our-blogs';
import SolutionSecurity, { SolutionSecurityProps } from '@repo/ui/components/solution-security';
import SecureProperties, { SecurePropertiesProps } from '@repo/ui/components/secure-properties';
import React from 'react';
import pageBySlug from './_lib/pageBySlug';
import { notFound } from 'next/navigation';
import getMedia from './_lib/get-media';
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
  const pageData = await pageBySlug('/');
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

const HomePage = async () => {
  // console.log(title);
  const pageData = await pageBySlug('/');
  if (!pageData || pageData?.length === 0) return notFound();

  const HeroData: CommonHeroProps = {
    style: 'style1',
    title: pageData[0]?.components[0]?.item.title,

    // @ts-expect-error type not required
    features: pageData[0]?.components[0]?.item.list.map((item) => {
      return {
        title: item.title,
      };
    }),

    links: [
      {
        label: pageData[0]?.components[0]?.item?.links[0].label,
        href: pageData[0]?.components[0]?.item?.links[0].href,
        style: 'button1',
      },
      {
        label: pageData[0]?.components[0].item?.links[1].label,
        href: pageData[0]?.components[0].item?.links[1].href,
        style: 'button2',
      },
    ],

    // @ts-expect-error type not required
    images: pageData[0]?.components[0].item.images.map((item) => {
      return {
        src: getMedia(item.directus_files_id.filename_disk),
        alt: item.directus_files_id.title,
      };
    }),

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
      src: getMedia(pageData[0]?.components[0].item.bg_image.filename_disk),
      alt: pageData[0]?.components[0].item.bg_image.title,
    },
  };

  const BrandData: TrustedByBrandsProps = {
    subtitle: pageData[0]?.components[1].item.subtitle,
    description: pageData[0]?.components[1].item.description,
    style: 'style1',

    // @ts-expect-error type not required
    items: pageData[0]?.components[1].item.images.map((item) => {
      return {
        src: getMedia(item.directus_files_id.filename_disk),
        alt: item.directus_files_id.title,
      };
    }),
  };

  const Product_Data: HeroProductsProps = {
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
    // ],
  };

  const OurProduct_Data: HeroProductsProps = {
    title: pageData[0]?.components[3].item.title,

    link: {
      label: pageData[0]?.components[3].item.links[0].label,

      href: pageData[0]?.components[3].item.links[0].href,
      position: 'top',
    },
    // @ts-expect-error type not required
    items: pageData[0]?.components[3].item.items.map((item) => {
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

  const ChooseUs_Data = {
    title: pageData[0]?.components[4].item.title,

    subtitle: pageData[0]?.components[4]?.item.subtitle,

    video: {
      src: 'https://www.youtube.com/embed/hYh2ZOF5sTo?si=wk2IlcnE8lxMn0b5&autoplay=1&loop=1&playlist=hYh2ZOF5sTo&showinfo=0&rel=0&mute=1',
    },

    // @ts-expect-error type not required
    items: pageData[0]?.components[4].item.items.map((item) => {
      return {
        title: item.card_id.title,
        subtitle: item.card_id.subtitle,
      };
    }),
  };

  const AboutItsemData: AboutItsemProps = {
    title: pageData[0]?.components[5]?.item.title,

    subtitle: pageData[0]?.components[5]?.item.subtitle,

    image: {
      src: getMedia(pageData[0]?.components[5].item.image.filename_disk),

      alt: pageData[0]?.components[5].item.image.title,
    },

    // @ts-expect-error type not required
    items: pageData[0]?.components[5].item.items.map((item) => {
      return {
        title: item.card_id.title,
        subtitle: item.card_id.subtitle,
      };
    }),
  };

  const SolutionSecurityData: SolutionSecurityProps = {
    title: pageData[0]?.components[6]?.item.title,

    subtitle: pageData[0]?.components[6]?.item.subtitle,
    // @ts-expect-error type not required
    items: pageData[0]?.components[6]?.item.items.map((item) => {
      return {
        title: item.card_id.title,
        subtitle: item.card_id.subtitle,
        positon: 'start',
        icon: {
          src: getMedia(item.card_id.image.filename_disk),
          alt: item.card_id.image.title,
        },
      };
    }),
  };

  const Blogs_Data: OurBlogsProps = {
    title: pageData[0]?.components[7].item.title,
    subtitle: pageData[0]?.components[7].item.subtitle,

    // @ts-expect-error type not required
    items: pageData[0]?.components[7].item.items.map((item) => {
      return {
        title: item.product_card_id.title,
        subtitle: item.product_card_id.subtitle,
        link: {
          label: item.product_card_id.links[0].label,
          href: item.product_card_id.links[0].href,
        },
        // @ts-expect-error type not required
        images: item.product_card_id.images.map((item) => {
          return {
            src: getMedia(item.directus_files_id.filename_disk),
            alt: 'Document1',
          };
        }),
      };
    }),

    // items: [
    //   {
    //     title: 'Blog Title',
    //     subtitle: 'This is going to be the small description for the blogs',
    //     link: {
    //       label: 'Read Now',
    //       href: '/',
    //     },
    //     images: [
    //       {
    //         src: blogImg1,
    //         alt: 'Document1',
    //       },
    //       {
    //         src: blogImg1,
    //         alt: 'Document1',
    //       },
    //     ],
    //   },
    //   {
    //     title: 'Blog Title',
    //     subtitle: 'This is going to be the small description for the blogs',
    //     link: {
    //       label: 'Read Now',
    //       href: '/',
    //     },
    //     images: [
    //       {
    //         src: blogImg1,
    //         alt: 'Document1',
    //       },
    //       {
    //         src: blogImg1,
    //         alt: 'Document1',
    //       },
    //     ],
    //   },
    //   {
    //     title: 'Blog Title',
    //     subtitle: 'This is going to be the small description for the blogs',
    //     link: {
    //       label: 'Read Now',
    //       href: '/',
    //     },
    //     images: [
    //       {
    //         src: blogImg1,
    //         alt: 'Document1',
    //       },
    //       {
    //         src: blogImg1,
    //         alt: 'Document1',
    //       },
    //     ],
    //   },
    //   {
    //     title: 'Blog Title',
    //     subtitle: 'This is going to be the small description for the blogs',
    //     link: {
    //       label: 'Read Now',
    //       href: '/',
    //     },
    //     images: [
    //       {
    //         src: blogImg1,
    //         alt: 'Document1',
    //       },
    //       {
    //         src: blogImg1,
    //         alt: 'Document1',
    //       },
    //     ],
    //   },
    // ],
  };

  const SecurePropertiesData: SecurePropertiesProps = {
    title: pageData[0]?.components[8].item.title,

    link: {
      label: pageData[0]?.components[8].item.links[0].label,
      href: pageData[0]?.components[8].item.links[0].href,
    },
  };

  return (
    <div>
      <Common_Hero {...HeroData} />

      <div className="py-12">
        <TrustedByBrands {...BrandData} />
      </div>

      <div className="py-12">
        <HeroProducts {...Product_Data} />
      </div>

      <div className="py-12">
        <HeroProducts {...OurProduct_Data} />
      </div>

      <div className="py-12 bg-secondary-color">
        <ChooseUs {...ChooseUs_Data} />
      </div>

      <div className="py-12">
        <AboutItsem {...AboutItsemData} />
      </div>

      <div className="py-12 bg-secondary-color">
        <SolutionSecurity {...SolutionSecurityData} />
      </div>

      <div className="py-12">
        <OurBlogs {...Blogs_Data} />
      </div>

      <div className="py-12 bg-primary-color">
        <SecureProperties {...SecurePropertiesData} />
      </div>
    </div>
  );
};

export default HomePage;
