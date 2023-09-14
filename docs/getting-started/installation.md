---
sidebar_position: 1
---

# Installation

### Prerequisites

- [NodeJS](https://nodejs.org/en)

- Terminal / Windows Powershell

- Code editor ([VSCode](https://code.visualstudio.com/), [Webstorm](https://www.jetbrains.com/webstorm/))


The display generator is built with the help of [Yeoman](https://yeoman.io/) which is web scaffolding tool for 
modern web tools. The first thing that we will need to do is install yeoman globally, so it's available in your 
terminal / command prompt as `yo`.

**Open your terminal run the following commands:**


### Step 1

First install Yeoman globally

```terminal
npm install -g yo
```


### Step 2

Install the Media.Monks display-boilerplate generator globally


```terminal
npm install -g generator-display-boilerplate
```


Verify Yeoman is working globally by running the following command

```terminal
yo --version
```


:::tip
If you are having trouble with your user account not having admin rights with installing the generator-display-boilerplate and are working on a mac, try to use "sudo" in front of the commands. By using "sudo," the user is granted temporary administrative access, allowing them to perform tasks that require root or administrator permissions. 
So for example:
```terminal
sudo npm install -g generator-display-boilerplate
```
:::



<!-- - ejemplos FrameAnimation
- ejemplos uso del shared
- ejemplos handlebars (for, condicionales, etc)
- utilizando data-bind
- crear banners con comandos
- GsapDevTools
- Upload banner with display-upload
- Utilizando SpreadSheets
- generar un build (minificado, sin minificar, etc)
- display-upload con las credenciales locales?
- -->
