import client from './client';

const endpoint = '/listings';

const getTweets = () => client.get(endpoint);

const addListing = (listing: any, onUploadProgress: any) => {
  const data = new FormData();
  data.append('title', listing.title);
  data.append('price', listing.price);
  data.append('categoryId', listing.category);
  data.append('description', listing.description);

  listing.images.forEach((image: string, index: number) => {
    data.append('images', {
      name: `image${index}`,
      type: 'image/jpeg',
      uri: image,
    });
  });

  if (listing.location)
    data.append('location', JSON.stringify(listing.location));

  return client.post(endpoint, data, {
    onUploadProgress: progress =>
      onUploadProgress(progress.loaded / progress.total),
  });
};

export default {
  getTweets,
  addListing,
};
