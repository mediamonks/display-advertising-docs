---
sidebar_position: 4
---

# Generate a build

To run the build script, you can run “npm run build” in your terminal or console.
“build” is actually a script which is found in package.json, which in turn runs the command rds-build. After you execute this script, it will start searching for .richmediarc files in all the directories and subdirectories of your project.  You’ll see something like this:

```terminal
npm run build
```

“build” is actually a script which is found in package.json, which in turn runs the command rds-build. After you execute this script, it will start searching for .richmediarc files in all the directories and subdirectories of your project. You’ll see something like this:

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