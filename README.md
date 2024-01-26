# Testes Automatizados com Cypress

Este repositório contém cenários de teste automatizados utilizando o Cypress para simular interações com um aplicativo web. Os testes incluem cenários de login, fornecendo uma cobertura básica das funcionalidades principais do aplicativo.

## Tecnologias Utilizadas

- [Cypress](https://cypress.io/): Uma ferramenta de automação de testes para navegadores e APIs.
- [Automation Practice](https://automationpratice.com.br/): Site usado para realizar os testes.
- [FakerJS](https://fakerjs.dev/): Biblioteca JavaScript que permite gerar dados falsos, simulando dados realistas.

## Estrutura do Projeto

- `e2e/`
  - `Login.cy.js`: Cenários de testes relacionados ao processo de login.
    
- `pages/`
  - `home_page.js`: Page Objects da pagina inicial.
  - `login_page.js`: Page Objects da pagina de login.

  
## Configuração do Ambiente

Certifique-se de ter o Node.js e o npm instalados. Em seguida, instale as dependências do projeto:
```bash
npm install
npm install cypress
npm install @faker-js/faker --save-dev
```
## Executando os testes

Para executar todos os testes, utilize o seguinte comando:
```bash
npx cypress run
```

# Contato
https://www.linkedin.com/in/rennanfeliciano/
