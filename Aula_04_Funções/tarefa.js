/*Tarefa
Na compra em um minimercado, entrou com 100 reais, ele tem q comprar 1 saco de arroz, 1 saco de açúcar, 
1 saco de feijão, 1 saco de sal. Ver se o dinheiro deu, dar o troco, senão, troco é negativo, retirar produtos do carrinho. 
Criar variáveis pra cada produto e para o dinheiro na carteira. 
*/
 function mercado() {
    dinheiro = 100;
    arroz = 28.00;
    feijao = 10.00;
    acucar = 5.00;
    sal = 3.00;
    somaCompra = (arroz + feijao + acucar + sal);
    troco = (dinheiro - somaCompra);

    if(somaCompra > dinheiro){
        return console.log("Você não possui dinheiro para a compra. Favor retirar itens do carrinho. Valor total: ", somaCompra);
    }else {
        return console.log("Você possui dinheiro para a compra. O valor total é de: " + somaCompra + " e o troco de:", troco);
    }
 }

 mercado();