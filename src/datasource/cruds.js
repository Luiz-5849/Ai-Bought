const conexao = require('./conexao.js')

class dataBase {
  constructor (conexao) {
    this.conexao = conexao;
    this.conexao.connect(e => {
      e ? console.log(e) : console.log("Conectado com sucesso");
    })
  }

  insertCarrinho (productList, cod_cliente) {
    let sql = `insert into carrinho_produtos values`
    for (let i = 0 ; i < productList.length ; i++) {
      if(i == (productList.length - 1)) {
        sql += `(${productList[i].id}, '${productList[i].nome}', ${productList[i].preco}, '${productList[i].categoria}')`;
      }else{
        sql += `(${productList[i].id}, '${productList[i].nome}', ${productList[i].preco}, '${productList[i].categoria}'),`;
      }
    }
    sql += `inner join carrinho on carrinho.cod_carrinho = carrinho_produtos.cod_carrinho where carrinho.cod_cliente=${cod_cliente}`;

    this.conexao.query(sql, (e, result) => {
      if (e) {
        console.log(e)
      }else{
        console.log(result)
      }
    })
  }

}

