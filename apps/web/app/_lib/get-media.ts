const getMedia = (imageId: string): string => {
  // const mediaUrl = `${process.env.NEXT_PUBLIC_URL}/assets/${imageId}`
  const mediaUrl = `${'http://127.0.0.1:8055'}/assets/${imageId}`;
  return mediaUrl;
};
export default getMedia;
