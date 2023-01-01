---
title: HTML5
---

# HTML 5 Elements

<section>

## DOM
* Document Object Model
* Provides structural representation for HTML (and XML) documents
* The DOM represents all of the different elements and their relationship to each other
* Elements nested inside others have a *parent and child relationship* while elements that share the same parent have a *sibling relationship*.


### Parsing HTML

[HTML Parser Book by Simon Pieters](https://htmlparser.info)

</section>

---

<section>

## Elements, tags and attributes

```html
<a href="#" target="_blank">I'm a link</a>
```

</section>

---

<section>

## Comments

```html
<!-- this is a comment -->
```

</section>

---

<section>

## Inline Event Listener

```html
<div onclick="var event = arguments[0] || window.event; [...]"></div>

<span onclick="event.stopPropagation(); alert('you clicked inside the header');">something inside the header</span>
```

</section>

---

<section>

## Document structure

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Hello World</title>
    </head>
    <body>
    <!--  -->
    </body>
</html>
```

</section>

---

<section>

## Head

### Language
* `lang` global attribute

```html
<html lang="en">
</html>
```

### Adding CSS to HTML

Options
1. include **external file** in header (preferred!)
2. **internal** styles in header
3. **inline** via the `style` attribute

```html
<link rel="stylesheet" href="main.css">
<link rel="stylesheet" href="subfolder/main.css">
```


### Adding JavaScript to HTML

Best place
* right before `</body>` tag (after all of the HTML has been parsed)
* inside `<head>`, if JavaScript is needed to help render HTML and determine it’s behavior

```html
<script src="script.js"></script>
```


### Meta

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="Description ...">
```

For details see [Meta Tags](elements-meta).

</section>

---

<section>

## Scripts

Attributes
* `async`: no guarantee which file with `async` attribute loads first
```html
<script async src="external-js.js"></script>
<script async src="other-external-js.js"></script>
```

* `defer`: would not run until the page was ready
* execute in order, but still not block the rest of the page while the files are being downloaded to the browser. Usecase: a script that needs to synchronize with any other script, i.e. load before or after
```html
<script defer src="external-js.js"></script>
<script defer src="other-external-js.js"></script>
```

### Event Listeners in HTML
Simple Script that is runw when the HTML finished loading

```html 
<body onload="init();">
  <!-- all the HTML content ... -->
  <script>
    function init() {
      document.body.innerHTML = "HTML Loaded";
    }
  </script>
</body>
 
*/


</section>

---

<section>

## Anchor link
* `inline`-level (may wrap block-level elements)


```html
<a href="https://apple.com">Apple</a>
```

### Paths
relative path: "pages/about.html"
absolute path: "https://markusdoppler.at"


### Linking to an email adress

```html
<a href="mailto:markusdoppler@me.com">Email me</a>
```

adding a predefined email
```html
<a href="mailto:markusdoppler@me.com?subject=Email%20subject&body=How%20are%20you">Email me</a>
```
* The first parameter following the email address must begin with a question mark `?`
* binding one parameter to another we need to use the ampersand `&` to separate the two.
* **spaces** are encoded with `%20`
* **line-breaks** are encoded with `%0A`


### Opening Links in a New Window

```html
<a href="https://apple.com">apple</a>
```

open in the same window (default)
```html
<a href="https://apple.com" target="_self"></a>
```

open in a new window / tab
```html
<a href="https://apple.com" target="_blank"></a>
```

### Linking to Parts of the Same Page

1.  set an `id` attribute on the element we wish to link to
```html
<h2 id="section-3">
```

2. Create a link to that element
```html
<a href="#section-3">go to section 3</a>
```


</section>

---

<section>

## Text

### Headings
* `block`-level elements

```html
<h1>1 Heading</h1>
<h2>1.2 Heading</h2>
<h3>1.2.3 Heading</h3>
<h4>1.2.3.4 Heading</h4>
<h5>1.2.3.4.5 Heading</h5>
<h6>1.2.3.4.5.6 Heading</h6>
```

### Paragraphs
* `block`-level elements

```html
<p></p>
```



#### Bold text
* `inline`-level elements

strong importance
```html
<strong></strong>
```

stylistically offset text
```html
<b></b>
```



#### Italic text
* `inline`-level elements

stressed emphasis
```html
<em></em>
```

Alternative voice or tone (almost as if it were placed in quotation marks)
```html
<i></i>
```



#### Small text
* `inline`-level element

```
<small></small>
```

* USES: copyright information


#### Citations & Quotes

`<cite>` is used to reference a creative work, author, or resource

`<q>` is used for _short, inline quotations_

```html
<q cite="https://markusdoppler.at">
```
`<blockquote>` is used for _longer external quotations_

```html
<blockquote cite="https://markusdoppler.at">
```

#### Summary and Details

```html
<details>
   <summary>Summary</summary>
   <p>Details....</p>
</details>
```



#### Encoding Special Characters

| encoding | symbol                |
|:--------:|:---------------------:|
|`&ndash;`	|	–                    |
|`&shy;	`	|(line-break possibility)|
|`&copy;`	|©                       |
|`&eacute;`|	é                    |
|`&#8212;`	|	—                    |
|`&#8220;`	|	“                    |
|`&#8221;`	|	”                    |
|`&#8217;`	|	’                    |
|`&lt;`    |   <                    |
|`&gt;`    |   >                    |
|`&amp;`   |   &                    |





#### Time

```html
<time datetime="08:30:00">8:30 AM</time>
```

</section>

---

<section>

## Divisions and Spans
* Container elements (for styling)

### Divisions
* `block`-level element

```html
<div></div>
```


### Span
* `inline`-level element

```html
<span></span>
```

</section>

---

<section>

## Images, Audio and Video

### Images
* `inline`-level element

```html
<img src="broccoli.png" alt="Broccoli">
<img src="https://markusdoppler.at/broccoli.png" alt="Broccoli!">
```

*Attributes*
* `src`: source of the image
    * most commonly supported: gif, jpg, and png
    * jpg images used for photographs (high colour count, low file size)
    * png images used for icons or background patterns (transparencies)
* `alt`: alternative text for search engines and assistive technologies
* `width`and `height`: to tell the browser how large the image should be before the page even loads - faster page rendering! (*attention*: CSS `width`and `height` attributes will take precedence over the HTML attributes)



### Audio (HTML5)
* `block`-level element

```html
<audio src="jazz.mp3"></audio>
```

```html
<audio controls>
    <source src="jazz.ogg" type="audio/ogg">
    <source src="jazz.mp3" type="audio/mp3">
    <source src="jazz.wav" type="audio/way">
    Fallback (e.g. download link) if browser does not support audio element
</audio>
```

*Attributes*
* `src`: most commonly supported: ogg, mp3, and wav
* `controls`: will display a browser’s default audio controls, including play and pause, seek, and volume controls, by default nothing will be displayed
* `autoplay`: audio will automatically play upon loading
* `loop`: will cause an audio file to repeat continually, from beginning to end
* `preload="none|auto|metadata"`
    * `none`: won’t preload any information about an audio file
    * `auto` (default): will preload all information about an audio file
    * `metadata`: will preload any available metadata information about an audio file, such as the clip’s length, but not all information



### Video (HTML5)
* `block`-level element

```html
<video src="clip.mov"></video>
```

```html
<video controls poster="earth-video-screenshot.jpg">
    <source src="clip.mp4" type="video/mp4">
    <source src="clip.ogv" type="video/ogg">
    <source src="clip.mov" type="video/mov">
    Fallback (e.g. download link) if browser does not support video element
</video>
```

*Attributes*
* `src`: most commonly supported: mp4
* `controls`: if _not_ specified, video will display by default; Best practise: always include, except if there is a reason not to allow users to start, stop, or replay the video
* `autoplay`: video will automatically play upon loading
* `loop`
* `width` and `height`: better specify in CSS
* `preload="none|auto|metadata"`
* `poster`: specify image to use as a poster image

A *customized player* can be implemented using _JavaScript_.


### Inline Frame (HTML5)
* `block`-level element

```html
<iframe src="https://markusdoppler.at"></iframe>
```

*Attributes*
* `frameborder` 
* `width` and `height` 


### Figure

```html
<figure>
    <img src="dog.jpg">
    <figcaption>a black, brown, and white dog</figcaption>
</figure>
```

</section>

---

<section>

## Lists

### Unordered Lists
* `block`-level element

```html
<ul>
    <li>Orange</li>
    <li>Green</li>
    <li>Blue</li>
</ul>
```


### Ordered Lists
* `block`-level element

```html
<ol start="5" reversed>
    <li>Five</li>
    <li value="66">Six</li>
    <li>Seven</li>
</ol>
```

`<ol>` attributes
* `start`
* `reversed`

`<li>` attributes
* `value`

Nota Bene
* the only element we can place as a direct child of the `<ul>` and `<ol>` elements is the `<li>` element
* the `<li>` element has to be a direct child of either a `<ul>` or `<ol>` element

### Description Lists
* `block`-level element

```html
<dl>
    <dt>physics</dt>
    <dd>the branch of science concerned with the nature and properties of matter and energy</dd>
    <dt>biology</dt>
    <dd>the study of living organisms</dd>
</dl>
```



### Nested lists

```html
<ul>
    <li></li>
    <li></li>
    <li>
        <ul>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </li>
</ul>
```

</section>

---

<section>

## Forms

### Form

```html
<form action="/login" method="post">
    ...
</form>
```

*Attributes*
* `action`: contains the URL to which information included within the form will be sent for processing by the server
* `method`: HTTP method browsers should use to submit the form data

*Attributes* for all form elements
* `disabled`: turns off an element or control so that it is not available for interaction or input
* `placeholder` (HTML5): provides a hint or tip within the form control of an `<input>` or `<textarea>` element that disappears once the control is clicked in or gains focus 
* `value`: value text stays in place when a control has focus unless a user manually deletes it; use case: pre-populating data
* `required` (HTML5): enforces that an element or form control must contain a value upon being submitted to the server
other
* `accept`
* `autocomplete`
* `autofocus`
* `formaction`
* `formenctype`
* `formmethod`
* `formnovalidate`
* `formtarget`
* `max`
* `maxlength`
* `min`
* `pattern`
* `readonly`
* `selectionDirection`
* `step`


### Text Fields

```html
<input type="text" name="username">
```

*Attributes*
* `type`
    * `text`
    * `password`
    * `color` (the following are all new in HTML5)
    * `date`
    * `datetime`
    * `email`
    * `month`
    * `number`
    * `range`
    * `search`
    * `tel`
    * `time`
    * `url`
    * `week`
* `name`

### Text Areas

```html
<textarea name="comment">Add your comment here</textarea>
```

*Attributes*
* `name`
* `cols`: width in terms of the average character width
* `rows`: number of lines of visible text
* _Best practise_: `width` and `height` using CSS


### Radio Buttons
*Only one* of the radio buttons of one group (denoted by `name` attribute) can be selected

```html
<input type="radio" name="day" value="Friday" checked> Friday
<input type="radio" name="day" value="Saturday"> Saturday
<input type="radio" name="day" value="Sunday"> Sunday
```

*Attributes*
* `type=radio`
* `name`: radio buttons with the same `name` attribute value correspond to one another
* `value`: specific value for radio button
* `checked` (boolean): preselected radio button


### Checkboxes
check boxes allow users to select multiple values and tie them all to one control name

```html
<input type="checkbox" name="day" value="Friday" checked> Friday
<input type="checkbox" name="day" value="Saturday" checked> Saturday
<input type="checkbox" name="day" value="Sunday"> Sunday
```

*Attributes*
* `type=checkbox`
* `name`: checkboxes with the same `name` attribute value correspond to one another
* `value`: specific value for checkbox
* `checked` (boolean): a preselected checkbox


### Drop-Down Lists
the perfect format for a long list of choices

```html
<select name="day">
    <option value="Friday" selected>Friday</option>
    <option value="Saturday">Saturday</option>
    <option value="Sunday">Sunday</option>
</select>
```

`select` *Attributes*
* `name`: drop-down lists with the same `name` attribute value correspond to one another
* `multiple`: choose more than one option from the list at a time (to choose multiple options one will need to _hold down the Shift key_ while clicking to make selections)

`option` *Attributes*
* `value`: specific value for an option
* `selected` (boolean): a preselected option


### Hidden Input

```html
<input type="hidden" name="tracking-code" value="abc-123">
```


### File Input

```html
<input type="file" name="file">
```


### Menu

```html
<menu>
   <button>A</button>
   <button>B</button>
   <button type="submit">Send</button>
</menu>
```

### Submit
#### Submit Input

```html
<input type="submit" name="submit" value="send">
```

*Attributes*
* `value`: is used to specify the text that appears within the button


#### Submit Button
default: performs the same way as the `<input>` element with the `type` attribute value of `submit`

```html
<button name="submit">
    Sumbit <i>Me</i>!
</button>
```

*Attributes*
* `value`: is used to specify the text that appears within the button


### Labels

```html
<label for="username">Username</label>
<input type="text" name="username" id="username">
```

*Attributes*
* `for`: matching up the `for` and `id` attribute values ties the two elements together

clicking the label associated with an `input` element brings it in focus

#### Nesting Label and Input
allows omission of the `for` and `id` attributes

```html
<label>
    Username
    <input type="text" name="username">
</label>
```


### Fieldset
block-level element

```html
<fieldset>
    ...
</fieldset>
```



### Legend
provides a caption, or heading, for the `<fieldset>` element

```html
<legend>Billing address</legend>
```

</section>

---

<section>

## Tables

### Table

```html
<table>
    <tr>
            <th scope="col">...</th>
            <th scope="col">...</th>
            <th scope="col">...</th>
    </tr>
    <tr>
            <td>...</td>
            <td>...</td>
            <td>...</td>
    </tr>
    ...
</table>
```

### Table Row

```html
<tr>
    ...
</tr>
```



### Table Data

```html
<td>...</td>
```

*Attributes*
* `headers`: a cell, either a `<td>` or `<th>` element, needs to be associated with a different header, the `headers` attribute comes into play. The value of the headers attribute on a `<td>` or `<th>` element needs to match the `id` attribute value of the `<th>` element that cell pertains to.
* `colspan`: span a single cell across multiple columns (default: 1)
* `rowspan`: span a single cell across multiple rows (default: 1)


### Table Header
works just like the `<td>` element in that it creates a cell for data, but signifies that the data within the cell is a heading

may be used within both columns and rows

```html
<th scope="col">...</th>
```

*Attributes*
* `scope`: helps to identify exactly what content a table header relates to
    * `col`
    * `row`
    * `colgroup`
    * `rowgroup`
* `colspan`: span a single cell across multiple columns (default: 1)
* `rowspan`: span a single cell across multiple rows (default: 1)


### Table Structure

#### Table Caption
provides a caption or title for a table

must come immediately after the opening `<table>` tag

```html
<table>
    <caption>...</caption>
    ...
</table>
```


#### Table Head, Body and Foot

```html
<table>
    <caption>...</caption>
    <thead>
        ...
    </thead>
    <tbody>
        ...
    </tbody>
    <tfoot>
        ...
    </tfoot>
</table>
```

</section>

---

<section>

## Attributes

### ID

```html
id="section-2"
```


### Class

```html
class="broccoli"
class="broccoli green-veg"
```


### Hidden
* semantically more correct than `display: none;` in CSS.

```html
<div hidden>....</div>
```


### Inline Style

```html
<h1 style="text-align: center">My Heading</h1>
```


### `src`
```html
<img src="">
<script src=""></script>
```


### `href`
```html
<a href=""></a>
<link href="" rel="">
```

</section>

---

<section>

## Self-closing (Single) Elements

```html
<br>
<embed>
<hr>
<img>
<input>
<link>
<meta>
<param>
<source>
<wbr>
```

</section>

---

<section>

## Structurally Based Elements
* `block`-level elements

```html
<header>
<nav>
<article>
<section>
<aside>
<footer>
```

![Basic HTML Structure](../assets/HTML/html-structure.png)

### SEMANTICS & GOOD PRACTICES

#### `<header>`
may include a heading, introductory text, and even navigation

#### `<nav>`
global navigation, a table of contents, previous/next links, or other noteworthy groups of navigational links

may contain anchor elements with links to other pages within the same website or to parts of the same web page

#### `<article>`
content within the element could be replicated elsewhere without any confusion

content can be independently redistributed or syndicated
#### `<section>`
a thematic grouping of content, which generally, but not always, includes a heading

commonly used to break up and provide hierarchy to a page

#### `<aside>`
holds content, such as sidebars, inserts, or brief explanations

#### `<footer>`
identifies the closing or end of a page, article, section, or other segment of a page


</section>

---

<section>

## Display Levels

### Block-Level Elements

* `block`-level elements

```html
<div></div>
<h1></h1>
<h2></h2>
<h3></h3>
<h4></h4>
<h5></h5>
<h6></h6>
```


### Inline-Level Elements

* `inline`-level elements

```html
<span></span>
```

</section>

---

<section>

## Other elements

* `<br>`
* `<hr>`
* `<base>`
* `<sub>`
* `<sup>`
* `<meta>`

</section>

---

<section>

## Custom Tags and Attributes

* [Web Components](https://developers.google.com/web/fundamentals/web-components)

```html
<my-book data-pages="400" data-author="Nietzsche">The Wanderer and His Shadow</my-book>
```

```js
var myBook = document.createElement('my-book');
myBook.addEventListener('click', function(e) {
  alert('Thanks!');
});
```

Use the new operator:
```js
var myBook = new myBook();
document.body.appendChild(myBook);
```

* **Hyphenation!** Custom elements should consist of at least one - like my-book or app-menu or header-title etc. Just, don't use `data-*` since it's reserved for data-attributes.
* All custom elements have a display of `inline` by default. You can change that with CSS or JavaScript, however.
* Internet Explorer does not recognize any of these elements unless you first "create" them with JavaScript:
```js
document.createElement('my-book');
```

</section>

---

<section>

## Drag and Drop API

* `<img>` and `<a>` elements are draggable by default
* other elements

```html
<div draggable="true"></div>
```

```css
.not-draggable {
   -webkit-user-drag: none;
}
```

[JavaScript Events](../JavaScript/dom#separate-html-document)

</section>
