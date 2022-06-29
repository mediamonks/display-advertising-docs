---
sidebar_position: 3
---

# How to update Framework

Before proposing/making a change it is necessary to select the relevant repository.


:::info Repositories:
- [Display Temple](https://github.com/mediamonks/display-temple): if you want to change an util, DCO event or update the FrameAnimation.

- [Display Upload](https://github.com/mediamonks/display-upload): if you want to create a new upload environment or modify any of the current ones.

- [Display Boilerplate](https://github.com/mediamonks/generator-display-boilerplate): if you want to modify the initial questions, add parameters, modify a template or create a new one.

- [Display Dev Server](https://github.com/mediamonks/display-dev-server): if you want to change a configuration in Webpack, install a plugin and other issues related to dev/build.
:::

## Propose a change

If you want to propose a change, it will be necessary to create a ticket informing in detail what you want to do. Please read the [How to create an issue](contributing/create-issue.md) page.

## Workflow for make changes

1. [Fork the repository](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork)
2. Clone your new fork locally
3. [Create a new branch for your changes](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-and-deleting-branches-within-your-repository)
4. Make your changes
   1. ```npm install``` node_modules in your local fork
   2. Do your code changes in your fork
   3. Link your local fork with ```npm link```
   4. Test your local fork
      1. By either using ```npm link @mediamonks/display-dev-server``` in a test project for for example the display-dev-server
      2. Or for the display-boilerplate, running ```yo display-boilerplate``` in a test project and then installing your changes
5. [Submit your pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request#changing-the-branch-range-and-destination-repository)
6. [Discuss and review your code](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews)
7. Rebase and tests
8. [“Merge” your branch to the master branch](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request)
9. [Create a new version (tag) with a message](https://docs.npmjs.com/cli/v8/commands/npm-version)
```terminal
npm version minor/major/patch -m "this has been updated"
```
11. [Push your tag to origin](https://docs.github.com/en/get-started/using-git/pushing-commits-to-a-remote-repository)
```terminal
git push origin
```