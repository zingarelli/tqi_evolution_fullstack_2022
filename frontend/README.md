# SisCoVEL - FrontEnd
Projeto criado com o [Create React App](https://github.com/facebook/create-react-app).

Versão React 18.2.0.

Versão npm 16.15.1.

# Instruções para rodar o projeto

## Ambiente de Desenvolvimento

Após baixado o projeto, é possível iniciar o servidor de desenvolvimento com o comando:

`npm start`

Após iniciado, é possível ver o projeto no navegador pela URL [http://localhost:3000](http://localhost:3000).

## React Router DOM
O projeto utiliza a biblioteca React Router DOM (versão 6.3.0) para fazer a navegação entre as páginas. Caso seja necessário instalá-la novamente, utilize o comando abaixo:

`npm install react-router-dom`

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

# Créditos:

## Aulas Matheus Battisti


## Imagens
As imagens utilizadas para criar os botões de cadastro de livros, compras e vendas foram obtidas no [Pixabay](https://pixabay.com/pt/) e posteriormente modificadas:

[Livro](https://pixabay.com/pt/vectors/um-livro-literatura-páginas-papel-1699641/)

[Estante](https://pixabay.com/pt/vectors/estante-de-livros-livros-biblioteca-2907964/)


