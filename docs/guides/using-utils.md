---
sidebar_position: 2
---

# Temple utils

Multiple utils are included in the display-temple repository that can save us a lot of work. Below are some examples:

:::info
You can check all the utils inside [the github repository](https://github.com/mediamonks/display-temple/tree/master/src/util).
:::

## browser
```js
/**
 * Shows information about the device used.
 * 
 * @type {{
 *  isMobile: boolean
 *  isOS: boolean
 *  isOS9up: boolean
 *  isPad: boolean
 *  isSafari: boolean
 *  isFirefox: boolean
 *  isChrome: boolean
 *  isEdge: boolean
 *  isOpera: boolean
 * }}
 */

import Browser from "@mediamonks/temple/util/Browser";

console.log(Browser.isChrome)
```



## fitText
```js
/**
 * @param {Array<HTMLElement>} copyElements
 */

import fitText from "@mediamonks/temple/util/fitText";

const title = document.body.querySelector('.title');
const ctaCopy = document.body.querySelector('.cta_copy');

fitText([title, ctaCopy]);
```



## isElementLoaded
```js
/**
 * Wait for a DOM element to load.
 *
 * @param {string} selector
 * @param {number} time
 * 
 * @returns {Promise<HTMLImageElement>}
 */

import isElementLoaded from "@mediamonks/temple/util/isElementLoaded";


isElementLoaded('svg.logo')
    .then((elm) => elm);

isElementLoaded('.containerHidden', 2000)
    .then((elm) => elm);
```



## loadAll
```js
/**
 * Loads multiple files and output an array with the objects
 * 
 * @param {Array<string>} urls
 * @param {boolean} sequential
 * @param {function} loader
 *
 * @return {Promise<Array>}
 */

import loadAll from "@mediamonks/temple/util/loadAll";

loadAll(['./my_example_image.png', './my_example_image2.png', './my_example_image3.png'], true)
    .then(() => console.log('all loaded!'))
    .catch((error) => console.error(error));;

loadAll(['./custom_image.png'])
    .then(() => console.log('all loaded!'))
    .catch((error) => console.error(error));
```



## loadImage
```js
/**
 * Loads an image and returns the image element
 * 
 * @param {string} src
 *
 * @return {Promise<Array>}
 */

import loadImage from "@mediamonks/temple/util/loadImage";

loadImage(['./background.png'])
    .then(() => console.log('image loaded'))
    .catch((error) => console.error(error));
```



## loadScriptAll
```js
/**
 * Loads multiple files and output an array with the objects
 * 
 * @param {Array<string>} urls
 * @param {boolean} sequential
 *
 * @return {Promise<Array>}
 */

import loadScriptAll from "@mediamonks/temple/util/loadScriptAll";

loadScriptAll(['./mycustomScript.js', './mycustomScript2.js', './mycustomScript3.js'], true);
    .then(() => console.log('scripts loaded'))
    .catch((error) => console.error(error));
```



## loadJSON
```js
/**
 * Loads an image and returns the image element
 * 
 * @param {string} src
 *
 * @return {Promise<Array>}
 */

import loadJSON from "@mediamonks/temple/util/loadJSON";

loadJSON('https://jsonplaceholder.typicode.com/todos/1')
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
```


## masker
```js
/**
 * Will add canvas elements to the wrapper that are masked by the png images
 * 
 * @param {array} config
 * @param {HTMLElement} wrapper
 * 
 * @return {Promise<unknown>}
 */

import masker from "@mediamonks/temple/util/masker";

masker(['./bg.jpg', './bg_transparent_white_small.png'], document.body.querySelectorAll('.wrapper'))
    .then(() => console.log('mask ready'))
    .catch((error) => console.error(error));;
```



## rgbToHex
```js
/**
 * Convert the RGB to hex code
 * 
 * @param {number} r
 * @param {number} g
 * @param {number} b
 *
 * @returns {string>}
 */

import rgbToHex from "@mediamonks/temple/util/rgbToHex";

rgbToHex(0, 51, 255)
```