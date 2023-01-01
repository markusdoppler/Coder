---
title: Basics
---

# Basics

<section>

## Overview

Python is "interpreted" - Meaning no compilation step is needed.
* `ipython` (Python shell)
* `python file.py` (Python 2)
* `python3 file.py` (Python 3)

Python quirks
* Assignments do not copy data — they just bind names to objects
* References: Python always copies content
* `;` at the end of a line are allowed, not necessary though.
* You can also put several commands within one line, sepated with semicolons `;`


### Modules and packages

* **Module** = a single file
* **Package** = directory
  * contains __init__.py (can be empty)
  * can contain other modules and packages

### Importing
```python
import sys	# sys module --> dir(sys) to see objects in module
sys.exit()		# have to specify the module every time

from sys import exit
from packageOrModule import objectInPorM, object2, object 3
exit()		# exit now in local scope

from sys import *
exit()			# add objects from sys in my namespace now, 
dir()				# see what is in my global scope now

import sys as tomato
tomato.exit()

import numpy as np

from sys import exit as broccoliStem
broccoliStem()
```


```python
import package.module.function

from package import module		# imports module file


from package.module import function
```

</section>

---

<section>

## Data types

* `int` — can be infinitly large
* `float` — double precision floating point number
* `string`
* `tuple`
* `list`
* `dict`
* `None`
* `pass` does nothing


### Iterable types
* `list`
* `tuple`
* `dictionary`
* `string`


### Mutable vs. immutable data types

mutable
* `list`
* `dict`
* `set`
* `class` objects
soft link (pointer, reference) is copied when assigned to another variable

immutable
* `int`
* `float`
* `complex`
* `str`
* `tuple`
* `bool`
always copied



### Integer
```python
1
-3
int("3")
```

### Float
```python
3.14
1.6e-19
float(7)
```

### Boolean
```python
True
False
```

</section>

---

<section>

## Blocks
* Scopes/Blocks where variables are defined by indentation alone
* have no curly braces
* have to indent 2, 4 or tab white space

```python
# outside block

def block:
  # inside block

# outside block
```

</section>

---

<section>

## Variables

```python
my_var = 5
```

### Get the type of a variable
```
type(a_variable)
```


### Variable scopes
```python
stem = 42
def broccoli():
	global stem	# uses own version of stem
	stem += 1
	return stem

print(broccoli())
print(stem)
```

```python
i = 5
for i in range(5)
	print( i )

print( i )	# overwritten in loop
```

</section>

---

<section>

## Operators
```python
+
-
*
/
%
**2	# power

+=
*=
-=
/=
```

</section>

---

<section>

## Comments

```python
# this is a comment in Python
```

</section>

---

<section>

## Control Flow

```python
==
and
or
not	# !=
```

### If-statement

```python
if ...:
    # do smth
elif ...:
    # do smth
else:
    # do smth
```

```python
if item == 'spam':
  do_veg()
elif item == '':
  do_()
else:
  do_()

```

```python
a = None
if a is None:
  print("OMG, it's None!")
```

```python
if not condition:
    # do smth
```

```python
if a != "a" and b != "b":
    # do
```

### Inline if-statement
```python
binning = [5,10,20] if args.small else ([5, 10, 15, 20] if args.medium else [5, 10, 15, 20, 25, 30])
```

```python
return True if 'e' not in word else None
```

```python
var = bla1 if a=="True" else bla2
var = bla1 if sys is None else bla2
var = bla1 if sys is "hi" else bla2		# does this work?
var = bla1 if sys not in list else bla2
```

### For-loop
```python
l = ['a', 'b', 'ce']
for val in l:
   print val, ' is l from for loop'
```

```python
list = [2,4,6,8]
for i in list:
  print(i)
```

```python
for p in plots:
    # do smth
```

```python
for var in [""] + jme_systematics:
  # do smth...
```

### Inline For-Loop

```python
[int(a) for a in list]
```

```python
[i for i in range (10)]
# [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

{i:i**2 for i in range (10)}
# {0: 0, 1: 1, 2: 4, 3: 9, 4: 16, 5: 25, 6: 36, 7: 49, 8: 64, 9: 81}

d={i:i**2 for i in range (10)}
```

```python
newlist = [splitColon.split(a) for a in someList]
```

```python
list = name+sys for s in mc if condition
list = i for index in enumerate(allModes)

dict = {sys: value(sys) for sys in all_systematics}
```

### Enumerate Array

```python
values = range(10)
values = [2,3,4,10]
for i, value in enumerate(values):
  print(i, value[i])
```



### While-loop
```python
while ... :
    # do smth
```

```python
while true:
    if ...:
        continue
    break
```

```python
while read_command() != 'end':
  print(command)
```

```python
while True:
  do_infinitely()
```

</section>

---

<section>

## Printing
```python
print("With tax: %f" % bill)
print("%d squared is %d." % (n, squared))
```

</section>

---

<section>

## Strings
```python
"abc"
'abc'
"ab" + "c"
"""multi-
line
string
"""
str(number)

"hi"
'hi'			# '' or "" doesn't matter
"""			# multiline string

"""
```

`\n` – next line
`\t` – tab

```python
"This is my " + "string."
"%s"%myStringVar
"%i"%myInt
"%f"%myFloat
```


### String Join
* joins all strings in the list

```python
", ".join([str(value) for value in valuesList])
```

String Operations
```python
string.startswith("multiIso")
string.replace('string1', 'string2') 
string.split(",")
string.append("appendString")
```

### String formatting

```python
format()
```

```python
pi = 3.14159

print("pi is {}".format(pi))
print("pi is {:f}".format(pi))		
print("pi is {:.1f}".format(pi))		# 1 digit
print("pi is {:.3f}".format(pi))		# 3 digits
print("pi is {:+.3f}".format(pi))		# with signs

print("pi is {0} and e is {1}".format(pi, 3))		# ordering format parameters
print("pi is {1} and not {0:.5f}".format(pi, 3))		# ordering + format

print("pi is {pi} and e is {euler}".format(pi = 3.1415, euler = 2.71828))		# naming format parameters

print("{broccoli:3.2f}".format(broccoli = 12345.123456789))			# naming + format
```

</section>

---

<section>

## Tuples
* immutable list

empty tuple
```python
()
```

```python
len(tuple)
```

</section>

---

<section>

## List
empty list
```python
[]
```

```python
l=[2,4,6]
l[0]
l[2]
```

```python
l.append(8)
append
insert
remove
sort
```

```python
range()
enumerate()
len()
```

```python
l = range(5)
# [0, 1, 2, 3, 4]

l[-1]
# 2

l[2:4]
# [2, 3]

l[2:-1]
# [2, 3, 4]

l[2:-2]
# [2, 3]

n=len(l)
n
# 5

l[n/2:]
# [3, 4]

n/2
# 2.5
```

</section>

---

<section>

## Dictionary
empty dictionary
```python
{}
```

```python
l={}

d={'TT':'blue','W':'red',1:2}

d
# {1: 2, 'TT': 'blue', 'W': 'red'}

d['TT']
# 'blue'

d['TT'] = 'green'

d.keys()
# [1, 'TT', 'W']

d.values()
```

```python
d = {"key": "value"}

d['key'] = 5		# assign value to key, i.e. this adds this new key value pair

my_dict.keys()
my_dict.values()
my_dict.update({'you': 'rock', "you": 2})
```

```python
my_dict = {1:'data', 'two': 2, 3:"three"}
my_dict['two']

my_dict.append(...)
```

Methods
```python
my_dict.keys()
my_dict.values()
```

### Iterate dictionary
```python
for key, value in rw.items():
  print key, value

rw.items()
# <dictionary-itemiterator at 0x7f20e15b8cb0>

list(rw.items())
```



</section>

---

<section>

## Functions

### Resources 
* [Python arrays, dictionaries, inline loops](https://www.tutorialspoint.com/python/python_lists.htm)


```python
def vegetables():
	pass

print(vegetable())		# prints None?
```

```python
def foo():		# function definition
  print("Ello.")
```
```python
foo()			# calling function
```
```python
def foo():		# overwrite first definition
  print("Ello again.")
```

### Positional arguments
* not optional
```python
def foo(argument1, argument2):
  parameter = argument1
  print(parameter)
```

### Named arguments
* named arguments ((optional) arguments with default value)
* named arguments follow the positional arguments

```python
print(value, ..., sep=' ', end='\n', file=sys.stdout, flush=False)

def foo(argument1, argument2, sep=""):
  print(argument1, argument2, sep=sep)
  
def foo(*values):		# asterisk (*) put given parameters into a tuple
  print(values)

def foo(*args, **kwargs):	# key-word pair put into a dictionary
  print(args)
  print(kwargs)

foo(1,2, key="hi", word="lol")
```

### Documentation for function
```python
def foo():
  """ documentation string """
```


### Function examples

```python
def square(n):
  """Returns the square of a number."""
  squared = n ** 2
  print "%d squared is %d." % (n, squared)
  return squared
```


### Lambda Inline Function and One-line functions

lambda function
```python
lambda x,y: x+y
```


</section>

---

<section>

## Function @decorators

```python
def debug(func):
  def debug_wrapper():
    print("calling", func.__name__)
    func()
  return debug_wrapper

@debug
def hello():
  print('Hello world')
```


```python
def debug(func):
  def debug_wrapper(*args, **kwargs):
    print("calling", f.__name__)
    # do before
    return func(*args, **kwargs)
    # do after func call
  return debug_wrapper
```

Anwendungen
* `timer` für Funktionsaufruf



### Properties
* class: attributes, methods, properties (read-only)
* with `@property` prefixed methods are read only properties (read only attributes)

```python
class Garlic:
  def __init__(self):
    self._value = 0

  @property
  def value(self):
    return self._value

  @value.setter
  def value(self, value):
    self._value = value
```

### Keyword arguments

```python
class Garlic:
def __init__(self, **kwargs)
    #kwargs.get("clove")
    print(kwargs.get("clove", 37))		# default value 37, otherwise get returns None

g1 = Garlic(clove="17")
g2 = Garlic()
```

</section>

---

<section>

## Classes

* [Docs about classes](https://docs.python.org/2/tutorial/classes.html)
* multiple base classes
* a derived class can override any methods of its base class
* a method can call the method of a base class with the same name
* classes themselves are objects
* built-in types can be used as base classes for extension by the user
* most built-in operators with special syntax (arithmetic operators, subscripting etc.) can be redefined for class instances
* Class definitions must be executed before they have any effect
* Convention: Class names use `PascalCase`

```python
class MyClass(parentObject):
    <statements>		# e.g. function definitions
    i = 12345

    var1 					# class variables

    def __init__(self, name):
        self.var2 = name	# instance variable

        def f(self):
            return 'hello world'

x = myClass(name)
```

```python
class User:
	def method(self):			# first parameter of methods is always (reference to) object itself
		return self
	def __init__(self, name, age):	# class constructor
		self.name = name
		self.age = age
	def __str__(self):			# called when object is converted to a string via str(object)
		return 'User {} with age {}'.format(self.name, self.age)
	def __repr__(self):			# 
		return self.name

user = User('Broccoli', 5)
print(user)
```

attributes
```python
user.name
user.age
```

```python
user.__dict__
dir(user)
help(user)
```


### Class Inheritance
```python
class Point:
	def __init__(self, x, y):
		self.x = x
		self.y = y
	def __str__(self):
		return '({}, {})'.format(self.x, self.y)
	def __repr__(self):
		return self.__str__()

class Point3d(Point):			# inherit from Point
	def __init__(self, x, y, z):
		Point.__init__(self, x, y)		# init base class
		self.z = z
	def __str__(self):
		return '({}, {}, {})'.format(self.x, self.y, self.z)

p = Point3d(2, 4, 6)
```




### Operator overloading

```
__add__			+
__sub__			-
__mul__			*
				/
				** # meaning ^
```



```python
class PointG:
  def __init__(self, *values):
    self.values = values
  def __add__(self, point):
    """Add another point and returns a new point."""
    values = []
    for i in range(len(self.values)):
      values.append(self.values[i] + point.values[i])
    return PointG(*values)
  def __str__(self):
    values = [format(value) for value in self.values]
    values = ','.join(values)
    return 'P({})'.format(values)

p = PointG(1,2,3,4,5)
print(p)
p = PointG(2,3,4)
print(p)

p1 = PointG(2, 3, 3)
p2 = PointG(4, 7, 1)

p3 = p1 + p2
print(p3)
```

### Get and set attributes
Looping over several variables ( with `getattr()` & `setattr()` )
```python
met_corr = getattr(event, "met") - 5

setattr(event, "met_corr", met_corr )
```

</section>

---

<section>

## Errors and Exceptions
* `Exception` (base class)
* `RuntimeError`
* `ArgumentError`
* `ValueError`

Raising errors
```python
if ...:
	raise ValueError("Error message!")
```

Nothing happens, no exceptions caught
```python
try:
  raise RuntimeError()
except:
  pass
```

Catch all exceptions
```python
try:
  raise RuntimeError("my error")
except Exception as e:
  print(type(e), e)
  raise		# raise exception again
```



Look at various errors
```python
try:
  raise ValueError(17)
  raise RuntimeError("my error")
except RuntimeError as e:
  print(type(e), e)
except ValueError as e:
  print(type(e), e)
```




Own Exception
```python
class myException(Exception):
  pass
```


</section>

---

<section>

## Changes with respect to Python 2

### Printing
* `print()` is a function in Python 3.

```python
print ""		# Python 2
print("")		# Python 3
```

</section>

