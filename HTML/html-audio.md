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

---

<section>

## Attributes and Events

### Attributes

Error state
* `error`

Network-State
* `src`
* `currentScr`
* `networkState`
* `preload`
* `buffered`

Ready-State
* `readyState`
* `seeking`

Controls
* `controls`
* `volume`
* `muted`

Tracks
* `tracks`

Playback-State
* `currentTime`
* `startTime`
* `duration`
* `paused`
* `defaultPlaybackRate`
* `playbackRate`
* `played`
* `seekable`
* `ended`
* `autoplay`
* `loop`

Video specific
* `width`
* `height`
* `videoWidth`
* `videoHeight`
* `poster`

### Methods
* `load()`
* `canPlayType(type)`
* `play()`
* `pause()`
* `addTrack(label, kind, language)`

### Events
* `loadstart`
* `progress`
* `suspend`
* `abort`
* `error`
* `emptied`
* `stalled`
* `play`
* `pause`
* `loadedmetadata`
* `loadeddata`
* `waiting`
* `playing`
* `canplay`
* `canplaythrough`
* `seeking`
* `seeked`
* `timeupdate`
* `ended`
* `ratechange`

</section>