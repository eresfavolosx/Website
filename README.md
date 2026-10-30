# Personal Portfolio & Interactive Atelier (2017 Archive)

[![Portfolio](https://img.shields.io/badge/Current_Portfolio-novu.works-0f172a?style=flat-square&logo=safari&logoColor=white)](https://novu.works)
[![Firebase](https://img.shields.io/badge/Firebase-Hosting-FFCA28?style=flat-square&logo=firebase&logoColor=black)](https://firebase.google.com/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)

> **Historical Archive Notice:** This repository contains the original 2017 edition of Fabián Vélez Vicente's personal portfolio website. For the active, modern executive portfolio featuring Three.js r186, Vite 8, WebGL GLSL shaders, and full interactive subdomains, visit **[novu.works](https://novu.works)**.

---

## 📖 Overview

Built in 2017, this platform served as the central hub for Fabián Vélez Vicente’s software engineering, growth consulting, and university entrepreneurship projects during his fellowship with Stanford University's University Innovation Fellows (UIF). 

It showcased early ventures, client web design projects across Puerto Rico, and disaster relief initiatives deployed in the wake of Hurricane María.

---

## 🛠️ Tech Stack & Architecture

- **Markup & Styling:** Vanilla HTML5, semantic markup, and custom CSS3 animations.
- **Hosting & Infrastructure:** Firebase Hosting (`firebase.json`), configured with global caching headers and SSL.
- **Client Assets:** Modular JavaScript, responsive mobile layouts, and custom SVG icons.

---

## 📂 Project Structure

```
Website/
├── public/                # Static web root deployed to Firebase Hosting
│   ├── index.html         # Portfolio landing page & project gallery
│   ├── Assets/            # CSS stylesheets, brand typography, and scripts
│   └── images/            # Project showcase imagery, logos, and UI assets
├── .firebaserc            # Firebase project target configuration
└── firebase.json          # Deployment rules and clean URL rewrites
```

---

## 🚀 Running Locally

To inspect or run this static archive locally:

```bash
# Clone the repository
git clone https://github.com/eresfavolosx/Website.git
cd Website/public

# Run with any local static server
python3 -m http.server 8080
# Open http://localhost:8080
```

Or deploy using the Firebase CLI:

```bash
firebase use default
firebase serve
```

---

## 👨‍💻 Author

**Fabián Vélez Vicente**  
- Portfolio: [novu.works](https://novu.works)  
- GitHub: [@eresfavolosx](https://github.com/eresfavolosx)  
- LinkedIn: [Fabián Vélez Vicente](https://www.linkedin.com/in/fabian-velez-vicente/)  
- Email: [fabianvvicente1@gmail.com](mailto:fabianvvicente1@gmail.com)
