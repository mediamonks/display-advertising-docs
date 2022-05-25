---
sidebar_position: 6
---

# Data binding

Data bind is a util in the @mediamonks/temple to bind a object data to html. In your index.html or index.hbs, you can easely bind js object to html elements with dataBind. 

For example doubleClick has a dynamic feed:

```js title="/src/shared/script/getDynamicData.js"
  devDynamicContent.generator_richmedia_temple_framework_test_feed_main = [{}];
  devDynamicContent.generator_richmedia_temple_framework_test_feed_main[0]._id = 0;
  devDynamicContent.generator_richmedia_temple_framework_test_feed_main[0].id = 0;
  devDynamicContent.generator_richmedia_temple_framework_test_feed_main[0].reporting_label = "test_0";
  devDynamicContent.generator_richmedia_temple_framework_test_feed_main[0].default = true;
  devDynamicContent.generator_richmedia_temple_framework_test_feed_main[0].active = true;
  devDynamicContent.generator_richmedia_temple_framework_test_feed_main[0].version = ["0"];
  devDynamicContent.generator_richmedia_temple_framework_test_feed_main[0].text = "Welcome to this 0 Banner!";
  devDynamicContent.generator_richmedia_temple_framework_test_feed_main[0].logo = {};
  devDynamicContent.generator_richmedia_temple_framework_test_feed_main[0].logo.Type = "file";
  devDynamicContent.generator_richmedia_temple_framework_test_feed_main[0].logo.Url = "https://s0.2mdn.net/ads/richmedia/studio/33345/33345_20210113054941196_logo.svg";
  devDynamicContent.generator_richmedia_temple_framework_test_feed_main[0].cta = "Click here";
  devDynamicContent.generator_richmedia_temple_framework_test_feed_main[0].bgcolor = "#FFFFFF";
  devDynamicContent.generator_richmedia_temple_framework_test_feed_main[0].exit_url = {};
  devDynamicContent.generator_richmedia_temple_framework_test_feed_main[0].exit_url.Url = "http://www.google.com";
```

And you want to use these values in your html/hbs file:

```js title="/src/shared/script/Banner.js"
import dataBind from "@mediamonks/temple/util/dataBind";

const feed = window.dynamicContent["generator_richmedia_temple_framework_test_feed_main"][0];

dataBind(feed, document.querySelector('body'));
```

and the html bindings would look like this

```html  title="/src/shared/index.hbs"
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<body>
  <div class="banner border" data-bind="style.backgroundColor: bgcolor">
    <div class="content fullscreen">
      <div class="title_container">
        <div class="title" data-bind="html: text, style.backgroundColor: bgcolor"></div>
      </div>
      <img class="logo" data-bind="src: logo.Url">
      <div class="cta">
        <div class="cta_copy" data-bind="html: cta"></div>
      </div>
    </div>
    <div class="mainExit fullscreen"></div>
  </div>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.0/gsap.min.js"></script>
</body>
</html>
```
What happens here dataBind searches the `document.querySelector('body')` for data-bind attributes that you see 
here in the html file.

Then it looks what is the value of the attribute data-bind and applies the data data from the feed to the html.

 - `data-bind="html: text"` , applies `html` to a element from the property `text` that comes from feed.
 - `data-bind="src: logo.Url"` , applies `src` to a element from the property `logo.Url` that comes from feed.
 - `data-bind="href: logo.Url"` , applies `href` to a element from the property `logo.Url` that comes from feed.
 - `data-bind="style.backgroundColor: bgcolor"` , applies `style.backgroundColor` to a element from the property `bgcolor` that comes from feed.