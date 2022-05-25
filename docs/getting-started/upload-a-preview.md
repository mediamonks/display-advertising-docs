---
sidebar_position: 5
---

# Upload a preview

## How to use

Uploading your banners to a preview can be done in a number of ways.

The easiest method is to use our tool called “display-upload”, which you can start by running the following command:

```terminal
npm run preview
```


If it’s the first time you run this command, you’ll see something like this:

```
Welcome to Display-Upload
? No .henkrc as added to the .gitignore, should i add it? (Y/n)
```

Press **Y**. You’ll see the following options

```
? Where do you want to upload? (Use arrow keys)
> Mediamonks Preview
  Amazon S3
  SFTP (alpha)
  - FTP (Disabled)
  - Netflix Monet (Disabled)
  - Google DoubleClick Studio (Disabled)
```

:::info
FYI Media.Monks Preview and Amazon S3 do practically the same thing.
:::

## MediaMonks Preview

This will upload the entire build folder to a S3 bucket. When you select this, you’ll have to enter a few things:

```
? What directory you want to upload?
```

Just enter `build` here by default.

```
? Please fill in the name for the S3 Bucket:
? Please fill in the accessKeyId for the S3 Bucket:
? Please fill in the secretAccessKey for the S3 Bucket:
```
These values you can find in the pinned messages of our ‘wfh-aas-dev’ Slack channel.

```
? outputDir: (3334d7e2-3d58-4c84-aec7-4b6d4f50c7f0/)
```

It will automatically generate a unique hash value as the directory name of the preview. Just press **enter** or add your 
own value and then press enter.

It will then upload the contents of the ./build/ directory and show you a link to the preview, which should look something like this:

`http://richmedia-previews-s3bucket-khpmpnjb2dya.s3.amazonaws.com/3334d7e2-3d58-4c84-aec7-4b6d4f50c7f0/index.html
`