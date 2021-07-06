![amirajs](https://socialify.git.ci/fauzan121002/amirajs/image?font=Raleway&language=1&owner=1&pattern=Diagonal%20Stripes&stargazers=1&theme=Dark)

# Amirajs is Lightweight (~0.4kb compressed) JS Library for DOM Manipulation

---

<p align="center">
 <a href="https://github.com/fauzan121002/amirajs/LICENSE">
  <img src="https://img.shields.io/badge/License-MIT-brightgreen.svg?style=flat-square" alt="MIT License">
 </a>

 <a href="https://github.com/fauzan121002/amirajs">
  <img src="https://img.shields.io/github/forks/fauzan121002/amirajs?style=flat-square" alt="MIT License">
 </a>

 <a href="https://github.com/fauzan121002/amirajs/issues">
  <img src="https://img.shields.io/github/issues/fauzan121002/amirajs?style=flat-square" alt="Open Collective">
 </a>

 <a href="https://github.com/fauzan121002/amirajs">
  <img src="https://img.shields.io/github/stars/fauzan121002/amirajs?style=flat-square" alt="Open Collective">
 </a>
</p>

---

## Table of Contents

- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Usage

You can see the example usage <a href="https://github.com/fauzan121002/amirajs/blob/master/examples/index.html">here</a>

### Setup

You can import the external script inside the `<body>{here}</body>` tag.

```html
<!-- imported script -->
<script src="https://unpkg.com/amirajs@1.0.2/amira.min.js"></script>
```

NB: Remember to use the amira APIs below the imported script.

### APIs

- [insert](#insert)
- [empty](#empty)
- [setAttr](#setAttr)
- [removeAttr](#removeAttr)
- [show](#show)
- [hide](#hide)

#### insert

You can insert both value or text in single function.

```js
$(".amira").insert("Hello World");
```

#### empty

You can empty both value or text in single function.

```js
$(".amira").empty();
```

#### setAttr

You can set elements attribute by using `setAttr` function.

```js
$(".amira").setAttr("id", "11");
```

Also supports fluent design

```js
$(".amira").setAttr("id", "11").setAttr("style", "color: red;");
```

#### removeAttr

You can remove elements attribute by using `removeAttr` function.

```js
$(".amira").removeAttr("id");
```

#### show

You can show elements by using `show` function.

```js
$(".amira").show();
```

#### hide

You can hide elements by using `hide` function.

```js
$(".amira").hide();
```

## Contributing

You can create new pull requests <a href="https://github.com/fauzan121002/amirajs/pulls">here</a>

## License

This javascript library is published under <a href="https://github.com/fauzan121002/amirajs/blob/master/LICENSE">MIT License</a>
