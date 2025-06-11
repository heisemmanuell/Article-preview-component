# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: (https://github.com/heisemmanuell/Article-preview-component)
- Live Site URL: (https://heisemmanuell.github.io/Article-preview-component/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- JavaScript

### What I learned

```js
  document.addEventListener("click", function (e) {
    const popup = document.getElementById("sharePopup");
    const shareIcon = document.querySelector(".share-icon");

    if (!popup.contains(e.target) && !shareIcon.contains(e.target)) {
      popup.style.display = "none";
    }
  });
```

## Author

- Frontend Mentor - [@heisemmanuell](https://www.frontendmentor.io/profile/heisemmanuell)
