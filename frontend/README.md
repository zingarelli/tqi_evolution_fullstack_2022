# SisCoVEL - FrontEnd
Projeto criado com o [Create React App](https://github.com/facebook/create-react-app).

Versão React 18.2.0.

Versão npm 16.15.1.

# Instruções para rodar o projeto

## Ambiente de Desenvolvimento

Após baixado, é possível iniciar o servidor de desenvolvimento com o comando:

`npm start`

Após iniciado, é possível ver o projeto no navegador pela URL [http://localhost:3000](http://localhost:3000).

## JSON Server: mockup de BackEnd
Foi utiizado o JSON Server (versão 0.17.0) para simular o backend do projeto. Ele é uma API REST que persiste os dados em um arquivo nomeado `db.json`.

### Instalação e configuração	
Na pasta raiz do projeto, digite o comando abaixo para instalar a API:

`npm install json-server`

Após instalado, é necessário iniciá-lo. Para fazer isso integrado aos scripts do projeto React, abra o arquivo `package.json` e, na parte de `"scripts"`, adicione a seguinte entrada:

`"backend": "json-server --watch db.json --port 5000"`

Feito isso, a API pode ser iniciada com o comando abaixo: 

`npm run backend`

Com o JSON Server iniciado, será possível acessar a API e fazer requisições pela URL [http://localhost:5000](http://localhost:5000) (a porta 5000 foi escolhida para não haver conflito com a porta do React).