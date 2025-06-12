# PORTFOLIO DEV WEB FULLSTACK SPECIALIZATION ANDROID

[![codecov](https://codecov.io/gh/ujju16/kornshdevportfolio/branch/main/graph/badge.svg)](https://codecov.io/gh/ujju16/kornshdevportfolio)

Création d'un portfolio de __developpeur web fullstack specialization Android__ donc il est question d'un portfolio simple réalisé en NextJS avec:

## PROTOTYPAGE

### Pages principales

- **Accueil** (`/`)
  - Présentation rapide (nom, spécialisation, photo/avatar)
  - Composant de navigation (menu)
  - Fond dynamique animé abstrait (canvas ou SVG animé) : lignes de code qui apparaissent/disparaissent
  - Section "Projets récents" (cards de projets)
  - Bouton/CTA vers la page projets et la page contact

- **Projets** (`/projects`)
  - Liste de projets sous forme de cards
  - Chaque card : titre, stack utilisée (icônes), description courte, lien démo/github
  - Filtres par techno (Kotlin, Java, Flutter, Python, JS, Elixir, React, etc.)

- **Skills** (`/skills`)
  - Trois sections :
    - Compétences acquises (icônes, barres de progression, tags)
    - Compétences en cours d’acquisition
    - Compétences à acquérir
  - Séparation claire (par couleur ou cards)

- **Contact** (`/contact`)
  - Formulaire de contact (nom, email, message)
  - Liens vers réseaux sociaux (LinkedIn, GitHub, etc.)

### Composants principaux

- `Navbar` : navigation entre les pages, responsive
- `ProjectCard` : affichage d’un projet
- `SkillCard` : affichage d’une compétence
- `AnimatedBackground` : fond dynamique abstrait (canvas ou SVG animé)
- `Footer` : infos légales, copyright

### Technologies à mettre en avant

- **Android** : Kotlin, Java, Flutter, Android Studio
- **Backend** : Python, JavaScript (Node.js), Elixir
- **Frontend** : React, CSS, HTML

### UI/UX

- Design moderne, épuré, couleurs sobres avec touches dynamiques
- Animations fluides (pour le fond et les transitions de pages)
- Responsive mobile/desktop


# Kornshdev Portfolio

[![codecov](https://codecov.io/gh/ujju16/kornshdevportfolio/branch/main/graph/badge.svg)](https://codecov.io/gh/ujju16/kornshdevportfolio)
[![Tests Vitest](https://github.com/ujju16/kornshdevportfolio/actions/workflows/coverage.yml/badge.svg)](https://github.com/ujju16/kornshdevportfolio/actions/workflows/coverage.yml)
![Next.js](https://img.shields.io/badge/Next.js-15.3.3-blue?logo=nextdotjs)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)
![React](https://img.shields.io/badge/React-19.x-61dafb?logo=react)
![Vitest](https://img.shields.io/badge/Vitest-%3E%3D3.2-green?logo=vitest)
![Cypress](https://img.shields.io/badge/Cypress-E2E-17202C?logo=cypress)
![Copilot](https://img.shields.io/badge/AI-GitHub%20Copilot-10a37f?logo=githubcopilot)
[![Lighthouse](https://img.shields.io/badge/Lighthouse-automated-0bbd13?logo=lighthouse)](./LIGHTHOUSE.md)

Portfolio Next.js TypeScript pour développeur web fullstack spécialisation Android.

## Fonctionnalités principales
- Accueil avec fond animé abstrait et navigation
- Présentation des projets (cards, filtres par techno)
- Page compétences (acquises, en cours, à acquérir)
- Page contact (formulaire, réseaux sociaux)
- Composants réutilisables : Navbar, ProjectCard, SkillCard, AnimatedBackground, Footer

## Technologies
- Next.js (TypeScript, App Router, Tailwind CSS)
- React
- Backend : Python, JavaScript (Node.js), Elixir
- Android : Kotlin, Java, Flutter, Android Studio
- Frontend : React, CSS, HTML

## Démarrage
```bash
npm install
npm run dev
```

## Structure du projet
- `/src/app` : pages principales (accueil, projets, skills, contact)
- `/src/components` : composants réutilisables

---

Ce projet a été généré avec `create-next-app` et adapté pour un portfolio moderne et responsive.
