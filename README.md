# API de Notas de Estudo

Este projeto é uma API de notas de estudo construída com Node.js, Express, Sequelize e PostgreSQL. 
Ele surgiu a partir de um curso antigo de Node.js no YouTube, que já estava desatualizado em vários pontos, 
principalmente no uso do Sequelize e na estruturação dos models.

Durante o desenvolvimento, pesquisei e apliquei formas modernas de atualizar os comandos e organizar o projeto, incluindo:

Uso correto do Sequelize com DataTypes e instância de conexão (sequelize.define)

Conexão com PostgreSQL, substituindo o MySQL usado no curso antigo

Uso de sequelize.sync({ alter: true }) para atualizar tabelas sem perder dados existentes

Organização modular do projeto, separando models, database e rotas

Integração com Handlebars para renderizar templates HTML simples e visualizar os dados no navegador

O objetivo do projeto é praticar Node.js, Sequelize e CRUD, consolidar conceitos de relacionamentos entre tabelas e mostrar que é possível atualizar conteúdos antigos do curso aplicando boas práticas modernas.
