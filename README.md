## Lista de Contatos

Esta API foi desenvolvida com o objetivo de ajudar os usuários a salvar seus contatos, sendo possivel fazer a criação, listagem, atualização e deleção do mesmo.

## Tecnologias utilizada na aplicação
Foi utilizado bibliotecas de erros, validações e de segurança para aplicação.

Comandos:
npm install --save-dev @types/bcryptjs @types/jsonwebtoken
npm install bcryptjs jsonwebtoken
npm install dotenv -
npm install typescript ts-node-dev @types/express --save-dev
npm i -S zod
npm install express-async-errors
npm i pg
npm i -D @types/pg
npm i -S typeorm reflect-metadata dotenv pg


## Instalações

Certifique-se de ter o Node.js instalado em seu computador. Você pode baixá-lo em https://nodejs.org.

Execute o comando `npm install` ou `npm i` para instalar todas as dependências listadas no arquivo package.json. Isso instalará as dependências de produção e desenvolvimento.

Após a execução do comando `npm install`, todas as dependências listadas no arquivo package.json serão baixadas e instaladas em um diretório chamado node_modules.

Certifique-se de ter uma conexão com a internet durante o processo de instalação, pois o npm precisará baixar os pacotes das dependências dos repositórios do npm.

Para executando o servidor
`npm run dev`


### CRUD do Usuário

# POST - Criação de usuário

Url:https://lista-de-contatos.onrender.com/users

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

Url: https://lista-de-contatos.onrender.com/login


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

Url: https://lista-de-contatos.onrender.com/users

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

Url: https://lista-de-contatos.onrender.com/users/12

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

Url:https://lista-de-contatos.onrender.com/users/12

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

Url: https://lista-de-contatos.onrender.com/users/12

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

Url: https://lista-de-contatos.onrender.com/contacts

Exemplo de dados de entrada para criação do contato:
{
	"username": "Jenny",
	"email": "jenny@gmail.com",
	"telephone": "62911111111"
}


Retorno de resposta caso de sucesso:
{
	"username": "Jenny",
	"email": "jenny@gmail.com",
	"telephone": "62911111111"
}


Retorno de resposta caso não possua token:
{
	"message": "jwt must be provided"
}


# GET - Listar dados do usuário e seus contatos

É necessário esta autenticado com token válido.
Apenas o dono do id passado que pode ver a listagem dos seus contatos.
No exemplo da url o 13 passado no último parâmetro é o id do usuário.

Url:https://lista-de-contatos.onrender.com/contacts/users/13


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

Url: https://lista-de-contatos.onrender.com/contacts/110

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

Url: https://lista-de-contatos.onrender.com/contacts/110

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