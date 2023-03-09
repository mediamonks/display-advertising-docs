---
sidebar_position: 4
---

# Generate a build

If you check the `build` is actually a script which is found in package.json, which in turn runs the command `dds --mode production`. After you execute this script, it will start searching for .richmediarc files in all the directories and subdirectories of your project.  You’ll see something like this:

```terminal
npm run build
```

“build” is actually a script which is found in package.json, which in turn runs the command `dds --mode production`. After you execute this script, it will start searching for .richmediarc files in all the directories and subdirectories of your project. You’ll see something like this:

```
? Please choose the current build to start. (Press <space> to select, <a> to toggle all, <i> to invert selection)
>( ) all
( ) ./src/300x250/.richmediarc
( ) ./src/300x600/.richmediarc
( ) ./src/728x90/.richmediarc
( ) ./src/970x250/.richmediarc
```

Here, you can select which units you wish to build. Navigate with arrow keys and select (it’s possible to select multiple values) with spacebar, then press enter to confirm your selection.
```
? save this as a separate command in package.json (y/N)
```

Use this option to save your selection as a separate command. If you select **y**, you’ll see something like this:

```
? please provide a name for your command. You will type something like npm run build:__NAME__
```
No special chars, spaces, dashes just a single word.

You’ll have to give it a unique name, for example “selection”. Now you will be able to run a dev server with the same selection simply by running

```terminal
npm run build:selection
```


It will now compile the banners you selected and then move these files to the ./build directory, along with zipped files which you can use for delivering files or uploading to certain previews.

### Custom build parameters
This parameter might come in handy if you want to create multiple packages (versions) of zips, or if you want to build ads to separate folders.
There is a parameter outputDir available that you can run along with the build command.

| Property |  Description | Example values |
| ----------- |  ----------- | ----------- |
| --outputDir or -o | output directory, by default ./build | ./build/version1/
| --skipBuild | skip compiling ads phase | 
| --skipPreview | skip preview building phase | 

#### Via the Commandline
Use the build command
```terminal
npm run build -- --outputDir ./build/version1/ --skipBuild
```

or the shorthand version:

```terminal
npm run build -- -o ./build/version1/ --skipBuild
```

#### In your package.json
Use the dds command
```terminal
"build:version1": "dds --mode production -o ./build/version1/" --skipPreview
```

#### Advanced combinations
Example with a glob and a preview command, for automizing purposes:
```terminal
"build-preview:version1": "dds --mode production -o ./build/version1/ --choices eyJsb2NhdGlvbiI6WyJhbGwiXSwiZW1wdHlCdWlsZERpciI6dHJ1ZX0= && display-upload -t mm-preview -i ./build/version1 -o 1f08c1d9-b4f1-4a47-831b-409cf070b151/version1/"
```