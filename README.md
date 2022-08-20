# Processo Seletivo TQI FullStack 2022

**Projeto**: SisCoVEL - Sistema de controle interno de Compra, Venda e Estoque para Livrarias

**Desenvolvido por**: [Matheus Ricardo Uihara Zingarelli](https://www.linkedin.com/in/zingarelli/) - zingarelli.m@gmail.com

# Descrição

Uma livraria precisa criar seu controle de compra, vendas e estoque de livros. Para tanto, foi solicitado desenvolver inicialmente as seguintes funcionalidades:

1. Cadastro de livro: o cadastro deverá conter as seguintes informações: Título, Autor, Editora, imagem do livro e ano de publicação;  
2. Compra de livros (pela livraria, para estoque): deverão ser armazenados o livro, quantidade de exemplares e valor unitário;
3. Venda de livros: para cada venda, é necessário armazenar o cliente, livros, quantidades de itens e o preço de venda;

Solicitações extras: o desenvolvimento deve ser feito utilizando **React** e **Java**, incluindo **testes automatizados**. Funcionalidades extras poderão ser desenvolvidas caso sejam necessárias. 

# Planejamento
O projeto será dividido em dois sub-projetos: frontend e backend. Cada um terá uma lista de atividades a serem efetuadas. Além disso, será necessário fazer a modelagem do banco de dados.

## Atividades Modelagem
- Criar as tabelas que irão representar o sistema: Livros, Compra, Venda, Estoque;
- Criar relacionamentos entre as tabelas e restrições.
- Considerar outras tabelas: Clientes, Editoras, Capas (para guardar as capas de livros e suas variações por edição), Livrarias (imaginando no futuro que a livraria se expanda em outras lojas franqueadas);

## Atividades FrontEnd
- Criar os componentes principais para menus, botões, formulários e seus campos;
- Criar as páginas de Home, Cadastro de Livros, Compra, Venda;
- Estilizar as páginas;
- Efetuar testes de funcionalidade e usabilidade;
- Considerar criação de páginas auxiliares: Visualização de Estoque, Relatório de Compras/Vendas;
- Considerar criação de sistema responsivo (para mobile e desktops).

## Atividades BackEnd
- Criar as entidades para representar o Banco;
- Fazer a conexão com o Banco;
- Desenvolver a funcionalidade para cadastro de Livros;
- Desenvolver a funcionalidade para cadastro de Compra;
- Desenvolver a funcionalidade para cadastro de Venda;
- Criar testes unitários;
- Fazer a ligação com o FrontEnd;
- Considerar criação de outros testes.

# Atividades
Foi **desenvolvido *parcialmente* o FrontEnd do projeto**, sendo que a funcionalidade de vendas de livros não foi finalizada, faltaram ser feitos alguns ajuste e inclusão de testes unitários. Dentro da pasta do frontend há um README com mais detalhes do desenvolvimento, o que foi e não foi feito, como rodá-lo localmente, bem como telas da aplicação rodando (utilizando JSON-Server para simular o backend e comunicação com o banco de dados).

Toda a parte de **BackEnd e modelagem do banco**, infelizmente, **não foi desenvolvida** até o prazo final do dia 21/08/2022.

# Agradecimentos
Muito obrigado à DIO e à TQI pela oportunidade de participar tanto do bootcamp quanto do processo seletivo. As aulas, lives e interação no fórum foram muito importantes para ganhar experiência, ter uma visão dos caminhos que quero seguir e onde preciso investir mais em conhecimento e formação. 

Este desafio final foi um ótimo aprendizado do quanto ainda preciso me dedicar e continuar nos meus estudos para adquirir experiência e maturidade com as tecnologias, principalmente com Java e toda a parte de BackEnd. Ter chegado até aqui em pouco menos de dois meses foi, para mim, uma grande conquista. Sigamos avante!