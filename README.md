This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## getting blog usage

```ts
// Get all blogs (default pagination)
const data = await getAllBlogs();

// Get published blogs only
const published = await getPublishedBlogs({ page: 1, limit: 10 });

// Get specific blog by slug
const blog = await getBlogBySlug("my-blog-post-slug");

// Get blogs by tag
const tagged = await getBlogsByTag("typescript", { page: 1 });

// Search blogs
const results = await searchBlogs("react hooks", { page: 1 });

// Error handling
try {
  const blog = await getBlogBySlug("non-existent");
} catch (error) {
  console.error(error.message); // "Blog post not found"
  console.error(error.status); // 404
}
```

## getting projects usage

```ts
// Get single project by slug (CHANGED)
const project = await getProjectBySlug("my-portfolio-website");

// Get all projects (same)
const projects = await getAllProjects({ page: 1, limit: 10 });

// Get featured projects (same)
const featured = await getFeaturedProjects();

// NEW: Filter by tag
const reactProjects = await getProjectsByTag("react");

// NEW: Filter by tech stack
const nextjsProjects = await getProjectsByStack("Next.js");

// Error handling
try {
  const data = await getAllProjects();
} catch (error) {
  console.error(error.message); // User-friendly error message
  console.error(error.status); // HTTP status code
}
```
