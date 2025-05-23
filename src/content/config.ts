// src/content/config.ts
import { z, defineCollection } from 'astro:content';

// Define the schema for your blog posts
const blogCollection = defineCollection({
  type: 'content', // This handles .md (and .mdx if you add the integration)
  schema: ({ image }) => z.object({ // The `image` helper is for astro:assets
    title: z.string().max(100, "Title cannot exceed 100 characters"),
    description: z.string().max(160, "Description for SEO, max 160 characters").optional(),
    publishDate: z.date(), // Astro will convert 'YYYY-MM-DD' strings to Date objects
    updatedDate: z.date().optional(),
    author: z.string().default("Onco Solutions Team"),
    // heroImage should be a path relative to the MD file, pointing to an image in src/assets/
    heroImage: image().optional(), 
    heroImageAlt: z.string().optional().default("Hero image for the blog post"),
    tags: z.array(z.string()).optional().default([]),
    isDraft: z.boolean().optional().default(false),
    // No 'layout' or 'slug' needed in frontmatter here; Astro handles them
    // when using content collections and a dynamic route page.
  }),
});

// Export a `collections` object to register your collections
export const collections = {
  'blog': blogCollection,
};
