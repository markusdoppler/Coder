---
title: SwiftUI vs. CSS
---

# SwiftUI vs. CSS

<section>

## SwiftUI vs. CSS Flexbox

### Stacks and Spacers

```swift
HStack {

}
```

```swift
VStack(alignment: .leading) {

}
```

```swift
ZStack {

}
```


```swift
Spacer()
```


```css
.hstack {
   display: flex;
   justify-content: center;
   align-items: center;
}
.vstack {
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
}
.vertical-alignment-leading {
   justify-content: flex-start;
}
.vertical-alignment-center {
   justify-content: center;
}
.vertical-alignment-trailing {
   justify-content: flex-end;
}
```

</section>