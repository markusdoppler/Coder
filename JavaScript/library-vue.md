---
title: Vue
---

# Vue.js

<section>

## Overview

### Resources
* [Vue Documentation](https://vuejs.org/v2/guide/class-and-style.html)
* [Vue I18n](http://kazupon.github.io/vue-i18n/started.html#javascript)
* [Vue School Courses](https://vueschool.io/courses)


### Quick setup into existing HTML file

```html
<script src="vue.js"></script>
```

* There are 


### Vue CLI

Vue CLI
```bash
npm install -g @vue/cli @vue/cli-service-global
yarn global add @vue/cli @vue/cli-service-global

vue create my-project
```

* In this case you work with `.vue` files, structured as follows:

## Refs
```html
<template>
  <div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>

</style>
```


### Nuxt.js

* Similar work environment as with VueCLI, but more customisablity. More information about [Nuxt.js](library-nuxt).

</section>

---

<section>

## Vue 3 Setup

{% raw %}
```html
<div id="app">
  <h1>{{message}}</h1>
  <the-button @update="changeMessage"></the-button>
</div>
```
{% endraw %}

```js
const vueObject = {
  data() {
    return {
      message: "Bye, Vue 2."
    }
  },
  methods: {
    changeMessage() {
      this.message = "Hi, Vue 3!"
    }
  }
}

const vueComponent = {
  template: `<button @click="updateMessage">Update message</button>`,
  emits: ["update"],
  methods: {
    updateMessage() {
      this.$emit("update")
    }
  }
}

const app = Vue.createApp(vueObject)
app.component("the-button", vueComponent)
app.mount("#app")
```

### Composition API

```js
const vueComponent = {
  emits: ["update"],
  setup(props, context) {
    // data
    const message = ref("Hello Composition API!")

    // methods
    function updateMessage() {
      message = "Hello"
    }

    // custom events
    context.emit("update", this.message)
  }
}
```



</section>

---

<section>

## Basics

### Vue instance

<figure>
{% raw %}
```html
<section id="cv">
  {{title}}
</section>
```
{% endraw %}


```js
var vm = new Vue({
	el: "#cv",
	data: {
		title: "CV"
	}
});
```
</figure>

Vue Object Properties and Methods:
* `el`
* `data`
Custom Methods
* `methods`
Watched Properties
* `watch`
Computed Properties
* `computed`
Life cycle methods
* `created`
* `mounted`
* `updated`
* `destroyed`

Properties of the Vue instance
```js
vm.$data
vm.$el
vm.$watch
```

### Components

#### using template string

{% raw %}
```js
let titleComponent = {
  template: '<div :style="myStyle"><h3>{{title}}</h3></div>',
  data() {
    return {
      title: "CV"
	  }
  },
  props: ['id']
}
```
{% endraw %}

#### using x-template definition

{% raw %}
```html
<script type="text/x-template" id="component-id">
  <div :style="myStyle">
    <h3>{{title}}</h3>
  </div>
</script>
```
{% endraw %}

```js
let titleComponent = {
  template: '#component-id',
  data() {
    return {
      title: "CV"
    }
  },
  props: ['id']
}
```

### Registering a global component
```js
Vue.component(titleComponent);
```

### Registering local component
```js
var vm = new Vue({
  el: "#cv",
  data: {
    title: "CV"
  },
  components: [
    titleComponent
  ]
});
```


### Data bindings

{% raw %}
```html
<h3>{{ ok ? 'YES' : 'NO' }}</h3>
<code>{{ var }}</code>
```
{% endraw %}

### Directives
* start with `v-`
* can take arguments after the colon `:`

v-once
```html
v-once
```

v-if
```html
v-if="seen"
```

v-for
```html
v-for=""
```

v-bind
```html
v-bind:id="myVar"
v-bind:href="url"
v-bind:[attributeName]="url"

shorthand
:href="url"
```

v-model
```html
<input type="text" v-model="title" />
```


### Event Listeners

```html
v-on

v-on:click="doSomething"

shorthand
@click="url"
```

**Modifier**
```html
v-on:submit.prevent="onSubmit"
```

### Slots



### Custom events



### Custom directives

```js
Vue.directive('scroll', {
  inserted: function (el, binding) {
    let f = function (evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f)
      }
    }
    window.addEventListener('scroll', f)
  }
});
```


</section>

---

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

## VueCLI: Vuex
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

## VueCLI

Install
```bash
npm install -g @vue/cli
```
or
```bash
yarn global add @vue/cli
```

Create project
```bash
vue create my-project
```

Start development mode
```bash
vue serve
```

Build project
```bash
vue build
```

</section>

---

<section>

## VueCLI: Router
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
