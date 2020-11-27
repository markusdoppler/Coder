---
title: Python
---

# Python

<section>

## Table of Contents

* [Basics](basics)
* [Useful Libraries](libraries)
    * sys
    * os
    * math
    * datetime
    * pickle
    * argparse
    * re
* [Working with data](working-with-data)
    * numpy
    * pandas
    * matplotlib
    * plotly
* [Machine Learning](machine-learning)
    * scikit learn
    * pytorch
    * data science


#### Nomenclature of symbols

* `()` — parantheses
* `[]` — brackets
* `{}` — braces
* ` `` `
* `""`

</section>

---

<section>

## Get Python
* [CPython](python.org)

Python 2 (legacy version)
```bash
python
```

Python 3
```bash
python3
```
current version: 3.7.x

### macOS Installation
* brew.sh
* python.org/downloads

</section>

---

<section>

## Python documentation

```bash
help(type)
help(print)
```
* type `Ctrl` + `D` to quit

```bash
dir(type/variable)
dir("")		# returns all keywords, functions in python
```

```bash
type?
type(my_variable)
```

</section>

---

<section>

## IPython

run file from within ipython
```
%run root-hist.py
```

save commands to file
```
save {file-name} {line-numbers}
```

</section>

---

<section>

## Python snippets

Make dictionary out of two lists

```python
a_dict = dict(zip(key_list, value_list)) 
```

`zip` takes iterables, aggregates them in a tuple, and returns an iterator of tuples

</section>
