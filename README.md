# E-Commerce Website UI

A modern and responsive E-Commerce Website UI built using **HTML**, **CSS**, **JavaScript**, and **Swiper.js**.
This project contains a full-screen hero slider section with animated content and a responsive product showcase section inspired by professional Figma designs.

---

# Project Overview

This project is a frontend e-commerce landing page designed with pixel-perfect dimensions based on a Figma layout.

The application includes:

* Fullscreen Hero Section
* Image Slider using Swiper.js
* Content Slider with Pagination
* Product Showcase Grid
* Responsive Layout
* Modern UI Design
* Hover-ready Product Cards
* Professional Typography and Spacing

---

# Technologies Used

* HTML5
* CSS3
* JavaScript (Vanilla JS)
* Swiper.js CDN

---

# Features

## Hero Section

* Full-width image slider
* Overlay effect on images
* Navigation arrows
* Auto-play functionality
* Separate content slider
* Pagination bullets

## Product Section

* Product cards
* Product images
* Brand name
* Product heading
* Pricing section
* Old price with line-through effect
* Responsive grid system

## Responsive Design

* Desktop Layout
* Tablet Layout
* Mobile Layout

---

# Folder Structure

```bash
project-folder/
│
├── index.html
├── style.css
├── script.js
├── README.md
```

---

# Installation & Setup

## 1. Clone the Repository

```bash
git clone <your-github-repository-link>
```

---

## 2. Open Project Folder

```bash
cd project-folder
```

---

## 3. Run the Project

Simply open:

```bash
index.html
```

in your browser.

OR use VS Code Live Server.

---

# Swiper.js CDN

This project uses Swiper.js for sliders.

## CSS CDN

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
/>
```

## JavaScript CDN

```html
<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
```

---

# Hero Section Structure

The hero section contains:

* Image Swiper
* Navigation Buttons
* Content Swiper
* Pagination

```html
<section class="hero-section">
```

---

# Product Section Structure

The product section contains:

* Product Grid
* Product Cards
* Product Image
* Product Info
* Price Section

```html
<section class="product-section">
```

---

# JavaScript Functionality

## Image Slider

```javascript
const imageSwiper = new Swiper(".imageSwiper", {
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
});
```

### Features

* Infinite Loop
* Autoplay
* Navigation
* Smooth Transition

---

## Content Slider

```javascript
const frameSwiper = new Swiper(".frameSwiper", {
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
});
```

### Features

* Pagination Bullets
* Auto Sliding
* Smooth Animation

---

# CSS Highlights

## Fixed Figma Dimensions

This project follows exact Figma dimensions:

| Section      | Width  | Height |
| ------------ | ------ | ------ |
| Hero Section | 1920px | 1080px |
| Hero Image   | 1920px | 802px  |
| Product Card | 474px  | 758px  |

---

# Responsive Breakpoints

```css
@media (max-width: 1400px)
@media (max-width: 1000px)
@media (max-width: 500px)
```

---

# UI Components

## Buttons

* Primary Button
* Secondary Button

## Product Cards

* Product Image
* Product Info
* Brand Name
* Price
* Discount Price

## Navigation

* Slider Arrows
* Pagination Bullets

---

# Future Improvements

* Add Backend Integration
* Add Shopping Cart
* Add Product Details Page
* Add Authentication
* Add Search Functionality
* Add Wishlist Feature
* Add Dark Mode
* Add API Integration

---

# Learning Outcomes

By building this project, you will learn:

* HTML Structure
* CSS Layout System
* Flexbox
* CSS Grid
* Swiper.js Integration
* Responsive Design
* UI Development
* Frontend Architecture

---

# Author

Developed by:
**Bhawni Jha**

---

# License

This project is for educational and portfolio purposes.
