# Backend Lista de Contatos

O Backend Lista de Contatos é uma aplicação de servidor responsável por gerenciar as operações relacionadas aos contatos em uma lista de contatos. Esta aplicação utiliza as seguintes tecnologias e bibliotecas:

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
- [pg-format](https://www.npmjs.com/package/pg-format): Uma biblioteca para formatação de consultas SQL no PostgreSQL.
- [typeorm](https://www.npmjs.com/package/typeorm): Um ORM (Object-Relational Mapping) para Node.js e TypeScript.
- [zod](https://www.npmjs.com/package/zod): Uma biblioteca para validação de dados.

## Dependências de Desenvolvimento

As dependências de desenvolvimento incluem tipos de bibliotecas utilizadas para o desenvolvimento com TypeScript:

- [@types/bcryptjs](https://www.npmjs.com/package/@types/bcryptjs)
- [@types/cors](https://www.npmjs.com/package/@types/cors)
- [@types/express](https://www.npmjs.com/package/@types/express)
- [@types/jsonwebtoken](https://www.npmjs.com/package/@types/jsonwebtoken)
- [@types/pg](https://www.npmjs.com/package/@types/pg)
- [@types/pg-format](https://www.npmjs.com/package/@types/pg-format)
- [ts-node-dev](https://www.npmjs.com/package/ts-node-dev): Um pacote para reiniciar automaticamente o servidor ao detectar alterações no código TypeScript.
- [typescript](https://www.npmjs.com/package/typescript): O compilador TypeScript.

Certifique-se de ter o Node.js instalado antes de executar os comandos mencionados.

## Utilizando a Aplicação

A aplicação pode ser acessada de duas formas: através de uma URL de implantação (deploy) ou executando localmente em sua máquina.

### Acesso via URL de Implantação

Uma versão da aplicação foi implantada e está disponível em uma URL específica. Você pode acessar a aplicação através do seguinte link: [https://lista-de-contatos.onrender.com].

### Execução Local

## Instalações

Caso deseje executar a aplicação localmente em sua máquina, siga as instruções abaixo:

1. Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.
2. Clone este repositório.
3. Navegue até o diretório do projeto: `cd backend-contatos`.
4. Execute o comando `npm install` ou `npm i` para instalar as dependências.
5. Após a instalação das dependências, execute o comando `npm run dev` para iniciar o servidor.
6. O servidor será iniciado localmente e estará acessível através do seguinte endereço: `http://localhost:3000`.

Agora você pode escolher entre acessar a aplicação através da URL de implantação ou executá-la localmente em sua máquina, dependendo das suas necessidades e preferências.


### CRUD do Usuário

# POST - Criação de usuário

URL: `https://lista-de-contatos.onrender.com/users`

Exemplo de dados de entrada para criação do usuário:
{
	"username": "ana",
	"email": "ana@gmail.com",
	"telephone": "62911111111",
	"password": "12345"
}

Retorno de resposta:
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

URL: `https://lista-de-contatos.onrender.com/login`


Exemplo de entrada para se conectar:
{
	"email": "ana@gmail.com",
	"password": "12345"
}


Retorno de resposta caso de sucesso:
{
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFuYUBnbWFpbC5jb20iLCJpYXQiOjE2ODU1MzkzOTYsImV4cCI6MTY4NTYyNTc5Niwic3ViIjoiMTEifQ.5RwKqmgCqhHwHcW_WHMK5mOwcVrw6Ejp3CsmwX2Lk7g"
}


Retorno quando passado dados inválidos:
{
	"message": "Credenciais inválidas"
}


# GET - Lista de usuários

É necessário esta autenticado com token válido.

URL: `https://lista-de-contatos.onrender.com/users`

Retorno de resposta caso de sucesso:
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
{
	"message": "jwt must be provided"
}


# GET - Recuperar dados do usuário

É necessário esta autenticado com token válido.
Apenas o dono do id passado que pode ver seus dados.
No exemplo da url o 12 passado no último parâmetro é o id do usuário.

URL: `https://lista-de-contatos.onrender.com/users/12`

Retorno de resposta caso de sucesso:
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
{
	"message": "Permissão insuficiente"
}


Retorno de resposta caso não possua token:
{
	"message": "jwt must be provided"
}


# PATH - Atualizar dados do usuário

É necessário esta autenticado com token válido.
Apenas o dono do id passado que pode atualizar seus dados.
No exemplo da url o 12 passado no último parâmetro é o id do usuário.

URL: `https://lista-de-contatos.onrender.com/users/12`

Exemplo de dados de entrada para Atualização do usuário:
{
	"username": "zoe maria",
	"email": "zoemaria@gmail.com",
	"telephone": "62911111111"
}


Retorno de resposta caso de sucesso:
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
{
	"message": "Permissão insuficiente"
}


Retorno quando não possui usuário com o id passado:
{
	"message": "Usuário não encontrado"
}

Retorno de resposta caso não possua token:
{
	"message": "jwt must be provided"
}


# DELETE - Deletar usuário

É necessário esta autenticado com token válido.
Apenas o dono do id passado que pode deletar sua conta.
No exemplo da url o 12 passado no último parâmetro é o id do usuário.

URL: `https://lista-de-contatos.onrender.com/users/12`

Retorno de resposta caso de sucesso:
    204 No Content


Retorno sem premissão:
{
	"message": "Permissão insuficiente"
}


Retorno quando não possui usuário com o id passado:
{
	"message": "Usuário não encontrado"
}


Retorno de resposta caso não possua token:
{
	"message": "jwt must be provided"
}


### CRUD Contatos

# POST - Criação de contato

É necessário esta autenticado com token válido.

URL: `https://lista-de-contatos.onrender.com/contacts`

Exemplo de dados de entrada para criação do contato:
{
	"username": "caroline",
	"email": "caroline@gmail.com",
	"telephone": "62911111111"
}


Retorno de resposta caso de sucesso:
{
	"id": 9,
	"username": "caroline",
	"email": "caroline@gmail.com",
	"telephone": "62911111111",
	"createdAt": "2023-06-01",
	"updatedAt": "2023-06-01"
}


Retorno de resposta caso não possua token:
{
	"message": "jwt must be provided"
}


# GET - Listar dados do usuário e seus contatos

É necessário esta autenticado com token válido.
Apenas o dono do id passado que pode ver a listagem dos seus contatos.
No exemplo da url o 13 passado no último parâmetro é o id do usuário.

URL: `https://lista-de-contatos.onrender.com/contacts/users/13`


Retorno de resposta caso de sucesso:
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
{
	"message": "Permissão insuficiente"
}


Retorno quando não possui usuário com o id passado:
{
	"message": "Usuário não encontrado"
}


Retorno de resposta caso não possua token:
{
	"message": "jwt must be provided"
}


# PATH - Atualização de dados do contato

É necessário esta autenticado com token válido.
Apenas o dono do token passado que pode atualizar um dado de contato associado a sua conta.
No exemplo da url o 110 passado no último parâmetro é o id do contato a ser atualizado.

URL: `https://lista-de-contatos.onrender.com/contacts/110`

No exemplo a seguir foi atualizado apenas o nome do contato, mais pode ser auterado os demas dados.

Exemplo de dados de entrada para Atualização do usuário:
{
	"username": "Jenny Rayane"
}


Retorno de resposta caso de sucesso:
{
	"id": 110,
	"username": "Jenny Rayane",
	"email": "jenny@gmail.com",
	"telephone": "62911111111",
	"createdAt": "2023-05-31",
	"updatedAt": "2023-05-31"
}


Retorno sem premissão:
{
	"message": "Permissão insuficiente"
}


Retorno quando não possui contato com o id passado:
{
	"message": "Contato não encontrado"
}


Retorno de resposta caso não possua token:
{
	"message": "jwt must be provided"
}


# DELETE - Deletar contato

É necessário esta autenticado com token válido.
Apenas o dono do token passado que pode atualizar um dado de contato associado a sua conta.
No exemplo da url o 110 passado no último parâmetro é o id do contato a ser deletado.

URL: `https://lista-de-contatos.onrender.com/contacts/110`

Retorno de resposta caso de sucesso:
    204 No Content


Retorno sem premissão:
{
	"message": "Permissão insuficiente"
}


Retorno quando não possui contato com o id passado:
{
	"message": "Contato não encontrado"
}


Retorno de resposta caso não possua token:
{
	"message": "jwt must be provided"
}