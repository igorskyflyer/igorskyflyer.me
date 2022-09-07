---
title: Build an HTML element creation utility
layout: ../../layouts/post.astro
description: Using `document.createElement` and then assigning attributes line by line is boring! Let's build an HTML element creation utility and her...
---

Hey, let's build an HTML element creation utility! ⚡

<br>

```js
zeus('div', {
  innerHTML: 'Hello world',
  id: 'my-div',
})
```
