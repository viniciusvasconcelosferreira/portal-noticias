# Portal de Noticias con NodeJs [![en](https://img.shields.io/badge/lang-en-red.svg)](https://github.com/viniciusvasconcelosferreira/portal-noticias/blob/master/README.en.md) [![es](https://img.shields.io/badge/lang-es-yellow.svg)](https://github.com/viniciusvasconcelosferreira/portal-noticias/blob/master/README.es.md) [![fr](https://img.shields.io/badge/lang-fr-blue.svg)](https://github.com/viniciusvasconcelosferreira/portal-noticias/blob/master/README.fr.md)

El propósito de este repositorio es compartir el aprendizaje adquirido en el curso de Udemy para el desarrollo de un portal de noticias usando NodeJs.

## Atención

- Este repositorio **no** tiene ninguna relación con ninguna empresa y/o corporación.
- Los archivos contenidos en este repositorio son solo para fines educativos.
- La lógica utilizada en este proyecto dejó de utilizarse hace 4 años, por lo que los recursos y tecnologías utilizadas se encuentran en versiones desactualizadas.
- Este proyecto fue adaptado para trabajar con bases de datos **Mysql** y **Sql Server**.

## Descargar

Para usar este proyecto, puede clonarlo a través de **GIT** o **descargar** el proyecto.

### Clone

Para clonar el proyecto, deberá tener **[GIT](https://git-scm.com/downloads)** instalado en su máquina.

1. En la página de inicio del proyecto, haga clic en el botón **Código**.
2. En el menú desplegable, copiará el enlace haciendo clic una vez con el mouse y presionando `ctrl+c` o haciendo clic en el botón del lado con el icono de un cuadrado encima del otro.
3. Habiendo copiado el enlace, abra la terminal y escriba `git clone` seguido del enlace copiado.
4. El proyecto se descargará en la carpeta de su elección.

### Descargar ZIP

1. En la página de inicio del proyecto, haga clic en el botón **Código**
2. En el menú desplegable, harás clic en el botón **Descargar ZIP**
3. Después de la descarga, descomprima el archivo.
4. El proyecto estará disponible en la carpeta de su elección donde se realizó la descompresión.

## Requisitos Previos

### Banco de datos

Será necesario tener una base de datos [MySQL](https://www.mysql.com/downloads/) o [SQL Server](https://www.microsoft.com/pt-br/sql-server/sql-server-downloads) para almacenar información.

### Editor de código o IDE

Para usar el proyecto, necesitará un **editor de código** o un **ide** en su máquina.

Hay numerosas posibilidades de editores de texto para usar en el uso del proyecto. Entonces, algunos que puedo sugerir son:
- [Átomo](https://atom.io/)
- [Corchetes](https://brackets.io/)
- [Bloc de notas++](https://notepad-plus-plus.org/downloads/)
- [PhpStorm](https://www.jetbrains.com/pt-br/phpstorm/download/)
- [Texto sublime](https://www.sublimetext.com/download)
- [VSCode (Visual Studio Code)](https://code.visualstudio.com/)

### [Node.js](https://nodejs.org/en/download/)

Deberá haber instalado previamente Node.js en su máquina para poder ejecutar el proyecto.

### [NPM](https://www.npmjs.com/package/npm)

- **npm** es el **Node Package Manager** y es a través de él que se instalarán las dependencias del proyecto.
- **npm** viene con **nodo** y la mayoría de las distribuciones de terceros de forma predeterminada. Entonces, cuando descargue **Node.js**, lo instalará junto con **npm**.

## Instalación

Para utilizar el proyecto, será necesario crear la base de datos, instalar las dependencias y configurar el archivo de acceso a la base de datos.

### Banco de datos

Para crear la base de datos, se puso a disposición un archivo **.sql** que contenía la **estructura base** y algunos **datos** para completar la base de datos.

### Proyecto

Luego de realizar la [descarga](https://github.com/viniciusvasconcelosferreira/portal-noticias/blob/master/README.es.md#descargar), instalar y configurar los [requisitos previos](https://github.com/viniciusvasconcelosferreira/portal-noticias/blob/master/README.es.md#requisitos-previos) debes seguir estos pasos:
1. Abra la terminal de su máquina y acceda a la ruta raíz del proyecto.
2. Ejecute el comando `npm install` para instalar las dependencias del proyecto.
3. Durante el procedimiento de instalación, abra el proyecto en el editor de código y cree un archivo **.env** en la carpeta **config** para configurar la información de acceso a la base de datos.
    1. Para crear el archivo **.env**, hágalo de acuerdo con la plantilla disponible en **.env.template**
4. Después de terminar la instalación de las dependencias, la creación y configuración del archivo .env, ejecute el comando `npm start` para ejecutar el proyecto

## Preguntas y sugerencias

Si encuentra alguna dificultad o tiene sugerencias para mejorar, asegúrese de compartirlas con nosotros a través de la [sección de problemas](https://github.com/viniciusvasconcelosferreira/portal-noticias/issues).