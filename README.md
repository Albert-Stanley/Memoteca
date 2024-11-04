# Memoteca

Memoteca é um aplicativo organizador de pensamentos e frases que permite cadastrar, listar, editar e deletar pensamentos, incluindo informações como conteúdo e autoria.

## 🔨 Funcionalidades do projeto

`Cadastro de pensamentos`: Permite adicionar novos pensamentos à lista, inserindo informações como conteúdo e autoria.

`Listagem de pensamentos`: Exibe os pensamentos cadastrados, permitindo visualizar o texto e a autoria.

`Edição de pensamentos`: Permite editar pensamentos existentes, atualizando as informações conforme necessário.

`Exclusão de pensamentos`: Permite remover pensamentos da lista.

## ✔️ Técnicas e tecnologias utilizadas

`JavaScript`: Linguagem de programação utilizada para desenvolver a lógica do aplicativo.

`Fetch API`: Utilizada para realizar requisições HTTP para comunicação com o servidor.

`Axios`: Biblioteca usada para facilitar e simplificar as requisições HTTP.

`Node.js`: Plataforma utilizada para executar o ambiente de desenvolvimento.

`JSON Server`: Utilizado para simular um backend e facilitar o desenvolvimento e teste das operações CRUD.

`CSS`: Utilizado para estilização da interface do aplicativo.

## 🚀 Como Executar o Projeto Localmente

> Siga os passos abaixo para rodar a aplicação em sua máquina local.

1. **Clone o repositório**:

# 🚀 Como Executar o Projeto Localmente

## Requisitos

- **Git** - Para clonar o repositório.
- **Node.js** - Para executar o projeto localmente.
- **JSON Server** - Para simular uma API REST.
> Siga os passos abaixo para rodar a aplicação em sua máquina local.

# 1. Clone o repositório
  ```bash
git clone https://github.com/seuusuario/memoteca.git
  ````
# 2. Navegue até a pasta do projeto
  ```bash
  cd memoteca
  ````
# 3. Instale as dependências
  ```bash
  npm install
  ````
# 4. Inicie o JSON Server
  ```bash
  npx json-server --watch db.json --port 3000
  ````
# 5. Abra o arquivo index.html no seu navegador para visualizar a aplicação
