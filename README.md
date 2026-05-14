# Frontend Portfolio
 
Interactive portfolio built with React + TypeScript, showcasing practical development skills across three standalone applications.
 
**[Live Demo](https://sindds-github-io.vercel.app)**
 
---
 
## Stack
 
| Layer | Technology |
|---|---|
| Framework | React 19.1.1 |
| Language | TypeScript 5.8.3 |
| Routing | React Router DOM 7.9.1 |
| Styling | Tailwind CSS 4.1.13 |
| Build | Vite 7.1.2 |
| Linting | ESLint 9.33.0 |
 
---
 
## Applications
 
### Todo App
CRUD-менеджер задач с drag-and-drop сортировкой. Поддерживает редактирование, удаление и отметку о выполнении. Полностью адаптивный.
 
### Weather App
Интеграция с [OpenWeatherMap API](https://openweathermap.org/api). Асинхронные запросы через Axios, обработка ошибок, прогноз с группировкой по дням/ночам.
 
### Password Generator
Криптографически стойкая генерация паролей через Web Crypto API. Настраиваемые параметры, копирование через Clipboard API.
 
---
 
## Project Structure
 
```
src/
├── components/         # Shared UI components
├── pages/              # Route-level components
│   ├── Todo/
│   ├── Weather/
│   └── PasswordGenerator/
├── hooks/              # Custom React hooks
├── types/              # TypeScript interfaces
└── utils/              # Helper functions
```
 
---
 
## Getting Started
 
```bash
git clone https://github.com/sindds/sindds-github-io
cd sindds-github-io
npm install
```
 
Create `.env` file in the project root:
 
```env
VITE_WEATHER_API_KEY=your_openweathermap_api_key
```
 
```bash
npm run dev
```
 
Production build:
 
```bash
npm run build
```
 
---
 
## Environment Variables
 
| Variable | Required | Description |
|---|---|---|
| `VITE_WEATHER_API_KEY` | Yes | OpenWeatherMap API key |
 
Get a free key at [openweathermap.org](https://openweathermap.org/appid).
