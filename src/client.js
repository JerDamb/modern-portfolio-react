import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "89vzud9o",
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token:
    "skWapuqHvpJO7Au08zcfENmiNxzzV3Cx5xEp7iX8Vnxw9IvdBZant9imb7copQnDhrkvVEmlcy2To5gf5l5Wyr8bNKcXZzT57PyZc5e1f1euZ1RkbkbEciQ2Y1bqpyaQQyqw6CYRGnI4Bc1Yt0uXuUgPUBHWRzGIFZ4xVVCinpt4bcDuBk3i",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
