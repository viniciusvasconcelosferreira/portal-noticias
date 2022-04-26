# Portal de Notícias com NodeJs [![en](https://img.shields.io/badge/lang-en-red.svg)](https://github.com/viniciusvasconcelosferreira/portal-noticias/blob/master/README.en.md) [![es](https://img.shields.io/badge/lang-es-yellow.svg)](https://github.com/viniciusvasconcelosferreira/portal-noticias/blob/master/README.es.md) [![fr](https://img.shields.io/badge/lang-fr-blue.svg)](https://github.com/viniciusvasconcelosferreira/portal-noticias/blob/master/README.fr.md)

O objetivo deste repositório é o compartilhamento do aprendizado adquirido no curso da Udemy para o desenvolvimento de um portal de notícias utilizando NodeJs.

## Importante

- Esse repositório **não** possui qualquer relação com alguma empresa e/ou corporação.
- Os arquivos contidos neste repositório possuem o propósito meramente didático.
- A lógica usada neste projeto caiu em desuso há 4 anos atrás, então os recursos e tecnologias utilizadas estão em versões desatualizadas.
- Este projeto foi adaptado para funcionar com as bases de dados **Mysql** e **Sql Server**.

## Download

Para utilização deste projeto, você poderá está fazendo o clone do mesmo via **GIT** ou fazendo o **download** do projeto.

### Clone

Para fazer o clone do projeto, você precisará ter instalado o **[GIT](https://git-scm.com/downloads)** em sua máquina.

1. Na página inicial do projeto, clique no botão **Code**.
2. No menu suspenso, você irá copiar o link clicando uma vez com o mouse e apertando `ctrl+c` ou clicando no botão ao lado com o icone de um quadrado em cima do outro.
3. Tendo copiado o link, abra o terminal e digite `git clone` seguido do link copiado.
4. O download do projeto será feito para a pasta de sua escolha.

### Download ZIP

1. Na página inicial do projeto, clique no botão **Code**
2. No menu suspenso, você irá clicar no botão **Download ZIP**
3. Após do download, faça a descompactação do arquivo.
4. O projeto estará disponivel na pasta de sua escolha aonde foi realizada a descompactação.

## Pré-requisitos

### Banco de Dados

Será necessário possui um banco de dados [MySQL](https://www.mysql.com/downloads/) ou [SQL Server](https://www.microsoft.com/pt-br/sql-server/sql-server-downloads) para armazenamento das informações.

### Editor de Código ou IDE

Para utilização do projeto, será necessário possuir um **editor de código** ou uma **ide** em sua máquina.

São inúmeras possibilidades de editores de texto para utilizar na utilização do projeto. Sendo assim, alguns que posso sugerir são:
- [Atom](https://atom.io/)
- [Brackets](https://brackets.io/)
- [NotePad++](https://notepad-plus-plus.org/downloads/)
- [PhpStorm](https://www.jetbrains.com/pt-br/phpstorm/download/)
- [Sublime Text](https://www.sublimetext.com/download)
- [VSCode (Visual Studio Code)](https://code.visualstudio.com/)

### [Node.js](https://nodejs.org/en/download/)

Você precisará ter instalado previamente o Node.js em sua máquina para poder fazer a execução do projeto.

### [NPM](https://www.npmjs.com/package/npm)

 - O **npm** é o **Gerenciador de Pacotes do Node** e é por meio dele que será instalado as dependências do projeto.
 - O **npm** vem com o **node** e a maioria das distribuições de terceiros, por padrão. Logo, ao fazer o download do **Node.js**, você estará fazendo a instalação conjunta dele com o **npm**.

## Instalação

Para utilização do projeto será necessário a criação do banco de dados, a instalação das dependencias e a configuração do arquivo de acesso ao banco.

### Banco de Dados

Para criação do banco de dados, foi disponibilizado um arquivo **.sql** contendo a **estrutura do banco** e alguns **dados** para popular o banco.

### Projeto

Após a realização do [download](https://github.com/viniciusvasconcelosferreira/portal-noticias#download), instalação e configuração dos [pré-requisitos](https://github.com/viniciusvasconcelosferreira/portal-noticias#pré-requisitos) você deverá seguir os seguintes passos:
1. Abra o terminal de sua máquina e acesso caminho da raiz do projeto.
2. Execute o comando `npm install` para instalação das dependências do projeto.
3. Durante o procedimento de instalação, abra o projeto no editor de código e crie um arquivo **.env** na pasta **config** para configuração das informações de acesso a base de dados.
   1. Para criação do arquivo **.env**, faça conforme o modelo disponibilizado em **.env.template**
4. Depois de finalizado a instalação das dependências, a criação e configuração do arquivo .env, execute o comando `npm start` para execução do projeto 

## Dúvidas e sugestões

Caso encontre alguma dificuldade ou tenha sugestões de melhorias, não deixe de compartilhar conosco através da seção de [issues](https://github.com/viniciusvasconcelosferreira/portal-noticias/issues).
 