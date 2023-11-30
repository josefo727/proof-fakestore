# Proof Fakestore

## Descripción

`Proof Fakestore` es una aplicación web construida con Vue.js y PrimeVue. Esta aplicación proporciona una interfaz de usuario para visualizar y gestionar una selección de productos, permitiendo a los usuarios añadir productos a un carrito de compras, filtrar productos por categorías y buscar productos específicos.

## Cómo Levantar el Proyecto

Para poner en marcha el proyecto `Proof Fakestore`, sigue estos pasos:

1. *Clonar el Repositorio*:
   Clona este repositorio en tu máquina local utilizando:
   ```git clone https://tudireccionderepositorio.com/proof-fakestore.git```

2. *Instalar Dependencias*:
   Navega al directorio del proyecto y ejecuta el siguiente comando para instalar todas las dependencias necesarias:
   ```npm install```

3. *Ejecutar el Proyecto*:
   Una vez instaladas las dependencias, puedes iniciar el servidor de desarrollo:
   ```npm run dev```
   Esto lanzará el servidor y podrás acceder a la aplicación en `http://localhost:5173/` (o en el puerto que se indique en la consola).

## Tecnologías Usadas

Este proyecto ha sido desarrollado utilizando las siguientes tecnologías y herramientas:

- *Vue.js 3*: Un framework progresivo para construir interfaces de usuario.
- *PrimeVue*: Un rico conjunto de componentes UI para Vue.js.
- *Vuex*: Un patrón de gestión de estado y biblioteca para aplicaciones Vue.js.
- *Axios*: Un cliente HTTP basado en promesas para hacer solicitudes AJAX.
- *Vite*: Un frontend build tool que proporciona un entorno de desarrollo más rápido y eficiente.

## Aplicación de SOLID y Clean Code

En `proof-fakestore`, hemos aplicado principios de SOLID y Clean Code para asegurar un código mantenible y eficiente. Por ejemplo:

- *Principio de Responsabilidad Única (Single Responsibility Principle)*: Hemos separado la lógica de la aplicación en componentes y servicios claramente definidos. Por ejemplo, la clase `HttpService` se encarga exclusivamente de la obtención de datos de la API, mientras que los componentes Vue manejan la presentación y la interacción con el usuario.
- *Clean Code*: Nos hemos esforzado por escribir un código limpio y legible. Por ejemplo, los nombres de las funciones y variables son descriptivos y reflejan su propósito, como `addToCart` y `removeFromCart` para las mutaciones del carrito de compras en Vuex.

Sigue explorando el código para ver más ejemplos de cómo aplicamos estos principios en la práctica.

## Características Especiales del Proyecto

### Store Local Storage (storeLocalStorage.js)

El archivo `storeLocalStorage.js` contiene un plugin para Vuex que mejora la persistencia de datos en `localStorage`. Este plugin se encarga de guardar automáticamente el estado del carrito de compras y otras partes relevantes del estado de la aplicación en `localStorage`. Cuando la aplicación se carga, el estado se restaura desde `localStorage`, lo que permite a los usuarios retener su carrito y otras preferencias entre sesiones. El plugin sigue el principio de responsabilidad única, enfocándose exclusivamente en la gestión del estado persistente.

### Helpers (strings.js, currency.js)

En `strings.js`, hemos implementado dos funciones auxiliares, `capitalizeFirstLetter` y `slugify`, así como `formatCurrency` en currency.js, estos helpers son ejemplos de código limpio y reutilizable, además ayudan a mantener el código del proyecto más limpio y organizado, evitando la duplicación de lógica en diferentes partes de la aplicación.

## Diseño Responsivo

El proyecto `Proof Fakestore` ha sido desarrollado con un enfoque en la responsividad, asegurando que la aplicación se vea y funcione bien en una variedad de dispositivos y tamaños de pantalla. Los componentes de PrimeVue utilizados en la aplicación, como `DataTable` y `Sidebar`, son intrínsecamente responsivos. Se ajustan elegantemente a diferentes tamaños de pantalla, mejorando la experiencia del usuario en dispositivos móviles y de escritorio.

Este enfoque responsivo garantiza que `Proof Fakestore` ofrezca una experiencia de usuario coherente y accesible, independientemente del dispositivo o tamaño de pantalla utilizado por el usuario.
