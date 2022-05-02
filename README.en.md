# News Portal with NodeJs [![en](https://img.shields.io/badge/lang-en-red.svg)](https://github.com/viniciusvasconcelosferreira/portal-noticias/blob/master/README.en.md) [![es](https://img.shields.io/badge/lang-es-yellow.svg)](https://github.com/viniciusvasconcelosferreira/portal-noticias/blob/master/README.es.md) [![fr](https://img.shields.io/badge/lang-fr-blue.svg)](https://github.com/viniciusvasconcelosferreira/portal-noticias/blob/master/README.fr.md)

The purpose of this repository is to share the learning acquired in the Udemy course for the development of a news portal using NodeJs.

## Attention

- This repository **does not** have any relationship with any company and/or corporation.
- The files contained in this repository are for educational purposes only.
- The logic used in this project fell out of use 4 years ago, so the resources and technologies used are in outdated versions.
- This project was adapted to work with **Mysql** and **Sql Server** databases.

## Download

To use this project, you can clone it via **GIT** or **download** the project.

### Clone

To clone the project, you will need to have **[GIT](https://git-scm.com/downloads)** installed on your machine.

1. On the project homepage, click on the **Code** button.
2. In the drop-down menu, you will copy the link by clicking once with the mouse and pressing `ctrl+c` or clicking on the button on the side with the icon of a square on top of the other.
3. Having copied the link, open the terminal and type `git clone` followed by the copied link.
4. The project will be downloaded to the folder of your choice.

### Download ZIP

1. On the project homepage, click on the **Code** button
2. In the drop-down menu, you will click on the **Download ZIP** button
3. After downloading, unzip the file.
4. The project will be available in the folder of your choice where the unzipping was performed.

## Prerequisites

### Database

It will be necessary to have a database [MySQL](https://www.mysql.com/downloads/) or [SQL Server](https://www.microsoft.com/pt-br/sql-server/sql-server-downloads) for storing information.

### Code Editor or IDE

To use the project, you will need a **code editor** or an **ide** on your machine.

There are numerous possibilities of text editors to use in the use of the project. So some that I can suggest are:
- [Atom](https://atom.io/)
- [Brackets](https://brackets.io/)
- [NotePad++](https://notepad-plus-plus.org/downloads/)
- [PhpStorm](https://www.jetbrains.com/pt-br/phpstorm/download/)
- [Sublime Text](https://www.sublimetext.com/download)
- [VSCode (Visual Studio Code)](https://code.visualstudio.com/)

### [Node.js](https://nodejs.org/en/download/)

You will need to have previously installed Node.js on your machine in order to run the project.

### [NPM](https://www.npmjs.com/package/npm)

- **npm** is the **Node Package Manager** and it is through it that the project's dependencies will be installed.
- **npm** comes with **node** and most third-party distributions by default. Once you download **Node.js** you will be installing it together with **npm**.

## Installation

To use the project, it will be necessary to create the database, install the dependencies and configure the database access file.

### Database

To create the database, a **.sql** file was made available, containing the **base structure** and some **data** to populate the database.

### Project

After performing the [download](https://github.com/viniciusvasconcelosferreira/portal-noticias/blob/master/README.en.md#download), installing and configuring the [prerequisites](https://github.com/viniciusvasconcelosferreira/portal-noticias/blob/master/README.en.md#prerequisites) you must follow these steps:
1. Open your machine's terminal and access the project's root path.
2. Run the `npm install` command to install the project's dependencies.
3. During the installation procedure, open the project in the code editor and create a **.env** file in the **config** folder to configure the database access information.
    1. To create the **.env** file, do it according to the template available in **.env.template**
4. After finishing the installation of the dependencies, creating and configuring the .env file, execute the `npm start` command to execute the project

## Questions and Suggestions

If you encounter any difficulties or have suggestions for improvements, be sure to share them with us through the [issues section](https://github.com/viniciusvasconcelosferreira/portal-noticias/issues).
 