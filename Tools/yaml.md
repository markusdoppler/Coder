# YAML


```yaml
---
# YAML data here
...
```


## Data Types
```yaml
string: "Markus"
string2: 'Markus'
string22: Markus
int: 28
float: 3.14159
boolean: true
list:
  - A
  - B
  - C
dictionary:
  object1:
    property: 123
    property2: !!float 13
  object2:
    property: 456
    property2: 15.4
```


```yaml
---
time: 2021-10-02 10:00:00     # ISO 8601
---
```


```yaml
# comment
```


## List

```yaml
hobbies:
   - hiking
   - movies
   - riding bike

movies: ["dark knight", "good will"]
```

## Object

```yaml
person:
   name: "Adam"
   age: 22

person: { name: "Adam", age: 22 }
```

## List of objects
```yaml
class:
  - name: "Adam"
    age: 22
  - name: "Barney"
    age: 19
```


```yaml
# fold newlines
description: >
   Lorem ipsum dolor, sit amet 
   consectetur adipisicing elit. 
   Nobis vel ipsum dolorem similique 
   eum labore laudantium ea delectus 
   vero impedit ipsa, accusantium 
   soluta expedita, nam eos deleniti 
   error dolore magni!

# preserve newlines
signature: |
   Markus
   Doppler
   28
```


```yaml
# anchor value
name: &n "Markus"
# ...
id: *name
```


```yaml
# anchor key-value pair
base: &base
   var1: value1

foo:
   <<: *base   # var1: value1
```



```yaml

```



## Parse YAML

### PyYAML
```bash
pip install pyyaml
```

```py
import yaml

with open('samosas.yaml') as f:
   data = yaml.load(f, Loader=yaml.FullLoader)
   print(data)
```

## YAML.js

```html
<script src="./yaml.min.js"></script>
<script>
   var doc = yamljs.load("data: 123\ngreeting: hello world");
</script>
```



