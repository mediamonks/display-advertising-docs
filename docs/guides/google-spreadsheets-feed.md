---
sidebar_position: 5
---

# Spreadsheets

### Introduction

By using a spreadsheet, you avoid having to generate multiple .richmediarcs for multiple variations. It is possible to generate several units with a single row.

So you have a richmedia unit and you need generate 19 different versions with different copy for different sizes and languages.

This is now possible with `contentSource` by adding contentSource to your richmediarc you can link to a spreadsheet and use that as a content source.

:::info
**Important:** if you create a new sheet for a project, please share with the rest of the team for future modifications.
:::

### Configuration

You can use the basic **[basic spreadsheet](https://docs.google.com/spreadsheets/d/1BImA3lgTJsbVl56GQTFT-b1dx4FIoeQFBe9WLp0wWxc/edit#gid=0)** template.

As you can see it has 6 columns with the first row defining the name of the column. These rows with their content will be used as the source for the content property of your richmediarc.

```json title="/src/shared/.sharedrc" {8,9,10,11,12,13,14,15}
{
  "settings": {
    "bundleName": "${content.size}_${settings.version}_${settings.language}",
    "entry": {
        "js": "./script/main.js",
        "html": "index.hbs"
    },
    "contentSource": {
      "url": "https://docs.google.com/spreadsheets/d/1BImA3lgTJsbVl56GQTFT-b1dx4FIoeQFBe9WLp0wWxc/edit#gid=0",
      "apiKey": "API_KEY",
      "tabName": "main",
      "filter": {
        "version": "beauty"
      }
    }
  },
  "content": {
    "title": "default title",
    "copy0": "default copy",
    "cta": "default cta"
  }
}
```

You just need to replace API_KEY placeholder with your own generated key. You can generate a key here [https://developers.google.com/sheets/api/guides/authorizing#APIKey](https://developers.google.com/sheets/api/guides/authorizing#APIKey) in contentSource you also see a property called tabName and filter.

 - `tabName` will let you define what tab you want to use of your spreadsheet.
 - `filter` will let you filter the only values you want. so in this example it will only select rows with the value "beauty" in the version column.



### Advanced example

Another alternative for spreadsheet development is to use it similar to DCO, where sizes are added as new columns. Check the [advanced spreadsheet example](https://docs.google.com/spreadsheets/d/1rqF1F7JhaLYu9_-MPmhzztH9i5OE5XURkWpwtSv1quY/edit?usp=sharing).

```json title="/src/shared/.sharedrc" {6,7,8,9}
...
{
 "contentSource": {
    "url": "https://docs.google.com/spreadsheets/d/1rqF1F7JhaLYu9_-MPmhzztH9i5OE5XURkWpwtSv1quY/edit?usp=sharing",
    "apiKey": "API_KEY",
    "tabName": "default",
    "idField": "keyField",
    "filter": {
      "master": "${content.master}"
    }
  }
}
...
```

```json title="/src/300x250/.richmediarc_B1_NA_SMB" {11}
{
  "parent": "../shared/.sharedrc",
  "settings": {
    "size": {
      "width": 300,
      "height": 250
    }
  },
  "content": {
    "customCss": "./css/index.css",
    "master": "B1_NA_SMB"
  }
}
```
### OAuth2

OAuth2 is another auth way to grab data from a spreadsheet.

The main pro about it is security: you don't have to share a feed for public read.
The main con comparing to API key is that it's a bit more complicated: 1 string vs 2.

In order to use OAuth2 you simply need to remove `apiKey` property from `contentSource`
so dev-server can switch to OAuth2 mode.

```diff title="/src/shared/.sharedrc" {5}
...
{
 "contentSource": {
    ...
-    "apiKey": "API_KEY",
    ...
  }
}
...
```

Then create a new or use an existing OAuth 2.0 Credential from your Google Console
[https://developers.google.com/sheets/api/guides/authorizing](https://developers.google.com/sheets/api/guides/authorizing)

If the feed is created under your account - no extra shares required.
Just run `dev-server` and follow the CLI tool.

And be safe!
