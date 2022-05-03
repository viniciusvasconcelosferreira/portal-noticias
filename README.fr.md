# Portail d'actualités avec NodeJs [![en](https://img.shields.io/badge/lang-en-red.svg)](https://github.com/viniciusvasconcelosferreira/portal-noticias/blob/master/README.en.md) [![es](https://img.shields.io/badge/lang-es-yellow.svg)](https://github.com/viniciusvasconcelosferreira/portal-noticias/blob/master/README.es.md) [![fr](https://img.shields.io/badge/lang-fr-blue.svg)](https://github.com/viniciusvasconcelosferreira/portal-noticias/blob/master/README.fr.md)

Le but de ce référentiel est de partager l'apprentissage acquis dans le cours Udemy pour le développement d'un portail d'actualités utilisant NodeJs.

## Attention

- Ce référentiel **n'a pas** de relation avec une entreprise et/ou une société.
- Les fichiers contenus dans ce référentiel sont uniquement à des fins éducatives.
- La logique utilisée dans ce projet est tombée en désuétude il y a 4 ans, donc les ressources et technologies utilisées sont dans des versions obsolètes.
- Ce projet a été adapté pour fonctionner avec les bases de données **Mysql** et **Sql Server**.

## Télécharger

Pour utiliser ce projet, vous pouvez le cloner via **GIT** ou **télécharger** le projet.

### Cloner

Pour cloner le projet, vous devez avoir **[GIT](https://git-scm.com/downloads)** installé sur votre machine.

1. Sur la page d'accueil du projet, cliquez sur le bouton **Code**.
2. Dans le menu déroulant, vous copierez le lien en cliquant une fois avec la souris et en appuyant sur `ctrl+c` ou en cliquant sur le bouton sur le côté avec l'icône d'un carré au-dessus de l'autre.
3. Après avoir copié le lien, ouvrez le terminal et tapez "git clone" suivi du lien copié.
4. Le projet sera téléchargé dans le dossier de votre choix.

### Télécharger le ZIP

1. Sur la page d'accueil du projet, cliquez sur le bouton **Code**
2. Dans le menu déroulant, vous cliquerez sur le bouton **Télécharger ZIP**
3. Après le téléchargement, décompressez le fichier.
4. Le projet sera disponible dans le dossier de votre choix où la décompression a été effectuée.

## Conditions Préalables

### Base de données

Il faudra disposer d'une base de données [MySQL](https://www.mysql.com/downloads/) ou [SQL Server](https://www.microsoft.com/pt-br/sql-server/sql-server-downloads) pour stocker des informations.

### Éditeur de code ou IDE

Pour utiliser le projet, vous aurez besoin d'un **éditeur de code** ou d'un **ide** sur votre machine.

Il existe de nombreuses possibilités d'éditeurs de texte à utiliser dans l'utilisation du projet. Donc, certains que je peux suggérer sont:
- [Atom](https://atom.io/)
- [Brackets](https://brackets.io/)
- [NotePad++](https://notepad-plus-plus.org/downloads/)
- [PhpStorm](https://www.jetbrains.com/pt-br/phpstorm/download/)
- [Sublime Text](https://www.sublimetext.com/download)
- [VSCode (Visual Studio Code)](https://code.visualstudio.com/)

### [Node.js](https://nodejs.org/en/download/)

Vous devrez avoir préalablement installé Node.js sur votre machine pour exécuter le projet.

### [NPM](https://www.npmjs.com/package/npm)

- **npm** est le **Node Package Manager** et c'est par lui que les dépendances du projet seront installées.
- **npm** est fourni avec **node** et la plupart des distributions tierces par défaut. Ainsi, lorsque vous téléchargerez **Node.js**, vous l'installerez avec **npm**.

## Installation

Pour utiliser le projet, il faudra créer la base de données, installer les dépendances et configurer le fichier d'accès à la base de données.

### Base de données

Pour créer la base de données, un fichier **.sql** a été mis à disposition contenant la **structure de base** et quelques **données** pour remplir la base de données.

### Projet

Après avoir effectué le [téléchargement](https://github.com/viniciusvasconcelosferreira/portal-noticias#download), installer et configurer les [prérequis](https://github.com/viniciusvasconcelosferreira/portal-noticias#pré-requirements) vous devez suivre ces étapes :
1. Ouvrez le terminal de votre machine et accédez au chemin racine du projet.
2. Exécutez la commande `npm install` pour installer les dépendances du projet.
3. Lors de la procédure d'installation, ouvrez le projet dans l'éditeur de code et créez un fichier **.env** dans le dossier **config** pour configurer les informations d'accès à la base de données.
    1. Pour créer le fichier **.env**, faites-le selon le modèle disponible dans **.env.template**
4. Après avoir terminé l'installation des dépendances, la création et la configuration du fichier .env, exécutez la commande `npm start` pour exécuter le projet

## Questions et suggestions

Si vous rencontrez des difficultés ou avez des suggestions d'amélioration, assurez-vous de les partager avec nous via la [section des problèmes](https://github.com/viniciusvasconcelosferreira/portal-noticias/issues).