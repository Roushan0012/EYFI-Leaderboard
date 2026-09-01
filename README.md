# ⚡ EYFI Challenge Leaderboard (Earn Your First Income)

An interactive, mobile-first live leaderboard web application for **"EYFI Challenge"** (Earn Your First Income) — India's student earning challenge. Built for Indian college hustlers building projects, taking freelance gigs, selling products, teaching, and performing.

![Design System](https://img.shields.io/badge/Theme-Dark%20%230A0A0A-black?style=flat-square)
![Accent](https://img.shields.io/badge/Accent-%23CFFF3D%20Lime-yellowgreen?style=flat-square)
![Framework](https://img.shields.io/badge/React%20%2B%20Vite-18%2F6-blue?style=flat-square)
![Tailwind](https://img.shields.io/badge/Tailwind%20CSS-v3-cyan?style=flat-square)

---

## 🎨 Design System

- **Background:** `#0A0A0A` (near-black)
- **Surface (Cards):** `#141414`, **Surface Alt:** `#1C1C1C`
- **Border / Line:** `#2A2A2A`
- **Accent (Primary):** Lime Green `#CFFF3D`, **Dimmed Lime:** `#8FB82B`
- **Text:** `#F3F3EE`, **Muted Text:** `#8B8B85`
- **Rank Tier Colors:** Gold `#E9C46A`, Silver `#C9CBCF`, Bronze `#C97C4A`
- **Typography:** Heavyweight sans-serif (`Plus Jakarta Sans` / 800–900 weight) with tight letter-spacing for headings, clean regular for body.
- **Motif:** Floating ₹ symbols drifting slowly in the dark background.

---

## 📁 Project Structure

```text
/src
  /components
    Header.jsx          -> Eyebrow tag, headline, prize pot + days-left card
    Tabs.jsx            -> "This Week" / "All 30 Days" toggle
    Toolbar.jsx         -> Search input + hustle-category filter dropdown
    Podium.jsx          -> Top 3 ranked cards (rank 1 elevated/highlighted)
    LeaderboardRow.jsx  -> Single participant row, expandable on tap
    LeaderboardList.jsx -> Maps ranked data (rank 4+) into LeaderboardRow
    EmptyState.jsx      -> Shown when search/filter returns nothing
  /data
    participants.json   -> Mock participant data (names, colleges, categories, earnings, streaks, isMe)
  /utils
    formatCurrency.js   -> Formats numbers as ₹ Indian-format (e.g. ₹1,82,400)
    rankData.js         -> Sorts/filters participants by tab + search + category
  App.jsx               -> Main application wrapper with floating ₹ motif
  main.jsx              -> React entrypoint
  index.css             -> Tailwind base & custom animations
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Locally in Dev Mode
```bash
npm run dev
```

The app will start at `http://localhost:3000` (or the port specified by Vite).

### 3. Build for Production
```bash
npm run build
```

---

## 📦 Git Setup & Push to GitHub

To link and push to your GitHub repository:

```bash
git init
git add .
git commit -m "feat: scaffold EYFI leaderboard with design system & Header component"
git branch -M main
git remote add origin https://github.com/Roushan0012/EYFI-Leaderboard.git
git push -u origin main
```
