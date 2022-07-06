---
sidebar_position: 9
---

# Ads Recorder
The Display Ads Recorder is a command line tool meant to record display ads and output these to separate formats, like video, jpg and gif (animated).

:::info
Make sure you import and include the enableAdsRecorder(timeline, config) function from display temple (**v6.2.3 or higher**) so the ad can dispatch the right events to the recorder tool. See example here: http://www.github.com/mirkovw/display-record-template
:::


### Requirements
You must **pre-build the ads** (display-ads-recorder will ask you for the directory where it will search for the ads), see @mediamonks/display-dev-server.
Your ad's index.html must include a `<meta name='ad.size'>` tag. otherwise, display-ads-recorder will not recognize it as a ad.

The ad must include the function that dispatches and listens to critical events for display-ads-recorder to work. See example here: http://www.github.com/mirkovw/display-record-template.


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

start() {
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
Welcome to the Display.Monks Record Tool v1.0.4

? Target Dir? ./build
finding all index.html files recursively in ./build
found 2 ad(s)
? Please select ad(s) to record: all
? Please select additional output types (mp4 is done by default): gif (animated)
? You selected .gif as additional output. Would you like it run once or loop? Run once
? Please select fps to record at 30
```

