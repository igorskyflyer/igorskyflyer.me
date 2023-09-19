---
layout: ../../layouts/post.astro
title: Fix Node binaries in VS Code Terminal 🐢
description: When working with the Terminal in VS Code on Windows one the most frequent difficulty that all developers face is that the Terminal doesn’t pick up local Node binaries, installed via npm install.
featuredImage: https://igorskyflyer.me/images/terminal-before.png
publishDate: 2023-09-19 21:29
tag: vscode,javascript,npm,node,fix,tutorial
---

When working with the `Terminal` in VS Code on Windows one the most frequent difficulty that all developers face is that the `Terminal` doesn't pick up local Node binaries, installed via [`npm install`](https://docs.npmjs.com/cli/v8/commands/npm-install).

<br>

For example when working in an npm project and after successfully installing **`esbuild`**, if one tries to run it from the `Terminal` will see the following error:

<div align="center">
	<img src="https://igorskyflyer.me/images/vscode-npm-bin-terminal.png" alt="Terminal error in VS Code caused by missing path">
	<sub><strong>Terminal error</strong></sub>
	<br>
	<sub>Visual Studio Code theme: <a href="https://github.com/igorskyflyer/vscode-theme-kai"><code>Kai</code></a></sub>
</div>

<br>
<br>

> 🤔 But why does this occur?

On Windows, system-wide `PATH` works correctly in the `Terminal` but the `Terminal` doesn't pick up local environment paths, thus, it cannot find any of the binaries that you want to execute.

To fix it we will need to add a setting inside the current user profile in VS Code and everything will work as expected. 💡

Navigate to your user profile's Settings by clicking on the cog icon ⚙️ at the bottom of your Activity Bar. When the Settings tab has opened, click on the smaller cog icon ⚙️ at the top right of the tab. That should get you to the current user profile's Settings file in JSON.

This is where the magic happens! 🪄

Add the following code to your JSON Settings file:

```json
"terminal.integrated.env.windows": {
	"PATH": "${workspaceFolder}\\node_modules\\.bin;${workspaceFolder}\\bin;${env:PATH}"
}
```

This will effectively allow you to run your current project's Node/npm binaries and the package's own exported binaries!

<br>

> ❗**Note**: you'll need to kill your current Terminal session and start a new one, to refresh the environment variables. If that doesn't work, restart VS Code itself.

<br>

That's it folks, let me know if it helped you fix a common pitfall. 😊