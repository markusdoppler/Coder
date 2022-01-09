---
title: Positioning
---

# Positioning

<section>

## Position

identifies how an element is positioned on a page and whether or not it will appear within the normal flow of a document

used in conjunction with the *box offset properties* — `top`, `right`, `bottom`, and `left`


### Static Position
```css
position: static;
```

_default_ for every element

exists in the normal flow of a document

doesn’t accept any _box offset properties_ (i.e. `top`, `right`, `bottom`, and `left`)


### Relative Position
```css
position: relative;
```

allows elements to appear within the _normal flow a page_, leaving space for an element _as intended_ while not allowing other elements to flow around it

the original space and position of the `relative`ly positioned element will be preserved

allows an element’s display position to be modified with the _box offset properties_ (i.e. `top`, `right`, `bottom`, and `left`)

box offset properties identify where an element will be moved _relative to its original position_

`relative`ly positioned element may _overlap_, or _underlap_, other elements without moving them from their default position


### Absolute Position
```css
position: absolute;
```

will **not** appear within the _normal flow of a document_

the original space and position of the `absolute`ly positioned element will **not** be preserved

moved _in relation to_ their closest **`relative`ly positioned parent** element (if none is present: relative to `<body>`)

if no relatively positioned parent exists, in relation to the `<body>` element

`absolute`ly positioned element and not specifying any box offset property will position the element in the top left of its closest `relative`ly positioned parent

if `top`&`bottom` or `right`&`left` and **no** `height` and `width`, respectively, are specified, then the element will span the entire way.


### Fixed Position
```css
position: fixed;
```

positioning is relative to the _browser viewport_, and it **does not scroll** with the page

using multiple box offset properties, see `position: absolute;`

*Use Cases*
* fixed header or footer


### Box offset properties

```css
top:
right:
bottom:
left:
```

specify how elements may be positioned, and in which direction

only work on elements with a `relative`, `absolute`, or `fixed` positioning value

* `relative`ly positioned element: relative to _its default position_
* `absolute`ly or `fixed` positioned element: relative to _parent's position_

if `top` and `bottom` values specified: `top` property will take **priority**

if `left` and `right` values specified: `left` property will take **priority** (for English, German, etc. but not Arabic: `right`)


### Z-Index

```css
z-index: 1;
z-index: 500;
```

_Default_: Elements coming _at the top of the DOM_ are positioned _behind_ elements coming after them.

The element with the _highest_ `z-index` value will appear on the _top_ regardless of its placement in the DOM.

must first apply a `position` value of `relative`, `absolute`, or `fixed`


### Stacking context
create a new stacking context
```css
isolation: isolate;
```




</section>

---

<section>

## Display

```css
display: block;
display: inline;
display: table;
```

### `block`
Block-level elements begin on a new line, stacking one on top of the other

*occupy any available width*

may be nested inside one another

may wrap inline-level elements

default width: `100%`

default height: determined by element's content

### `inline`
lining up one after the other

*only maintain the width of their content*

may be nested inside one another

can*not* wrap block-level elements

ignores any `height` or `width` property values (default for `<span>`)

`margin-top` and `margin-bottom` are *not accepted*

`padding-top` and `padding-bottom` are *accepted* (may blend into the line above or below the given element, though)

### `table`
much like block-level elements

### `inline-block`
will display elements within a line (while allowing them to accept all box model properties)

if width is too large, try removing white spaces in HTML

usually a _small space_ will exist between two inline-block elements

### `flex`


### `grid`


### `none`
* completely hide an element and render the page _as if that element doesn’t exist_
* any elements nested within this element will also be hidden

Hide any element
```css
.hidden {
        display: none;
}
```

</section>

---

<section>

## Floats

```css
float: left;
float: right;
```

element to be floated to the `left` or `right` of their parent element

element is removed from the normal flow of a page

`width` of that element to default to the `width` _of the content within it_

the float property relies on an element having a display value of block (display value might be changed to block)

??? `margin` applied to left, if `float left`?

_Examples_
* two-column layout
* content wraps around floating picture


### Clear

```css
clear: left;
clear: right;
clear: both;
```

prevent content from wrapping around floated elements

clear has to be applied to an element appearing after the floated elements, not before, to return the page to its normal flow


### Contain ("clearfix", "cf")

```css
/*
    Clearfix
*/

.group:before,
.group:after {
    content: "";
    display: table;
}

.group:after {
    clear: both;
}

.group {
    clear: both;
    *zoom: 1;
}
```

add to any container element that will contain a float

floated elements must reside within a parent element with the class _group_

</section>

---

<section>

## Inline boxes

### White space
```css
white-space: no-wrap;
```

### Box-decoration
```css
box-decoration-break: clone;
```

<figure class="fig-1-3">
<div>
  <div>Lorem ipsum, dolor sit <span style="display: inline-block; background-color: navy; padding: 0.2rem 0.4rem; -webkit-box-decoration-break: clone; -o-box-decoration-break: clone; box-decoration-break: clone;">with box-decoration-break</span></div>
  <div>Lorem ipsum, dolor sit <span style="display: inline-block; background-color: navy; padding: 0.2rem 0.4rem;">without box-decoration-break</span></div>
</div>

<div>

```css
.inline-box {
  display: inline;
  -webkit-box-decoration-break: clone;
  -o-box-decoration-break: clone;
  box-decoration-break: clone;
}
```

</div>
</figure>

</section>

---

<section>

## Positioning elements - making grids

* `float`s
* `inline-block` elements
* `position` property
* `display: flex`
* `display: grid`


### Floating elements
a parent element has a `height` of *zero* if _all_ of the elements nested within it are floated.

#### Clearing Floats

Set `clear: both;` on an empty element just before the parents' closing tag.

#### Overflow Technique

Set `overflow: auto;` or `overflow: hidden;` on the parent element containing the floats. Also specify

```css
.parent {
    width: 100%;
    overflow: auto;
}
```

#### Clearfix Technique

```css
.group:before,
.group:after {
    content: "";
    display: table;
}
.group:after {
    clear: both;
}
.group {
    *zoom: 1;
}
```

</section>

---

<section>

## Example: Box centered in body / container

```html
<div class="container">
  <div class="box"></div>
</div>
```

Flexbox
```css
.container {
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100%;
   height: 100%;
}
.box {
   width: var(--pu_width);
   height: var(--pu_height);
   max-width: 100%;
   max-height: 100%;
}
```

Grid
```css
.container {
  display: grid;
  place-items: center;
}
.box {
   width: var(--pu_width);
   height: var(--pu_height);
   max-width: 100%;
   max-height: 100%;
}
```

Absolute position
```css
.container {
   width: 100%;
   height: 100%;
}
.box {
   --pu_height: 800px;
   --pu_width: 800px;
   position: absolute;
   top: calc(50vh - calc(var(--pu_height) / 2));
   left: calc(50vw - calc(var(--pu_width) / 2));
   width: var(--pu_width);
   height: var(--pu_height);
   max-width: 100%;
   max-height: 100%;
}
```

Margin trick
```css
.container {
   width: 100%;
   height: 100%;
}
.box {
   --pu_height: 800px;
   --pu_width: 800px;
   width: var(--pu_width);
   height: var(--pu_height);
   max-width: 100%;
   max-height: 100%;
   margin: 50% auto 0 auto;
   padding-top: -50%;
}
```

</section>

---

---
<section>

## Example: stacked elements
```html
<div class="parent">
   <div class="back"></div>
   <div class="front"></div>
</div>
```

`position: absolute`
```css
.parent {
   position: relative;
}
.back {
   position: relative;
}
.front {
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
}
```

`grid-area: 1 / 1`
```css
.parent {
   display: grid;
}
.back, .front {
   grid-area: 1 / 1;
}
```


</section>

---

<section>

## Example: Scrollable box with `flex`-centered children

```html
<div class="content">
    <div class="box">
        <div class="column">Column 1</div>
        <div class="column">Column 2</div>
        <div class="column">Column 3</div>
    </div>
</div>
```

```css
.content {
    flex: 1;
    display: flex;
    overflow: auto;
}
.box {
    display: flex;
    min-width: min-content;
}
```

</section>