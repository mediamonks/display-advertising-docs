---
sidebar_position: 1
---

# Good practices with Handlebars

You can check all the documentation about Handlebars on the [official website](https://handlebarsjs.com/guide/#what-is-handlebars). Below you can see some examples using handlebars within the framework.

:::caution
WORK IN PROGRESS - Dawi
:::


```js title="/src/shared/index.hbs"

<div class="banner border">
    <div class="content fullscreen">
      {{#if settings.captainSequence}}
        <div class="captainSequence"></div>
      {{/if}}

      {{#each content.images}}
        <img class="{{@key}}" src="{{this}}">
      {{/each}}
    </div>
    <div class="mainExit fullscreen"></div>
</div>
```


```js title="/src/300x250/.richmediarc"
"content": {
    "backup": "./img/backup.jpg",
    "css": "./css/style.css",
    "clickTag": "https://www.google.com",
    "captainSequence": true,
    "bgBanner": "#d32f2f",
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