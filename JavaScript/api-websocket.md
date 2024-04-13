---
title: WebSocket
---

# WebSocket

<section>

## WebSocket

```js
let socket = null;

socket = new WebSocket('wss://server.com')

socket.onopen = () => {
   console.log("connected", socket);
}
socket.onclose = () => {
   console.log("disconnected", socket);
   socket = null;
}
socket.onerror = () => {
   console.log("error", socket);
}
socket.onmessage = (message) => {
   console.log("message", socket, message.data);
}

socket.send(text);
socket.close();

socket.readyState // 0 = connecting, 1 = open, 2 = closing, 3 = closed
```



</section>
