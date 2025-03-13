# Visión General del proyecto

El presente proyecto nace de la necesidad presentada en la prueba técnica, \
para la vacante como Desarrollador Frontend Sr de la empresa [Seguritech](https://seguritech.com). \

Se utilizo la herramienta de inicialización de proyectos create-react-app (https://github.com/facebook/create-react-app). \
para el arquetipo inicial.

## Comando ejecutado para creación del proyecto

`npx create-react-app prueba-movies --template typescript`

Incluye herramientas como manejadores de estado con React Redux Toolkit, hojas de estilo con SCSS. \
Componentes y elementos de HTML en combinación con Bootstrap y MUI \

Adicionalmente se desarrollando con el lenguaje de TS por las ventajas y bondades que \
permite mantener un mejor control de los tipados de datos, añadiendo \
una capa extra de seguridad para el control de objetos json, props, response de servicios, creación de objetos \
con estados inciales, etc. Aunque en el proyecto no se tiene implementado algun componente con props\
para compartir propiedades de un componente padre a un hijo y algunas otras cosas más mencionadas con \
anterioridad, pero es una buena practica implementarlo.

El cliente HTTP seleccionado es Axios. ¿Pór que lo elegí? Simplemente por que me gusta mucho esta libreria, \
adicional proporciona algunas ventajas en comparación con Fetch como son: \

- Interceptores.
- Cancelación de solicitudes.
- Manejo de errores.

Redux se implemento con Toolkit simplificando su implementación. \
Decidi utilizar el manejo de estados para controlar el acceso de la aplicación mediante un login. \

# Sistema de inicio de Sesión

El inicio de sesión se implemento con autenticación [firebase](https://firebase.google.com/?hl=es-419). \
Es una autenticación sencilla habilitada simplemente para ingresar con usuario y contraseña. \
Tratandose de una empresa que en su nombre lleva "Seguri", \
entonces se me hizo un plus agregarle una autenticación más apegada a los proyectos reales. \

La credencial de acceso son las siguientes:

    - email: user_movies@prueba.com
    - pass: UsMov1es@

Cabe destacar que el proyecto de Firebase se dara de baja una vez que se avance o decline el proceso de reclutamiento, por lo que las credenciales y valores del proyecto firebase seran obsoletas.

# Librerias

El proyecto se construyo en el presente dia 12 de Marzo de 2025 por lo que las versiones tanto de node como de React lts son las siguientes: \

NodeJs: 22.14.0
ReactJs: 19.0.0

Por lo que son las minimo recomendadas para instalar dependencias e inicializar el proyecto.
El manejador de paquetes seleccionado es NPM simplemente por que me resulta comodo, \
facil y es con el que más experiencia tengo.

## Instalación de dependencias e inicializar el servidor local

### `npm i` o `npm install`

La instalación de dependencias se hace se ejecutando el comando npm i, este comando se ejecuta una vez \
que te encuentres dentro de la carpeta raiz del proyecto.

### `npm start`

Al finalizar la instalación de dependencias el siguiente paso es levantar el servidor local con npm start. \
Una vez que levante en el puerto 3000 del localhost, se visualizara el proyecto corriendo.\

## Si desean tener mayor información sobre React o la libreria que se utilizo para el arquetipo original

Puedes aprender más de [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

Puedes aprender mas en [React documentation](https://reactjs.org/).
