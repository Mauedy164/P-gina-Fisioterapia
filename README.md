# 🏥 Clínica de Fisioterapia - Plataforma Digital

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)

Plataforma web moderna para una clínica de fisioterapia, con catálogo de servicios, carrito de compras y sistema de gestión de datos en tiempo real usando Firebase.

## 🚀 Características Principales
- 📦 Catálogo completo de servicios de fisioterapia
- 🛒 Sistema de carrito de compras interactivo
- 🔍 Detalles completos de cada servicio
- 📱 Diseño responsive y accesible
- 🔄 Sincronización en tiempo real con Firebase
- 🧭 Navegación intuitiva con React Router
- 📊 Gestión de estado con Context API

## 🛠 Tecnologías Utilizadas
- **Frontend:** React + Vite
- **Estado Global:** React Context API
- **Enrutamiento:** React Router v6
- **Base de Datos:** Firebase Firestore
- **Estilos:** CSS Modules
- **Iconos:** React Icons
- **Deploy:** (Netlify/Vercel/Firebase Hosting)

## 📦 Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/tu-repositorio.git

2. Instala las dependencias;
```bash
npm install

3. IConfigura Firebase:
```bash
Crea un archivo .env.local con tus credenciales de Firebase:
VITE_FIREBASE_API_KEY=tu_api_key
VITE_FIREBASE_AUTH_DOMAIN=tu_dominio
VITE_FIREBASE_PROJECT_ID=tu_project_id
... (resto de configuraciones)

## 🔥 Configuración Firebase
- Crea un proyecto en Firebase Console
- Habilita Firestore Database
- Crea una colección llamada serviciosFisioterapia
- Importa los datos de muestra desde el antiguo data.js
- Configura las reglas de seguridad según tus necesidades

## 🖥 Ejecución del Proyecto

- Para iniciar el servidor de desarrollo
npm run dev
- Para crear build de producción:
npm run build

## 📂 Estructura del Proyecto

src/
├── components/
│   ├── CardProducts/
│   ├── Pages/
│   └── context/
├── firebase/
│   └── config.js
├── styles/
└── App.jsx