# Adding p5.js Sketches to Your Portfolio

This guide shows you how to embed p5.js sketches into your HTML portfolio website.

## What You Need

1. **Include the p5.js library** in your HTML `<head>`:

```html
<script src="https://cdn.jsdelivr.net/npm/p5@1.7.0/lib/p5.js"></script>
```

2. **Create a container** for your sketch in your HTML:

```html
<div id="sketch-container"></div>
```

3. **Write your p5.js code** in a `<script>` tag at the end of your `<body>`:

```html
<script>
    function setup() {
        let canvas = createCanvas(400, 400);
        canvas.parent('sketch-container');
        background(220);
    }

    function draw() {
        fill(mouseX, mouseY, 200);
        circle(mouseX, mouseY, 50);
    }
</script>
```

## Key Concepts

### canvas.parent()

This tells p5.js WHERE to put your canvas:

```javascript
canvas.parent('sketch-container');
```

Without this, p5 will just add the canvas to the bottom of your page.

### Multiple Sketches?

If you want multiple p5 sketches on one page, use **instance mode**:

```javascript
let sketch1 = function(p) {
    p.setup = function() {
        let canvas = p.createCanvas(300, 300);
        canvas.parent('sketch1-container');
    }
    
    p.draw = function() {
        p.background(200);
        p.circle(p.mouseX, p.mouseY, 50);
    }
};

let sketch2 = function(p) {
    p.setup = function() {
        let canvas = p.createCanvas(300, 300);
        canvas.parent('sketch2-container');
    }
    
    p.draw = function() {
        p.background(100);
        p.rect(p.mouseX, p.mouseY, 50, 50);
    }
};

new p5(sketch1);
new p5(sketch2);
```

## Styling Your Sketch

Use CSS to style the container:

```css
#sketch-container {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    border: 1px solid #ddd;
    padding: 20px;
    background-color: #f5f5f5;
}
```

## Tips for Students

1. **Test locally**: Open your `index.html` in a browser to see your sketch
2. **Console errors**: Open Developer Tools (F12) to see any JavaScript errors
3. **Start simple**: Get a basic sketch working first, then add complexity
4. **Responsive sizing**: Use `windowWidth` and `windowHeight` for responsive canvases:

   ```javascript
   createCanvas(windowWidth * 0.8, 400);
   ```

## Example Ideas

- **Interactive pattern**: Draw shapes that respond to mouse position
- **Animation**: Create moving shapes with variables that change over time
- **Data visualization**: Display data as charts or graphics
- **Generative art**: Create randomized compositions
- **Game**: Build a simple interactive game

## Resources

- [p5.js Reference](https://p5js.org/reference/)
- [p5.js Examples](https://p5js.org/examples/)
- [The Coding Train](https://thecodingtrain.com/) - Great p5.js tutorials
