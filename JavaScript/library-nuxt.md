---
title: Nuxt
---

# Nuxt.js

<section>

## New Nuxt project

Create a new project from the Terminal
```bash
npx create-nuxt-app <project-name>
yarn create nuxt-app <project-name>
```

Launch app (default: `http://localhost:3000`)
```bash
npm run dev
yarn dev
```

Generate static website (for deployment)
```bash
npm run dev
npm run build
npm run start
npm run generate
```
or using yarn
```bash
yarn generate
```

</section>

---

<section>

## `<nuxt-link>` component

```
<nuxt-link to="/about">About</nuxt-link>

<n-link to="/about" prefetch>About page pre-fetched</n-link>
```

*prefetching*
Set `router.prefetchLinks = false` globally

</section>

---

<section>

## Dynamic Pages with Nuxt Content API

- [Nuxt Content][1]
- [Nuxt: Nuxt Content Overview][2]

[1]: https://content.nuxtjs.org
[2]: https://nuxtjs.org/guides/directory-structure/content

Create content in `content/`, e.g.
```markdown[index.md]
# My Blog

This is **first** blog post!
```


Create a Vue file named `_slug.vue` (the `_` prefix denotes a dynamic route).

```js
export default {
  async asyncData({ $content, params }) {
    const doc = await $content(params.slug || "index").fetch();

    return { doc };
  }
}
```

### Display Nuxt Content

```html
<nuxt-content :document="doc" />
```

</section>

---

<section>

## Dynamic Routes in Nuxt

- [Nuxt Routing](https://nuxtjs.org/guide/routing/)

Define a dynamic route:
- `pages/_slug/` (dynamic folder)
- `pages/_slug.vue` (dynamic file)
- `pages/_.vue` (dynamic route of unknown depth)

</section>

---

<section>

## Nuxtdown.js


Document structure

`my-nuxtdown-app`/
* content/
    * docs/
        * about.md
        * installation.md
* pages/
    * blog/
        * `_postpost.vue`
    * index.vue
* `nuxt.config.js`
* `nuxtdown.config.js`


Add the module to  `nuxt.config.js`:
```js
modules: [
  'nuxtdown'
]
```

Add nuxtdown configurations to `nuxtdown.config.js`
```js
module.exports = {
  content: [
    // My blog posts are in content/blog
    ['blog', {
      page: '/blog/_blogpost',
      permalink: '/blog/:slug'
    }],
    // My documentation is in content/docs
    ['docs', {
      page: '/docs/_page',
      permalink: '/docs/:section*/:slug',
      isPost: false,
      data: { 
        generatedBy: 'Nuxt with the nuxtdown module' 
      },
      breadcrumbs: true,
      toc: 1
      markdown: {
        extend(config) {
          config.highlight = (code, lang) => {
            return `<pre class="language-${lang}"><code class="language-${lang}">${Prism.highlight(code, Prism.languages[lang] || Prism.languages.markup)}</code></pre>`
          }
        },
        plugins: {
          toc: {
            permalinkClass: 'nuxtdown-toc',
            permalinkSymbol: '↗'
          },
          attrs: require('markdown-it-attrs'),
          figures: [require('markdown-it-implicit-figures'), { figcaption: true }],
          video: require('markdown-it-video')
        },
        customize(parser) {
          parser.linkify.tlds('onion')
        }
      }
    }
  ],
  api: {
    baseURL: 'http://localhost:3000',
    browserBaseURL: process.env.FREESEWING_BROWSER_BASE_URL
  }
}
```


`_postpost.vue`
```js
export default {
    asyncData: async function ({ app, route }) {
      return { post: await app.$content('/en/blog').get(route.path)}
    }
}
```

</section>
