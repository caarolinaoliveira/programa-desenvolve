# Boti Students

Link de acesso ao projeto na Vercel: [Programa Desenvolve](https://programa-desenvolve-v1.vercel.app/)

**Boti Students** é um projeto de e-commerce simulado de produtos cosméticos, desenvolvido como parte do [Programa Desenvolve](https://programa-desenvolve-v1.vercel.app/), uma iniciativa do Grupo Boticário em parceria com a Alura. O objetivo do projeto é aplicar na prática os conhecimentos adquiridos durante o programa, criando uma aplicação completa que vai desde o front-end até a integração com um banco de dados.

## 🎨 Tecnologias Utilizadas

Este projeto foi construído utilizando as seguintes tecnologias:

- **HTML**: Estrutura e marcação das páginas.
- **CSS**: Estilização e responsividade das interfaces.
- **JavaScript**: Funcionalidades interativas e dinâmicas.
- **MongoDB**: Armazenamento de dados de usuários e produtos.
- **Vercel**: Hospedagem e deployment contínuo.
- **Git & GitHub**: Controle de versão e colaboração, utilizando Milestones e Issues para organização.
- **Prettier**: Formatação consistente do código.
- **Bootstrap**: Framework para estilização e componentes prontos.
- **Figma**: Desenvolvimento do Design System e prototipagem.

## 🌐 Estrutura do Projeto

O projeto é dividido em várias funcionalidades essenciais para o funcionamento de um e-commerce:

- **Página de Login**:

  - Formulários de autenticação de usuários.
  - Validação de dados com mensagens de erro em tempo real.

- **Página do E-commerce**:
  - Exibição de produtos cosméticos com descrições e preços.
  - Funções JavaScript para manipulação de carrinho, favoritos, e interações de usuário.

## 🔌 API Endpoints para Testes no Postman

As seguintes rotas estão disponíveis para testes no Postman:

- **GET**: Obter todos os produtos.

  - `https://programa-desenvolve.vercel.app/produtos`

- **GET** por ID: Obter um produto específico pelo ID.

  - `https://programa-desenvolve.vercel.app/produtos/id`

- **POST**: Adicionar um novo produto.

  - `https://programa-desenvolve.vercel.app/produtos/`

- **PUT**: Atualizar um produto existente pelo ID.

  - `https://programa-desenvolve.vercel.app/produtos/id`

- **DELETE**: Remover um produto pelo ID.
  - `https://programa-desenvolve.vercel.app/produtos/id`

## 🛠️ Design System

O design do projeto foi desenvolvido no Figma, utilizando um Design System que padroniza cores, tipografia, e componentes para garantir uma experiência de usuário consistente.

- **Link para o Figma**: [Acesse o Design System no Figma](https://www.figma.com/design/xBTpwcze8reZst96S5SLeQ/Boti?node-id=0-1&t=uzLByjdK2kgafDVI-0)

## 🚀 Como Executar o Projeto

Para executar o projeto localmente, siga os passos abaixo:

1. **Clone o Repositório**

   - Execute o comando para clonar o repositório:
     ```bash
     git clone https://github.com/seu-usuario/boti-students.git
     ```

2. **Instale as Dependências**

   - Navegue até a pasta do projeto e instale as dependências com:
     ```bash
     npm install
     ```

3. **Configure as Variáveis de Ambiente**

   - Crie um arquivo chamado `.env` na raiz do projeto.
   - Adicione as variáveis de ambiente necessárias para a conexão com o MongoDB e outras configurações.

4. **Inicie o Projeto**

   - Execute o comando para iniciar o servidor:
     ```bash
     npm start
     ```

5. **Acesse o Projeto no Navegador**
   - Abra o navegador e vá para [http://localhost:3000](http://localhost:3000) para ver o projeto em execução.
