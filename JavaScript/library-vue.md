---
title: Vue
---

# Vue.js

<section>

## Refs
```html
<template>
  <div>
    <span ref="myref">Hello Refs!</span>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$refs.myref.style.color = "red";
  }
}
</script>
```

</section>

---

<section>

## Vuex
`store.js`
```js
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},      // initial state (group of data values)
  getters: {},    // group of functions to retrieve the state
  mutations: {},  // group of functions that can change the state
  actions: {}     // cause triggers for mutation to happen asynchronously
});
```

using Vuex Store
```js
this.$store.getter.myProperty
this.$store.commit("myFunction");
```
</section>

---

<section>

## Router
```js
this.$router.replace("/");
```

Push
```js
this.$router.push({
  name: "signin",
  params: { userLoggedOut: true }
});
```

```js
mounted() {
  const loggedOut = this.$router.params.userLoggedOut;

  if (loggedOut) {
    this.showMessage("User logged out");
  }
}
```

</section>