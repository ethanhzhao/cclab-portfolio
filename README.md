# p5.js Portfolio Template

A simple portfolio website to showcase your p5.js creative coding projects.

---

## Project Structure

```
cclab-2025/
├── index.html              # Main portfolio page
├── styles.css              # Shared CSS styles
├── intro-to-html.md        # HTML basics guide
├── intro-to-css.md         # CSS basics guide
├── projects/
│   ├── project1/
│   │   ├── index.html      # Project page
│   │   └── sketch.js       # Your p5.js code
│   ├── project2/
│   ├── project3/
│   ├── ...
│   └── project9/
└── README.md
```

---

## Getting Started

### Using Live Server (Recommended)

1. Install the **Live Server** extension in VS Code
2. Right-click on `index.html` → **Open with Live Server**
3. Your browser will auto-reload when you save changes

### Or Open Directly

Double-click `index.html` to open in your browser. Refresh manually after changes.

---

## Setup Checklist

### 1. Update Your Info
- [ ] Change "Your Name" in `index.html`
- [ ] Write your bio in the About section
- [ ] Update email and GitHub links in Contact

### 2. Add Your Projects

Each project folder has two files:

**`sketch.js`** — Replace with your p5.js code:
```javascript
function setup() {
    let canvas = createCanvas(800, 600);
    canvas.parent('sketch-container');  // Keep this line!
    // Your setup code...
}

function draw() {
    // Your draw code...
}
```

**`index.html`** — Update the title and description:
```html
<h1>Your Project Title</h1>
<p class="description">Describe what your sketch does.</p>
```

### 3. Update Main Page

Edit the project links in `index.html` to match your project titles.

### 4. Add or Remove Projects

**To add:** Copy any project folder, rename it, update the files, and add a link on `index.html`.

**To remove:** Delete the folder and remove its link from `index.html`.

---

## Common Issues

| Problem | Solution |
|---------|----------|
| Sketch not showing | Check browser console (F12) for errors |
| Sketch in wrong place | Make sure you have `canvas.parent('sketch-container')` |
| Styles not updating | Hard refresh (Cmd+Shift+R / Ctrl+Shift+R) |

---

## Resources

- [intro-to-html.md](intro-to-html.md) — HTML basics
- [intro-to-css.md](intro-to-css.md) — CSS basics
- [p5.js Reference](https://p5js.org/reference/)
- [MDN Web Docs](https://developer.mozilla.org/)

---

## Deploying to GitHub Pages

When you're ready to share your portfolio online:

### Step 1: Commit your changes

In VS Code terminal (or any terminal in your project folder):

```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

### Step 2: Enable GitHub Pages

1. Go to your repo on GitHub
2. Click **Settings** (top menu)
3. Click **Pages** (left sidebar)
4. Under "Source", select **main** branch
5. Click **Save**

### Step 3: View your site

After a minute or two, your site will be live at:

```
https://yourusername.github.io/your-repo-name
```

### Updating your site

Any time you push changes to GitHub, your site will automatically update!

```bash
git add .
git commit -m "Your message here"
git push
```

---

**Happy coding!**
