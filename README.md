# Simpyfi

## Description
A simple and user-friendly personal finance expense tracker 💸💰.

## Tech Stack 
- Backend: C# (.NET 8)
- Identity Access Management: Keycloak
- Frontend: React, React Native, Typescript and TailwindCSS
- Database: PostgreSQL, SQLite (local)
- Hosting: Microsoft Azure

## Features
- [ ] User registration & login
  - [ ] Normal user registration & login
  - [ ] User registration via social login (google, outlook)
- [ ] Main finance dashboard
- [ ] Configuration of current financial situation (debts, monthly income, etc)
- [ ] Create/Update/delete/view an expense
- [ ] Create/Update/delete/view a budget
- [ ] Create/Update/delete/view an investment
- [ ] Notifications/Reminders when reaching budget limits
- [ ] List out expenses, budgets and investments
- [ ] Charts for viewing financial situation, milestones and investments
- [ ] Export reports in XLSX, CSV and PDF formats
- [ ] State synchronization between local DB and remote DB (offline first)

## Bonus Features
- [ ] Integrate a LLM API for intelligent finance recommendations and suggestions based on user expenses
- [ ] Insert expenses via camera with OCR

## Getting Started
1. Clone the repo
2. Run `dotnet run` in /api
3. Run `npm run dev` in /frontend
