# FlowMessageLine 💬

> Simple. Secure. Connected. | A Chat & Messaging Microservice.

FlowMessageLine es un clon de WhatsApp desarrollado con React como proyecto final del curso. Permite iniciar sesión, buscar contactos y simular conversaciones con respuestas automáticas personalizadas.

---

## 🚀 Demo

[Ver proyecto en Vercel](#) <!-- Reemplazá con tu link de Vercel -->

---

## 📸 Capturas

| Login | Chats | Conversación |
|-------|-------|--------------|
| ![Login](./public/screenshots/login.png) | ![Home](./public/screenshots/home.png) | ![Chat](./public/screenshots/chat.png) |

---

## ✨ Funcionalidades

- 🔐 Pantalla de login con validación de formulario
- 🔍 Buscador de contactos con `useSearchParams`
- 💬 Conversaciones con respuestas automáticas personalizadas por contacto
- 📱 Diseño responsivo de 320px a 2000px
- 🎨 Paleta de colores coherente con identidad visual propia

---

## 🛠️ Tecnologías utilizadas

| Tecnología | Descripción |
|-----------|-------------|
| **React** | Librería principal para la construcción de la UI |
| **React Router DOM** | Manejo de rutas y navegación entre páginas |
| **Vite** | Herramienta de build y servidor de desarrollo |
| **Context API** | Manejo global del estado de chats y mensajes |
| **CSS puro** | Estilos y diseño visual sin frameworks externos |

---

## 📁 Estructura del proyecto

```
src/
├── assets/          # Imágenes y recursos estáticos
├── components/
│   └── Sidebar.jsx  # Lista de contactos y buscador
├── context/
│   └── chatcontext.jsx  # Estado global de la app
├── pages/
│   ├── Login.jsx    # Pantalla de inicio de sesión
│   ├── Home.jsx     # Página principal con sidebar
│   └── ChatPage.jsx # Página de conversación
├── App.jsx          # Configuración de rutas
├── main.jsx         # Punto de entrada
└── index.css        # Estilos globales
```

---

## ⚙️ Instalación y uso

```bash
# Clonar el repositorio
git clone https://github.com/jjonathanluna01-oss/clon-wsp.git

# Entrar al directorio
cd clon-wsp

# Instalar dependencias
npm install

# Iniciar el servidor de desarrollo
npm run dev
```

---

## 🎯 Requisitos cumplidos

- ✅ Desarrollado en React
- ✅ Uso de estados (`useState`)
- ✅ Uso de contextos (`Context API`)
- ✅ Enrutamiento con `react-router-dom`
- ✅ Uso de parámetros de búsqueda (`useSearchParams`)
- ✅ Al menos 1 formulario (Login)
- ✅ Múltiples componentes
- ✅ Al menos 2 páginas en el flujo
- ✅ Diseño responsivo (320px - 2000px)
- ✅ Estilos accesibles con buen contraste
- ✅ Código subido en GitHub
- ✅ Desplegado en Vercel

---

## 🧩 Dificultades presentadas

### Deploy en Vercel
Una de las dificultades que se presentaron fue al momento de hacer el deploy en Vercel. 
El proyecto funcionaba perfectamente en local, pero al subirlo fallaba el build porque 
Vercel corre en Linux, donde las mayúsculas y minúsculas en los nombres de archivos son 
importantes. En Windows esto no se nota ya que el sistema de archivos no distingue entre 
`Login.jsx` y `login.jsx`, pero en Linux sí. La solución fue renombrar todos los archivos 
con la inicial en mayúscula y asegurarse de que los imports coincidieran exactamente con 
los nombres de los archivos.

## 👤 Autor

**Jonathan Luna**
- GitHub: [@jjonathanluna01-oss](https://github.com/jjonathanluna01-oss)