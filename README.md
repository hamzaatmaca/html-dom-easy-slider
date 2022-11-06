# Introduction

Javascript slider library for show image

# Installation

`nmp install html-dom-easy-slider`

# Usage

```js
import { EasySlider } from "../../html-dom-easy-slider/index.js";
```

```js
let div = document.getElementById("slider");
div.appendChild(
  EasySlider(
    [
      "assets/img/r2.jpg",
      "assets/img/r1.jpg",
      "assets/img/r3.jpg",
      "assets/img/r4.jpg",
      "assets/img/r5.jpg",
      "assets/img/r6.jpg",
    ],
    { width: "50rem", height: "30rem" },
    { exp: 2000 }
  )
);
```
