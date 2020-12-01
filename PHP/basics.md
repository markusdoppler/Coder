---
title: Basics
---

# Basics

<section>

## Overview

### Resources
* [W3Schools.com](http://w3schools.com)

PHP code usually is put inside a tag like so
```php
<?php
  /* PHP code goes here */
?>
```

**File Extension**: `.php`

</section>

---

<section>

## Comments

```php
// Comments on one line ...

/* Multi 
   line comments ... 
*/
```

</section>

---

<section>

## Variables

A variable is a keyword that is linked to a value stored in the system's memory.

### Naming Convention

Variables in PHP are signaled with a $-prefix. A variable can contain letters (a-z / A-Z), numbers (0-9) and other symbols. However it can only start with a letter or underscore.
Examples are `$var123`, `$_var`, `$Var`.

### Declaration

```php
$word = "Hello";
$number = 12;
```

### Destruction

```php
unset($var);
```

</section>

---

<section>

### Constant
**Constant** - Element does not change. It's an antonym of Variable.

```php
define("FOO", "Hello World"); // Declaration
FOO; // Call 
defined("FOO"); // Test
```

</section>

---

<section>

## Operators

### Calculation Operators

```php
$a + $b // Addition
$a - $b // Subtraction
$a * $b // Multiplication
$a / $b // Division
$a % $b // Modulo
$a++ // Post-Increment
++$a // Pre-Increment
$a-- // Post-Decrement
--$a // Pre-Decrement
```

### Comparison Operators

```php
==
===
!= <>
<
<=
>
>=
```

### Logical Operators

```php
AND &&
OR ||
XOR
!
```

</section>

---

<section>

## Control Structures

### if ... elseif ... else

```php
if (condition) {
  // Code
} else if (condition) {
  // Code
} else {
  // Code
}
```

**Alternative Notation:**

```php
if (condition):
  // Code 
endif;
```

**Ternary Operator:**

```php
(condition) ? /* Instr if TRUE */ : /* Instr if FALSE */;

echo ($int == 0) ? "int = 0" : "int != 0";
```

### switch

```php
switch ($var) {
  case "Hello":
      // Code
      break;
  case "World":
      // Code
      break;
  default: // Executed if all tests fail
      // Code
      break;
}
```

### while

```php
while (condition) {
  // Code
}
```

**Alternative Notation:**

```php
while (condition):
  // Code
endwhile;
```

### do ... while

```php
do {
  // Code 
} while (condition);
```

### for

```php
for (initialization; test, increment) {
  // Code 
}
```

### foreach

```php
foreach ($array as $value) {
  // Code 
}
```

```php
foreach ($filenames as $filename) {

}
```

Get key and value of the element
```php
foreach ($array as $key => $value) {
  // Code 
}
```

### `break` keyword

```php
while (condition) {
  // Code 
  if (true) {
    break; // Stops control structure
  }
}
```

```php
while (condition) {
  // Code 
  while (true) {
    break 2; // Stops several control structures
  }
}
```

### `continue` keyword

```php
for (initialization; test, increment) {
  if (true) {
    continue; // goes directly to the next iteration
  }
  // Code 
}
```

```php
while (condition) {
  for (initialization; test, increment) {
    if (true) continue 2; // goes directly to the next iteration of the other loop
  }
  // Code 
}
```

</section>

---

<section>

## Functions

### Declaration

```php
function foo($arg1, $arg2, $arg3 = 'Default Value') {
  // Code
}
```

### Use

```php
function foo($name) {
  echo "Hello ". $name;
}
foo("World"); // Displays >> Hello World
```

### `return` keyword

```php
function foo($name) {
  return "Hello ". $name;
}
echo foo("World"); // Displays >> Hello World
```

#### `global` keyword
```php
$i = 0;
function foo() {
  global $i:
  $i++;
}
while ($i < 10) {
  foo();
}
```

#### Passing by Reference
```php
function foo(&$arg) {
  $arg+=5;
}
$count = 0;
foo($count);
```

</section>

---

<section>

## Types

**Scalar Type** - single-valued data types, that can be used for individual variables, constants ...

**Composed Type** - regroups several fields of different types in the same variable.

### Boolean
```php
$bool = true;
$bool = false;
boolval(1);
boolval(0);
```

### Integer
```php
$integer = 5;
intval(5.6);
```

### Float
```php
$float = 3.14;
floatval("3.14")
```

### String

Concatenation
```php
$part1 = "Hello ";
$part2 = "World!"
$words = $part1 . $part2;
strval(123);
```

### Array

Declaration
```php
$array = array('apple', 'banana', 'pineapple');
$displayed = array();
```

Associative Array (dictionary)
```php
$array2 = array('A1' => 'apple',
'B2' => 'banana',
'C3' => 'pineapple');
```

Use
```php
$array[0]; // returns 'apple'
$array['A2']; // returns 'banana'
$array [2] = 'peach'; // overrides 'pineapple'

print_r($array); // prints keys and values of the array
```

#### Array Functions
```php
count($array); // count the elements of the array
sizeof($array); // does the same as count();
```

Add and delete
```php
array_push($array, 'strawberry'); // add an element at the end of an array
array_unshift($array, 'strawberry'); // add an element at the beginning of an array
array_pop($array); // delete an element at the end of an array
array_shift($array); // delete an element at the beginning of an array
```

Split and concatenate
```php
$array = explode(' ', 'Hello World !'); // splits a string into an array of strings
$str = implode(', ', $array); // concatenate array's elements into a string
```

Sorting
```php
sort($array); // sorts elements in ascendant order (A-Z and 0-9)
rsort($array); // sorts elements in descendant order
```

Array non-empty
```php
if ($list) {
  print $list[0];
}
```

Array contains
```php
if (in_array($filename, $files)) {
  print $filename." is in the list ".$files."!";
}
```

### Dates

**UNIX Timestamp** - System for describing points in time, defined as the number of seconds elapsed since the January 1, 1970, not counting leap seconds.

Date Functions
```php
time(); // number of seconds since 01/01/1970

mktime(hour, minute, second, month, day, year);
mktime(21, 37, 12, 11, 01, 1993);

date("d/m/s H:i:s", 1216786314);
```
String Format Characters:
* `d` - day
* `m` - month
* `Y` - year (4 digits)
* `y` - year (2 digits)
* `H` - hour (24-hour format)
* `h` - hour (12-hour format)
* `i` - minutes
* `s` - seconds

```php
checkdate(06,21,1996); // The date is correct
```

### Predefined Constants
```php
PHP_EXTENSIONS_DIR
```

#### Magic Constants
* `LINE`
* `FILE`
* `FUNCTION`
* `CLASS`
* `METHOD`


### Functions

Display Function
```php
echo "Hello World!";
```

Print
```php
print "<h3><a class=\"file\" href=\"$parent\">Parent Directory</a></h3>"
```

Know the Type
```php
gettype($var);
```

Information Functions
```php
var_dump($var); // displays structured information about one or more expressions that includes its type and value
var_export($var); // structured information about the given variable (valid PHP code)
print_r($var); // displays information about a variable in a way that's readable by humans
```

Mathematical Functions
```php
sqrt(25); // 25^0.5
exp(5); // e^5
pow(2, 8); // 2^8
floor(6.9); // 6
ceil(6.9); // 7
round(3.1); // 3
round(3.14159265, 2); // 3.14
```

</section>

---

<section>

## Classes
 
```php
class Wizard extends Person {
  const HOUSE = "Griffindor";

  public static $spells = 2;
  public $wand;

  public function __construct($name, $age, $wand, $gender = "f") {
    $this->wand = $wand;

    echo "\nin Wizard class:\n";
    echo self::$spells;
    echo self::$staticHair;
    echo parent::NUMBER_OF_FINGERS;
    parent::__construct($name, $age, $gender);
  }
  
  public static function performSpell() {
    // can't use $this in static method
    return "Alohomora";
  }
}
```

```php
class Person {
  const NUMBER_OF_FINGERS = 10;
  protected static $staticHair = "brown";

  /**
   * name of the person
   * @var string name
   */
  public $name;
  protected $age;
  private $gender;

  public function __construct($name, $age, $gender="f") {
    $this->name = $name;
    $this->age = $age;
    $this->gender = $gender;
    echo "\nin Person class:\n";
    echo self::NUMBER_OF_FINGERS;
  }

  /* property overloading */
  public function __set($name, $value) {
    $this->$name = $value;
  }
  public function __get($name) {
    return $this->$name;
  }
  public function desc() {
    return $this->name . " is ". $this->age . " years old.";
  }
}
```

```php
$tom = new Person("Tom Riddle", 49);
$harry = new Wizard("Harry Potter", 17, "Elderwand");
```

methods
```php
echo $tom->desc();
echo "\n";
```

getter / setter
```php
echo $tom->age;
echo "\n";
```

constants
```php
echo Person::NUMBER_OF_FINGERS;
echo Wizard::NUMBER_OF_FINGERS;
echo "\n";
```

statics
```php
echo Wizard::performSpell();
echo "\n";
```

</section>

---

<section>

## Inclusion Functions

### `include()` and `require()`

Both of these functions do the same thing, insert content of one PHP file into another. However, they differ in the way they handle errors. In case of an error, include() will display a warning while not stopping the script. Require() will immediately stop the execution of the script.

`menu.php`
```html
<a href="/home.php">Home</a>
<a href="/about.php">About</a>
<a href="/blog.php">Blog</a>
```

`index.php`
```php
... 
<nav>
<?php include("menu.php"); ?>
</nav> 
...
```

`menu.php`
```html
<a href="/home.php">Home</a>
<a href="/about.php">About</a>
<a href="/blog.php">Blog</a>
```

`index.php`
```php
... 
<nav>
<?php require("menu.php"); ?>
</nav> 
...
```

### `include_once()` and `require_once()`

`index.php`
```php
<?php
  require("script1.php");
  foo();
  require_once("script2.php");
  foo2();
?>
```

`script1.php`
```php
<?php
  require("script2.php");
  function foo() {
    foo2();
  }
?>
```

`script2.php`
```php
<?php
  function foo2() {
    echo "Hello World!";
  }
?>
```

</section>

---

<section>

## Form Handling

* [HTTP Headers (code.tutsplus.com)](https://code.tutsplus.com/tutorials/http-headers-for-dummies--net-8039)

`$_GET` – an associative array of variables passed to the current script via the URL parameters
```html
<a href="/product/show.php?productID=123">Show</a> 
```

```php
echo $_GET['productID'];
```

`index.html`
```html
<form action="search.php" method="GET" >
  <input type="text" name="textField" />
  <input type="submit" />
</form> 
```

`show.php`
```php
<?php
echo $_GET['textField'];
?>
```

`$_POST` – an associative array of variables passed to the current script via the URL parameters
`index.html`
```html
<form action="login.php" method="POST" >
  <input type="text" name="username" />
  <input type="password" name="password" />
  <input type="submit" />
</form> 
```

`show.php`
```php
<?php
  echo "Hello" . $_POST['username'];
?>
```

`$_FILES` – an associative array of items uploaded to the current script via the HTTP POST method
`index.html`
```html
<form enctype="multipart/form-data" action="upload.php" method="POST" >
  <input type="file" name="picture" />
  <input type="submit" />
</form> 
```

`show.php`
```php
<?php
  $path = "users_img" . $_FILES['picture']['name'];
  move_uploaded_file($_FILES['picture']['tmp_name'], $path);
?>
```

Variables `$_FILES`: 
```php
$_FILES['userfile']['name'] // File's original name
$_FILES['userfile']['type'] // File's type
$_FILES['userfile']['size'] // File's length
$_FILES['userfile']['tmp_name'] // File's temporary name
$_FILES['userfile']['error'] // Error code
```

### Example 
```html
<form>
	<span>form text </span>
	<input type="text" name="myformvar" size="30" value="phpfile.php"  />
	<input type="Submit" value="Go" />
</form>
```
```php
isset($_GET['myformvar']))
```

```php
if (isset($_GET['match']) && !fnmatch('*'.$_GET['match'].'*', $filename)) continue;
```

```html
<form>
  <h3>filter</h3>
  <input type="text" name="match" size="30" value="<?php if (isset($_GET['match'])) print htmlspecialchars($_GET['match']);  ?>" />
  <input type="Submit" value="Go" />
</form>
```

</section>

---

<section>

## Manipulation of Files

Test for existence of a file
```php
file_exists("file.txt");
```

Example
```php
$other_filename = str_replace('lin.png', $ex, $filename);
if (file_exists($other_filename)) {
  print "file is there!";
	array_push($displayed, $other_filename);
}
```

Directory
```php
if (is_dir($filename)) {
    print "Directory!";
}
```

### Filenames

```php
$filenames = glob("*.png");
```

### File changed dates
```php
date("F d Y H:i:s.", filemtime($filename))
```


### Opening And Closing a File
```php
$file = fopen("file.txt", "r"); // binds a named resource, specified by the argument, to a stream
```
Different ways to open a file:
* `r` - reading only, pointer at the beginning
* `r+` - reading and wrting, pointer at the beginning
* `w` - writing only, deleting the content, pointer at the beginning
* `w+` - reading and writing, deleting the content, pointer at the beginning
* `a` - writing only, pointer at the end
* `a+` - reading and writing, pointer at the end
* `x` - create and open for writing only, pointer at the beginning
* `x+` - create and open for reading and writing, pointer at the beginning


```php
fclose($file); // will close the file pointed to by the argument
```

### Reading from a File

Method 1:
```php
$file = fopen("file.txt", "r");
$size = filesize("file.txt");
$content = fread($file, $size); // reads up to the number on second argument (in bytes) from the file pointer referenced by the first argument
fclose($file);
echo $content;
```

Method 2:
```php
$url = "http://www.website.com/file.txt";
$file = fopen($url, "r");
$content = "";

while ($package = fread($file, 16)) { // reads the file package by package though a loop
$content = $content . $package;
}

fclose($file);
echo $content;
```

Method 3:
```php
$url = "http://www.website.com/file.txt";
$file = fopen($url, "r");
$content = "";

while (!feof($file)) { // reads the file line by line though a loop
$content = $content . fgets($fp, 4096);
}

fclose($file);
echo $content;
```

Simplified Reading
```php
$content = file_get_contents("file.txt"); // reads entire file and returns it into a string
echo $content;
```

Writing to a File
```php
$file = fopen("file.txt", "r+");
fwrite($file, "Hello World!"); // writes the contents of the second argument to the file in the first argument (fputs() does the same)
fclose($file);
include("file.txt");
```

Simplified Writing
```php
file_put_contents("file.txt", "Hello World!"); // same as calling fopen(), fwrite() and fclose() successively

include("file.txt");
```

Content from a Folder
```php
$folder = "my_folder/";
$dir = opendir($folder); // open a folder

while ($file = readdir($dir)) { // read the folder's content
echo $file . "<br />";
}

closedir($dir); // close the folder
```

Copying a File
```php
$file = "file.txt";
$copy = "file_copy.txt";

if (copy($file, $copy)) {
echo "The file has been copied.";
}
```

Deleting a File
```php
$file = "file.txt";

// permits to delete a file
if (unlink($file)) { 
    echo "The file has been deleted.";
}
```

</section>

---

<section>

## Cookies and Sessions

### Cookies

**Cookie** - A cookie is a piece of text stored on a user's computer by their web browser. It is composed of one or more name-value pairs. Cookies are frequently used for authentication, storing site preferences, shopping cart contents, ... A cookie can have an expiration date.

`$_COOKIE` – an associative array of variables passed to the current script via HTTP Cookies
```php
setcookie($name [, $value[, $expire = 0]]); // send a new cookie to the client

setcookie("username", "John", time() + (86400 * 30), "/");

setcookie('blogLogin1', $loginData); // cookie that will exist until the browser terminates.
setcookie('blogLogin2', $loginData, time()+3600); // cookie that will exist during 1 hour.

echo $_COOKIE['blogLogin1']; // retrieve a cookie

setcookie('blogLogin1', '', 1); // destroy a cookie
```

### Sessions

**Session** - A session provides a way to store information about an user across more than one page request. It usually corresponds to only one user. Sessions are persisted for a specified time period, across more than one connection or page request for the user. Information is kept in the server-side and can be in any type (string, integer, object, ...). The server maintains a session thanks to a Session Key, which can be exchanged using cookies or URL rewriting.

`$_SESSION` – an associative array containing session variables available to the current script
```php
session_start(); // creates a session or resumes the current one based on a session identifier passed via a GET or POST request, or passed via a cookie

$_SESSION["favcolor"] = "green";

$_SESSION['username'] = $_POST['username']; // add a session variable
echo $_SESSION['username']; // retrieve a session variable
unset($_SESSION['username']); // destroy a session variable
session_destroy(); // destroys all data registered to a session
```

</section>

---

<section>

## List of useful functions

Boolean
```php
boolval()
is_bool()
```

Integer
```php
intval()
is_int()
```

Float
```php
floatval()
is_float()
```

String
```php
strval()
is_string()
```

Array
```php
array()
print_r
count()
sizeof()
array_push()
array_pop
array_unshift()
array_shift()
explode()
implode()
sort()
rsort()
```

Dates
```php
time()
mktime()
checkdate()
```

### Functions

```php
echo()
gettype()
var_dump
var_export
print_r
```

Mathematical Functions
```php
sqrt()
exp()
pow()
floor()
ceil()
round()
```

Inclusion Functions
```php
include()
require()
include_once()
require_once()
```

### Form Handling

```php
$_GET
$_POST
$_FILES
move_uploaded_file()
```

### Cookies and Sessions

```php
$_COOKIE
setcookie()
$_SESSION
session_start()
unset()
session_destroy()
```

### Manipulation of Files

Folder Content
```php
opendir()
readdir()
closedir()
```

File Manipulation
```php
file_exists()
fopen()
fclose()
filesize()
fread()
feof()
fgets()
file_get_contents()
fwrite()
fputs()
file_put_contents()
copy()
unlink()
```

</section>
