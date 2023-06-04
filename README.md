# Backend Lista de Contatos

Lista de Contatos é uma aplicação de servidor responsável por gerenciar as operações relacionadas aos contatos em uma lista.

## Utilizando a Aplicação

A aplicação pode ser acessada de duas formas: através de uma URL de implantação (deploy) ou executando localmente em sua máquina.

### Acesso via URL de Implantação

Uma versão da aplicação foi implantada e está disponível em uma URL específica. Você pode acessar a aplicação através do seguinte link: [https://lista-de-contatos.onrender.com].

### Execução Local

## Instalações

Caso deseje executar a aplicação localmente em sua máquina, siga as instruções abaixo:

1. Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.
2. Clone este repositório.
3. Execute o comando `npm install` ou `npm i` para instalar as dependências.
4. Crie a base de dados no PostgreSQL, e crie um arquivo ".env" sequindo a estrutura do ".env.example."
5. Execute o comando `npm run typeorm migration:run -- -d ./src/data-source` para execultar as migrações e gerenciar o esquema do banco de dados.
6. Após a instalação das dependências, execute o comando `npm run dev` para iniciar o servidor.
7. O servidor será iniciado localmente e estará acessível através do seguinte endereço: `http://localhost:3000`.

Agora você pode escolher entre acessar a aplicação através da URL de implantação ou executá-la localmente em sua máquina, dependendo das suas necessidades e preferências.


Esta aplicação utiliza as seguintes tecnologias e bibliotecas:

- [Node.js](https://nodejs.org/): Ambiente de execução para JavaScript.
- [TypeScript](https://www.typescriptlang.org/): Uma linguagem de programação que adiciona tipagem estática ao JavaScript.

## Scripts

No diretório do projeto, você pode executar os seguintes comandos:

- `npm run build`: Compila o código TypeScript para JavaScript no diretório "dist".
- `npm start`: Inicia o servidor, executando o arquivo "dist/server.js".
- `npm run dev`: Inicia o servidor em modo de desenvolvimento, utilizando o pacote "ts-node-dev" para reiniciar o servidor automaticamente ao detectar alterações no código.
- `npm run typeorm`: Comando personalizado para executar operações relacionadas ao TypeORM.

## Dependências

As principais dependências utilizadas no projeto incluem:

- [bcryptjs](https://www.npmjs.com/package/bcryptjs): Uma biblioteca para criptografar senhas.
- [cors](https://www.npmjs.com/package/cors): Um middleware para habilitar o acesso a recursos de diferentes origens (Cross-Origin Resource Sharing) no Express.
- [dotenv](https://www.npmjs.com/package/dotenv): Uma biblioteca para carregar variáveis de ambiente a partir de um arquivo ".env".
- [express](https://www.npmjs.com/package/express): Um framework para construir aplicativos da web com Node.js.
- [express-async-errors](https://www.npmjs.com/package/express-async-errors): Um pacote para tratamento de erros assíncronos em rotas do Express.
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken): Uma biblioteca para gerar e verificar tokens de autenticação.
- [pg](https://www.npmjs.com/package/pg): Um cliente PostgreSQL para Node.js.
- [typeorm](https://www.npmjs.com/package/typeorm): Um ORM (Object-Relational Mapping) para Node.js e TypeScript.
- [zod](https://www.npmjs.com/package/zod): Uma biblioteca para validação de dados.

## Dependências de Desenvolvimento

As dependências de desenvolvimento incluem tipos de bibliotecas utilizadas para o desenvolvimento com TypeScript:

- [@types/bcryptjs](https://www.npmjs.com/package/@types/bcryptjs)
- [@types/cors](https://www.npmjs.com/package/@types/cors)
- [@types/express](https://www.npmjs.com/package/@types/express)
- [@types/jsonwebtoken](https://www.npmjs.com/package/@types/jsonwebtoken)
- [@types/pg](https://www.npmjs.com/package/@types/pg)
- [ts-node-dev](https://www.npmjs.com/package/ts-node-dev): Um pacote para reiniciar automaticamente o servidor ao detectar alterações no código TypeScript.
- [typescript](https://www.npmjs.com/package/typescript): O compilador TypeScript.


### CRUD do Usuário

# POST - Criação de usuário

Execução Local URL: `http://localhost:3000/users`
URL Deploy : `https://lista-de-contatos.onrender.com/users`

Exemplo de dados de entrada para criação do usuário:
{
	"username": "ana",
	"email": "ana@gmail.com",
	"telephone": "62911111111",
	"password": "12345"
}

Retorno de resposta:
status: 200
{
	"username": "ana",
	"email": "ana@gmail.com",
	"telephone": "62911111111",
	"id": 11,
	"createdAt": "2023-05-31",
	"updatedAt": "2023-05-31",
	"deletedAt": null
}

# POST Login - Conecte-se
Execução Local URL: `http://localhost:3000/login`
URL Deploy: `https://lista-de-contatos.onrender.com/login`


Exemplo de entrada para se conectar:
{
	"email": "ana@gmail.com",
	"password": "12345"
}


Retorno de resposta caso de sucesso:
status: 200
{
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFuYUBnbWFpbC5jb20iLCJpYXQiOjE2ODU1MzkzOTYsImV4cCI6MTY4NTYyNTc5Niwic3ViIjoiMTEifQ.5RwKqmgCqhHwHcW_WHMK5mOwcVrw6Ejp3CsmwX2Lk7g"
}


Retorno quando passado dados inválidos:
status: 401
{
	"message": "Credenciais inválidas"
}


# GET - Lista de usuários

Observações:
1. É necessário esta autenticado com token válido.

Execução Local URL: `http://localhost:3000/users`
URL Deploy: `https://lista-de-contatos.onrender.com/users`

Retorno de resposta caso de sucesso:
status:200
[  
    {
		"username": "eva",
		"email": "eva@gmail.com",
		"telephone": "62911111111",
		"id": 2,
		"createdAt": "2023-05-24",
		"updatedAt": "2023-05-24",
		"deletedAt": null
	},
	{
		"username": "jessica",
		"email": "jessica@gmail.com",
		"telephone": "62911111111",
		"id": 3,
		"createdAt": "2023-05-24",
		"updatedAt": "2023-05-24",
		"deletedAt": null
	},
]


Retorno de resposta caso não possua token:
status: 401
{
	"message": "Token inválido"
}


# GET - Recuperar dados do usuário

Observações:
1. É necessário esta autenticado com token válido.
2. Apenas o dono do id passado que tem acesso aos seus dados.
3. No exemplo da url o 12 passado no último parâmetro é o id do usuário.

Execução Local URL: `http://localhost:3000/users/12`
URL Deploy: `https://lista-de-contatos.onrender.com/users/12`

Retorno de resposta caso de sucesso:
status: 200
{
	"username": "zoe",
	"email": "zoe@gmail.com",
	"telephone": "62911111111",
	"id": 12,
	"createdAt": "2023-05-31",
	"updatedAt": "2023-05-31",
	"deletedAt": null
}


Retorno sem premissão:
status: 403
{
	"message": "Permissão insuficiente"
}


Retorno de resposta caso não possua token:
status: 401
{
	"message": "Token inválido"
}


# PATH - Atualizar dados do usuário

Observações:
1. É necessário esta autenticado com token válido.
2. Apenas o dono do id passado que tem acesso para atualizar seus dados.
3. No exemplo da url o 12 passado no último parâmetro é o id do usuário.

Execução Local URL: `http://localhost:3000/users/12`
URL Deploy: `https://lista-de-contatos.onrender.com/users/12`

Exemplo de dados de entrada para Atualização do usuário:
{
	"username": "zoe maria",
	"email": "zoemaria@gmail.com",
	"telephone": "62911111111"
}


Retorno de resposta caso de sucesso:
status: 200
{
	"username": "zoe maria",
	"email": "zoemaria@gmail.com",
	"telephone": "62911111111",
	"id": 12,
	"createdAt": "2023-05-31",
	"updatedAt": "2023-05-31",
	"deletedAt": null
}


Retorno sem premissão:
status:403
{
	"message": "Permissão insuficiente"
}


Retorno quando não possui usuário com o id passado:
status: 404
{
	"message": "Usuário não encontrado"
}

Retorno de resposta caso não possua token:
{
	"message": "Token inválido"
}


# DELETE - Deletar usuário

Observações:
1. É necessário esta autenticado com token válido.
2. Apenas o dono do id passado que tem acesso para deletar sua conta.
3. No exemplo da url o 12 passado no último parâmetro é o id do usuário.

Execução Local URL: `http://localhost:3000/users/12`
URL Deploy: `https://lista-de-contatos.onrender.com/users/12`

Retorno de resposta caso de sucesso:
status: 204 


Retorno sem premissão:
status:403
{
	"message": "Permissão insuficiente"
}


Retorno quando não possui usuário com o id passado:
status: 404
{
	"message": "Usuário não encontrado"
}


Retorno de resposta caso não possua token:
status: 401
{
	"message": "Token inválido"
}


### CRUD Contatos

# POST - Criação de contato

Observações:
1. É necessário esta autenticado com token válido.

Execução Local URL: `http://localhost:3000/contacts`
URL Deploy: `https://lista-de-contatos.onrender.com/contacts`

Exemplo de dados de entrada para criação do contato:
{
	"username": "caroline",
	"email": "caroline@gmail.com",
	"telephone": "62911111111"
}


Retorno de resposta caso de sucesso:
status: 201
{
	"id": 9,
	"username": "caroline",
	"email": "caroline@gmail.com",
	"telephone": "62911111111",
	"createdAt": "2023-06-01",
	"updatedAt": "2023-06-01"
}


Retorno de resposta caso não possua token:
status: 401
{
	"message": "Token inválido"
}


# GET - Listar dados do usuário e seus contatos

Observações:
1. É necessário esta autenticado com token válido.
2. Apenas o dono do id passado que tem acesso a listagem dos seus contatos.
3. No exemplo da url o 13 passado no último parâmetro é o id do usuário.

Execução Local URL: `http://localhost:3000/contacts/users/13`
URL Deploy: `https://lista-de-contatos.onrender.com/contacts/users/13`


Retorno de resposta caso de sucesso:
status: 200
{
	"id": 13,
	"username": "zoe",
	"email": "zoe@gmail.com",
	"telephone": "62911111111",
	"contacts": [
		{
			"id": 110,
			"username": "Jenny",
			"email": "jenny@gmail.com",
			"telephone": "62911111111",
			"createdAt": "2023-05-31",
			"updatedAt": "2023-05-31"
		},
		{
			"id": 111,
			"username": "maria",
			"email": "maria@gmail.com",
			"telephone": "62911111132",
			"createdAt": "2023-05-31",
			"updatedAt": "2023-05-31"
		}
	]
}


Retorno sem premissão:
status: 403
{
	"message": "Permissão insuficiente"
}


Retorno quando não possui usuário com o id passado:
status: 404
{
	"message": "Usuário não encontrado"
}


Retorno de resposta caso não possua token:
status:401
{
	"message": "Token inválido"
}


# PATH - Atualização de dados do contato

Observações:
1. É necessário esta autenticado com token válido.
2. Apenas o dono do token passado possui acesso para atualizar um dado de contato associado a sua conta.
3. No exemplo da url o 110 passado no último parâmetro é o id do contato a ser atualizado.
4. No exemplo a seguir foi atualizado apenas o nome do contato, mais pode ser alterado os demas dados.

Execução Local URL: `http://localhost:3000/contacts/110`
URL Deploy: `https://lista-de-contatos.onrender.com/contacts/110`

Exemplo de dados de entrada para Atualização do usuário:
{
	"username": "Jenny Rayane"
}


Retorno de resposta caso de sucesso:
status: 200
{
	"id": 110,
	"username": "Jenny Rayane",
	"email": "jenny@gmail.com",
	"telephone": "62911111111",
	"createdAt": "2023-05-31",
	"updatedAt": "2023-05-31"
}


Retorno sem premissão:
status: 403
{
	"message": "Permissão insuficiente"
}


Retorno quando não possui contato com o id passado:
status: 404
{
	"message": "Contato não encontrado"
}


Retorno de resposta caso não possua token:
status: 401
{
	"message": "Token inválido"
}


# DELETE - Deletar contato

Observações:
1. É necessário esta autenticado com token válido.
2. Apenas o dono do token passado possui acesso para deletar um dado de contato associado a sua conta.
3. No exemplo da url o 110 passado no último parâmetro é o id do contato a ser deletado.

Execução Local URL: `http://localhost:3000/contacts/110`
URL Deploy: `https://lista-de-contatos.onrender.com/contacts/110`

Retorno de resposta caso de sucesso:
status: 204

Retorno sem premissão:
status: 403
{
	"message": "Permissão insuficiente"
}


Retorno quando não possui contato com o id passado:
status: 404
{
	"message": "Contato não encontrado"
}


Retorno de resposta caso não possua token:
status: 401
{
	"message": "Token inválido"
}