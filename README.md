<div align="center">

<img src="assets/readme/hero.gif" width="1200" alt="SPATIAL PORTFOLIO: an expressive three-dimensional sculptural portfolio" />

**[English](README.md) · [فارسی](README.fa.md)**

</div>

# 🪐 SPATIAL PORTFOLIO

A personal portfolio pairing a React Three Fiber frontend with an Express project API. Three.js scenes and Framer Motion transitions frame the project showcase.

[GitHub](https://github.com/MOHAMMADREZAABEDINPOOR/3d-animated-interactive-portfolio) · [PIMX / Profile](https://github.com/MOHAMMADREZAABEDINPOOR) · [Static artwork](assets/readme/hero.png)

| At a glance | Details |
|:---|:---|
| 🪐 Experience | Web application / browser experience |
| 🧰 Built with | `Node.js` |
| 🌐 Documentation | [English](README.md) · [فارسی](README.fa.md) |

[✨ Features](#features) · [🚀 Getting started](#getting-started) · [⚙️ Configuration](#configuration) · [🌍 Deployment](#deployment)

---

<a id="features"></a>

## ✨ Features

| Area | Included capability |
|:---|:---|
| 🎨 Visuals | Three-dimensional hero and supporting scenes |
| ⚡ Workflow | About, skills, values and project sections |
| ⚡ Workflow | React Three Fiber, Drei and Framer Motion |
| 🔌 Integration | Separate Vite client and Express server |

<a id="stack"></a>

## 🧰 Stack

| Tool | Version / source |
|---|---|
| Node.js | `package.json` |

<a id="getting-started"></a>

## 🚀 Getting started

Node.js 22.12+ and the package manager declared in package.json. Install dependencies from the checked-in lockfile where available.

```bash
git clone https://github.com/MOHAMMADREZAABEDINPOOR/3d-animated-interactive-portfolio.git
cd 3d-animated-interactive-portfolio

npm ci
npm --prefix client install
npm --prefix server install
npm run dev
```

<a id="configuration"></a>

## ⚙️ Configuration

These names are found in the example configuration or source; not all are required. Check their defaults/usage in those files and supply secrets only in your local or hosting environment.

| Name | Role |
|---|---|
| `PORT` | Application setting; inspect its definition |

<a id="usage"></a>

## 🎯 Usage

Install dependencies in the root, client and server, then run the root dev script. Replace project data and portfolio copy before presenting it as your own site.

<a id="project-structure"></a>

## 🗂️ Project structure

| Path | Role |
|---|---|
| [`assets/`](assets/) | Brand/media/README assets |
| [`client/`](client/) | Browser application |
| [`server/`](server/) | Server implementation |
| [`package.json`](package.json) | Project entry/configuration file |

<a id="commands-and-checks"></a>

## 🧪 Commands and checks

| Command | Purpose |
|:---|:---|
| `npm run dev` | 🧑‍💻 Development server |
| `npm run build` | 📦 Production build |
| `npm run start` | ▶️ Application server |

```bash
npm run dev
npm run build
npm run start
```

These commands are declared in package.json; the list is not a test execution report. Test commands may need a browser, service or prepared database.

<a id="deployment"></a>

## 🌍 Deployment

Deploy the build according to its architecture: server-backed projects need a Node process; static Vite frontends can host dist. Pages functions, KV or D1 require separate configuration.

<a id="limitations"></a>

## 📌 Limitations

WebGL rendering depends on GPU/browser support. Reduced performance on mobile devices can require simpler scenes. The API server must be deployed separately from a purely static frontend.

<a id="troubleshooting"></a>

## 🛠️ Troubleshooting

- Missing packages: install dependencies using the project’s package manager.
- API/network failure: check the configured origin, provider and hosting bindings.
- Old assets: rebuild when a build script exists, then clear the browser cache.

<a id="contributing"></a>

## 🤝 Contributing

Create a focused branch, verify the affected behavior and explain the change clearly. Keep private data, build outputs and local databases out of commits.

<a id="license"></a>

## 📄 License

No repository-level license file is included in this snapshot. Public visibility alone does not grant reuse rights; contact the repository owner for terms.

---

Part of **PIMX** · Documentation in English and Persian.

---

<div align="center">

🪐 **SPATIAL PORTFOLIO** · [English](README.md) · [فارسی](README.fa.md)

</div>
