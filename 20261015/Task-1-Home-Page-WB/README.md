# Responsive Two-Column Hero Section Using React

**Upcurvv React Sprint Assignment**  
*Difficulty:* Beginner to Intermediate  
*Author:* React Developer Sprint  

---

## 📌 Project Overview
A modern, responsive, two-column hero section built using **React.js** and **modular CSS** following the Upcurvv React Sprint project requirements.

### ✨ Key Features
- **Two-Column Layout**: Left column content with eyebrow badge, bold gradient headline, descriptive text, 4 feature badges, and interactive CTA buttons.
- **Position-Based Floating Visual Section**: Right column with layered illustration featuring:
  - Soft radial background glow (`position: absolute`)
  - Floating "Today's Tasks" card with progress bar and completed checklist items
  - Floating handwritten encouragement note (`Small steps, Big dreams ↗`)
  - Floating 3D-styled stack of books (`HTML`, `CSS`, `JavaScript`)
  - Center SVG student illustration
  - Decorative bottom caption with pulsing indicator
- **Interactive Buttons**: Primary CTA button with smooth hover elevation (`transform: translateY(-2px)`) and glow shadow.
- **Mobile First / Fully Responsive**: Seamless transition from two-column grid on desktop/laptop (1024px, 1440px) to balanced tablet (768px - 1023px) and stacked column layout on mobile devices (375px, 425px) without any horizontal scrolling.
- **React Best Practices**: Clean functional component (`HeroSection.jsx`), strict JSX compliance (`className`, self-closing tags, descriptive alt text), and complete CSS separation (`HeroSection.css`).

---

## 📁 Project Structure
```text
React-App/
├── public/
├── src/
│   ├── assets/
│   │   ├── hero-illustration.svg
│   │   └── hero-image.png
│   ├── components/
│   │   ├── HeroSection.jsx       # Component logic & JSX markup
│   │   └── HeroSection.css       # Dedicated styles & position rules
│   ├── App.jsx                   # Main component importing HeroSection
│   ├── App.css
│   ├── index.css                 # Base resets & typography (Inter font)
│   └── main.jsx
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:5173/](http://localhost:5173/) in your browser.

### 3. Build for Production
```bash
npm run build
```

---

## 🧠 Concepts Applied & Viva Answers

1. **What is a React Component?**
   A self-contained, reusable block of UI and logic. `HeroSection.jsx` is a functional component returning clean JSX.

2. **Why separate CSS into `HeroSection.css`?**
   Separation of concerns keeps the JSX clean, improves maintainability, and prevents styling conflicts.

3. **Why use CSS Position for the right visual column?**
   The parent container (`.hero-art`) uses `position: relative`, allowing floating elements (task card, notes, books, glow) to be positioned precisely with `position: absolute` and responsive coordinates without affecting document flow.

4. **How is responsiveness handled?**
   Using CSS Grid with media queries:
   - **Desktop (≥ 1024px)**: 2-column side-by-side (`grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr)`).
   - **Tablet (768px - 1023px)**: Balanced spacing and 2x2 feature grid.
   - **Mobile (< 768px)**: Stacked column (`grid-template-columns: 1fr`) with zero horizontal overflow.
