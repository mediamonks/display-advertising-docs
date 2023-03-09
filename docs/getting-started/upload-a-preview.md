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
Welcome to the Display.Monks Upload Tool v1.6.2
? No .uploadrc as added to the .gitignore, should i add it? (Y/n)
```

Press **Y**. You’ll see the following options

```
? Where do you want to upload? (Use arrow keys)
> Mediamonks Preview
  Adform
  Flashtalking
  Google DoubleClick Studio
  SFTP (alpha)
```

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

:::note
If you are a Windows user, you can also store these credentials in your Environment Variables. 
Add the variables **preview_accessKeyId**, **preview_accessKeySecret** and **preview_s3bucket** with the respective values to the user variables.
:::

The tool will automatically generate a unique hash value as the directory name of the preview. Just press **enter** or add your
own value and then press enter. 

```
? outputDir: (3334d7e2-3d58-4c84-aec7-4b6d4f50c7f0/)
```

:::important
Keep in mind that this unique hash has been created in order always create a unique url, to change this to a common url like test/ or client/ is therefore a bad practise.
Better use the hash in combination with your own project, like 3334d7e2-3d58-4c84-aec7-4b6d4f50c7f0/client/project/ads/v1/
:::

It will then upload the contents of the ./build/ directory and show you a link to the preview, which should look something like this:

`http://richmedia-previews-s3bucket-khpmpnjb2dya.s3.amazonaws.com/3334d7e2-3d58-4c84-aec7-4b6d4f50c7f0/index.html
`

### Custom preview parameters
These parameters might come in handy if you want to create multiple previews, for each different version of an ad for example.
There is a parameter outputDir available that you can run along with the build command.

| Property |  Description | Example values |
| ----------- |  ----------- | ----------- |
| --type or -t | type of preview | mm-preview, adform, flashtalking, doubleclick, sftp
| --inputDir or -i | input directory, by default ./build | ./build/version1/
| --outputDir or -o | output directory, by default a unique hash/ | ./3334d7e2-3d58-4c84-aec7-4b6d4f50c7f0/version1/

#### Via the Commandline
Use the build command
```terminal
npm run preview -- --type mm-preview --inputDir ./build/version1/ --outputDir 1f08c1d9-b4f1-4a47-831b-409cf070b151/version1/
```

or the shorthand version:

```terminal
npm run preview -- -t mm-preview -i ./build/version1/ -o 1f08c1d9-b4f1-4a47-831b-409cf070b151/version1/
```

#### In your package.json
Use the dds command
```terminal
"preview:version1": "display-upload -t mm-preview -i ./build/version1/ -o 1f08c1d9-b4f1-4a47-831b-409cf070b151/version1/
```

#### Advanced combinations
Example with a glob for automizing purposes:
```terminal
"build-preview:version1": "dds --mode production -o ./build/version1/ --choices eyJsb2NhdGlvbiI6WyJhbGwiXSwiZW1wdHlCdWlsZERpciI6dHJ1ZX0= && display-upload -t mm-preview -i ./build/version1 -o 1f08c1d9-b4f1-4a47-831b-409cf070b151/version1/"
```