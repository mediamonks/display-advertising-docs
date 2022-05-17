---
sidebar_position: 7
---

# Create banners with commands

Another way to create banners is using the command line with parameters. It is possible to create multiple banners using the **--units** parameter and is possible to define the **--type** of the units.

Here are some examples:

```terminal
yo display-boilerplate --units "300x600, 300x250"
```

```terminal
yo display-boilerplate --units "150x150" --type plain
```

```terminal
yo display-boilerplate --units "150x150" --type doubleclick
```

:::info
By default if you don't define the **--type**, the generator will create plain units.
:::