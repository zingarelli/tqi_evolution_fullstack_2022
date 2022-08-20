# SisCoVEL - FrontEnd
Projeto criado com o [Create React App](https://github.com/facebook/create-react-app).

Versão React 18.2.0.

Versão npm 16.15.1.

# O que foi implementado
- Backend e banco de dados mockado: foi utilizado o JSON-Server e um arquivo db.json para simular requisições ao backend e persistência dos dados. Mais detalhes se encontram na seção ["Instruções para rodar o projeto"](#instruções-para-rodar-o-projeto);
- Página inicial: contém três botões que levam às telas para executar as ações de: cadastro de livro, inclusão de compra ao estoque, cadastro de venda. Os mesmos botões se encontram no header da página, em formato menor, para que as ações possam ser feitas em qualquer tela;
- Tela de Cadastro de Livro: é possível preencher os campos, incluir um arquivo de imagem e salvar o livro no banco mockado pelo JSON-Server. Ao salvar, uma mensagem de sucesso é exibida na tela por 3 segundos;
- Tela de Inclusão de Compra: é feita uma requisição no JSON-Server para recuperar a lista de livros cadastrada, que pode então ser selecionada. Quando um livro já existe em estoque, são exibidos a quantidade atual em estoque e o preço atual. Ao salvar, uma mensagem de sucesso é exibida na tela por 3 segundos e, caso o livro já exista em estoque, a quantidade e preço são atualizados na tela. No banco de dados, caso o livro ainda não se encontre em estoque, uma entrada é criada para ele; caso contrário, sua quantidade e preço são atualizados;
- Tela de cadastro de Venda (inacabada): a maior parte do visual da tela foi feito, inclusive mostrando todos os livros que estão em estoque, para que possam ser selecionados e informada a quantidade comprada. Ao clicar no botão de "Salvar venda", por enquanto é somente salvo no banco o nome do cliente. 

# Implementações não feitas
1. No cadastro de livro, não foi implementada a lógica para upload da imagem de capa de livro no banco. É somente salvo o fakepath da imagem;
2. A tela de cadastro de Venda é a que ficou inacabada. Faltou: finalizar a lógica de inclusão de venda no banco de dados e atualização do estoque, buscar informações no banco para popular alguns campos da tela, melhorar a parte visual, e reestruturar os componentes;
3. Em todas as telas, ficou faltando fazer validações nos inputs, para impedir inclusão de valor negativo e verificar se um valor numérico foi inserido corretamente.
4. Não foram implementados testes unitários :(

# Telas do projeto

## Página Inicial

![Página Inicial](https://user-images.githubusercontent.com/19349339/185684237-6c47027a-ac7f-4a73-b9c2-ad7090992dc4.png)

## Cadastro de Livro
![Tela do cadastro de livro](https://user-images.githubusercontent.com/19349339/185751479-87bd47b8-a9d5-4bb6-84b7-a00280ba4f47.png)

## Inclusão de Livro ao Estoque
![Tela da inclusão de livro ao estoque](https://user-images.githubusercontent.com/19349339/185684354-995a9fe6-9d09-40c6-b989-efee57a623d1.png)

## Cadastro de Venda
![Tela da inclusão de uma venda](https://user-images.githubusercontent.com/19349339/185688386-95a64d0f-c6c6-426b-84d3-77c14277a7e9.png)

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
Caso seja necessário instalá-lo e configurá-lo novamente, siga os passos abaixo.

Na pasta raiz do projeto, digite o comando abaixo para instalar a API:

`npm install json-server`

Após instalado, é necessário iniciá-lo. Para fazer isso integrado aos scripts do projeto React, abra o arquivo `package.json` e, na parte de `"scripts"`, adicione a seguinte entrada:

`"backend": "json-server --watch db.json --port 5000"`

Feito isso, a API pode ser iniciada com o comando abaixo: 

`npm run backend`

Com o JSON Server iniciado, será possível acessar a API e fazer requisições pela URL [http://localhost:5000](http://localhost:5000) (a porta 5000 foi escolhida para não haver conflito com a porta do React).

# Agradecimento especial
Consegui entender melhor como o React funciona e como implementar com React por meio das aulas do [Matheus Battisti](https://www.linkedin.com/in/matheusbattisti/). Ele possui uma ótima didática e suas aulas são uma mescla de teoria com prática, inclusive desenvolvendo um projeto que me auxiliou muito na estruturação e implementação do SisCoVEL.

A playlist do curso (gratuito e excelente) dele se encontra [neste link](https://www.youtube.com/playlist?list=PLnDvRpP8BneyVA0SZ2okm-QBojomniQVO).

# Créditos das Imagens
As imagens utilizadas para criar os botões de cadastro de livros, compras e vendas foram obtidas no [Pixabay](https://pixabay.com/pt/) e posteriormente modificadas para chegar num estilo que melhor representasse os botões:

[Livro](https://pixabay.com/pt/vectors/um-livro-literatura-páginas-papel-1699641/)

[Estante](https://pixabay.com/pt/vectors/estante-de-livros-livros-biblioteca-2907964/)