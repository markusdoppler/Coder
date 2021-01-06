---
title: Audio
---

# Audio

<section>

## HTML5 Audio Element

```html
<audio id="audio" src="my-audio.m4a" controls></audio>
```

### Attributes
* `controls`
* `autoplay`
* `loop="on"`


</section>

---

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
* `volume` (0 < vol < 1) [iOS: always 1]
* `muted`

Tracks
* `tracks`

Playback-State
* `currentTime`
* `startTime`
* `duration`
* `paused`
* `defaultPlaybackRate`
* `playbackRate` ((<1 slow motion, >1 fast forward) [not on iOS])
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
* `canplaythrough` (when the source is ready to play)
* `seeking`
* `seeked`
* `timeupdate`
* `ended`
* `ratechange`

</section>

---

<section>

## Resources

* [Apple Developer: HTML5 Audio and Video](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/Using_HTML5_Audio_Video/Introduction/Introduction.html#//apple_ref/doc/uid/TP40009523-CH1-SW1)

</section>