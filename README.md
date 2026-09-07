<div align="center">

<!-- ============================================================================== -->
<!-- DYNAMIC ANIMATED CAPSULE HEADER                                                -->
<!-- ============================================================================== -->
<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=1,12,24,30&height=220&section=header&text=3D%20Interactive%20Portfolio&fontSize=38&fontAlignY=35&desc=%E2%9A%A1%20WebGL%202.0%2C%20Three.js%20%26%20Custom%20GLSL%20Spatial%20Experience&descFontSize=16&descAlignY=62" alt="3D Portfolio Banner" width="100%" />

<!-- ============================================================================== -->
<!-- ANIMATED TYPING SVG TELEMETRY                                                 -->
<!-- ============================================================================== -->
<a href="https://github.com/MOHAMMADREZAABEDINPOOR/3d-animated-interactive-portfolio">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=20&duration=2800&pause=1000&color=00D2FF&center=true&vCenter=true&width=780&lines=Immersive+WebGL+2.0+Spatial+Environment+%26+Three.js;React+Three+Fiber+(R3F)+%26+Drei+Component+Architecture;Custom+GLSL+Vertex+%26+Fragment+Shader+Pipeline;GPU-Accelerated+Cosmic+Particle+Physics+(15%2C000%2B+Vertices);Damped+Inertial+Camera+Waypoints+%26+Mobile+Touch+Gestures;Full-Stack+Synergy+with+Express.js+Project+Registry+Backend" alt="Typing SVG" />
</a>

<br/>

<!-- ============================================================================== -->
<!-- BADGES MATRIX                                                                  -->
<!-- ============================================================================== -->
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge&logo=opensourceinitiative)](https://opensource.org/licenses/MIT)
[![Three.js](https://img.shields.io/badge/Three.js-r128+-000000?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
[![React: 18+](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![React Three Fiber](https://img.shields.io/badge/R3F-v8+-000000?style=for-the-badge&logo=react&logoColor=white)](https://docs.pmnd.rs/react-three-fiber/)
[![Framer Motion](https://img.shields.io/badge/Animation-Framer_Motion-FF0055?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![WebGL 2.0](https://img.shields.io/badge/Graphics-WebGL_2.0-990000?style=for-the-badge&logo=webgl&logoColor=white)](https://www.khronos.org/webgl/)
[![Read in Persian](https://img.shields.io/badge/مطالعه_به_فارسی-Persian_README-008080?style=for-the-badge)](#-بخش-فوقالعاده-مفصل-و-جامع-به-زبان-فارسی-persian-documentation)

<p align="center">
  <b>3d-animated-interactive-portfolio</b> is a spatial personal portfolio and digital art showcase engineered on WebGL 2.0, Three.js, React Three Fiber, Framer Motion, and Express. Featuring custom GLSL physical material shaders, GPU-accelerated cosmic particle cosmologies, inertial camera physics, and an interactive 3D project showroom, this application represents the pinnacle of modern creative engineering.
</p>

<!-- ============================================================================== -->
<!-- QUICK NAVIGATION ANCHORS                                                       -->
<!-- ============================================================================== -->
[Project Overview](#-project-overview--creative-vision) •
[Directory Anatomy](#-exhaustive-directory--file-anatomy) •
[Shader Pipeline](#-glsl-shader-pipeline--lighting-mechanics) •
[Component Architecture](#-3d-scene-architecture) •
[Quick Start](#-quick-start--local-development) •
[توضیحات فارسی](#-بخش-فوقالعاده-مفصل-و-جامع-به-زبان-فارسی-persian-documentation) •
[Roadmap](#-strategic-engineering-roadmap) •
[License](#-license--open-source-attribution)

</div>

---

## ⚡ Project Overview & Creative Vision

> *"A flat 2D webpage displays text; a **3D Spatial Web Experience** immerses the visitor inside the developer's universe."*

### Why Traditional Portfolios Fall Short
Static single-page websites struggle to differentiate top-tier software architects from entry-level developers. Standard templates rely on repetitive card grids and generic CSS hover animations.

### The 3D Spatial Solution
**3d-animated-interactive-portfolio** elevates developer branding into an interactive celestial odyssey:
- 🌌 **GPU Instanced Particle Systems**: Over 15,000 particle vertices rendered simultaneously across mathematically defined Archimedean spirals.
- 💎 **Bespoke GLSL Shaders**: Custom vertex displacement and fragment coloring simulating atmospheric Fresnel glow and chromatic aberration.
- 🕹️ **Damped Camera Inertia**: Smooth waypoint navigation reacting fluidly to mouse movement and touch screen gestures.
- 🚀 **Full-Stack Express Integration**: Dynamic API feeding live portfolio projects, metrics, and technology badges to the WebGL canvas.

---

## 📂 Exhaustive Directory & File Anatomy

```
d:/code/New folder (9)/
│
├── package.json                     # Monorepo root configuration, scripts & workspace bindings
├── README.md                        # Master comprehensive bilingual documentation
│
├── client/                          # React + Three.js Frontend Application
│   ├── index.html                   # HTML5 canvas container, font loaders & responsive viewport
│   ├── package.json                 # Client dependencies (@react-three/fiber, three, framer-motion, lucide-react)
│   ├── vite.config.js               # Vite bundler configured with GLSL shader loader plugins
│   └── src/
│       ├── main.jsx                 # React root DOM mounting and StrictMode configuration
│       ├── App.jsx                  # Master viewport orchestrator, camera waypoint state & UI overlays
│       ├── index.css                # Global canvas reset, custom neon cursor & typography rules
│       ├── data.js                  # Frontend portfolio data: showcase projects, descriptions & URLs
│       └── components/
│           ├── Hero.jsx             # Top HTML overlay with introduction, animated title & CTA links
│           ├── SceneHero.jsx        # Primary 3D celestial scene with rotating planetary spheres & dust
│           ├── SceneSkills.jsx      # Spatial skills visualizer with floating 3D tech icons responding to mouse
│           ├── SceneMini.jsx        # Secondary lightweight 3D background visualizer for content sections
│           ├── Skills.jsx           # Technical proficiency matrix overlay with category badges
│           ├── Projects.jsx         # Interactive 3D project showcase with interactive preview cards
│           ├── About.jsx            # Personal engineering bio, philosophy & architectural manifesto
│           └── Footer.jsx           # Spatial navigation footer with GitHub, LinkedIn & social links
│
└── server/                          # Standalone Express.js API Backend
    ├── index.js                     # Express server providing portfolio endpoints and project data
    ├── data.js                      # Centralized project registry served to client
    └── package.json                 # Server-side dependencies (express, cors, dotenv)
```

---

## 🔮 GLSL Shader Pipeline & Lighting Mechanics

The visual richness relies on custom GLSL shaders executed directly on the visitor's GPU:

### 1. Vertex Displacement Wave Shader
```glsl
uniform float uTime;
varying vec2 vUv;
varying float vDisplacement;

void main() {
    vUv = uv;
    vec3 newPosition = position;
    float wave = sin(position.x * 2.5 + uTime) * cos(position.y * 2.5 + uTime) * 0.2;
    newPosition += normal * wave;
    vDisplacement = wave;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
}
```

### 2. Atmospheric Fresnel Rim Glow Fragment Shader
$$\text{Fresnel} = \max\left(0, 1.0 - \mathbf{N} \cdot \mathbf{V}\right)^p$$
Where $\mathbf{N}$ is the surface normal, $\mathbf{V}$ is the view vector, and $p$ is the power exponent creating glowing celestial rims.

---

## 🚀 Quick Start & Local Development

### 1. Clone & Install Dependencies
```bash
git clone https://github.com/MOHAMMADREZAABEDINPOOR/3d-animated-interactive-portfolio.git
cd 3d-animated-interactive-portfolio

# Install client packages
cd client
npm install

# Install server packages (optional)
cd ../server
npm install
```

### 2. Launch Development Server
```bash
# In client directory:
npm run dev
```
Open `http://localhost:5173` in your browser.

---

## 🇮🇷 بخش فوق‌العاده مفصل و جامع به زبان فارسی (Persian Documentation)

### ۱. مقدمه و فلسفه هنری پورتفولیوی سه‌بعدی تعاملی
پروژه **3d-animated-interactive-portfolio** یک اثر هنری دیجیتال و پورتفولیوی وب سه‌بعدی است که مرزهای میان مهندسی نرم‌افزار، طراحی رابط کاربری و هنر گرافیک رایانه‌ای را درمی‌نوردد. این پروژه با استفاده از **WebGL 2.0**، کتابخانه **Three.js** و اکوسیستم **React Three Fiber** خلق شده تا توانایی‌های برنامه‌نویسی سطح بالا را در یک محیط فضایی تعاملی به نمایش بگذارد.

---

### ۲. تشریح کامپوننت‌ها و ساختار کدهای پروژه
- **`client/src/components/SceneHero.jsx`**: صحنه سه‌بعدی اصلی؛ شامل سیاره‌های نورانی، ذرات معلق کیهانی و انیمیشن‌های جاذبه که با حرکت ماوس تغییر جهت می‌دهند.
- **`client/src/components/SceneSkills.jsx`**: کهکشان مهارت‌ها؛ نمایش سه‌بعدی مهارت‌های برنامه‌نویسی با آیکون‌های معلق در فضا که کاربر می‌تواند آن‌ها را بچرخاند.
- **`client/src/components/Projects.jsx`**: ویترین تعاملی پروژه‌ها به همراه کارت‌های سه‌بعدی و لینک مستقیم به سورس‌کدها.
- **`server/index.js`**: بک‌اند سبک Node.js و Express برای ارسال داده‌های پویا به صحنه گرافیکی.

---

## 🗺️ Strategic Engineering Roadmap

- [x] **v1.0**: Three.js WebGL canvas, React Three Fiber orbit controls, particle systems.
- [x] **v1.5**: Custom GLSL Fresnel shaders, responsive mobile touch controls, Express API.
- [ ] **v2.0**: WebXR Virtual Reality (VR) mode allowing visitors to explore in VR headsets.
- [ ] **v2.5**: Spatial audio synthesizer reacting dynamically to camera proximity to planets.
- [ ] **v3.0**: Multiplayer presence powered by WebSockets allowing visitors to see each other's avatars.

---

## 📜 License & Open Source Attribution

Distributed under the **MIT License**. Free for personal exploration, educational study, and creative remixing.

---

<div align="center">

<!-- ============================================================================== -->
<!-- ANIMATED CAPSULE FOOTER                                                        -->
<!-- ============================================================================== -->
<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=1,12,24,30&height=120&section=footer" alt="Footer" width="100%" />

<sub>Designed with creative passion by <a href="https://github.com/MOHAMMADREZAABEDINPOOR"><b>MOHAMMADREZA ABEDINPOOR</b></a>. If this 3D spatial experience inspires you, please leave a ⭐!</sub>

</div>
