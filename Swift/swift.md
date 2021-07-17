---
title: Swift
---

# Swift

<section>

## Nomenclature
```swift
variable
functionName

ClassName
StructName
```

</section>

---

<section>

## Comments
```swift
// Single line comment

/*
  Multiline
  comment
*/
```

Comments can use Markdown. (Editor → Show Rendered Markup) Use semicolons `:`. Add images to Resources.
```swift
//: Markdown

/*:
  Multiline
  markdown

  ![Image](Logo.jpg)
*/
```

```swift
// MARK
```


</section>

---

<section>

## Variables

```swift
let constant = "constant string"
var variable = "variable string"
variable = "changed string"
```

### Variable definition
```swift
var text: String
```

</section>

---

<section>

## Value types
* `String`
* `Int`
* `Bool`
* `Double`


### Strings
```swift
let label = "The size is" + String(50) + "."
let label = "The width is \(50)"
```

### Arrays
```swift
var colours = ["red", "green", "blue"]
colours[0]

colours.append("orange")
colours.remove(at: 1)
```

</section>

---

<section>

## Optionals
```swift
var answer: String?
UILabel().text = answer

var answerString: String!
```
```swift
var food: Vegetable?
food = nil
food = Vegetable("carrot")
```


### Optional binding
```swift
var answer: String?
if let sureAnswer = answer {
  UILabel().text = sureAnswer
}

// shorthand
UILabel().text = sureAnswer ?? ""
```


### Unwrapping Optionals
Force-unwrapping
```swift
print(food!)
```

```swift
if let veggie = food {
  print(veggie)
} else {

}
```

### Optional chaining
```swift
food?.mash()
```

```swift
food?.ingredient = "mustard"
```


### Nil-coalescing operator
```swift
let freshVeggie = food ?? Vegetable("salad")
```


### Ways to handle optionals
```swift
var emoji: String? = nil

if emoji != nil {
    // use emoji
}

if let emoji = emoji {
    // use emoji
}

func useEmoji(_ emoji: String?) {
  guard let emoji = emoji else {
    return
  }
  // use emoji
}

// Related: try - catch

func useEmoji2(_ emoji: String?) {
  do {
    let unwrappedEmoji = try unwrapEmoji(emoji)
  } catch {
    // no emoji
  }
}

enum EmojiError: Error {
  case emojiUnwrapError
}

func unwrapEmoji(_ emoji: String?) throws -> String {
  if let emoji = emoji {
    return emoji
  } else {
    throw EmojiError.emojiUnwrapError
  }
}



try? unwrapEmoji(emoji)
```
</section>

---

<section>

## Control Flow

### if
```swift
if percentage >= 50 {
  print("high percentage")
} else {
  print("low percentage")
}
```

```swift
if percentage >= 50 && percentage < 90 {
  // between 50 and 90
}
```

Ternary operator
```swift
print(percentage >= 50 ? "yes" : "no")
```

### switch
```swift
switch percentage {
  case 0...50: print("low")
  case 51...80: print("medium")
  case 80...100: print("high")
  default: print("not a percentage")
}
```


</section>

---

<section>

## Loops
```swift
for colour in colours {
  print(colour)
}
```

```swift
ForEach(array) { value in
  // ...
}
```

### Ranges

```swift
0..<totalNumber
0...totalNumber
itemsList[0..<itemsCount]
```

```swift
for index in 0..<itemsCount {

}
```


</section>

---

<section>

## Functions
```swift
func pointToRetina(point: Int) -> Int {
  return point * 2
}

let retinaPixels = pointToRetina(point: 320)
```

```swift
func name(parameters) -> returnType {
  functionBody
}
```

```swift
func createRecipe(forIngredients ingredients: [Ingredient]) -> Recipe {

}
```

### Functions as parameters

```swift
createSomething(_ kind: Kind, creator: { ingredients -> Recipe in

}) 


{ ingredient in "Cook \(ingredient)." }
{ _ in "😀" }

{ parameter in parameter == "😀" }
{ $0 == "😀" }
```

last argument
```swift
createSomething(_ kind: Kind) { ingredients -> Recipe in

}
```

</section>

---

<section>

## Struct
* `struct` is a **value-type**, i.e. it is copied when passed around

Examples of `struct`s
* Array<Element>
* ...


```swift
struct UserStruct {
  var name: String
  var age: Int
  var job: String
}

var user = UserStruct(name: "Mike", age: 35, job: "Designer")
user.name
```

```swift
struct Vegetable {
  var name: String
}
```

```swift
struct Update: Identifiable {
  var id = UUID()
  var text: String
  var age: Double
}

### Initializer
* free `init`
* custom `init`

```swift
struct Vegetable {
  var name: String

  init(name: String) {
    name = name
  }
}
```

### Mutating functions in structs

```swift
struct Vehicle {
  mutating func drive() {

  }
}
```

## Type Property

```swift
static var numberOfGroceries: Int
static func doSomething() {

}
```

</section>

---

<section>

## Class
* `class` is a **reference-type**, i.e. it is referenced when passed around

```swift
class UserClass {
  var name: String
  var age: Int
  var job: String

  init(name: String, age: Int, job: String) {
    self.name = name
    self.age = age
    self.job = job
  }
}
```

```swift
class Vegetable: Plants, EatablePlant {

}
```


</section>

---

<section>

## Enum

value type (copied when passed around)

```swift
enum Vegetable {
  case kale
  case broccoli
  case bellPepper
  case tomato(isPassata: Bool)

  func mash() {

  }
  var calories: Int {  }
}

let tomatoSoup = Vegetable.tomato(isPassata: true)

var veggie = Vegetable.kale
switch veggie {
  case .kale: break
  case .broccoli: print("hooray")
  case .tomato(let isPassata): print(isPassata ? "mashed tomato" : "whole tomato")
  default: print("summer is here")
}
```

</section>


---

<section>

## Generics

```swift
struct MemoryGame<CardContent> {
  
}

```swift
struct MemoryGame<CardContent> where CardContent: Equatable {

}
```

</section>


---

<section>

## Protocols



</section>

---

<section>

## Access Control

```swift
var numberOfGroceries: Int
private var numberOfGroceries: Int
private(set) var numberOfGroceries: Int
```

</section>

---

<section>

## Debugging

```swift
print("hello")
```

</section>

