const getMedia = (imageId: string): string => {
  // const mediaUrl = `${process.env.NEXT_PUBLIC_URL}/assets/${imageId}`
  const mediaUrl = `${'https://directus-host.onrender.com'}/assets/${imageId}`;
  return mediaUrl;
};
export default getMedia;
