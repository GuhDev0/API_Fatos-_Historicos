# API Fatos Históricos

Essa é uma API feita com Node.js e Express que retorna fatos históricos com base no ano informado (entre 1920 e 2020).

---

## Objetivo

O projeto foi criado como parte dos meus estudos em desenvolvimento back-end, com foco em prática de rotas, leitura de dados e estruturação de uma API simples.

---

## Tecnologias utilizadas

- Node.js  
- Express  
- Nodemon (ambiente de desenvolvimento)
---
## Instalação

1. Clone o repositório:  https://github.com/GuhDev0/API_Fatos-_Historicos.git
2.Instale as dependências: npm install
3.Inicie o servidor: npm run dev

## Como usar

Você pode acessar a rota principal da API com o método GET:http://localhost:3000/ANO
Exemplo:http://localhost:3000/1994
### Resposta:
json
{
  "ano": 1994,
  "fato": "O Real é criado como nova moeda brasileira."
}
## testar no postman
Se quiser testar, abra o Postman, selecione o método GET e informe a URL com o ano desejado. Exemplo:
http://localhost:3000/2000
