# bitcoin-price

Aplicação cliente contruída com AngularJS que serve como Frontend para a aplicação bitcoin-price-backend

## Live Sample

A aplicação está rodando em uma instância do AWS EC2 no seguinte endereço:

http://ec2-13-59-22-163.us-east-2.compute.amazonaws.com


## Compilar e rodar

É necessário estar com o NodeJS / nmm devidamente instalado e configurado.
Após clonar ou fazer download do repositorio, entrar na pasta do projeto e executar os seguintes comando:

npm install

sudo npm install bower -g

sudo npm install grunt -g

sudo npm install grunt-cli -g

bower install

bower install grunt

bower install grunt-cli

Utilize `grunt` para gerar o build e `grunt serve` para preview.

Após executar comando 'grunt serve', abra o navegador e acesse o endereço:

http://localhost:9000

## Observações

Para ambiente de desenvolvimento, foi configurado um proxy para contornar o problema de CORS, mas em ambiente de 
produção, deverá ser configurado um proxy no servidor ou configurar as aplicações para rodarem no mesmo contexto.

