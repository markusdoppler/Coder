---
title: Grid
---

## CSS Grid

<section>

## Grid Layout

[CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)

Terms
* Grid container
* Grid item      (direct descendant of grid container)
* Grid line       (numbered 1 ... (column+1), 1 ... (row+1) )
* Grid cell
* Grid area      (between 4 specified grid lines)
* Grid track     (i.e. row or column)
* Grid gap       (between grid tracks, also called gutters)

### Container element

```css
.container {
  display: grid;

  grid-template-columns: 1fr 4fr 1fr;
  grid-template-rows: auto 1fr 2fr;

  grid-template-columns: 40px 50px auto 50px 40px;
  grid-template-rows: 25% 100px auto;

  grid-template-columns: [first] 40px [line2] 50px [line3] auto [col4-start] 50px [five] 40px [end];
  grid-template-rows: [row1-start] 25% [row1-end] 100px [third-line] auto [last-line];

  grid-template-columns: repeat(3, 20px [col-start]);


  grid-template-areas:
    "header header header header"
    "main main . sidebar"
    "footer footer footer footer";

  /* shorthand */
  grid-template:
    [row1-start] "header header header" 25px [row1-end]
    [row2-start] "footer footer footer" 25px [row2-end]
    / auto 50px auto;

  grid-column-gap: 10px; /* < Safari 12 */
  grid-row-gap: 15px;    /* < Safari 12 */
  column-gap:
  row-gap:
  gap:


  /* child item alignment */
  justify-items: center;
  align-items: center;
}
```

### Grid item

```css
.item {
    grid-column-start:
    grid-row-start:
    grid-column-end:
    grid-row-end:

    /* shorthand */
    grid-column: 2/4;     /* from column line 2 to 4 */
    grid-row: 2/3;        /* from row line 2 to 3 */

    grid-column: 3 / span 2;
    grid-row: third-line / 4;

    /* short shorthand */
    grid-area: 1 / col4-start / last-line / 6;

    /* name */
    grid-area: header-name;

    justify-self: start | end | center | stretch;
    align-self: start | end | center | stretch;
    place-self: center;
}
```

`grid-column` and `grid-row`

</section>

---

<section>

## Automatic columns

```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 360px), 1fr));
  gap: 4rem;
}
```

</section>

---

<section>

## Grid Auto Flow

```css
display: grid;
grid-auto-flow: column;
grid-auto-columns: 100%;
```

```css
display: grid;
grid-auto-flow: columns;
grid-auto-columns: 1fr;
gap: 1em;
```

</section>

---

<section>

## Grid Templates

### Repeat
```css
display: grid;
grid-template-columns: repeat(2, min-content);
```

### Min-Max
```css
display: grid;
grid-template-columns: minmax(200px, 400px);
```


### Grid Template Areas

**Grid Template Areas Example**

![Grid example](../assets/CSS/grid-example.svg)

```css
.container {
  display: grid;
  grid-template-columns: 50px 50px 50px 50px;
  grid-template-rows: auto;
  grid-template-areas:
    "header header header header"
    "main main . sidebar"
    "footer footer footer footer";
}

.item-a {
  grid-area: header;
}
.item-b {
  grid-area: main;
}
.item-c {
  grid-area: sidebar;
}
.item-d {
  grid-area: footer;
}
```

</section>

---

<section>

## Responsive Example with Breakpoints

```css
.container {
  display: grid;

  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 1fr 2fr;

  grid-template-areas:
    "header header"
    "main sidebar"
    "main sidebar"
    "footer footer";
}

.header {
  grid-area: header;
}
.main {
  grid-area: main;
}
.sidebar {
  grid-area: sidebar;
}
.footer {
  grid-area: footer;
}

@media screen and (min-width: 800px) {
    .container {
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-areas:
    "header header header header"
    "main main main sidebar"
    "main main main sidebar"
    "footer footer footer footer";
    }
}
```

</section>