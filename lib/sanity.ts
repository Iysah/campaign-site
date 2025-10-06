import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "",
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-01-01",
  useCdn: true,
  token: process.env.SANITY_READ_TOKEN, // optional for private datasets
});

export type Post = {
  _id: string;
  title: string;
  slug?: { current: string };
  publishedAt?: string;
  mainImage?: { asset: { _ref: string } } | null;
  excerpt?: string;
  body?: any;
  category?: string;
};