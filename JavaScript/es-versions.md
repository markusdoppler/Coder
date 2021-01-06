---
title: ES
---

# ECMA Script (ES) Versions

<section>

##  EcmaScript2009 – ES5

- `map`, `filter`, `reduce`
- `forEach()`
- `JSON.parse()`, `JSON.stringify()`

</section>

---

<section>

## EcmaScript2015 – ES6

→ [Babel: Learn ES2015](https://babeljs.io/docs/en/learn)

- `let` and `const`
- `class`
- Arrow functions `(param) => { console.log(param); }`
- Template Strings `` `Template ${"string"}` ``
- Promises
- Async + Await
- Destructuring `let [a, b] = [1,2]`
- Default parameter values
- Array.find()
- Array.findIndex()
- Exponentiation (`**`) (ES 2016)



</section>

---

<section>

## ES6 Modules
* You can only use `import` and `export` statements inside modules, not regular scripts.

```html
<script type="module" src="js/main.js"></script>
```

```js
export function Rater(element) {
  // ...
}
```

```js
import { Rater } from './rater.js';
```

Export several
```js
// ...

export { name, draw, reportArea, reportPerimeter };
```

```js
import * as Module from './modules/module.js';
```


Default exports 
```js
function randomSquare() {
  // ...
}

export default randomSquare;
```

```js
import randomSquare from './modules/square.js';
```
Note: without curly braces, since there is only one default export allowed per module.


### Dynamics module import

```js
import('./modules/myModule.js')
  .then((module) => {
    // Do something with the module.
  });
```

</section>