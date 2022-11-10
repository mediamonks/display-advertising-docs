---
sidebar_position: 7
---

# Dynamic Import

Dynamic import() introduces a new function-like form of import that caters to those use cases. import(moduleSpecifier) returns a promise for the module namespace object of the requested module, which is created after fetching, instantiating, and evaluating all of the module’s dependencies, as well as the module itself.


```js title="/src/300x250/script/main.js" {4,5}
import config from "richmediaconfig";
import Banner from "../../shared/script/Banner";

import(`./${(config.content.customAnimation) ? config.content.customAnimation : 'AnimationDefault'}.js`)
    .then(Animation => createBanner(Animation));

const createBanner = (Animation) => {
  const banner = new Banner(config);

  banner.init().then(() => {
      banner.setAnimation(new Animation.default((document.querySelector('.banner'), config)));
      banner.start()
    }
  )
}
```

