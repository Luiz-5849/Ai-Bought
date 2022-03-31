Utilização do projeto:
1 - Após a instalação, rodar no terminal o comando 'npm install' para a instalação de todos os modulos necessários para o projeto;
2 - Após a instalação dos modulos, rodar o comando 'npm start' no terminal.

Construção do projeto
1 - Nesse projeto, muitas coisas eu estava fazendo pela primeira vez, então comecei estudando como eu faria para consumir os dados das api's disponibilizadas
2 - Construí a pagina principal do site, o Home
3 - Para a estilização da pagina Home, bem como das demais páginas, resolvi utilizar o scss e importar o arquivo de estilo direto no escopo global do projeto. Eu utilizei a funcionalidade do sass de compilar todo codigo escrito por mim de scss em css, como pré-configurado no package.json no scripts.wsass. Portanto, todo o codigo de estilização escrito por mim, encontra-se na pasta './src/assets/style/scss/'.
4 - Para a construção das demais paginas, eu tentei construir uma api onde estariam disponibilizados e organizados os dados das api's dos provedores. Para isso eu iria utilizar a lib express, mas toda vez que eu importava essa lib, varios erros relacionados à "webpack" e a "polyfills' eram gerados, e eu não consegui solucioná-los. Portanto optei por criar uma função no escopo global do projeto, que consumia os dados das api's dos provedores e os organizava em um novo array
5 - Construi a pagina que carrega um único produto
6 - Construi a pagina que carrega todos os produtos de sua determinada categoria

Banco de dados
1 - Apenas comecei a etapa da construção do banco de dados e a utilização dele pelo projeto, como pode ser visto nos arquivos './bd.db' e './src/datasource/cruds.js', mas infelizmente não pude finalizá-los devido ao aproximamento do prazo final de entrega do projeto

Comentários finais
1 - Agradeço a oportunidade de poder ter participado desse processo. Gostaria de ter tido mais tempo para que eu pudesse entregar tudo o que foi pedido. Percebo que ainda tenho muito o que aprender, e que esse teste me serviu de muito aprendizado. Espero que gostem daquilo que eu fiz. 