---
title: Basics
---

# JavaScript Basics

<section>

## Variables

### Variable Names
* a variable name must begin with a letter, underscore (`_`), or dollar sign (`$`)
* and they cannot use hyphens
* they cannot begin with numbers, although they may be used _subsequently_, e.g. `variable1`
* JavaScript is **case sensitive**

The **convention** around naming variables is to use `camelCase`

```js
var theStarterLeague = 125;
var food_truck = "Coffee";
var mixtape01 = true;
var vinyl = ['Miles Davis', 'Frank Sinatra', 'Ray Charles'];
```


### Values

Primitives
* String
* Number
* Boolean (`true` or `false`)

* `undefined`
* `null`

Objects
* Array
* Object
* Date
* Function
* Symbol
* Promise

</section>

---

<section>

## Statements
JavaScript is a set of statements, executed by the browser in the sequence they are written

```js
log(polaroid);
return('bicycle lane');
alert('Congratulations, you ' + outcome);
```

</section>

---

<section>

## Debugging

Pause the flow of JavaScript
* `alert`
* `prompt`
* `confirm`

</section>

---

<section>

## Control flow


### Comparison

* `a == b`  – same value
* `a === b` – same value and same type
* `a = b`  – declaration, not a comparison!


### Loops

For-loop
```js
for (let i=0; i<10; i++) {
  // ...
}
```

For-loop over property names (i.e. indices) of an iterable (e.g. array)
```js
for (let i in arr) {
   console.log(i);
}
```

For loop over property values (i.e. array items) of an iterable (e.g. array)
```js
for (let i of arr) {
   console.log(i);
}
```

While-loop
```js
let i = 5
while (i < 10) {
   i++;
}
```

### Conditionals

```js
if (isTasty) {

} else if (isEatable) {

} else {

}
```

Shorthand
```js
const greeting = isNice ? "Hello! Nice to see you." : "Hi.";
```

### Switch

```js
switch (food) {
  case "Broccoli":
    console.log("Nice!");
    break;
  case "Carrot":
    console.log("Awesome!!");
    break;
  default:
    break;
}
```

### Try catch

```js
try {

} catch {

}
```


</section>

---

<section>

## Numbers


### Round to two decimal places

```js
parseFloat(e.offsetX).toFixed(2)
```

</section>

---

<section>

## Strings

```js
var myString = "Hello World".
```


**Find and replace with RegEx**
* [Mozilla: RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
* [Mozilla: Regular Expressions Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
```js
let lunch = "Pizzapie";
lunch = lunch.replace(/Pizza/g, "Broccoli");
```

**Split**

```js
var pathArray = window.location.pathname.split('/');
```

</section>

---

<section>

## Arrays

```js
var myArray = [5, 10, 15];
```

Get array element at index
```js
myArray[2]; // 15
```

Get array length
```js
myArray.length
```



**add**
add a new element to an array (at the end)
```js
myArray.push(7);
```

add a new element to an array (at the beginning)
```js
myArray.unshift(2);
```


**delete**
delete element at the end
```js
myArray.pop();
```

delete element at the beginning
```js
myArray.shift();
```

delete element at index
```js
delete myArray[0]; // myArray[0] is now undefined!
```

**index of**

```js
let list = [0,5,10,15]
const index = list.indexOf(5)

// array contains object
const array = ["apple", "pear", "orange"];
if (array.indexOf("apple") > -1) {
  console.log("array contains apple");
}
```



**splice**
`myArray.splice(spliceIndex, spliceRangeOverwrite, newArrayItems ...);`
```js
myArray.splice(3,0, 20,25); // adds 20 and 25 to myArray at index 3
myArray.splice(0,2);        // removes the first two elements
```

**slice**
`myArray.slice(sliceBeginIndex, sliceEndIndex=array.length);`
```js
myArray.slice(3);     // subarray from index 3 upwards
myArray.slice(0,2);   // array with the first two elements
```


**concatenate**
```js
let myArray1 = [1,2];
let myArray2 = [3,4];
let myArray = myArray1.concat(myArray2);
// [1,2,3,4]
```




**for each**
```js
let items = [1,5,10,17]
let sum = 0
items.forEach(i => {
  sum += i
})
```


### Array methods: map, filter, reduce

**map**
```js
var numbers = [4, 9, 16, 25];

numbers.map(Math.sqrt);

numbers.map(item => item*2);

// retrieve array of ages from array of objects
const persons = [
  {name: "John", age: 72},
  {name: "Sally", age: 35},
  {name: "Lisa", age: 15},
];
persons.map(person => person.age);
```

**filter**
```js
const numbers = [1, -1, 2, 3];

const positiveNumbers = numbers.filter(function(value, index, array) {
  return value >= 0;
});

const positiveNumbersWithES6 = numbers.filter(value => value >= 0);
```

**reduce**
```js
const numbers = [1,2,3,4,5,6,7];

const factorialOfEight = numbers.reduce((res, value) => res * value, 8);
```

```js
let items = [1,3,5,7,9]
const sumResult = items.reduce((sum, number) => sum + number, 0)
```





### array from HTMLCollection
```js
const objects = document.getElementsByClassName('asyncImage')
objectsArray = Array.from(objects)
```

</section>

---

<section>

## Functions
```js
function sayHello(name) {
    return('Hello ' + name);
};
sayHello('Markus');
```

### Functional programming
```js
function Planet(mass, radius) {
    this.mass = mass
    this.radius = radius
}
const planet = Planet(10, 3)
```


### Arrow notation
```js
() => {
  // function content
}
```
```js
( properties ) => {
  // function content
}
```


### Immediately invoked function expression

```js
(function() {
  console.log("IIFE!")
})();
```



### Callback function
```js
setTimeout(callback, 1000);

function callback() {

}
```

</section>

---

<section>

## JavaScript Event Loop

![Event Loop](../assets/JavaScript/event-loop.png)

### Call Stack
single threaded = single callstack = one thing at a time

### Web APIs

pushed to task queue when done


### Callback/Task Queue


### Event Loop
If stack is empty, task pending in the task queue is pushed onto the stack.

</section>

---

<section>

## Objects
objects = collection of key and value pairs

keys are also known as properties
```js
var school = {
    name: 'The Starter League',
    location: 'Merchandise Mart',
    students: 120,
    teachers: ['Jeff', 'Raghu', 'Carolyn', 'Shay']
};
school['name'];
school.name;
```

Create object via `new`
```js
wordData = new Object();
wordData.wordType = 4;
```


get all property keys and values (as arrays)
```js
Object.keys(myObject);
Object.values(myObject);
```







### Object Literal
```js
const book = {
  title: "The Old Man and the Sea",
  author: "Earnest Hemingway",
  year: "1952",
  getSummary: function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
};

console.log(book.title);
```


### Constructor
Example 1
```js
function Book(title, author, year) {
  this.title  = title;
  this.author = author;
  this.year   = year;

  this.getSummary = function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
}

// Instantiate an Object
const book = new Book("The Old Man and the Sea", "Earnest Hemingway", "1952");
```

Example 2
```js
function Circle(x,y,r) {
  this.x = x;
  this.y = y;
  this.r = r;

  this.draw = function () {
    // draw
  }
}

let circle = new Circle(10,20, 5);
circle.draw();
```


### Prototype
```js
function Book(title, author, year) {
  this.title  = title;
  this.author = author;
  this.year   = year;
}

Book.prototype.getSummary = function() {
  return `${this.title} was written by ${this.author} in ${this.year}`;
}

Book.prototype.revise = function(newYear) {
  this.year = newYear;
  this.revised = true;
}
```


### Inheritance

```js
function Lexicon(title, author, year, partNumber) {
  Book.call(this, title, author, year);

  this.partNumber = partNumber;
}

// Inherit Prototype
Magazine.prototype = Object.create(Book.prototype);

// Use Lexicon Constructor
Lexicon.prototype.constructor = Lexicon;

const lexicon3 = new Lexicon("Mammals", "Charles Darwin", "1940", "3");
```


### Object Create
```js
// Object of prototype functions
const bookProtos = {
  this.getSummary: function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
  this.revise = function(newYear) {
    this.year = newYear;
    this.revised = true;
  }
}

// Create object
const book = Object.create(bookProtos);
book.title = "The Old Man and the Sea";
book.author = "Earnest Hemingway";
book.year = "1952";

// Create object
const book2 = Object.create(bookProtos, {
  title: { value: "The Old Man and the Sea" },
  author: { value: "Earnest Hemingway" },
  year: { value: "1952" }
});
```


### Classes (ES6+)
```js
class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }

  revise(newYear) {
    this.year = newYear;
    this.revised = true;
  }

  static topBookStore() {
    return "Barnes & Noble";
  }
}

// Instantiate Book object
const book1 = new Book("The Old Man and the Sea", "Earnest Hemingway", "1952");

console.log(Book.topBookStore());
```

### Subclasses
```js
class Lexicon extends Book {
  constructor(title, author, year, partNumber) {
    super(title, author, year);
    this.partNumber = partNumber;
  }
}

// Instantiate Lexicon object
const lex = new Lexicon("Mammals", "Charles Darwin", "1940", "3");
console.log(lex.getSummary());
```


### Class File
```js
class Duck extends Bird {
  constructor(name, size, isAbleToSwim, isAbleToFly, quack) {
    super(name, size, isAbleToSwim, isAbleToFly);
    this.quack = quack;
  }
}

export default Duck;
```

</section>

---

<section>

# Destructuring

```js
const [a, b, ...c] = [5,10,15,20];
```

```js
let [a, b] = [1,2];
```

```js
let {a, b, ...c} = {a: 10, b: 20, c: 30, d: 40};
```

```js
({a, b} = {a: 10, b: 20});
```

</section>
