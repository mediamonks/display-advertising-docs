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