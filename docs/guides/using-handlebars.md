---
sidebar_position: 1
---

# Handlebars

## What is templating language?
A templating language basically is a language which allows defining placeholders that should later on be replaced for the purpose of implementing designs.

Handlebars is a simple templating language. It uses a template and an input object to generate HTML or other text formats. Handlebars templates look like regular text with embedded Handlebars expressions.

You can check all the documentation about Handlebars on the [official website](https://handlebarsjs.com/guide/#what-is-handlebars). Below you can see some examples using handlebars with the framework.

## Conditionals

Another common use-case for block helpers is to evaluate conditional statements. As with the iterators, Handlebars' built-in if and unless control structures are implemented as regular Handlebars helpers.

```js title="/src/shared/index.hbs" {3,5,7}
<div class="banner border">
    <div class="content fullscreen">
      {{#if settings.hasCaptain}}
        <div class="captainSequence"></div>
      {{else}}
        <img src="captain.gif" alt="captain">
      {{/if}}
    </div>
    <div class="mainExit fullscreen"></div>
</div>
```

## Iterators

A common use-case for block helpers is using them to define custom iterators. In fact, all Handlebars built-in helpers are defined as regular Handlebars block helpers. Let's take a look at how the built-in each helper works.

```js title="/src/shared/index.hbs" {3,5}
<div class="banner border">
    <div class="content fullscreen">
      {{#each content.images}}
        <img class="{{@key}}" src="{{this}}">
      {{/each}}
    </div>
    <div class="mainExit fullscreen"></div>
</div>
```


```js title="/src/300x250/.richmediarc"
"content": {
    "images": {
        "captain1": "./img/captain1.png",
        "captainStatic": "./img/captainStatic.png",
        "copy1": "./img/copy1.png",
        "copyBig1": "./img/copyBig1.png",
        "copyBig2": "./img/copyBig2.png",
        "copy2": "./img/copy2.png",
        "cards1": "./img/cards1.png",
        "cards2": "./img/cards2.png",
        "cards3": "./img/cards3.png",
        "copy3": "./img/copy3.png",
        "cardEndframe": "./img/cardEndframe.png",
        "logo": "./img/logo.png",
        "cta": "./img/cta.png"
    }
  }
```

## Partials

Handlebars allows for template reuse through partials. [Partials](https://handlebarsjs.com/guide/partials.html) are normal Handlebars templates that may be called directly by other templates.

Below you can see some examples using partials with the framework:

### Basic partials

```html title="/src/shared/components/menuItems.hbs"
<div class="listWrapper">
    <ul>
      <li>One</li>
      <li>Two</li>
      <li>Three</li>
    </ul>
</div>
```

```html title="/src/shared/index.hbs" {3}
<div class="banner border">
    <div class="content fullscreen">
      {{> components/menuItems }}
    </div>
    <div class="mainExit fullscreen"></div>
</div>
```

### Partials with parameter

```html title="/src/shared/myExamplePartial.hbs"
<p>width: {{settings.size.width}}</p>
<p>height: {{settings.size.height}}</p>
```

```html title="/src/shared/index.hbs" {3}
<div class="banner border">
    <div class="content fullscreen">
      {{> myExamplePartial settings }}
    </div>
    <div class="mainExit fullscreen"></div>
</div>
```

If you repeat a lot of html, a good practice would be to separate it into components.


## Custom Helpers

:::info
To use these helpers you need **display-dev-server v10.1.4** or more.
:::

### getSize

It is necessary to pass the parameter settings:

```html title="/src/shared/index.hbs" {3}
<div class="banner border">
    <div class="content fullscreen">
      {{getSize settings}} // output: 300x250
    </div>
    <div class="mainExit fullscreen"></div>
</div>
```

### compare

Make validations very easy, using operators ('==', '===', '!=', '!==', '<', '>', '<=', 'typeof'):

```html title="/src/shared/index.hbs" {3,5,7,9}
<div class="banner border">
    <div class="content fullscreen">
      {{#compare content.master "MASTER1"}}
        some_nice_layout
      {{/compare}}

      {{#compare content.frames ">" 5}}
        There are more than 5 frames
      {{/compare}}
    </div>
    <div class="mainExit fullscreen"></div>
</div>
```

### brackets

Similar to template strings. The number change now many brackets do you want to output.


```html title="/src/shared/index.hbs" {3}
<div class="banner border">
    <div class="content fullscreen">
      {{#brackets 2}}content.copy1_{{getSize settings}}{{/brackets} // output: {{content.copy1_300x250}}
    </div>
    <div class="mainExit fullscreen"></div>
</div>
```


### checkExtension

Checks the extension of a variable or file. In this example, if the var contains an image extension, it shows an image, otherwise it shows the variable as a text string:

```html title="/src/shared/index.hbs" {3}
<div class="banner border">
    <div class="content fullscreen">
      {{#checkExtension this.subTitle '.png|.jpg|.jpeg'}}
        <img src={{this.subTitle}} alt="" class="subTitle--{{@index}} subTitle fullscreen">
      {{else}}
        <div class="subTitle--{{@index}} subTitle">{{{this.title}}}</div>
      {{/checkExtension}}
    </div>
    <div class="mainExit fullscreen"></div>
</div>
```