# bitcoin-price

Aplicação cliente contruída com AngularJS que serve como Frontend para a aplicação bitcoin-price-backend

## Build & deploy

É necessário estar com o NodeJS / nmm devidamente instalado e configurado.
Após clonar ou fazer download do repositorio, entrar na pasta do projeto e executar os seguintes comando:

npm install

npm install grunt

npm install grunt-cli

bower install

Utilize `grunt` para gerar o build e `grunt serve` para preview.

## Observações

Para ambiente de desenvolvimento, foi configurado um proxy para contornar o problema de CORS, mas em ambiente de 
produção, deverá ser configurado um proxy no servidor ou configurar as aplicações para rodarem no mesmo contexto.

