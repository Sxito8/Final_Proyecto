Football Stats App ⚽
Aplicación web desarrollada en React + Vite que permite consultar equipos de fútbol y visualizar sus estadísticas (partidos jugados, ganados, empatados, perdidos y goles) consumiendo la API REST de API-Sports Football.
🚀 Características
🔎 Búsqueda de equipos por nombre.
📊 Consulta de estadísticas por equipo, temporada y liga.
🏆 Soporte para las 5 grandes ligas: LaLiga, Premier League, Ligue 1, Serie A y Primeira Liga.
📱 Interfaz responsiva desarrollada con componentes reutilizables de React.
🛠️ Tecnologías utilizadas
React 18 — Librería principal para la UI.
Vite — Bundler y servidor de desarrollo.
JavaScript (ES6+)
CSS3
Fetch API — Para consumir la API REST.
react-modal — Para componentes de tipo modal.
ESLint — Para mantener buenas prácticas de código.
📦 Instalación y uso
Requisitos previos
Node.js 18 o superior
npm o yarn
Una API key gratuita de api-football.com
Pasos
```bash
# 1. Clonar el repositorio
git clone https://github.com/Sxito8/football-stats-app.git
cd football-stats-app/app-fubol

# 2. Instalar dependencias
npm install

# 3. Crear el archivo .env en la raíz de app-fubol/ con tu API key
echo "VITE\_API\_KEY=tu\_api\_key\_aqui" > .env

# 4. Ejecutar el servidor de desarrollo
npm run dev
```
La aplicación quedará disponible en `http://localhost:5173`.
📂 Estructura del proyecto
```
app-fubol/
├── public/
├── src/
│   ├── components/
│   │   ├── SearchBar.jsx
│   │   ├── StatisticsSearchBar.jsx
│   │   ├── TeamList.jsx
│   │   ├── TeamStatistics.jsx
│   │   └── styles.css
│   ├── App.jsx
│   ├── Navbar.jsx
│   └── main.jsx
├── package.json
└── vite.config.js
```
🧠 Lo que aprendí
Consumo de APIs REST externas con autenticación por API key.
Manejo de estado en React con hooks (`useState`).
Componentización y separación de responsabilidades.
Comunicación entre componentes mediante props y funciones callback.
Manejo asíncrono con `async/await` y captura de errores.
👤 Autor
Sixto Exiga Martínez
Ingeniero en Sistemas Computacionales — Instituto Tecnológico de Tuxtepec
LinkedIn · GitHub
---
Proyecto desarrollado como entrega final académica.
