# Processo Seletivo TQI FullStack 2022

**Projeto**: SisCoVEL - Sistema de controle interno de Compra, Venda e Estoque para Livrarias

**Desenvolvido por**: [Matheus Ricardo Uihara Zingarelli](https://www.linkedin.com/in/zingarelli/) - zingarelli.m@gmail.com

## Descrição

Uma livraria precisa criar seu controle de compra, vendas e estoque de livros. Para tanto, foi solicitado desenvolver inicialmente as seguintes funcionalidades:

1. Cadastro de livro: o cadastro deverá conter as seguintes informações: Título, Autor, Editora, imagem do livro e ano de publicação;  
2. Compra de livros (pela livraria, para estoque): deverão ser armazenados o livro, quantidade de exemplares e valor unitário;
3. Venda de livros: para cada venda, é necessário armazenar o cliente, livros, quantidades de itens e o preço de venda;

Solicitações extras: o desenvolvimento deve ser feito utilizando **React** e **Java**, incluindo **testes automatizados**. Funcionalidades extras poderão ser desenvolvidas caso sejam necessárias. 

# Planejamento
Este é o planejamento inicial, que será melhorado conforme o projeto for sendo desenvolvido.

O projeto será dividido em dois sub-projetos: frontend e backend. Cada um terá uma lista de atividades a serem efetuadas.

No sub-projeto frontend, será utilizando o **React (versão 18.2.0)** (inserir essas informações no README do sub-projeto?). No sub-projeto BackEnd será utilizado **Java (JDK XX.XX)**. Para o sistema gerenciador de banco de dados será utilizado o **XXXXX**.

## Atividades Modelagem
- Criar as tabelas que irão representar o sistema: Livros, Compra, Venda, Estoque;
- Considerar outras tabelas: Clientes, Editoras, Livrarias (para franquias que possuem mais de uma loja);
- Criar relacionamentos e restrições.

## Atividades FronEnd
- Criar os componentes principais para menus, botões, formulários e seus campos;
- Criar as páginas de Home, Cadastro de Livros, Compra, Venda;
- Estilizar as páginas;
- Efetuar testes de funcionalidade e usabilidade;
- Considerar criação de páginas auxiliares: Visualização de Estoque, Relatório de Compras/Vendas;
- Considerar criação de sistema responsivo (para mobile e desktops).

## Atividades BackEnd
- Criar as entidades para representar o Banco;
- Desenvolver a funcionalidade para cadastro de livros;
- Desenvolver a funcionalidade para cadastro de compra;
- Desenvolver a funcionalidade para cadastro de venda;
- Criar testes unitários;
- Considerar criação de outros testes.

## Andamento das atividades e considerações
Descrição das atividades desenvolvidas e observações que forem cabíveis.

# Instalação e configuração
O projeto foi criado com o npm (versão v16.15.1). 

Após fazer o download do projeto, utilize o comando abaixo para rodá-lo localmente:

`npm start` 

# Protótipo
Link para o protótipo desenvolvido. Talvez colocar esta seção no início, quando estiver finalizado.