# Sveltekit

My first website with Sveltekit (TS).

## Routing with external & internal API.

- Internal API

	fetch api address from files `+page.ts` (csr+ssr) or `+page.server.ts` (ssr)

	You can allways use console.log() to display something into your terminal (ssr)
	and console browser (csr).

- External API

	fetch from api folder, such as `api/news` & `api/news/[newId]` folder.

- dynamic routes such as: `/products/1/reviews/1` or with `[...slug]` in /doc.


## similar useContext with cart:

- Mini Cart by using writable & update from sk.

## Style system:

- I created an app.css to recover style repetitions.

## auth

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

    /*background: linear-gradient(30deg, #f8f8ff, #dee8f0, #dee8f0);*/