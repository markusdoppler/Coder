---
title: Styles
---

# Styling HTML Elements

<section>

## Styling Images

### Sizing Images

```css
img {
    height: 200px;
    width: 200px;
}
```

### Positioning Images

* `display: inline;` (default)
* `display: block;`
* `float: left/right;`

```css
img {
    height: 200px;
    width: 200px;
}
```

### Circular images

```css
img {
    border-radius: 50%;
    width: 200px;
}
```

</section>

---

<section>

## Styling Lists

### List Style

#### Shorthand

```css
list-style: circle inside;
list-style: lower-roman;
```


#### List Style Type
may be placed on `<ul>`, `<ol>`, or `<li>` elements

```css
list-style-type: square;
```

| List Style Type Value    |    Content                    |
|:-----------------------|:----------------------------------|
| `none`                | No list item |
| `disc`                | A filled circle |
| `circle`                | A hollow circle |
| `square`                | A filled square |
| `decimal`                | Decimal numbers |
| `decimal-leading-zero`    | Decimal numbers padded by initial zeros |
| `lower-roman`            | Lowercase roman numerals |
| `upper-roman`            | Uppercase roman numerals |
| `lower-greek`            | Lowercase classical Greek |
| `lower-alpha` / `lower-latin`    | Lowercase ASCII letters |
| `upper-alpha` / `upper-latin`    | Uppercase ASCII letters |
| `armenian`            | Traditional Armenian numbering |
| `georgian`            | Traditional Georgian numbering |


#### Image as List Item Marker

```css
list-style-type: none;
padding-left: 12px;
background: url("arrow.png") 0 50% no-repeat;
```


#### List Style Position

```css
list-style-position: outside;
```

* `outside` (default)
* `inside`
* `inherit`


### Horizontally displaying a list

#### 1. Displaying List

```css
li {
    display: inline-block;
}
```

When changing the display property value to inline or inline-block, the list item marker, be it a bullet, number, or other style, is removed.

#### 2. Floating List

```css
li {
    float: left;
    margin: 0 20px; /* to prevent overlapping of list item marker */
}
```


</section>

---

<section>

## Styling Tables

### Borders
borders can only be applied to `<table>`, `<th>` and `<td>` elements, not on `<tr>` and table structure elements

#### Border Collapse

```css
table {
    border-collapse: collapse;
}
```

* `collapse`: condenses the borders into one, choosing the table cell as the primary border
* `separate` (default): all of the different borders will stack up next to one another
* `inherit`


#### Border Spacing

```css
table {
    border-collapse: separate;
    border-spacing: 4px;
    border-spacing: 5px 10px; /* horizontal vertical */
}
```


## Striped Table
```css
tbody tr:nth-child(even) {
    background: #f0f0f2;
}
```

* `class` on every other `<tr>` element
* `:n-child(even/odd)` pseudo element



### Aligning Text

#### Horizontal Align

```css
th, td {
text-align: left;
text-align: center;
text-align: right;
}
```


##### Vertical Align
works only with `inline` and `table-cell` elements

won't work for `block`, `inline-block`, or any other element levels

```css
th, td {
    vertical-align: middle;
}
```

* `top`
* `middle`
* `bottom`

Relations
* `table-cell` elements: vertically position text in relation to the table cell
* `inline` level: to the closest parent element
* `baseline` ????

</section>

---

<section>

## Styling Forms

### Pseudo - classes for required/optional form elements

```css
:optional { ... }
:required { ... }
```

# Pseudo-class for `checkbox`

```css
:checked  { ... }
```

</section>