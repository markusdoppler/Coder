---
title: jQuery
---

# JQuery
jQuery is an open source JavaScript library
simplifies the interaction between HTML, CSS, and JavaScript

[JQuery Documentation](https://jquery.com)
```
<script src="../../jquery/jquery.min.js"></script>
<script src="script.js"></script>
```


<section>

```js
$(this.hash)
```

### Measurements
```js
$(window).scrollTop()
$(window).scrollLeft()

$(element).offset().top
```

</section>

---

<section>

## jQuery Object
selects an element and then returns that element node to perform an action on it
```js
$()
jQuery()
```

### Document ready
placing all of our other custom written jQuery inside of this function

```js
$(document).ready(function(event){
	// jQuery code
})
```

</section>

---

<section>

## AJAX Request
```js
$.get('http://url.com', function callback(data) {
  console.log(data);
});
```

</section>

---

<section>

## Selectors
```js
$('.feature');           // Class selector
$('li strong');          // Descendant selector
$('em, i');              // Multiple selector
$('a[target="_blank"]'); // Attribute selector
$('p:nth-child(2)');     // Pseudo-class selector
```

### `this`
the element which was referenced inside of the original selector
```js
$('div').click(function(event) {
  $(this);
});
```

</section>

---

<section>

## Traversing

```js
$('div:has(strong)');

$('div').not('.type, .collection');

$('div').not('.type, .collection').parent();

$('.child').parent().siblings().addClass('.aunt-or-uncle')
```

### Filtering
* `.eq()`
* `.filter()`
* `.first()`
* `.has()`
* `.is()`
* `.last()`
* `.map()`
* `.not()`
* `.slice()`

### Miscellaneous Traversing
* `.add()`
* `.andSelf()`
* `.contents()`
* `.end()`

### DOM Tree Traversal
* `.children()`
* `.closest()`
* `.find()`
* `.next()`
* `.nextAll()`
* `.nextUntil()`
* `.offsetParent()`
* `.parent()`
* `.parents()`
* `.parentsUntil()`
* `.prev()`
* `.prevAll()`
* `.prevUntil()`
* `.siblings()`

</section>




---




<section>

## Manipulation

### Getting & Setting

```js
// Gets the value of the alt attribute
$('img').attr('alt');

// Sets the value of the alt attribute
$('img').attr('alt', 'Wild kangaroo');
```

### Attribute Manipulation

```js
$('li:even').addClass('even-item');
$('p').removeClass();
$('abbr').attr('title', 'Hello World');
```

Attribute Manipulation Methods
* `.addClass()`
* `.attr()`
* `.hasClass()`
* `.prop()`
* `.removeAttr()`
* `.removeClass()`
* `.removeProp()`
* `.toggleClass()`
* `.val()`


### Style Manipulation

```js
$('h1 span').css('font-size', 'normal');
$('div').css({
    fontSize: '13px',
    background: '#f60'
});
$('header').height(200);
$('.extend').height(30 + 'em');
```

setting multiple properties
```js
('div').css({ lineHeight: "30px", textAlign: "center" })
```

Style Manipulation Methods
* `.css()`
* `.height()`
* `.innerHeight()`
* `.innerWidth()`
* `.offset()`
* `.outerHeight()`
* `.outerWidth()`
* `.position()`
* `.scrollLeft()`
* `.scrollTop()`
* `.width()`


### DOM Manipulation

```js
$('section').prepend('<h3>Featured</h3>');
$('a[target="_blank"]').after('<em>New window.</em>');
$('h1').text('Hello World');
```

DOM Manipulation Methods
* `.after()`
* `.append()`
* `.appendTo()`
* `.before()`
* `.clone()`
* `.detach()`
* `.empty()`
* `.html()`
* `.insertAfter()`
* `.insertBefore()`
* `.prepend()`
* `.prependTo()`
* `.remove()`
* `.replaceAll()`
* `.replaceWith()`
* `.text()`
* `.unwrap()`
* `.wrap()`
* `.wrapAll()`
* `.wrapInner()`

</section>




---




<section>

## Events

```js
$('li').click(function(event){
    $(this).addClass('saved-item');
});
```

Event flexibility

```js
$('li').on('click', function(event){
    $(this).addClass('saved-item');
});
```

Nesting Events

```js
$('.pagination').on('hover', function(event){
    $('a#up').click();
});
```

Browser Events
* `.resize()`
* `.scroll()`

Document Loading
* `.ready()`

Event Handler Attachment
* `.off()`
* `.on()`
* `.one()`
* `jQuery.proxy()`
* `.trigger()`
* `.triggerHandler()`
* `.unbind()`
* `.undelegate()`

Event Object
* `event.currentTarget`
* `event.preventDefault()`
* `event.stopPropagation()`
* `event.target`
* `event.type`

Form Events
* `.blur()`
* `.change()`
* `.focus()`
* `.select()`
* `.submit()`

Keyboard Events
* `.focusin()`
* `.focusout()`
* `.keydown()`
* `.keypress()`
* `.keyup()`

Mouse Events
* `.click()`
* `.dblclick()`
* `.focusin()`
* `.focusout()`
* `.hover()`
* `.mousedown()`
* `.mouseenter()`
* `.mouseleave()`
* `.mousemove()`
* `.mouseout()`
* `.mouseover()`
* `.mouseup()`

</section>




---





<section>

## Effects
[jQuery Effects Documentation](https://api.jquery.com/category/effects/)

[jQuery UI Plugin](https://jqueryui.com)

### Effect Duration

```js
$('.error').show();
$('.error').show('slow');
$('.error').show(500);
```

### Effect Easing

```js
$('.error').show('slow', 'linear');
$('.error').show(500, 'linear');
```

easing functions
* `linear`
* `swing`

### Effect Callback
When an animation is completed it is possible to run another function, called a **callback function**.

```js
$('.error').show('slow', 'linear', function(event){
    $('.error .status').text('Continue');
});
```

### Effect Syntax

Basic Effects
* `.hide()`
* `.show()`
* `.toggle()`

Custom Effects
* `.animate()`
* `.clearQueue()`
* `.delay()`
* `.dequeue()`
* `jQuery.fx.interval`
* `jQuery.fx.off`
* `.queue()`
* `.stop()`

Fading Effects
* `.fadeIn()`
* `.fadeOut()`
* `.fadeTo()`
* `.fadeToggle()`

Sliding Effects
* `.slideDown()`
* `.slideToggle()`
* `.slideUp()`

</section>
