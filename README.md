<div align="center">

# ✨ 3D Animated Interactive Portfolio 🌌🎨
### Immersive WebGL & Three.js Spatial Experience with Dynamic Shaders & Physical Particles

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![Three.js](https://img.shields.io/badge/Three.js-r128+-000000?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
[![React: 18+](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![React Three Fiber](https://img.shields.io/badge/R3F-v8+-000000?style=for-the-badge&logo=react&logoColor=white)](https://docs.pmnd.rs/react-three-fiber/)
[![Framer Motion](https://img.shields.io/badge/Animation-Framer_Motion-FF0055?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![WebGL 2.0](https://img.shields.io/badge/Graphics-WebGL_2.0-990000?style=for-the-badge&logo=webgl&logoColor=white)](https://www.khronos.org/webgl/)
[![Read in Persian](https://img.shields.io/badge/مطالعه_به_فارسی-Persian_README-008080?style=for-the-badge)](#-توضیحات-کامل-فارسی-persian-documentation)

<p align="center">
  A jaw-dropping, award-winning interactive 3D personal portfolio and digital art showcase. Powered by WebGL 2.0, Three.js, React Three Fiber, and customized GLSL vertex and fragment shaders. Features realistic camera physics, orbit controls, procedural starfields, and reactive audio visualizers.
</p>

[Visual Features](#-visual--technical-features) •
[GLSL Shaders](#-shader-pipeline--graphics) •
[Quick Start](#-quick-start) •
[توضیحات فارسی](#-توضیحات-کامل-فارسی-persian-documentation) •
[License](#-license)

</div>

---

## 🎨 Visual & Technical Features

- 🌌 **Procedural Particle Cosmologies**:
  - Over 15,000 GPU-instanced particle vertices orbiting in mathematically defined Archimedean spirals.
  - Interactive mouse parallax that deflects and illuminates surrounding starfields in real time.
- 💎 **Custom GLSL Physical Material Shaders**:
  - Fresnel reflection effects, chromatic aberration passes, and dynamic bloom post-processing.
- 🕹️ **Smooth Damped Camera Physics**:
  - Inertial orbit controls, smooth scroll interpolation powered by Lenis / Framer Motion, and cinematic waypoint transitions.
- ⚡ **Optimized 60/120 FPS Performance**:
  - Automatic Level-of-Detail (LOD) degradation on low-tier GPUs and mobile devices to preserve high frame rates.
- 📱 **Fully Responsive Touch Navigation**:
  - Gesture-driven 3D object rotation and pinch-to-zoom support for mobile and tablet screens.

---

## 🔮 Shader Pipeline & Graphics

The visual magic relies on customized GLSL vertex displacement and fragment coloring:

```glsl
// Custom Vertex Displacement Example
uniform float uTime;
varying vec2 vUv;
varying float vDisplacement;

void main() {
    vUv = uv;
    vec3 newPosition = position;
    float wave = sin(position.x * 3.0 + uTime) * cos(position.y * 3.0 + uTime) * 0.15;
    newPosition += normal * wave;
    vDisplacement = wave;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
}
```

---

## 🚀 Quick Start

### 1. Clone & Install
```bash
git clone https://github.com/MOHAMMADREZAABEDINPOOR/3d-animated-interactive-portfolio.git
cd 3d-animated-interactive-portfolio

npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open `http://localhost:3000` or `http://localhost:5173` in your browser.

### 3. Production Build & Bundle Optimization
```bash
npm run build
npm run preview
```

---

## 🇮🇷 توضیحات کامل فارسی (Persian Documentation)

### معرفی پروژه پورتفولیوی سه‌بعدی تعاملی (3D Interactive Portfolio)
پروژه **3d-animated-interactive-portfolio** یک اثر هنری دیجیتال و پورتفولیوی وب مدرن مبتنی بر گرافیک سه‌بعدی تحت وب (**WebGL 2.0**) و کتابخانه‌های قدرتمند **Three.js** و **React Three Fiber** است. این پروژه با هدف به نمایش گذاشتن نهایت پتانسیل وب در رندر صحنه‌های فضایی، شیدرهای نورپردازی، فیزیک دوربین و انیمیشن‌های نرم طراحی شده است.

### قابلیت‌های منحصربه‌فرد:
1. **شبیه‌سازی ذرات در فضای کیهانی (Particle System):**
   * بیش از ۱۵,۰۰۰ ذره رندر شده مستقیم روی GPU با محاسبات موقعیت مکانی برداری و واکنش به حرکت ماوس.
2. **شیدرهای اختصاصی GLSL:**
   * افکت‌های نوری شیشه‌ای (Glassmorphism سه‌بعدی)، شکست نور (Chromatic Aberration) و درخشش نئونی (Bloom Pass).
3. **کنترل و فیزیک نرم دوربین:**
   * جابه‌جایی سینمایی بین بخش‌های مختلف سایت با فریم‌ریت ثابت ۶۰ و ۱۲۰ فریم بر ثانیه.
4. **بهینه‌سازی برای انواع دستگاه‌ها:**
   * سیستم هوشمند تشخیص سخت‌افزار برای کاهش بار پردازشی روی گوشی‌های ضعیف‌تر و صرفه‌جویی در مصرف باتری.

---

## 📜 License

Distributed under the **MIT License**. Free for personal showcases, remixing, and learning.

---

<div align="center">
  <sub>Designed with artistic passion by <a href="https://github.com/MOHAMMADREZAABEDINPOOR">MOHAMMADREZA ABEDINPOOR</a>. If you love 3D graphics, leave a ⭐!</sub>
</div>
