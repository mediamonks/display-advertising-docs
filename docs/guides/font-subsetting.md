---
sidebar_position: 3
---

# Font Subsetting

Font subsetting allows us to drastically reduce the overall filesize of our ads by slimming down our font files to the point where they only include the actual characters we need.
This typically applies only to ads with static content.

So this way, you can go from a 50kb woff2 file to a 5kb woff2 file, with no decrease in quality at all.

You can do this by adding a 'fonts' array to your settings object in the .richmediarc. 

```json title="/src/300x250/.richmediarc"
{
  "settings": {
    "entry": {
      "js": "./script/main.js",
      "html": "./index.hbs"
    },
    "size": {
      "width": 300,
      "height": 250
    },
    "fonts": [
      {
        "sources": [
          "../shared/fonts/WesternFont-Regular.woff",
          "../shared/fonts/WesternFont-Regular.woff2"
        ],
        "subset": {
          "glyphs": [ "content.copy1", "content.copy2", "content.copy3"
          ]
        }
      },
      {
        "sources": [
          "../shared/fonts/WesternFont-Bold.woff",
          "../shared/fonts/WesternFont-Bold.woff2"
        ],
        "subset": {
          "glyphs": [
            "content.cta"
          ]
        }
      }
    ]
  },
  "content": {
    "copy1": "This is copy1",
    "copy2": "This is copy2",
    "copy3": "This is copy3",
    "cta": "Click Here",
    "clickTag": "http://www.google.com"
  }
}
```