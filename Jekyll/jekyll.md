---
title:  Jekyll
# layout: post
# layout: page
# permalink: /about/
---

# Github Pages: Static Site generation with Jeykll

<section>

## Jekyll Overview

* [Jekyll Documentation](https://jekyllrb.com)

</section>

---

<section>

## Local Preview using Jekyll

[Installation](https://jekyllrb.com/docs/installation/)
```zsh
sudo gem install jekyll
```

Initialize Jekyll
```zsh
jekyll new .
# or
jekyll new . --force
```

Start local server
```zsh
bundle exec jekyll serve
bundle exec jekyll serve --livereload --incremental
```


### File Structure

Priority
* `index.html`
* `index.md`
* `README.md`


</section>

---

<section>

## Jekyll Configuration

`_config.yml`

```yaml
baseurl: "/Coder"
url: "https://markusdoppler.github.io"
```

</section>

---

<section>

## YAML Front Matter


```yaml
---
title: Page Title
---
```

use data in Fluid template as such
```
site.title
```

</section>

---

<section>

## Custom Jekyll Theme

1. **Copy theme folders** from e.g. the `minima` theme
```zsh
open $(bundle info --path minima)
```
2. in `_config.yml` remove jekyll theme
```yaml
# theme: minima
```
3. in the `Gemfile` remove jekyll theme dependence
```gem
# gem "minima", "~> 2.5"
```
4. type `bundle update`
5. type `bundle exec jekyll serve --livereload`

</section>