# posthog warning repro

I tried to repro in a fresh remix cloudflare page project and no luck, realized that it was comign from my shadcn components so I found this template and tested this. It's a little old dependency wise so you'll need to --force a couple of times, but my actual project is on the latest versions of everything fwiw.
a
steps to repro:

* install this repository (note you'll need to npm i --force ... sorry)
  * just run `npx create-remix@latest --template https://github.com/jacob-ebey/remix-shadcn/tree/cloudflare`
* npm run dev
  * note no warnings
* follow instructions here: https://posthog.com/docs/libraries/remix ( --force again )
* page should hot reload with a warning

```
chunk-T7VP4UGM.js?v=96698e70:521 Warning: Prop `id` did not match. Server: "radix-:R155:" Client: "radix-:R4kl:"
    at button
    at _c (http://localhost:3000/app/components/ui/button.tsx:29:3)
    at http://localhost:3000/node_modules/.vite/deps/chunk-HITYGVIU.js?v=96698e70:65:11
    at http://localhost:3000/node_modules/.vite/deps/chunk-HITYGVIU.js?v=96698e70:42:11
    at http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-dropdown-menu.js?v=96698e70:215:13
    at http://localhost:3000/node_modules/.vite/deps/chunk-HITYGVIU.js?v=96698e70:65:11
    at http://localhost:3000/node_modules/.vite/deps/chunk-HITYGVIU.js?v=96698e70:42:11
    at http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-dropdown-menu.js?v=96698e70:215:13
    at http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-dropdown-menu.js?v=96698e70:2792:11
    at http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-dropdown-menu.js?v=96698e70:4368:11
    at http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-dropdown-menu.js?v=96698e70:5218:11
    at Provider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-dropdown-menu.js?v=96698e70:41:15)
    at Provider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-dropdown-menu.js?v=96698e70:41:15)
    at Provider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-dropdown-menu.js?v=96698e70:41:15)
    at $cf1ac5d9fe0e8206$export$badac9ada3a0bdf9 (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-dropdown-menu.js?v=96698e70:2779:11)
    at $6cc32821e9371a1c$export$d9b273488cd8ce6f (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-dropdown-menu.js?v=96698e70:4310:11)
    at Provider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-dropdown-menu.js?v=96698e70:41:15)
    at $d08ef79370b62062$export$e44a253a59704894 (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-dropdown-menu.js?v=96698e70:5182:11)
    at header
    at Header (http://localhost:3000/app/components/header.tsx:12:20)
    at body
    at html
    at ThemeSwitcherSafeHTML (http://localhost:3000/app/components/theme-switcher.tsx:3:3)
    at App (http://localhost:3000/app/root.tsx:9:3)
    at Root
    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/@remix-run_react.js?v=96698e70:4197:5)
    at RenderErrorBoundary (http://localhost:3000/node_modules/.vite/deps/@remix-run_react.js?v=96698e70:4157:5)
    at DataRoutes (http://localhost:3000/node_modules/.vite/deps/@remix-run_react.js?v=96698e70:5184:5)
    at Router (http://localhost:3000/node_modules/.vite/deps/@remix-run_react.js?v=96698e70:4538:15)
    at RouterProvider (http://localhost:3000/node_modules/.vite/deps/@remix-run_react.js?v=96698e70:5001:5)
    at RemixErrorBoundary (http://localhost:3000/node_modules/.vite/deps/@remix-run_react.js?v=96698e70:6852:5)
    at RemixBrowser (http://localhost:3000/node_modules/.vite/deps/@remix-run_react.js?v=96698e70:8426:46)
```


# Welcome to Remix + Vite + shadcn/ui!

📖 See the [Remix docs](https://remix.run/docs) and the [Remix Vite docs](https://remix.run/docs/en/main/future/vite) for details on supported features.

## Getting Started

Node Server:

```sh
npx create-remix@latest --template jacob-ebey/remix-shadcn
```

Cloudflare Pages:

```shellscript
npx create-remix@latest --template https://github.com/jacob-ebey/remix-shadcn/tree/cloudflare
```

Or for a more flushed out template with a login flow and a SQLite database backed by Drizzle ORM:

Node Server:

```shellscript
npx create-remix@latest --template https://github.com/jacob-ebey/remix-shadcn/tree/drizzle
```

Cloudflare Pages:

```shellscript
npx create-remix@latest --template https://github.com/jacob-ebey/remix-shadcn/tree/drizzle-cloudflare
```

## Built in theme switcher

![image](https://github.com/jacob-ebey/remix-shadcn/assets/12063586/c6ed812c-764f-46b7-af30-26284f55535c)

![image](https://github.com/jacob-ebey/remix-shadcn/assets/12063586/4e378230-3b4b-4b78-8af4-096b30aacf79)

## Development

Run the Vite dev server:

```sh
npm run dev
```

## Deployment

First, build your app for production:

```sh
npm run build
```

Setup your environment:

```sh
NODE_ENV='production'
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying Node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `npm run build` and the server

- `server.js`
- `build/server`
- `build/client`

Take a look at the provided Dockerfile for further details on how to configure a production environment.
