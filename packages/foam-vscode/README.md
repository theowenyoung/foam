# Foam Lite

This extension forked from [Foam](https://github.com/foambubble/foam), only enabled two features：

- Wiki Link Completion to Markdown Link, for example, if there is file `/content/a.md`, when you type `[[a`, type enter, then the link will be `[A Title](/content/a.md)`
- Create Note from Foam Template

Configuretion:

- `foamLite.internalLink.enableRelativeLink`: Enable relative link in Foam Lite, default is `true`, you can set it to `false` to use absolute link.
- `foamLite.internalLink.absoluteLinkPrefix`: The prefix of absolute link, default is `/`, you can set it to ``, or other.

## Features

### Wiki Link to Markdown Link

![Wiki Link to Markdown Link](https://i.imgur.com/sYmKeKO.gif)

## Motivation

Inspired by Obsidian, but I'm not used to Obsidian, and how it's a bit slow compared to VSCode. I use Standard Markdown Style, I like foam wiki link autocompletion & create notes from a template, I can not find another extension that can be used, so I decided to fork it and only enable these two features. [Foam's](https://github.com/foambubble/foam) code structure is very good, so I just changed a little bit to achieve what I wanted. Thanks Foam Team!
