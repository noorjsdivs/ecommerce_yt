import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
const client = sanityClient({
  projectId: "93oejd3s",
  dataset: "production",
  apiVersion: "2021-03-25",
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  useCdn: true,
});
const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
export default client;

// import sanityClient from "@sanity/client";
// import imageUrlBuilder from "@sanity/image-url";

// export const client = sanityClient({
//   projectId: "93oejd3s",
//   dataset: "production ",
//   apiVersion: "2022-03-10",
//   useCdn: true,
//   token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
// });

// const builder = imageUrlBuilder(client);

// export const urlFor = (source) => builder.image(source);
