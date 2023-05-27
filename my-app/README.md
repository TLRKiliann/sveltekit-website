# Sveltekit

My first app with Sveltekit (sk).

## Goals:

- TypeScript with Sveltekit.

Routing:

- Understand principles of routing (around file system based on routing).
- How does work routes with external & internal API.
- Files with pages & layouts.
- dynamic routes such as: `/products/1/reviews/1`.
- slug folder.
- refactor coode base with `<slot />` - `<svelte:head>` - header & footer with `$lib`
- url - cookie - params - route

Manage cookie with auth:

- auth with form for register & login by using cookie.set() & redirect (& redirectTo)
- You cannot join members without logged in before.
- data-sveletkit-reload to refresh cookie (similar as useEffect() or componentDidMount)

useContext with cart:

- Mini Cart by using writable & update from sk.

Style system:

- How to use tag `<img alt="" src={} />`.
- We can use skeleton to use tailwind.
- global

Reloading, loading & prerender:

- ssr csr prerender
