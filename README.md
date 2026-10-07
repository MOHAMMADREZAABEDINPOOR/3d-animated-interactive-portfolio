<div align="center">

<img src="assets/readme/hero.gif" width="1200" alt="SPATIAL PORTFOLIO — rotating 3D geometry" />

**[English](README.md) · [فارسی](README.fa.md)**

<img src="assets/readme/identity.svg" width="1200" alt="space / English and Persian documentation" />

</div>

# SPATIAL PORTFOLIO

A personal portfolio pairing a React Three Fiber frontend with an Express project API. Three.js scenes and Framer Motion transitions frame the project showcase.

[GitHub](https://github.com/MOHAMMADREZAABEDINPOOR/3d-animated-interactive-portfolio) · [PIMX / Profile](https://github.com/MOHAMMADREZAABEDINPOOR) · [Static artwork](assets/readme/hero.png)

## Features

- Three-dimensional hero and supporting scenes
- About, skills, values and project sections
- React Three Fiber, Drei and Framer Motion
- Separate Vite client and Express server

## Stack

| Tool | Version / source |
|---|---|
| Node.js | `package.json` |

## Getting started

Node.js 22.12+ and the package manager declared in package.json. Install dependencies from the checked-in lockfile where available.

```bash
git clone https://github.com/MOHAMMADREZAABEDINPOOR/3d-animated-interactive-portfolio.git
cd 3d-animated-interactive-portfolio

npm ci
npm --prefix client install
npm --prefix server install
npm run dev
```

## Configuration

These names are found in the example configuration or source; not all are required. Check their defaults/usage in those files and supply secrets only in your local or hosting environment.

| Name | Role |
|---|---|
| `PORT` | Application setting; inspect its definition |

## Usage

Install dependencies in the root, client and server, then run the root dev script. Replace project data and portfolio copy before presenting it as your own site.

## Project structure

| Path | Role |
|---|---|
| [`assets/`](assets/) | Brand/media/README assets |
| [`client/`](client/) | Browser application |
| [`server/`](server/) | Server implementation |
| [`package.json`](package.json) | Project entry/configuration file |

## Commands and checks

```bash
npm run dev
npm run build
npm run start
```

These commands are declared in package.json; the list is not a test execution report. Test commands may need a browser, service or prepared database.

## Deployment

Deploy the build according to its architecture: server-backed projects need a Node process; static Vite frontends can host dist. Pages functions, KV or D1 require separate configuration.

## Limitations

WebGL rendering depends on GPU/browser support. Reduced performance on mobile devices can require simpler scenes. The API server must be deployed separately from a purely static frontend.

## Troubleshooting

- Missing packages: install dependencies using the project’s package manager.
- API/network failure: check the configured origin, provider and hosting bindings.
- Old assets: rebuild when a build script exists, then clear the browser cache.

## Contributing

Create a focused branch, verify the affected behavior and explain the change clearly. Keep private data, build outputs and local databases out of commits.

## License

No repository-level license file is included in this snapshot. Public visibility alone does not grant reuse rights; contact the repository owner for terms.

---

Part of **PIMX** · Documentation in English and Persian.
