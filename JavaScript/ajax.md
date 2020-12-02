---
title: AJAX
---

# Asynchronous JavaScript and XML (AJAX)

<section>

## JSON (JavaScript Object Notation)

### Stringify Object
```js
JSON.stringify({name: 'Tim', age: 17})
```

### Parsing JSON
```js
text = "{name: 'Tim', age: 17}"
JSON.parse(text)
```

</section>

---

<section>

## AJAX (Asynchronous JavaScript And XML)


* XHR
* `fetch` API
* `get`
* `<>.then().catch()`
* `request()` (returns Promise)
* `axios`

* Synchronous JavaScript
* Asynchronous JavaScript
* Callbacks
* Promises

</section>

---

<section>

## XML HTTP Request

```js
var request = new XMLHttpRequest();
request.open('GET', 'http://www.markusdoppler.at/documentation/', false);
request.send(null);
if(request.status == 200) {
  dump(request.responseText);
}
```

### HTTP Request
```js
if (window.XMLHttpRequest) {
  httpRequest = new XMLHttpRequest();
}
```

```js
httpRequest.onreadystatechange = handlerFunction;
httpRequest.open('POST', 'http://latin.markusdoppler.at/search.php', true);
httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
httpRequest.setRequestHeader('Cache-Control', 'no-cache');
httpRequest.send('verbum='+verbum+'&type='+wordData.wordType);

httpRequest.send("jsonData=" + JSON.stringify(wordData));
wordData = JSON.parse(httpRequest.responseText, function(k, v) {

  if (httpRequest.readyState === 4) {
    if (httpRequest.status === 200) {
      alert("Input successful. Reload page prompt?");
    } else {
      alert("Save not successful: "+httpRequest.responseText);
    }
  }

  if (httpRequest.readyState === 4 && httpRequest.status === 200) {
    if (httpRequest.responseText != "false") {
      wordData = JSON.parse(httpRequest.responseText, function(k, v) {
          if (k === "") {
              return v;
          } else if (!isNaN(parseInt(v))) {
              return parseInt(v);
          } else {
              return v;
          }
      });
    }
  }
}
```

</section>

---

<section>

## Promise
Return values
* `resolve`: data
* `reject`: error

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

Function that returns a Promise
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

"Parallel" Promises
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


</section>

---

<section>

## Async / Await

### How was it done before

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

### Let asynchronous code look like synchronous code!
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

</section>

---

<section>

## Fetch

```js
await fetch('https://api.github.com/users/wesbos').then(data => data.json())

await (await fetch('https://api.github.com/users/wesbos')).json()
```


### Fetch Request Example

Example from Design+Code
```html
<script>
import ThemeSwitch from "@/components/ThemeSwitch";

export default {
  name: "Request",
  components: {
    ThemeSwitch
  },
  data() {
    return {
      email: null
    };
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    }
  },
  methods: {
    onSubmit() {
      const email = this.email;

      // Slack API logic
      let slackURL = new URL("https://slack.com/api/chat.postMessage");

      const data = {
        token: [YOUR OAUTH ACCESS TOKEN]
        channel: "hq",
        text: `${email} has requested admin access to HQ. Please go to Netlify to invite them.`
      };

      slackURL.search = new URLSearchParams(data);

      fetch(slackURL)
        .then(() => {
          this.$router.push({
            name: "signin",
            params: {
              userRequestedAccount: true,
              email: email
            }
          });
        })
        .catch(error => {
          alert("Error: " + error);
        });
    }
  }
};
</script>
```

</section>

---

<section>

## Axios library

```js
await axios.someFunc()
```

</section>