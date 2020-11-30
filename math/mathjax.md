---
title: MathJAX
scripts:
- ../assets/mathjax.js
---

# MathJAX

<section>

## MathJAX (Version 3.x)

<div style="margin: 1rem 0; padding: 1rem; background: aliceblue; color: black; border-radius: 7px;">
MathJAX Example:

$$ \frac{\partial}{\partial x} \psi = - i \hbar \frac{\partial}{\partial t} \psi $$

</div>

* [Demos](https://github.com/mathjax/MathJax-demos-web#samples-of-mathjax-v3)

Combined components
* `tex-chtml` – TeX to CommomHTML
* `tex-svg` – TeX to SVG
* `mml-chtml`

### Inclusion via CDN
```html
<script async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/latest.js"></script>
```

### Polyfill for older Browsers
Before the script that loads MathJax:
```html
<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
```

</section>

---

<section>

## MathJAX Configuration

### Configuration (Inline)

Provide `MathJAX` object just before loading MathJAX itself.
```html
<script>
  MathJax = { /**/ };
</script>
```

* Enable single dollar signs as in-line math delimiters
```js
<script>
  MathJax = {
    tex: {
      inlineMath: [['$', '$'], ['\\(', '\\)']]
    }
  };
</script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js"></script>
```

* SVG output component to use a global font cache for all expressions on the page (rather than a separate cache for each expression on the page)
```js
<script>
  MathJax = {
    tex: {
      inlineMath: [['$', '$'], ['\\(', '\\)']]
    },
    svg: {
      fontCache: 'global'
    }
  };
</script>
<script type="text/javascript" id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js"></script>
```

#### Load common packages
* The `physics` package. Documentation of the [physics package](https://mirror.easyname.at/ctan/macros/latex/contrib/physics/physics.pdf).
* The `ams` math package.
* The `color` package.
* More MathJAX extensions [here](https://docs.mathjax.org/en/latest/input/tex/extensions/verb.html).
```js
<script>
  MathJax = {
    loader: {load: ['[tex]/physics', '[tex]/ams', '[tex]/color']},
    tex: {
      packages: {'[+]': ['physics', 'ams', 'color']},
      inlineMath: [['$', '$'], ['\\(', '\\)']]
    },
    svg: {
      fontCache: 'global'
    }
  };
</script>
<script type="text/javascript" id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js"></script>
```

### Configuration (Local file)

`mathjax-config.js`
```js
window.MathJax = { /* ... */ };
```

```html
<script src="mathjax-config.js" defer></script>
<script type="text/javascript" id="MathJax-script" defer
  src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js">
</script>
```

### Configuration and Loading in one script

```js
(function () {
  var script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js';
  script.async = true;
  document.head.appendChild(script);
})();
```

</section>

---

<section>

## Hosting MathJAX yourself

Download the MathJAX package via
```bash
npm install mathjax@3
```
or from github.

</section>

