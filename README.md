<div align="center">

# ✨ 3D Animated Interactive Portfolio 🌌🎨
### Immersive WebGL Spatial Experience with Custom GLSL Shaders & React Three Fiber

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![Three.js](https://img.shields.io/badge/Three.js-r128+-000000?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
[![React: 18+](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![React Three Fiber](https://img.shields.io/badge/R3F-v8+-000000?style=for-the-badge&logo=react&logoColor=white)](https://docs.pmnd.rs/react-three-fiber/)
[![Framer Motion](https://img.shields.io/badge/Animation-Framer_Motion-FF0055?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![WebGL 2.0](https://img.shields.io/badge/Graphics-WebGL_2.0-990000?style=for-the-badge&logo=webgl&logoColor=white)](https://www.khronos.org/webgl/)
[![Read in Persian](https://img.shields.io/badge/مطالعه_به_فارسی-Persian_README-008080?style=for-the-badge)](#-توضیحات-فوقالعاده-جامع-فارسی-persian-documentation)

<p align="center">
  An award-winning interactive 3D spatial portfolio and creative engineering showcase. Powered by WebGL 2.0, Three.js, React Three Fiber, Express, and customized GLSL vertex/fragment shaders. Features GPU-accelerated particle physics, inertial camera damping, and interactive project showrooms.
</p>

[Project Overview](#-project-overview) •
[Directory Structure](#-directory--file-structure) •
[Shader Pipeline](#-glsl-shader-pipeline--graphics) •
[Component Architecture](#-component-architecture) •
[Quick Start](#-quick-start) •
[توضیحات فارسی](#-توضیحات-فوقالعاده-جامع-فارسی-persian-documentation) •
[License](#-license)

</div>

---

## 🎯 Project Overview

Static 2D web portfolios fail to convey modern full-stack graphics engineering capabilities. **3d-animated-interactive-portfolio** pushes modern browsers to their visual limits:
- **Spatial Storytelling**: Users navigate an interactive 3D environment where camera movements fluidly track user gestures.
- **GPU Instancing**: Over 15,000 particle vertices rendered concurrently with minimal CPU overhead.
- **Full-Stack Synergy**: Features an Express.js backend delivering dynamic project data and portfolio metrics directly to client-side Three.js scenes.

---

## 📂 Directory & File Structure

```
3d-animated-interactive-portfolio/
│
├── package.json                     # Monorepo root dependencies and build orchestrator
├── README.md                        # Master comprehensive bilingual documentation
│
├── client/                          # React + Three.js Frontend Application
│   ├── index.html                   # WebGL canvas viewport container & font loaders
│   ├── package.json                 # Client dependencies (@react-three/fiber, three, framer-motion)
│   ├── vite.config.js               # Vite bundler with GLSL shader loader plugins
│   └── src/
│       ├── main.jsx                 # React root rendering entrypoint
│       ├── App.jsx                  # Main viewport orchestrator & scene state manager
│       ├── index.css                # Global canvas reset, custom cursor & typography
│       ├── data.js                  # Frontend portfolio content & showcase metadata
│       └── components/
│           ├── Hero.jsx             # Intro HTML overlay with title and CTA buttons
│           ├── SceneHero.jsx        # 3D Hero scene with orbiting procedural planets
│           ├── SceneSkills.jsx      # Spatial skills visualizer with rotating 3D tech icons
│           ├── SceneMini.jsx        # Lightweight secondary 3D background visualizer
│           ├── Skills.jsx           # Technical proficiency matrix overlay
│           ├── Projects.jsx         # Interactive 3D project showcase with preview modals
│           ├── About.jsx            # Personal engineering philosophy & bio section
│           └── Footer.jsx           # Spatial navigation footer with social media links
│
└── server/                          # Optional Express.js API Backend
    ├── index.js                     # Express server providing portfolio endpoints
    ├── data.js                      # Centralized project registry served to client
    └── package.json                 # Server-side dependencies (express, cors, dotenv)
```

---

## 🔮 GLSL Shader Pipeline & Graphics

Custom vertex and fragment shaders power the atmospheric planetary glow and particle displacement:

```glsl
// Fragment Shader: Atmospheric Fresnel Glow
uniform vec3 uColor;
varying vec3 vNormal;
varying vec3 vPosition;

void main() {
    vec3 viewDirection = normalize(-vPosition);
    float fresnel = dot(viewDirection, vNormal);
    fresnel = clamp(1.0 - fresnel, 0.0, 1.0);
    fresnel = pow(fresnel, 3.0);
    gl_FragColor = vec4(uColor * fresnel, fresnel);
}
```

---

## 🚀 Quick Start

### 1. Install Client & Server
```bash
git clone https://github.com/MOHAMMADREZAABEDINPOOR/3d-animated-interactive-portfolio.git
cd 3d-animated-interactive-portfolio

# Install client
cd client
npm install

# Install server (optional)
cd ../server
npm install
```

### 2. Run Local Development Server
```bash
# In client directory:
npm run dev
```
Open `http://localhost:5173` in your browser.

---

## 🇮🇷 توضیحات فوق‌العاده جامع فارسی (Persian Documentation)

### ۱. معرفی پروژه پورتفولیوی سه‌بعدی تعاملی
پروژه **3d-animated-interactive-portfolio** یک اثر هنری دیجیتال و پورتفولیوی وب سه‌بعدی است که با استفاده از تکنولوژی **WebGL 2.0** و کتابخانه‌های قدرتمند **Three.js** و **React Three Fiber** خلق شده است. این پروژه به منظور نمایش توانمندی‌های پیشرفته در برنامه‌نویسی گرافیک کامپیوتری، شیدرهای GLSL و انیمیشن‌های تعاملی ساخته شده است.

---

### ۲. تشریح ساختار پوشه‌ها و کامپوننت‌های پروژه
- **`client/src/components/SceneHero.jsx`**: صحنه سه‌بعدی اصلی شامل سیارات مداری، گردوغبار کیهانی و شبیه‌سازی جاذبه.
- **`client/src/components/SceneSkills.jsx`**: نمایش سه‌بعدی مهارت‌های برنامه‌نویسی با آیکون‌های معلق در فضا که به حرکت ماوس واکنش نشان می‌دهند.
- **`client/src/components/Projects.jsx`**: شو روم پروژه‌ها با قابلیت زوم و چرخش ۳۶۰ درجه کارت‌های پروژه.
- **`server/index.js`**: بک‌اند سبک اکسپرس برای ارسال داینامیک اطلاعات پروژه‌ها به فرانت‌اند.

---

## 📜 License

Distributed under the **MIT License**.

---

<div align="center">
  <sub>Designed by <a href="https://github.com/MOHAMMADREZAABEDINPOOR">MOHAMMADREZA ABEDINPOOR</a>. Leave a ⭐ to support spatial web design!</sub>
</div>
