---
title: Audio
---

# Audio

<section>

## Controlling audio using JavaScript

```js
const audio = new Audio("/path/sound.mp3");
```

methods
```js
audio.play();

audio.pause();

audio.pause();
```

properties
```js
audio.currentTime = 0;

audio.duration
```

```js
audio.onloadeddata = function(e) {}
audio.ontimeupdate = function(e) {}
```

```js
var audio_context  = new (window.AudioContext || window.webkitAudioContext)();
```

</section>