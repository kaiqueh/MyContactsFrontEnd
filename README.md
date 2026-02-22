# 📒 MyContacts Frontend

> Aplicação frontend de gerenciamento de contatos construída com React + Vite, com foco em componentização, boas práticas e performance.

---

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Arquitetura do Projeto](#arquitetura-do-projeto)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Funcionalidades](#funcionalidades)
- [Boas Práticas Adotadas](#boas-praticas-adotadas)
- [Performance](#performance)
- [Como Rodar o Projeto](#como-rodar-o-projeto)
- [Scripts Disponíveis](#scripts-disponíveis)

---

## 💡 Sobre o Projeto

O **MyContacts** é uma aplicação SPA (Single Page Application) para gerenciamento de contatos pessoais. Permite criar, editar, visualizar e excluir contatos, com suporte a informações como nome, e-mail, telefone e rede social favorita.

---

## 🚀 Tecnologias Utilizadas

| Tecnologia                                          | Versão  | Finalidade                    |
| --------------------------------------------------- | ------- | ----------------------------- |
| [React](https://reactjs.org/)                       | 17.0.2  | Biblioteca principal de UI    |
| [Vite](https://vitejs.dev/)                         | ^7.2.4  | Bundler e dev server          |
| [React Router DOM](https://reactrouter.com/)        | 5.3.0   | Gerenciamento de rotas SPA    |
| [Styled Components](https://styled-components.com/) | ^6.3.8  | Estilização CSS-in-JS         |
| [ESLint](https://eslint.org/)                       | ^9.39.2 | Linting e qualidade de código |

---

## 🏗️ Arquitetura do Projeto

O projeto segue uma arquitetura baseada em **separação de responsabilidades**, dividindo claramente:

### Camadas da Aplicação

```
Páginas (Pages)
    └── Compõem componentes reutilizáveis
          └── Utilizam utilitários e assets
```

### Padrão de Componentes

Cada componente segue o padrão de **co-localização de estilos**:

```
ComponentName/
  ├── ComponentName.jsx  → Lógica e estrutura JSX
  └── styled.jsx         → Estilos com Styled Components
```

Esse padrão garante que cada componente seja **auto-contido**, facilitando manutenção e reuso.

### Theming Global

A aplicação utiliza um **sistema de temas centralizado** via `ThemeProvider` do Styled Components, com todas as cores definidas em um único arquivo de tema. Qualquer componente da árvore pode acessar as cores via `props.theme`, garantindo consistência visual em toda a aplicação.

```jsx
// Exemplo de uso do tema em qualquer componente estilizado
color: ${props => props.theme.colors.primary.main};
```

### Portal Pattern (React Portals)

Componentes que precisam "escapar" do fluxo normal do DOM, como **Modal** e **Loader**, utilizam `ReactDOM.createPortal`, renderizando diretamente em elementos raiz dedicados no `index.html`:

```html
<div id="root"></div>
<div id="modal-root"></div>
<div id="loader-root"></div>
```

Isso evita problemas de `z-index` e `overflow: hidden` em elementos pai.

---

## 📁 Estrutura de Pastas

```
src/
├── assets/
│   ├── images/
│   │   └── icons/          # Ícones SVG da aplicação
│   └── styles/
│       ├── Global.jsx       # Estilos globais (reset CSS, fontes)
│       └── themes/
│           └── default.jsx  # Design tokens (cores, etc.)
│
├── components/
│   ├── App/                 # Componente raiz (providers, layout)
│   ├── ContactForm/         # Formulário reutilizável de contato
│   ├── FormGroup/           # Wrapper de campo com suporte a erros
│   ├── Header/              # Cabeçalho global da aplicação
│   ├── Input/               # Componentes de Input e Button estilizados
│   ├── Loader/              # Overlay de carregamento (via Portal)
│   ├── modal/               # Modal de confirmação (via Portal)
│   └── Pageheader/          # Cabeçalho de página com botão "Voltar"
│
├── pages/
│   ├── Home/                # Listagem de contatos
│   ├── NewContact/          # Página de criação de contato
│   └── EditContact/         # Página de edição de contato
│
├── utils/
│   └── IsEmailValid.jsx     # Validação de e-mail via Regex
│
├── Routes.jsx               # Definição centralizada de rotas
└── main.jsx                 # Entry point da aplicação
```

---

## ✅ Funcionalidades

- [x] Listagem de contatos
- [x] Criação de novo contato
- [x] Edição de contato existente
- [x] Validação de formulário em tempo real
- [x] Validação de e-mail com Regex
- [x] Feedback visual de erros por campo
- [x] Modal de confirmação de exclusão
- [x] Loader/Overlay de carregamento
- [x] Navegação entre páginas com React Router
- [x] Layout responsivo

---

## 🏆 Boas Práticas Adotadas

### 1. Componentização Inteligente

Componentes como [`FormGroup`](src/components/FormGroup/formGroup.jsx) e [`Input`](src/components/Input/input.jsx) são genéricos e reutilizáveis, aceitando props para customização de comportamento e aparência.

### 2. Separação de Concerns

- **Lógica** fica nos arquivos `.jsx` dos componentes
- **Estilos** ficam nos arquivos `styled.jsx` co-localizados
- **Utilidades puras** ficam em `src/utils/`
- **Rotas** são centralizadas em [`Routes.jsx`](src/Routes.jsx)

### 3. Design Tokens com Tema Centralizado

Todas as cores, espaçamentos e variações visuais são definidos em [`src/assets/styles/themes/default.jsx`](src/assets/styles/themes/default.jsx). Isso facilita:

- Troca de tema (dark mode, white-label)
- Consistência visual
- Manutenção centralizada

```js
// Exemplo do design token
colors: {
    primary: {
        lighter: '#E0E3FF',
        light: '#6674F4',
        main: '#5061FC',
        dark: '#3346F0'
    }
}
```

### 4. Validação de Formulário com Estado Granular

O [`ContactForm`](src/components/ContactForm/ContactForm.jsx) mantém um array de erros, permitindo múltiplos erros simultâneos sem sobrescrever uns aos outros. A função `GetErrorMenssagemByFildName` recupera o erro específico por campo.

### 5. Estilização com Props Dinâmicas

Componentes estilizados como [`Button`](src/components/Input/Button.jsx) recebem props para variações visuais, eliminando a necessidade de múltiplos componentes para variantes:

```jsx
// Botão padrão
<Button>Salvar</Button>

// Botão de perigo (vermelho)
<Button danger>Deletar</Button>
```

### 6. ESLint Configurado

O projeto possui [`eslint.config.js`](eslint.config.js) com regras específicas para React, garantindo código consistente e sem anti-patterns.

### 7. EditorConfig

O arquivo [`.editorconfig`](.editorconfig) padroniza formatação entre diferentes editores e desenvolvedores (indentação, charset, line endings).

### 8. CSS-in-JS com Transições

Todos os elementos interativos possuem transições suaves definidas via Styled Components:

```css
transition: all 0.2s ease-in-out;
```

---

## ⚡ Performance

### Vite como Bundler

O uso do [Vite](https://vitejs.dev/) proporciona:

- **HMR (Hot Module Replacement)** ultrarrápido em desenvolvimento
- **Build otimizado** com Rollup para produção
- **Carregamento lazy** de módulos nativamente

### SVGs como Assets Estáticos

Ícones são importados diretamente como módulos SVG, sendo otimizados pelo Vite no build e não adicionando overhead de requests HTTP extras.

### React Portals para UI Flutuante

O uso de Portals para [`Loader`](src/components/Loader/Loader.jsx) e [`Modal`](src/components/modal/modal.jsx) evita re-renders desnecessários na árvore principal de componentes.

### Styled Components com CSS-in-JS

Os estilos são gerados apenas para os componentes que estão sendo renderizados, evitando CSS não utilizado em produção.

---

## ▶️ Como Rodar o Projeto

### Pré-requisitos

- **Node.js** >= versão LTS recomendada
- **Yarn** >= 1.22.22 _(obrigatório — o projeto usa yarn como package manager)_

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/mycontacts-frontend.git

# Entre na pasta
cd mycontacts-frontend

# Instale as dependências
yarn install
```

### Desenvolvimento

```bash
yarn dev
```

Acesse: `http://localhost:5173`

### Build para Produção

```bash
yarn build
```

### Preview do Build

```bash
yarn preview
```

---

## 📜 Scripts Disponíveis

| Script          | Comando        | Descrição                                    |
| --------------- | -------------- | -------------------------------------------- |
| Desenvolvimento | `yarn dev`     | Inicia o servidor de desenvolvimento com HMR |
| Build           | `yarn build`   | Gera o bundle otimizado para produção        |
| Preview         | `yarn preview` | Visualiza o build de produção localmente     |
| Lint            | `yarn lint`    | Analisa o código com ESLint                  |

---

## 📌 Observações

> ⚠️ Este projeto usa **Yarn** como gerenciador de pacotes. O uso de `npm` é bloqueado via `.npmrc` com `engine-strict=true`.

---

_Feito com ❤️ usando React + Vite_
