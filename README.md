# 🌸 Interactive CSS & JS Flower Generator

An interactive, responsive web application that dynamically renders custom-designed flowers using **Vanilla JavaScript** and **Pure CSS3**. Customize petal(leaf) counts, spin animation speeds, and color spectrums in real-time!

🚀 **Live Demo:** [https://dev-deepak-prajapati.github.io/flower-generator/](https://dev-deepak-prajapati.github.io/flower-generator/)

---

## 📸 Overview

This project showcases the power of **DOM Manipulation** combined with **CSS Trigonometric Rotation Principles**. Instead of relying on static images or heavy SVG graphics, every petal is dynamically created as an HTML element and positioned precisely using mathematical degree rotations across a 360° center axis.
<img width="1366" height="768" alt="Screenshot (318)" src="https://github.com/user-attachments/assets/e6a5a02a-bc7a-4693-8aaf-8d06a13caf56" />


---

## ✨ Features

- 🎛️ **Dynamic Petal Count:** Adjust the slider to generate anywhere from **3 to 36 petals** live.
- ⚡ **Spin Speed Control:** Speed up or slow down the flower's rotation (1s to 20s cycle).
- 🎨 **Random Color Generator:** Generate smooth, random color gradients across the HSL spectrum for every individual petal.
- ⏯️ **Pause / Play Animation:** Easily toggle the rotation animation on or off.
- 💎 **Modern Glassmorphism UI:** Floating frosted-glass control panel designed with modern CSS blur and backdrop filters.
- 📱 **Fully Responsive:** Looks great across all screen sizes and mobile viewports.

---

## 🛠️ Tech Stack & Concepts Used

### **Technologies**
- **HTML5** - Clean semantic structure and canvas stage.
- **CSS3** - Glassmorphism, CSS keyframes, CSS gradients, CSS flexbox, transformations (`transform-origin`, `rotate`).
- **JavaScript (ES6)** - Dynamic DOM creation (`document.createElement`), event listeners, and mathematical angle positioning.

### **Core Concepts Demonstrated**
1. **CSS Geometry & Transformations:** 
   - `transform-origin: bottom center;` — Sets the rotation anchor point at the bottom of each petal.
   - `rotate(angle)` — Calculates position using Angle = 360° / Petal Count.
2. **Dynamic DOM Manipulation:** Generating elements programmatically without hardcoding repetitive HTML markup.
3. **HSL Color Calculations:** Calculating harmonic gradient colors dynamically in JavaScript using HSL hue offsets.
4. **CSS Layout Properties:** Deep-dive implementation of `min-height`, `overflow`, `gap`, `flex-wrap`, and `backdrop-filter`.

---

## 📂 Project Structure

```text
flower-generator/
└── index.html        # HTML structure
├── style.css         # Cascading Style Sheet
├── script.js         # JavaScript
└── README.md         # Project documentation
