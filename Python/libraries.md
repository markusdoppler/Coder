---
title: Libraries
---

# Libraries

<section>

## Overview

Libraries
* sys
* os
* math
* numpy
* datetime
* pickle
* re
* bs4
* argparse
* `virtualenv`

Importing a whole library
```python
import numpy
```

Importing parts of a library via `from module import *`:
```python
from math import sqrt
```

</section>

---

<section>

## PIP – Python Package Index

* [PyPI](https://pypi.org)

```bash
pip --version
pip search numpy
pip install numpy
pip install numpy==1.15.3

pip list

pip uninstall numpy
```


### Virtual Environments
* sandboxing
* `virtualenv`

```bash
pip install virtualenv
```

**Attention**: Use `pip3` to explicitly use `python3`

Creates a virtual environment in the directory I currently am in
```bash
virtualenv env
virtualenv env -p python3.5 # to use specified python interpreter
```

List installed packages
```bash
pip list
```

Set list of 
```bash
pip freeze
pip freeze > requirements.txt
```

install requirements from file
```bash
pip install -r requirements.txt

env/bin/activate

deactivate	# leave virtual environment
```


</section>

---

<section>

## Program parameters with sys

```bash
python3 mySysScript.py abc hello 5
```

```python
import sys

print(sys.argv)		# prints list of parameters when executing the script
```

</section>

---

<section>

## Operating System: Files and Paths

```python
import os

os.path.join(baseDir, 'cardFiles', args.signal + args.extension, sSubDir)

if not os.path.exists(limitDir): os.makedirs(limitDir)

os.path.abspath('.') # directly in this directory
```

```python
try: os.makedirs(plot_directory_)
except: pass
```

</section>

---

<section>

## Deep copy

```python
import copy
copy.deepcopy
```

</section>

---

<section>

# Datetime

```python
import datetime
d = datetime.date(df['Year'][i], df['Month'][i], df['Day'][i])

start_time = datetime.datetime.now()
# ...
end_time = datetime.datetime.now()
print('Duration: {}'.format(end_time - start_time))
```

convert DataFrame column to datetime format
```python
df.Date = pd.to_datetime(df.Date)
```

</section>

---

<section>

# Pickle

```python
import pickle

model.fit(…)

pickle.dump(model, open(‘MyModel.model’, 'wb')) # 'wb' = writing bytes

loaded_model = pickle.load(open(‘MyModel.model’, 'wb'))
```


</section>

---

<section>

## I / O

User input
```python
name = input('Enter your name: ')
```

```python
x = raw_input("Type left or right and hit 'Enter'.").lower()
```

File Access
```python
with open('example.txt') as f:
	for line in f:
		print(line)
```


Read File 
```python
f = open('example.txt')		# f is the handle to the file
f.read()
```

```python
with open('data.txt') as f:
	for line in f:
		value = float(line)
		print(value, type(value))
```


</section>

---

<section>

## Regular Expressions
* parsing one line of string at a time

### Resources
* [regex101.com](regex101.com)
* [re module](https://docs.python.org/3/library/re.html?highlight=re#module-re)

### Special characters
```
.	any character
^	beginning of string
$	end of string
\	escaping
\s	whitespace character
\w	word
\W	?
\d	decimal

[...]	a group: [0-9a-f]+ 
(...)	a match (.+)

-	range (A-Z, 0-9, a-f, 4-7, _)
|	or ... use in match
^	negation ... use in group (  [^\"] ... everything except "  )

*	none, one or more
+	one or more
?	none or one
```


groups list
```python
import re

re.match(r'.ello\s+.+!$', 'Hello madam') # returns None or object

m = re.match(r'(.+)\s+(.+)', 'Hello world!')
m.groups()	# returns list with groups
```


compile regex string
```python
import re

c = re.compile(r'my\s+')
d = c.match('my string')
d.groups()
```

</section>

---

<section>

## Accessing the web

```python
from urllib import request

import urllib.request

with request.urlopen('https://markusdoppler.at') as f:
	html = f.read().decode()
```

```python
from urllib import request

print("...starting to load webpage")
with request.urlopen('https://hephy.at/') as f:
    print("...")
    html = f.read().decode()

print(html)
```



### JSON (+ module)
`util.py`
```python
from urllib import request
import json

def load_json(url):
	""" Loads JSON web  """
	with request.urlopen(url) as f:
		content = f.read().decode()
	return json.loads(content) # load string

```

`program.py`
```python
from util import load_json

dataDictionary = load_json("https://api.github.com/"):

# print(dataDictionary['current_user_url'])

for key, value in data.items():
	print("key:", key, "value:", value)
```

</section>

---

<section>

## Parsing HTML with Beautiful Soup

```python
pip install beautifulsoup4 html5lib
```

Beautiful Soup
```python
from bs4 import BeautifulSoup

doc = BeautifulSoup('<p>Hello world!</p>', 'html5lib')		# html5lib parser makes valid html5 file

doc.body.p.text

doc.body.find_all('p')
doc.body.find_all('p', id='myTagID')
doc.body.find_all('p', class_='myTagID')
```

</section>

---

<section>

##  Argparse

```bash
python3 my_script.py abc hello 5
```

Simple (positional arguments)
```python
import argparse

parser = argparse.ArgumentParser()
parser.add_argument('name', help="a person's name")
parser.add_argument('age', help="a person's age")

args = parser.parse_args() 					# automatically takes sys.argv
args = parser.parse_args(['par1', 'par2', 55])		# can also specify my own

print(args)
print(args.name)
print(args.age)
```

```bash
python3 broccoli.py -h
python3 broccoli.py hello 42
```


Flags
```python
import argparse

parser = argparse.ArgumentParser()
parser.add_argument('--name', help="a person's name")
parser.add_argument('-a', '--age', default=5, type=int, help="a person's age")
parser.add_argument('-v', '--verbose', action='store_true', default=5, type=int, help="a person's age")

args = parser.parse_args() 	# automatically takes sys.argv

print(args.name)
print(args.age)
if args.verbose:
	print("haha nice")
```

```bash
python3 kale.py --name curlyJoe --age 35 --verbose
```

```python
if args.year:
	if args.year == 2016:
		
else:
	...
```



### Attributes

positional argument
'argument'

optional argument / flag
'-f'
'--flag'

nargs
nargs=1		# default
nargs=3		# three value parsed as a list
nargs='+'		# one or more parameters
nargs='*'		# (optional) zero or more parameters
nargs='?'		# an optional argument

default
default=7 	#default value (don't have to specify flag)

help
help=""

action
action="store_true"		# false if flag is not specified, false otherwise
action="store_false"	# 

metavar
metavar='<n>'
metavar='<years>'

type
* string (default)
* int
* float
* myFunction








Flags
```python
import argparse


def validate_age(value):
	age = int(value)
	if age > 1 and age < 10:
		return age
	raise argparse.ArgumentTypeError("invalid age, must be below 10 years")

parser = argparse.ArgumentParser()
parser.add_argument('--name', help="a person's name")
parser.add_argument('-a', '--age', default=5, type=validate_age, help="a person's age")

args = parser.parse_args() 	# automatically takes sys.argv

print(args.name)
print(args.age)
```

```bash
python3 kale.py --name curlyJoe --age 35
python3 kale.py --name curlyJoe --age 3
```








C-like main function

```python
def parse_arguments():
	parser = argparse.ArgumentParser()
	parser.add_argument('--name', help="a person's name")
	parser.add_argument('-a', '--age', default=5, type=validate_age, help="a person's age")
	return parser.parse_args()

def main():
	args = parse_arguments()
	print(args.name)

if __name__ == '__main__':		# __main__ is the entry point, i.e. the file which is excuted first
	main()
```

</section>
