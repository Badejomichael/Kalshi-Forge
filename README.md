# ⚡ Kalshi Forge

**Kalshi Forge** is a concept platform that imagines what the *next layer* of Kalshi could look like.
A space where anyone can **design, simulate, and understand event markets** before they go live.

Built with **Next.js, TypeScript, Framer Motion**, and pure handcrafted CSS.

---

### 🧠 Why I Built This

Kalshi changed the game by letting people trade on events — inflation, rates, shutdowns, the everyday.  
But what if *anyone* could create and simulate those markets?  
That’s the question **Kalshi Forge** explores.

Forge lets users:

- ✳️ **Create** a yes/no market idea  
- 📊 **Visualize** the market’s implied probabilities  
- 💸 **Simulate** trades to see how sentiment shifts prices  
- 🧩 **Understand** how price = probability × $1 payout

It’s part product concept, part frontend art piece. A love letter to Kalshi’s vision, built to show how design, education, and motion  
could make event-based trading more intuitive and alive.

---

### 🚀 Tech Stack

- **Next.js (App Router + TypeScript)** — clean, modern architecture  
- **Framer Motion** — cinematic UI transitions  
- **Chart.js + React ChartJS-2** — live probability graph  
- **Tailwind** — Premium Styling

---

### ✨ Features

- 🧠 **Dynamic Market Creation**
  - Define events with clear yes/no questions
  - Choose categories, resolution dates, and liquidity levels

- 📈 **Real-Time Price Simulation**
  - Animated probability changes powered by a custom simulation engine
  - Interactive line charts (via `recharts`) that update in real time

- 💎 **Premium UI Design**
  - Smooth **Framer Motion** animations
  - Polished inputs, sliders, and dropdowns
  - Fully responsive for both desktop and mobile

- ⚙️ **Next.js App Router**
  - Dynamic routes with `[id]` pages for each market
  - Client/server component hybrid setup for performance

- 🧩 **Componentized Architecture**
  - Modular steps for market creation (`Step1DefineEvent`, `Step2Parameters`, etc.)
  - Shared UI consistency with TailwindCSS

---

### 💡 Vision

Event markets are the future of information — a more honest signal of what people believe.  
**Kalshi Forge** is a small window into how that could look for new users:  
fast, cinematic, educational, and beautifully designed.

---

### 🧑‍💻 Author

Built by **Michael** — passionate about event-based markets,  
UI/UX systems, and building interfaces that make finance feel human.

> 💬 “If markets are the world’s collective brain,  
> my goal is to build better neurons.”

---

### 🖥️ Run Locally

```bash
git clone https://github.com/yourusername/kalshi-forge
cd kalshi-forge
pnpm install
pnpm dev
