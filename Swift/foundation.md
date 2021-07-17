---
title: Foundation
---

# Foundation

<section>

## Array

```swift
// subarray
cards[0..<cardsCount]
cards.count
cards.indices // 0..<card.count
cards.append(item)
```

</section>

---

<section>

## String

```swift
"😀"
"Hello \(name)!"
```

</section>

---

<section>

## Protocol: Identifiable

```swift
struct Card: Identifiable {
  var id: Int
}

let cardsList = [Card(id: 1), Card(id: 2)]

ForEach(cardsList) { card in
  // ...
}
```

</section>

---

<section>

## Protocol: Equatable



</section>

