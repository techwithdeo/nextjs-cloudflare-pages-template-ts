# Next.js for Cloudflare Pages Template

A next.js framework template for deployment on Cloudflare Pages

## Things to consider

- Use Linux OS, if you are using Windows you can install Windows Subsystem for Linux
- For your application to run on Cloudflare Pages, it needs to opt in to use the Edge Runtime for routes containing server-side code (e.g. API Routes or pages that use `getServerSideProps`). To do this, export a runtime route segment config option from each file, specifying that it should use the Edge Runtime.
- You should go to the Pages project's Compatibility Flags settings section and add the `nodejs_compat` flag to both your production and preview environments.
- Add your production secrets, bindings from Cloudflare Dashboard, do not expose it.

```ts
export const runtime = 'edge';
```

Before deploying your app on Cloudflare Pages, perform these tasks:

- Build your application using `npm run pages:build`
- Check application's behavior (preview) on Cloudflare Pages locally by using `npm run pages:start`

## Framework settings for Cloudflare pages:

Build command: `npm run pages:build`
Build output directory: `.vercel/output/static`

## Getting started

Install dependencies:

```shell
npm install
```

Start Local Development:

```shell
npm run dev
```

Build:

```shell
npm run pages:build
```

Serve Cloudflare Pages Locally (Check your app's behavior on Cloudflare pages):

```shell
npm run pages:start
```

## Bindings

For Local development, one can use `next-dev` submodule.

You can add your bindings for development mode in `next.config.mjs`

## Continue reading

[@cloudflare/next-on-pages](https://github.com/cloudflare/next-on-pages/tree/main/packages/next-on-pages#cloudflarenext-on-pages)
