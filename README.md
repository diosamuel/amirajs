<p align="center"> 
 <img align="center" src="logo/brand.png">
</p>

 # Amira.js is A Javascript Plugin for JS Dom Simplifier

--------------------------------------------

<p align="center">
 <a href="https://github.com/fauzan121002/amirajs/LICENSE">
  <img src="https://img.shields.io/badge/License-MIT-brightgreen.svg?style=flat-square" alt="MIT License">
 </a>

 <a href="https://github.com/fauzan121002/amirajs">
  <img src="https://img.shields.io/github/forks/fauzan121002/amirajs?style=flat-square" alt="MIT License">
 </a>
</p>

<p align="center">
 <a href="https://github.com/fauzan121002/amirajs/issues">
  <img src="https://img.shields.io/github/issues/fauzan121002/amirajs?style=flat-square" alt="Open Collective">
 </a>

 <a href="https://github.com/fauzan121002/amirajs">
  <img src="https://img.shields.io/github/stars/fauzan121002/amirajs?style=flat-square" alt="Open Collective">
 </a>

 <a href="https://github.com/fauzan121002/amirajs">
  <img src="http://hits.dwyl.com/fauzan121002/https://github.com/fauzan121002/amirajs.svg" alt="Open Collective">
 </a>
</p>

--------------------------------------------
## Table of Contents

* [Usage](#usage)
* [Contributing](#contributing)
* [License](#license)

## Usage
You can see the example usage of the amira javascript dom simplifier <a href="https://github.com/fauzan121002/amirajs/blob/master/examples/index.html">here</a>

### How to use
You can import the script inside the body tag.
```html
 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>amirajs</title>
</head>
<body>

    <script src="https://gitcdn.xyz/repo/fauzan121002/amirajs/master/amira.min.js"></script>
</body>
</html>
```

### Functions

#### Init DOM
You must init your dom to constructor before use amira prototype function.
```js
    let amira = new Amira("<specify-dom-here>");
```

#### Insert Value or HTML
You can insert both value or html in single function.
```js
    amira.insertValue("Hello World");
```

#### Empty Value or HTML
You can empty both value or html in single function.
```js
    amira.emptyValue();
```

#### Set Elements Attribute
You can set elements attribute by using setAttribute function.
```js
    amira.setAttribute("<specify-attribute-here>","<specify-value-here>");
```

#### Remove Elements Attribute
You can remove elements attribute by using removeAttribute function.
```js
    amira.removeAttribute("<specify-attribute-here>");
```

#### Show and Hide Elements
You can show and hide elements by using show and hide function.
```js
    amira.show();
```
or
```js
    amira.hide();
```

#### Use default prototype function
You can also use default prototype function by using list object.
```js
    let amira = new Amira("<specify-dom-here>").list;
```
or
```js
    let amiraProto = amira.list;
```

## Contributing
You can create new pull requests <a href="https://github.com/fauzan121002/amirajs/pulls">here</a>

## License
This javascript library is published under <a href="https://github.com/fauzan121002/amirajs/blob/master/LICENSE">MIT License</a>
