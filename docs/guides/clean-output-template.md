---
sidebar_position: 14
---

# Clean output template
This version of the framework creates an output that excludes the browser-compatible Babel implementation. With IE 11 being deprecated, this has become an option for us to use in some cases.
The clean output includes the config file and readable javascript in the main.js so that you can still adjust it after building your ads.

![alt text](/img/clean_output_template1.png)

![alt text](/img/clean_output_template2.png)

### Purpose

Sometimes, other agencies or teams in MM will request the built zips of ads built with our framework, with the intention of adjusting after build without the use of the framework. This could be for creating extra versions or translations.


### Repo
You can find the clean output in a separate repo:
https://github.com/mirkovw/display-advertising-cleanoutput-template

:::caution
This setup is still in experimental phase so do use it with caution. It is always recommendable to use the full framework to quickly make amends and new resizes. Using the export will always slow down the process and create less overview and less reusable code.
:::


