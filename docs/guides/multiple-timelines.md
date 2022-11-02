---
sidebar_position: 9
---

# Multiple Timelines

It is posible to create multiple Timelines to be able to control them though `banner.js`.

This can be usefull if you need to repeat the main timeline and connect the head and tail of it with extra animations, 
what you may call, "Seamless Loop".

The idea is to import the animations you need in `main.js`

```js title="/src/shared/script/main.js" {1,5}
    import Banner from "./Banner";
    import MainAnimation from "./MainTL";
    import ExtraAnimation from "./ExtraTL";

```
call them through the method setAnimation as new classes 

```js title="/src/shared/script/main.js" {1,5}
    const banner = new Banner(config);
    //first load fonts, load images etc in the init animation
    banner.init().then(
      () => {
        //initializes animations and creates main timeline
        banner.setAnimation(
          new MainAnimation(document.querySelector('.banner'), config),
          new ExtraAnimation(document.querySelector('.banner'), config)
          );
        //plays banner
        banner.start()
      }
    )
```

and prepare the setAnimation method from `banner.js` to distribute the different Timelines.

```js title="/src/shared/script/banner.js" {1,5}

  setAnimation(MainAnimation, ExtraAnimation){
    this.MainAnimation = MainAnimation;
    this.ExtraAnimation = ExtraAnimation;
    //creates new timeline and pauses it
    this.MainAnimation.getTimeline().paused(true);
    this.ExtraAnimation.getTimeline().paused(true);
    // this.MainAnimation.getTimeline().eventCallback('onComplete', this.handleAnimationComplete);

  }

```

And thats it, now you can access both Timelines and control them individually.