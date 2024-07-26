import { createDirectus, readItems, rest } from '@directus/sdk';

const WEB_URL = process.env.NEXT_PUBLIC_DIRECTUS_URL || 'https://directus-host.onrender.com';
const directus = createDirectus(WEB_URL).with(rest());

const pageBySlug = async (slug: string) => {
  try {
    const pages = await directus.request(
      readItems('pages', {
        filter: {
          slug: { _eq: slug },
        },
        fields: [
          '*.*.*.*.*.*.*', //fetch all components and its depethest data also
        ],
        limit: 30,
      })
    );
    return pages;
  } catch (error) {
    console.log(error);
  }
};

export default pageBySlug;
