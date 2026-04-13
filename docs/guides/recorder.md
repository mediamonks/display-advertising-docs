---
sidebar_position: 9
---

# Ads Recorder

The Display Ads Recorder is a command-line tool for recording display ads and exporting them in multiple formats: **video (MP4)**, **animated GIF**, **JPG backup image**, and **keyframe screenshots (PNG/JPG)**.

It uses Puppeteer to launch each ad in a headless browser, communicates with the GSAP timeline via postMessage events, and captures frames or screenshots that are then processed with FFmpeg and Sharp.

:::info
Make sure you import and include the `enableAdsRecorder(timeline, config)` function from display-temple (**v6.2.3 or higher**) so the ad can dispatch the right events to the recorder tool. See example here: http://www.github.com/mirkovw/display-record-template
:::

---

## Requirements

- You must **pre-build the ads** before recording. The recorder will ask you for the build directory where it searches for ads. See `@mediamonks/display-dev-server`.
- Your ad's `index.html` must include a `<meta name='ad.size'>` tag — otherwise the recorder will not recognize it as an ad.
- The ad must include the `enableAdsRecorder` function that dispatches and listens to the required events. See example here: http://www.github.com/mirkovw/display-record-template.

:::important
- The recorder works with **one main GSAP timeline** that includes all the animations.
- Recording video **from within** an ad (e.g. `<video>` elements) is not supported.
:::

---

## Installation

```terminal
npm i @mediamonks/display-ads-recorder
```

---

## Configuration

Add the recorder script to your `package.json`:

```json title="package.json" {4}
"scripts": {
    "dev": "dds --mode development",
    "build": "dds --mode production",
    "recorder": "display-ads-recorder",
    "preview": "display-upload"
}
```

Enable the recorder in your ad's Banner script:

```js title="/src/shared/script/Banner.js" {1,4}
import enableAdsRecorder from '@mediamonks/display-temple/util/enableRecorder';

start() {
    enableAdsRecorder(this.animation.getTimeline(), this.config);
    this.animation.play();
}
```

---

## Usage

### Interactive mode

```terminal
npm run recorder
```

The tool will guide you through a series of prompts:

1. **Target directory** — path to your build folder (default: `./build`)
2. **Ad selection** — pick individual ads or select all
3. **Output formats** — choose one or more:
   - `mp4` — video recording of the full animation
   - `gif (animated)` — animated GIF from the video
   - `jpg (last frame)` — optimized JPG backup image of the last frame
   - `keyframes (one per GSAP label)` — high-quality screenshot at each settled keyframe
4. **Format-specific options** (shown when relevant):
   - **GIF**: run once or loop
   - **MP4 / GIF**: FPS selection (15, 30, or 60)
   - **JPG**: max file size in KB (default: 40)
   - **Keyframes**: image format — PNG (lossless) or JPG (quality 100)

### CLI flags

You can skip the interactive prompts by passing flags directly:

```terminal
display-ads-recorder [options]
```

| Flag | Short | Description |
|------|-------|-------------|
| `--targetDir <path>` | `-t` | Build directory containing the ads |
| `--all` | `-a` | Record all ads without prompting |
| `--mp4` | `-m` | Output MP4 video |
| `--gif [once\|loop]` | `-g` | Output animated GIF (once or loop) |
| `--jpg [maxKB]` | `-j` | Output JPG backup image, optionally set max file size in KB |
| `--keyframes` | `-k` | Capture a PNG/JPG screenshot at each GSAP timeline label |
| `--keyframe-format <png\|jpg>` | `-kf` | Image format for keyframe screenshots (default: `png`) |
| `--fps <15\|30\|60>` | `-f` | Frame rate for MP4 and GIF |
| `--audio <path>` | `-au` | Audio file path (relative to target dir) |
| `--volume <number>` | `-v` | Audio volume multiplier (default: 1) |
| `--chunkSize <number>` | `-c` | Number of ads to process in parallel (default: 10) |

#### Examples

Record all ads as MP4 at 30fps:
```terminal
display-ads-recorder -t ./build -a -m -f 30
```

Capture keyframe screenshots as PNG for all ads:
```terminal
display-ads-recorder -t ./build -a -k
```

Capture keyframes as high-quality JPG:
```terminal
display-ads-recorder -t ./build -a -k -kf jpg
```

Record MP4 with audio and also capture keyframes:
```terminal
display-ads-recorder -t ./build -a -m -k -f 30 -au audio.mp3
```

---

## Output formats

### MP4 Video

Records every frame of the animation at the selected FPS and encodes an MP4 video. Output files are saved to the target directory as `{adName}.mp4`.

### Animated GIF

Generates a GIF from the MP4 video using a two-pass FFmpeg process (palette generation + encoding). You can choose whether the GIF plays once or loops. Output: `{adName}.gif`.

### JPG Backup Image

Captures the last frame of the animation and optimizes it with Sharp, progressively reducing JPEG quality until the file fits within the specified max size (default: 40KB). Output: `{adName}.jpg`.

### Keyframe Screenshots

Captures a high-quality static screenshot at each **settled keyframe** in the GSAP timeline. This is useful for creative review, storyboarding, and deliverables that require individual frame states.

Output files are saved to the target directory as `{adName}_{labelName}.png` (or `.jpg`).

#### How it works

The recorder reads the GSAP timeline labels from the ad (e.g., `start`, `frame1`, `frame2`, `frame3`, `end`) and seeks to each label's timestamp to capture the frame at that point. Each screenshot represents a **fully settled state** — the moment where all animations for that keyframe have completed.

#### Timeline label conventions

Labels at **time 0** are automatically skipped, since the animation hasn't built the first frame yet at that point. The first meaningful capture is the label where the initial frame construction finishes (e.g., `frame1` at t=3s).

The recorder accepts labels in any naming convention (`frame1`, `Frame1`, `keyframe_1`, etc.). Labels are sorted by their timeline position and captured in order.

#### Example timeline structure

A typical GSAP timeline with labels:

```
start (t=0) ──→ frame1 (t=3) ──→ frame2 (t=4.5) ──→ frame3 (t=6) ──→ end (t=7)
  │                 │                  │                   │               │
  │ Build frame 1   │ Transition       │ Transition        │ Transition    │
  │ (skipped)       │ ✓ captured       │ ✓ captured        │ ✓ captured    │ ✓ captured
```

In this example, `start` at t=0 is skipped. The output would be 4 images:
- `banner_300x250_frame1.png`
- `banner_300x250_frame2.png`
- `banner_300x250_frame3.png`
- `banner_300x250_end.png`

#### How labels are detected

The recorder tries two methods to find timeline labels:

1. **From the `animation-ready` message** — if `enableAdsRecorder` passes a `labels` property in the config
2. **Fallback: direct GSAP query** — the recorder queries `gsap.globalTimeline` on the page and walks the timeline tree to find labels automatically

This means keyframe capture works even without modifying `enableAdsRecorder`, as long as the ad uses GSAP with named labels on its timeline.
