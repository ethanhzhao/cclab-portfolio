# HTML Glossary for Beginners

Welcome to HTML! This document introduces the most important HTML elements and concepts you'll use to build web pages. HTML (HyperText Markup Language) is the foundation of every website, providing structure and meaning to your content.

## What is HTML?

HTML is a markup language that uses tags to describe the structure of web pages. Tags tell the browser how to display text, images, links, and other content. Learning HTML is the first step to creating your own websites.

## Why Use Semantic Tags?

Semantic tags such as `<section>`, `<header>`, `<main>`, and `<footer>` do not change the visual appearance of your site by themselves, but they provide meaning and structure to your HTML. This helps:

- **Accessibility:** Screen readers and assistive technologies can better interpret your content.
- **SEO:** Search engines understand your page structure, improving search rankings.
- **Maintainability:** Code is easier to read and maintain for you and others.
- **Consistency:** Encourages best practices and standards in web development.

## Essential HTML Elements

Below is a table of the most common and useful HTML elements, grouped by category:

### Document Structure

| Element        | Description                                                        |
|----------------|--------------------------------------------------------------------|
| `<!DOCTYPE>`   | Declares the document type (HTML5 uses `<!DOCTYPE html>`).         |
| `<html>`       | Root element of an HTML page.                                      |
| `<head>`       | Contains meta-information, links to CSS, scripts, etc.             |
| `<meta>`       | Metadata about the document (charset, viewport, etc.).             |
| `<title>`      | Sets the page title in the browser tab.                            |
| `<body>`       | Contains all visible content.                                      |

### Text and Content Elements

| Element      | Description                                                                 |
|--------------|-----------------------------------------------------------------------------|
| `<h1>`-`<h6>`| Headings, `<h1>` is most important, `<h6>` least.                           |
| `<p>`        | Paragraph of text.                                                          |
| `<a>`        | Anchor, used for hyperlinks.                                                |
| `<span>`     | Inline container for text or other elements.                                |
| `<br>`       | Line break.                                                                 |

### Grouping and Layout

| Element      | Description                                                                 |
|--------------|-----------------------------------------------------------------------------|
| `<div>`      | Generic container for grouping content.                                     |
| `<section>`  | Groups related content, like chapters or topics.                             |
| `<header>`   | Introductory content, navigation, or branding.                              |
| `<main>`     | Main content of the page.                                                   |
| `<footer>`   | Bottom section, often for copyright or contact info.                        |
| `<nav>`      | Defines navigation links, such as menus or tables of contents.             |
| `<aside>`    | Marks content related to the main content, like sidebars or notes.         |
| `<article>`  | Represents self-contained content, such as blog posts or news articles.    |

### Lists

| Element      | Description                                                                 |
|--------------|-----------------------------------------------------------------------------|
| `<ul>`       | Unordered (bulleted) list.                                                  |
| `<ol>`       | Ordered (numbered) list.                                                    |
| `<li>`       | List item, used inside `<ul>` or `<ol>`.                                   |

### Media and Figures

| Element      | Description                                                                 |
|--------------|-----------------------------------------------------------------------------|
| `<img>`      | Embeds images.                                                              |
| `<figure>`   | Used for images, diagrams, or code snippets, often with a caption.         |
| `<figcaption>`| Provides a caption for a `<figure>`.                                      |

### Forms

| Element      | Description                                                                 |
|--------------|-----------------------------------------------------------------------------|
| `<form>`     | Creates a form for user input.                                              |
| `<input>`    | Input field in a form.                                                      |
| `<label>`    | Label for a form element.                                                   |
| `<button>`   | Clickable button.                                                           |

### Linking and Embedding

| Element      | Description                                                                 |
|--------------|-----------------------------------------------------------------------------|
| `<link>`     | Used to link external resources like CSS files.                            |
| `<script>`   | Embeds or links to JavaScript code.                                        |
| `<style>`    | Embeds CSS directly in the HTML file.                                      |

## Accessibility Basics

- Use the `alt` attribute for images to describe their content for screen readers.
- Semantic tags help assistive technologies understand page structure.
- Consider using `aria-*` attributes for advanced accessibility (e.g., `aria-label`).

## Best Practices

- Use semantic tags for meaning, not just layout.
- Write readable, well-indented code.
- Add comments using `<!-- comment -->`.
- Keep HTML organized and avoid unnecessary nesting.
