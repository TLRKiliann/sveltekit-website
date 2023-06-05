# Sveltekit

My first website with Sveltekit (TS).

## Install

TypeScript is already installed.

$ pnpm install -g json-server

```
(package.json)

	"scripts": {
		"server": "json-server --watch db.json --port 4000",
	},
	...
```

$ pnpm i -D svelte-parallax

## Routing with external & internal API.

- Internal API

	fetch api address from files `+page.ts` (csr+ssr) or `+page.server.ts` (ssr)

	You can allways use console.log() to display something into your terminal (ssr)
	and console browser (csr).

- External API

	fetch from api folder, such as `api/news` & `api/news/[newId]` folder.

## dynamic routes 

- such as: `/products/1/reviews/1` or with `[...slug]` in /doc.

## catch all routes with [...slug]

- Look at warranty folder & products folder ([productId] & [featureId])

([productId=integer] to avoid a greater number of number elements of the list).

## similar useContext with cart:

- Mini Cart by using writable & update from sk.

## Style system:

$ pnpm install @rodneylab/svelte-social-icons

$ pnpm install @fontsource-variable/crimson-pro

$ pnpm install @fontsource/roboto

- I created an `app.css` to recover style repetitions.

## auth

Create a .env file in my-app with :

```
DB_USER=NameOfYourChoice
DB_PASSWORD=YourPassword
```

for login.

keywords: `form - formData() - formaction() - actions - cookies - redirect()`

logout: This is a fake logout that I've modified. It was just to simulate a disconnection in order to delete the cookie.
Otherwise, it's not possible to update the login element in the header. Or it's possible to do it with a hook.server.ts in the src folder, but with a real API.

## Useful tricks

	That's very useful to use :
	- url
	- params
	- request
	- route: route.id
	- cookies
	with a console.log().

## Testing

$ pnpm dlx create-playwright

$ pnpm add -D vitest

$ pnpm install --save-dev c8

$ pnpm install --save-dev @testing-library/svelte

```
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    svelte({ hot: !process.env.VITEST }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
  },
})
```

```
(package.json)

	"scripts": {
		...
		"test": "vitest",
		"coverage": "vitest run --coverage"
	},
	...
```

