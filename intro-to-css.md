# Introduction to CSS

CSS (Cascading Style Sheets) controls how HTML elements look on a webpage.

---

## How to Link CSS to HTML

Add this line inside the `<head>` of your HTML file:

```html
<link rel="stylesheet" href="styles.css">
```

---

## Basic CSS Syntax

```css
selector {
    property: value;
}
```

- **Selector** — which HTML element(s) to style
- **Property** — what aspect to change (color, size, etc.)
- **Value** — the setting to apply

---

## Common Selectors

```css
/* Element selector - styles ALL paragraphs */
p {
    color: blue;
}

/* Class selector - styles elements with class="highlight" */
.highlight {
    background: yellow;
}

/* ID selector - styles the ONE element with id="header" */
#header {
    font-size: 24px;
}
```

### In HTML

```html
<p>This is blue text.</p>
<p class="highlight">This has a yellow background.</p>
<div id="header">This is 24px.</div>
```

---

## Common Properties

### Colors

```css
color: red;              /* text color */
color: #E82E21;          /* hex color (Parsons Red!) */
color: rgb(255, 0, 0);   /* RGB color */
background: #fff;        /* background color */
```

### Text

```css
font-family: Georgia, serif;
font-size: 16px;
font-weight: bold;
text-align: center;
text-decoration: underline;
```

### Spacing

```css
margin: 20px;      /* space OUTSIDE the element */
padding: 20px;     /* space INSIDE the element */
```

### Size

```css
width: 100px;
max-width: 600px;
height: 200px;
```

### Borders

```css
border: 1px solid black;
border-bottom: 2px solid #E82E21;
```

---

## The Box Model

Every HTML element is a box with these layers:

```
┌─────────────────────────────────┐
│            MARGIN               │
│  ┌───────────────────────────┐  │
│  │         BORDER            │  │
│  │  ┌─────────────────────┐  │  │
│  │  │      PADDING        │  │  │
│  │  │  ┌───────────────┐  │  │  │
│  │  │  │   CONTENT     │  │  │  │
│  │  │  └───────────────┘  │  │  │
│  │  └─────────────────────┘  │  │
│  └───────────────────────────┘  │
└─────────────────────────────────┘
```

---

## Units

```css
/* Pixels - fixed size */
font-size: 16px;

/* Em - relative to parent font size */
font-size: 1.5em;

/* Percent - relative to parent */
width: 100%;

/* Viewport units */
width: 100vw;   /* 100% of viewport width */
height: 100vh;  /* 100% of viewport height */
```

---

## Combining Selectors

```css
/* Multiple selectors, same style */
h1, h2, h3 {
    color: #E82E21;
}

/* Descendant selector - paragraphs INSIDE #about */
#about p {
    color: gray;
}

/* Direct child selector */
main > p {
    margin-bottom: 20px;
}
```

---

## Pseudo-classes

Style elements in specific states:

```css
/* When mouse hovers over a link */
a:hover {
    color: #E82E21;
}

/* First child element */
li:first-child {
    font-weight: bold;
}
```

---

## Example: Styling a Link

```css
a {
    color: #222;
    text-decoration: none;
    border-bottom: 2px solid #E82E21;
}

a:hover {
    color: #E82E21;
}
```

---

## Tips

1. **Use classes** for styles you want to reuse
2. **Use IDs** for unique elements (only once per page)
3. **Be specific** — more specific selectors override general ones
4. **Inspect element** — right-click in browser to see/test CSS live

---

## Quick Reference

| Property | What it does | Example |
|----------|--------------|---------|
| `color` | Text color | `color: #E82E21;` |
| `background` | Background color | `background: #fff;` |
| `font-size` | Text size | `font-size: 18px;` |
| `font-family` | Font type | `font-family: Georgia;` |
| `margin` | Outside spacing | `margin: 20px;` |
| `padding` | Inside spacing | `padding: 10px;` |
| `border` | Border around element | `border: 1px solid black;` |
| `width` | Element width | `width: 100%;` |
| `text-align` | Text alignment | `text-align: center;` |
