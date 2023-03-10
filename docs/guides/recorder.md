---
sidebar_position: 9
---

# Ads Recorder

The Display Ads Recorder is a command line tool meant to record display ads and output these to separate formats, like
video, jpg and gif (animated).

:::info Make sure you import and include the enableAdsRecorder(timeline, config) function from display temple (**v6.2.3
or higher**) so the ad can dispatch the right events to the recorder tool. See example
here: http://www.github.com/mirkovw/display-record-template
:::

### Requirements

You must **pre-build the ads** (display-ads-recorder will ask you for the directory where it will search for the ads),
see @mediamonks/display-dev-server. Your ad's index.html must include a `<meta name='ad.size'>` tag. otherwise,
display-ads-recorder will not recognize it as a ad.

The ad must include the function that dispatches and listens to critical events for display-ads-recorder to work. See
example here: http://www.github.com/mirkovw/display-record-template.

### Installation

```terminal
npm i @mediamonks/display-ads-recorder
```

### Configuration

```json title="package.json" {4}
"scripts": {
    "dev": "dds --mode development",
    "build": "dds --mode production",
    "recorder": "display-ads-recorder",
    "preview": "display-upload"
  },
```

```js title="/src/shared/script/Banner.js" {1,4}
import enableAdsRecorder from '@mediamonks/display-temple/util/enableRecorder';

start()
{
    enableAdsRecorder(this.animation.getTimeline(), this.config);
    this.animation.play();
}
```



### Usage

```terminal
npm run recorder
```

After running the script, you will need to answer a few questions before generating the files:

```
Welcome to the Display.Monks Record Tool v3.1.0
make sure you import and include the enableAdsRecorder(timeline, config) function from display temple
so the ad can dispatch the right events to the recorder tool
see example here: http://www.github.com/mirkovw/display-record-template
? Target Dir? (./build)
```

```
? Please select ad(s) to record: (Press <space> to select, <a> to toggle all, <i> to invert selection, and <enter> to proceed)
>( ) all
 ( ) ./build/version1_cashback_v2_image_160x600/index.html
 ( ) ./build/version1_cashback_v2_image_300x250/index.html
 ( ) ./build/version1_cashback_v2_image_300x600/index.html
 ( ) ./build/version1_cashback_v2_image_320x50/index.html
 ( ) ./build/version1_cashback_v2_image_728x90/index.html
 ( ) ./build/version1_cashback_v2_text_160x600/index.html
(Move up and down to reveal more choices)
```

```
? Please select output(s) (Press <space> to select, <a> to toggle all, <i> to invert selection, and <enter> to proceed)
>( ) mp4
 ( ) gif (animated)
 ( ) jpg (last frame)
```

NEW* If you select the option `jpg (last frame)` it will also ask you for the max KB filesize.

:::important

- Ad Recorder records only one GSAP timeline, therefore, your animation needs to exist out of **one main GSAP timeline**
  that includes all the animations.
- Recording video from an ad is not supported.
  :::
