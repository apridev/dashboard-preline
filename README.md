![Thubnail](https://github.com/user-attachments/assets/45f4534b-89f6-4077-bc71-e0a2c1ddb7e8)
![Thubnail 2](https://github.com/user-attachments/assets/4d1cffe1-9aa4-4cc3-a90f-9b6712f14a35)
![Thubnail 3](https://github.com/user-attachments/assets/e8bfa562-3950-4adc-b786-97b8b650144f)

# React + Vite (Admin Dashboard)

Before using this repository it is necessary to install some dependencies for this template. The first step because this uses React js and Vite is necessary to install:
- <b>npm create vite@latest my-project -- --template react</b>

Don't forget to also install TailwindCss and Preline in a way:
- <b>npm install -D tailwindcss postcss autoprefixer</b>
- <b>npx tailwindcss init -p</b>
- <b>npm install preline</b>

Also, enter tailwind.config.js into the following format:
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './node_modules/preline/preline.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('preline/plugin'),
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar-hide'),
  ],
};
```
Don't forget to also install dependencies to support this Template to keep it running, namely those:
- <b>npm install react-chartjs-2 chart.js</b>
- <b>npm install react-router-dom</b>
- <b>npm install react-icons</b>
