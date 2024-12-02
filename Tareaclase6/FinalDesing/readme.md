# LandingPage
# Proyecto: Página Web de Sarah Glass Ceramics

## Descripción
Este proyecto consiste en la recreación de una página web de un estudio de cerámica utilizando únicamente **HTML** y **CSS**, con apoyo del framework **Bootstrap** para mejorar la responsividad y algunos componentes visuales. El sitio está pensado para ser funcional y reflejar el estilo visual de un estudio de cerámica, enfocándose en clases, eventos y productos relacionados con la cerámica.

## Estructura del Proyecto
El sitio está compuesto de las siguientes secciones principales:

### 1. **Cabecera y Navegación**
- Contiene un logotipo con enlace a la página de inicio.
- Menú de navegación con enlaces a diferentes secciones como "Clases", "Membresías", "Eventos Privados", "Tienda" y "Más", todos funcionales y redirigidos a las páginas correspondientes.
- Incluye iconos interactivos de búsqueda, usuario y carrito de compras usando **Font Awesome**.

### 2. **Sección Hero**
- Presenta un mensaje de bienvenida en el que se resalta la dedicación del estudio a la creatividad y la comunidad.
- Botón que invita a los usuarios a inscribirse en una clase de cerámica.

### 3. **Sección Acerca de**
- Breve descripción sobre el estudio de cerámica, resaltando que es propiedad de una mujer y ubicado en Fort Lauderdale, Florida.
- Enlace para obtener más información sobre el estudio.

### 4. **Colección de Clases y Talleres Destacados**
- Presenta una galería con clases y talleres destacados, organizados en un diseño responsivo utilizando **Bootstrap Grid System**.
- Cada clase incluye una imagen, descripción y precio, con enlaces que redirigen a la página de compra de cada clase.

### 5. **Formulario de Preguntas**
- Un formulario básico que permite a los usuarios hacer preguntas, incluyendo campos para nombre, correo electrónico y mensaje.

### 6. **Pie de Página**
- Incluye enlaces rápidos a secciones del sitio como clases, eventos privados, tienda y tarjetas de regalo.
- Iconos con enlaces a redes sociales como Facebook e Instagram.
- Información de ubicación con enlace a Google Maps.

## Tecnologías Utilizadas
- **HTML5**: Para la estructura semántica del sitio.
- **CSS3**: Para el diseño visual y estilo personalizado del sitio.
- **Bootstrap 5**: Para lograr un diseño responsivo y componentes como el sistema de grillas y botones.
- **Google Fonts**: Uso de tipografías personalizadas como *Cinzel*, *Karla*, *Cormorant Garamond* y *Apple Garamond*.
- **Font Awesome**: Para iconos interactivos de búsqueda, usuario, carrito y redes sociales.

# Funcionalidades JavaScript del Proyecto

Este archivo describe las funcionalidades desarrolladas con JavaScript para agregar interactividad a la página web.

## 1. Modo Oscuro
Se implementó un modo oscuro que permite a los usuarios alternar entre los modos claro y oscuro mediante un botón interactivo. Además, el ícono del botón cambia dinámicamente para indicar el modo activo.

### Implementación
```javascript
let toggleMode = document.getElementById("toggle-mode");
let themeIcon = document.getElementById("theme-icon");

function darkMode() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeIcon.classList.replace("fa-moon", "fa-sun");
    } else {
        themeIcon.classList.replace("fa-sun", "fa-moon");
    }
} 

toggleMode.addEventListener("click", darkMode);

# Funcionalidad del Menú Hamburguesa

Este documento describe la implementación y el funcionamiento del menú hamburguesa, diseñado específicamente para la navegación en dispositivos móviles en la página web.

## Descripción

El **menú hamburguesa** es un componente de navegación diseñado para dispositivos móviles, que permite mostrar y ocultar el menú mediante botones interactivos. Este menú se activa al hacer clic en el icono del menú (botón "abrir") y se oculta al hacer clic en el icono de cierre (botón "cerrar").

## Implementación

A continuación, se muestra el código utilizado para implementar el menú hamburguesa en el proyecto:

```javascript
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible"); // Muestra el menú añadiendo la clase "visible"
});

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible"); // Oculta el menú eliminando la clase "visible"
});
