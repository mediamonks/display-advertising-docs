---
sidebar_position: 13
---

# Automatically optimize zips

You can now let the dev-server try to optimize your bundle .zip to try and fit it within the specs.

### Configuration

```json title="package.json" {}
settings": {
    "maxFileSize": 150,
    "optimizeToFileSize": true,
}
```

The dev-server will then try to optimize your zip, lowering the quality of the jpg/png files until it is below the maxFileSize.
(the lowest quality it will use is 60).

If you use this, set `image optimization` to `false` in the `optimization` object in the `settings` of the `.richmediarc`, otherwise webpack will optimize the image twice (will fix this in a patch soon)

:::note
You may wonder why not just `"optimizeToFileSize": 150`? This is because `maxFileSize` is also used by the preview, and sometimes you don’t want to use `optimizeToFileSize`.
:::