---
title: Fetch & AJAX
---

# Fetch and AJAX

<section>

## AJAX (Asynchronous JavaScript and XML)

</section>

---

<section>

## XML HTTP Request (XHR)

**GET Request**
```js
var request = new XMLHttpRequest();
request.open('GET', '/words', false);
request.send('word='+word+'&type='+wordType);
if (request.status == 200) {
  console.log(request.responseText);
}
```

**POST Request**
```js
request.open('POST', '/search.php', true);
request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
request.setRequestHeader('Cache-Control', 'no-cache');
request.onreadystatechange = function () {
  console.log(request.status, request.responseText);
};
request.send("jsonData=" + JSON.stringify(wordData));
```

### XML HTTP Request

`window.XMLHttpRequest`
```js
var request = new XMLHttpRequest();
```

**Methods**
* `open(method, url, [isAsyncronous])`
* `setRequestHeader(header, value)`
* `send(body)`

**Properties**
* `readyState` (`4` = ready)
* `status` (`200` = OK)
* `statusText`
* `response`
* `responseText`

**Events**
* `readystatechange`
* `abort`
* `load`
* `loadstart`
* `loadend`

</section>

---

<section>

## Load DocumentFragment via XHR

```js
const view = new DocumentFragment();
const xhr = new XMLHttpRequest();

xhr.onload = event => {
   const newDocument = event.target.response;
   const newView = newDocument.querySelector('.desired-view');

   // Copy in the child nodes from the parent.
   while (newView.firstChild) {
      view.appendChild(newView.firstChild);
   }

   // Add the fragment to the page.
   this.appendChild(view);
};
xhr.responseType = 'document';
xhr.open('GET', `about.html`);
xhr.send();
```

</section>

---

<section>

## Fetch API

```js
fetch("animals.json")
  .then((response) => response.json())
  .then((data) => (animals = data));
```

```js
await (await fetch('https://api.github.com/users/markusdoppler')).json()
await fetch('https://api.github.com/users/markusdoppler').then(data => data.json())
fetch('https://api.github.com/users/markusdoppler').then(data => data.json()).then(json => console.log(json))
```

```js
fetch(fileOrURL)
  .then((data) => {
    // ...
  })
  .catch(error => {
    // ...
  });
```

```js
const request = new Request('data.json');
fetch(request).then(function(response) {
  return response.text();
}).then(function(text) {
  console.log(text);
});
```


### Optional Parameter

```js
fetch(url, {
   method: 'GET',
})

fetch(url, {
  method: "POST", 
  body: new URLSearchParams({ view: "home", id: currentItem.id, item: currentItem.title })
})

fetch(url, { mode: "no-cors" })

fetch(url, {
  headers: { 'mode': 'cors' }
})

fetch(url, {
  mode: 'no-cors',
  header: {
    'Access-Control-Allow-Origin': '*'
  }
})
```

</section>

---

<section>

## Axios library

```js
const axios = require('axios');

await axios.get('/user', { params:  12345 });
await axios.post('/user', { params:  12345 });

axios.post('/user', { params:  12345 })
  .then(() => {
    // ...
  }).catch(() => {
    // ...
  });
```

</section>

---

<section>

## JSON 
(JavaScript Object Notation)

Stringify object
```js
JSON.stringify({ name: 'Tim', age: 17 })
```

Parsing JSON
```js
text = "{ name: 'Otto', age: 17 }"
JSON.parse(text)
```

```js
const jsonData = `{ "number": 5, "colour": "red" }`;

const data = JSON.parse(jsonData, function(key, value) {
    if (!isNaN(parseInt(value))) {
        return parseInt(value);
    } else {
        return value;
    }
});
```

</section>

---

<section>

## Promises Overview

```js
promise
  .then( /* ... */ )
  .then( /* ... */ )
  .then( /* ... */ )
  .catch( /* ... */ )
```

Create
```js
const ride = new Promise((resolve, reject) => {
  if (arrived) {
    resolve("driver arrived")
  } else {
    reject("driver bailed")
  }
})
```

Consume
```js
ride
  .then(value => {
    console.log(value)
    // driver arrived
  })
  .catch(error => {
    console.log(error)
    // driver bailed
  })
  .finally(() => {
    console.log("all settled!")
  })
```

</section>

---

<section>

## Promises

Promise object
* `new Promise((resolve, reject) => { /* ... */ });`
  * `resolve(data)`: 
  * `reject(error)`: 
* `Promise.all([promise1, promise2])`

Await Promise
* `await promise`

Chained Promises
* `promise.then()`
* `promise.catch()`
* `promise.finally()`
* `promise.any()`
* `promise.allSettled()`

### Promise example via `setTimeout()`
```js
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (everythingIsFine) resolve('✅')
      else reject('❌');
    })
  })
const answer = await promise
```

one-line Promise
```js
await new Promise((resolve, reject) => { setTimeout(() => { if (everythingIsFine) resolve('✅'); else reject('❌'); }); });
```


### `.then()` and `.catch()`
```js
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Fetched user");
    resolve({ user: "Alfred" });
    reject(new Error('No users found'));
  })
});

promise.then(user => {
  console.log(user);
}).catch(err => {
  console.log(err.message);
});
```


**Function that returns a Promise**
```js
function getData(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({"username": "winfy153", "points": 127});
    })
  });
}

getData('winfy153')
  .then(user => console.log(user))
  .catch(err => console.log(err));
```

### "Parallel" Promises
```js
const promise1 = new Promise(resolve => {
  setTimeout(() => {
    console.log("got data");
    resolve( {title: "The Why Café"} );
  }, 2000)
})
const promise2 = new Promise(resolve => {
  setTimeout(() => {
    console.log("got data 2");
    resolve( {title: "The Why Are You Here Café"} );
  }, 3000)
})

Promise.all([promise1, promise2])
  .then(result => console.log(result))
```

```js
const [weather, store] = Promise.all(getWeather(), getStores());
```



### Async + Await
Let synchronous code look like synchronous code
```js
async function displayUser(email, password) {
  try {
    const user = await getUser('email@me.com', "12345")
    console.log(user.email);
  } catch (error) {
    console.log("Cannot get user: ", error);
  }
}

displayUser('email@me.com', "12345");
```


### Image Loading Example
```js
async function load() {
  const image_status = await load_image(image_src).then(msg => { return msg }).catch(err => { return err });
  console.log("image load", image_status)
  // add image to DOM
}
```

```js
async function load_image(src) {
  return await new Promise((resolve, reject) => {
    let img = new Image();
    img.onload = () => resolve('✅');
    img.onerror = () => reject('❌');
    img.src = src;
  })
}
```

</section>

---

<section>

## Promise vs. async-await

<figure>
<div>

Promise
```js
document.addEventListener("click", () => {
  import("./module.js").then(({ default: printModule }) => {
    printModule()
  })
})
```

</div>
<div>

Async Await
```js
document.addEventListener("click", async () => {
  const { default: printModule } = await import("./module.js")
  printModule()
})
```

</div>
</figure>


</section>

---

<section>

## Async and Await

**Let asynchronous code look like synchronous code!**
```js
async function getData() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('done'), 3000)
  })

  let result = await promise
  console.log(result)
}
getData()
```


### A little history: How was it done before

Callback
```js
function manageTheWeather() {
  getTheWeather(..., showGraphsCallback(weather))
}
```

Promises
```js
function manageTheWeather() {
  getTheWeather().then(weather => showGraphs).catch(err => handleErrors)
}
```

Async/await
```js
async function manageTheWeather() {
  var weather = await getTheWeather()
  showGraphs(weather)
}
```

</section>

---

<section>

## HTTP Header

```
Content-Type: text/html
Content-Type: text/html; charset=UTF-8
Content-Type: text/plain
Content-Type: application/json
```


### Same-Origin Policy (SORS – Same-Origin Resource Sharing)
Allowed if the following are equal:
* protocol (HTTP or HTTPS)
* domain
* port


### CORS (Cross-Origin Resource Sharing)

Origin is not just the hostname, but a combination of port, hostname and scheme, such as `http://mysite.example.com:8080/`


Server-side HTTP header
Just remember: the origin responsible for serving resources will need to set this header.
```
Access-Control-Allow-Origin: http://localhost:3000
Access-Control-Allow-Origin: *
```

```js
res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8888');

// Request methods you wish to allow
res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

// Request headers you wish to allow
res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

// Set to true if you need the website to include cookies in the requests sent
// to the API (e.g. in case you use sessions)
res.setHeader('Access-Control-Allow-Credentials', true);
```

</section>