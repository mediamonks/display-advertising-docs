---
id: recording-external-banners
title: Recording External / Legacy Banners
sidebar_label: External Banners
description: How to record banners from other agencies or legacy projects using the quick-mode recorder.
tags: [guide, ffmpeg, workflow, legacy]
---

# Recording External / Legacy Banners

You don't need to build banners inside the `display-dev-server` to record them. The **Display Ads Recorder** is build-agnostic: it simply opens a browser, looks for a specific "Handshake," and captures frames.

This guide explains how to record **any GSAP-based banner** (from other agencies, legacy projects, or manual builds) using **"Quick Mode"** (via `npx`), without setting up a full project repo.

## Prerequisites

If you are on a new machine, you need these basic tools installed before starting.

### Install Node.js
The recorder runs on Node. You can check if you have it by typing `node -v` in your terminal.
* **Download:** [Node.js (LTS Version recommended)](https://nodejs.org/)
* **Verify:**
  ```bash
  node -v
  # Should print something like v18.x.x or v20.x.x
  ```

:::note
FFmpeg is handled internally by the tool, so you do not need to install it globally.
:::

## Prepare Your Banner (The "Handshake")
The recorder is "blind" until the banner tells it the animation is ready. You must inject a small code snippet into your banner's main JavaScript file.

### The Code Snippet
Copy and paste this function at the bottom of your banner's main `.js` file (e.g., `script.js` or `main.js`).

```js
/**
 * DISPLAY.MONKS RECORDER ADAPTER
 * Connects external GSAP timelines to the recording tool.
 */

function enableAdsRecorder(timeline) {
  // 1. ANNOUNCE: Tell the recorder the duration and size
  setTimeout(() => {
    // Try to auto-detect size from meta tag, default to 300x250
    const metaSize = document.querySelector('meta[name="ad.size"]');
    let width = 300, height = 250;
    
    if (metaSize) {
      const content = metaSize.getAttribute('content');
      const wMatch = content.match(/width=(\d+)/);
      const hMatch = content.match(/height=(\d+)/);
      if (wMatch) width = parseInt(wMatch[1]);
      if (hMatch) height = parseInt(hMatch[1]);
    }

    // Fire the handshake event
    window.postMessage({
      name: 'animation-ready',
      duration: timeline.totalDuration(),
      width: width,
      height: height
    }, '*');
  }, 500); // Small delay to ensure fonts/images are rendered

  // 2. LISTEN: Wait for the recorder to ask for a specific frame
  window.addEventListener('message', (event) => {
    if (event.data.name === 'request-goto-frame') {
      // Convert ms to seconds for GSAP
      const timeInSeconds = event.data.frame / 1000;
      
      // Freeze and Seek
      timeline.pause();
      timeline.seek(timeInSeconds);

      // Confirm seek is done (wait 1 tick for rendering)
      requestAnimationFrame(() => {
        window.postMessage({ name: 'current-frame' }, '*');
      });
    }
  });
}
```

### Initialize It
Find where you create your Main GSAP Timeline and pass it to the function:

```js
// Example usage in your code:
const mainTl = gsap.timeline();

mainTl.to(".box", { x: 100, duration: 1 })
      .to(".text", { opacity: 1, duration: 0.5 });

// -> ACTIVATE RECORDER LOGIC
enableAdsRecorder(mainTl); 
```

## Folder Structure
The recorder scans recursively. To keep things organized and ensure the output files are named correctly, use this structure.

Create a folder named `build` (or `banners`). Place your banner folders inside.

:::important
- The HTML file **MUST** be named `index.html`.
- The `index.html` **MUST** have the meta size tag: `<meta name="ad.size" content="width=300,height=250">`
:::

**Example Structure:**
```
/My_Desktop_Folder
  └── build/
      ├── Nike_300x250/
      │   ├── index.html       <-- Contains <meta name="ad.size">
      │   ├── script.js        <-- Contains enableAdsRecorder(tl)
      │   └── style.css
      └── Nike_160x600/
          ├── index.html
          └── ...
```

## Run the Recorder (Quick Mode)
You do not need to install the tool permanently. We use `npx` to download and run the latest version on the fly.

1. Open your Terminal or Command Prompt.
2. Navigate to your folder (parent of `build`):
   ```bash
   cd path/to/My_Desktop_Folder
   ```
3. Run the magic command:
   ```bash
   npx @mediamonks/display-ads-recorder
   ```

### Common Flags
If you need specific outputs (like MP4 instead of just the default), you can pass flags:

- **Target specific folder:** `npx @mediamonks/display-ads-recorder -t ./my-custom-folder`
- **Output Video (MP4):** `npx @mediamonks/display-ads-recorder -m`
- **Output GIF:** `npx @mediamonks/display-ads-recorder -g loop`
- **Set FPS (Default is 60):** `npx @mediamonks/display-ads-recorder -f 30`

## Troubleshooting
- **"Browser disconnected"**: Check if your animation has an infinite loop or errors in the console.
- **Black/Empty Video**: Ensure `enableAdsRecorder(tl)` is actually called and that you have `timeline.seek()` logic inside it.
- **Missing Banners**: Ensure your files are named `index.html` and contain the `<meta name="ad.size" ...>` tag.