## Requisitos

* Node.js 22 ou superior - Conferir a versao: node -v



## Como rodar o projeto baixado

Instalar as dependências indicadas pelo arquivo package.json.
```
npm install
```

Compilar os arquivos Typescript.
```
npx tsc
```

Compilar os arquivos Typescript. -watch: O Compilador fica monitorando os arquivos .ts do projeto. Sempre que um arquivo é alterado, o tsc recompila automaticamente as alterações para gerar os arquivos .js correspondentes.
```
npx tsc -watch
```




Executar o arquivo Javascript compilado
```
node dist/index.js
```


## Sequencia para criar o projeto

Criar o arquivo package.
```
npm init          /* criar arquivo informando dados do projeto */
npm init -y	  /* criar arquivo vazio */
```


Instalar o Typescript como uma dependência de desenvolvimento.
```
npm install --save-dev typescript
```


Criar o arquivo tsconfig.json, executar quando o typescript foi instalado somente no projeto
```
npx tsc --init
```


Compilar os arquivos Typescript.
```
npx tsc
```


Executar o arquivo Javascript compilado
```
node dist/index.js
```



Instalar o Express para gerenciar as requisições, rotas e URLs, entre outra funcionalidades.
```
npm i express
```

Instalar os pacotes para suporte ao TypeScript.
```
npm i --save-dev @types/express
npm i --save-dev @types/node
```

Instalar o compilador projeto com TypeScript e reiniciar o projeto quando o arquivo é modificado.
```
npm i --save-dev ts-node
```

Gerar o arquivo de configuração para o TypeScript.
```
npx tsc --init
```

Compilar o arquivo TypeScript.
```
npx tsc
```

npm install -g nodemon



Criar a Migration
npx typeorm migration:create src/migration/CreateSituationTable
