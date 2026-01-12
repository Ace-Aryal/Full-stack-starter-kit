# Full-Stack Starter Kit 🚀

An **opinionated full-stack starter kit** using **Express.js + TypeScript** for the backend and **Next.js** for the frontend, with **Prisma** as the ORM.

This repo is designed to be **minimal, understandable, and production-ready**, without unnecessary abstractions.

---

## ✨ Features

### Backend

* Express.js + TypeScript
* tsx watch for hot reload
* Prisma ORM (type-safe DB access)
* Zod-ready request validation
* dotenv for environment variables
* Clean folder structure

### Frontend

* Next.js (App Router)
* TypeScript
* Tailwind CSS
* API-ready structure
* Environment-based configuration
* shadcn/ui

### Tooling

* pnpm (fast & deterministic)
* Prettier (consistent formatting)
* Shared full-stack conventions

---

## 🧱 Tech Stack

| Layer    | Tech                              |
| -------- | --------------------------------- |
| Frontend | Next.js, TypeScript, Tailwind CSS |
| Backend  | Express.js, TypeScript,   |
| Database | PostgreSQL / MySQL / SQLite       |
| ORM      | Prisma                            |
| Tooling  | pnpm, Prettier                    |

---

## 📁 Project Structure

```txt
full-stack-starter-kit
│
├── backend
│   ├── src
│   │   ├── index.ts
│   │   ├── routes
│   │   ├── controllers
│   │   ├── services
│   │   └── lib
│   ├── prisma
│   │   └── schema.prisma
│   ├── tsconfig.json
│   ├── nodemon.json
│   ├── .env
│   └── package.json
│
├── frontend
│   ├── app
│   ├── components
│   ├── lib
│   ├── styles
│   ├── .env.local
│   └── package.json
│
├── .gitignore
└── README.md
```

---

## ⚙️ Getting Started

### Prerequisites

* Node.js >= 18
* pnpm
* A database (PostgreSQL recommended)

---

## 🔧 Backend Setup

```bash
cd backend
pnpm install
```

### Environment Variables (`backend/.env`)

```env
DATABASE_URL="postgresql://user:password@localhost:5432/db"
PORT=3000
```

### Prisma Setup

```bash
pnpm prisma generate
pnpm prisma migrate dev
```

### Run Backend

```bash
pnpm dev
```

Backend will run on: `http://localhost:3000`

---

## 🎨 Frontend Setup

```bash
cd frontend
pnpm install
pnpm dev
```

### Environment Variables (`frontend/.env.local`)

```env
NEXT_PUBLIC_API_URL=http://localhost:3000
```

Frontend will run on: `http://localhost:3001`

---

## 🗄 Prisma

* Prisma schema lives in `backend/prisma/schema.prisma`
* Prisma Client is generated automatically
* Acts as the **single source of truth** for database schema and types

---

## 🧹 Formatting

```bash
pnpm format
```

Prettier ensures **consistent formatting across the team**.

---

## 🎯 Design Philosophy

* Minimal but scalable
* No framework lock-in
* Explicit over magical
* Easy to extend with auth, queues, or background jobs

This starter kit is meant to **get out of your way**, not hide fundamentals.

---

## 🚫 Intentionally Not Included

* Authentication (NextAuth / Clerk / custom)
* State management opinion (Redux, Zustand, etc.)
* Docker & CI (can be added later)

---

## 📌 Ideal Use Cases

* SaaS MVPs
* Internal tools
* Learning full-stack architecture
* Production-ready side projects

---

## 📄 License

MIT License
