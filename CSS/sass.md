---
title: SASS
---

# CSS Preprocessor: SASS / SCSS

<section>

## Include SASS
```scss
<style lang="scss">
  /* ... */
</style>
```

</section>

---

<section>

## SASS Variables
```scss
$dark-blue: #212C4F;
$light-gray: #F0F3F5;
```

```scss
@import "@/global-styles/colours.scss"
body {
  background: $dark-blue;
}
```

</section>

---

<section>

## SASS Mixin
```scss
@mixin heading-1 {
  font-size: 80px;
  line-height: 86px;
  font-weight: bold;
}

h1 {
  @include heading-1;
}
```

Mixin with argument(s)
```scss
@mixin text($colour: $white) {
  @extend %large;
  font-weight: bold;
  color: $colour;
}

p {
  @include text($purple);
}
```

</section>

---

<section>

## SASS Placeholder
```scss
%large {
  line-height: 37px;
  font-size: 24px;
}

@mixin large-text {
  @extend %large;
}
@mixin large-text-bold {
  @extend %large;
  font-weight: bold;
}
```

</section>

---

<section>

## Nested Styles
```scss
nav {
  color: $white;

  a {
    color: $gray;
  }
}

input {
  color: $white;

  &::placeholder {
    color: $gray;
  }
}
```

</section>
