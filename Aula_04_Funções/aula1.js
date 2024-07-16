function sum(a, b) {
    return a + b;
}

console.log("A soma de a + b é: ", sum(10,5));

function divisao(a, b) {
    return a / b;
}

console.log("A divisão de a por b é: ", divisao(10,5));

function multi(a, b) {
    a = 5;
    b = 2;
    return a * b;
}

console.log("A multiplicação de a por b é: ", multi());

function subtracao(a, b) {
    a = 6;
    b = 3;
    console.log(a - b);
}

subtracao();

//se o resultado for maior q 50, vou ao cinema, senão, se for menor, não vou ao cinema

function cinema(a, b, idade) {
    a = 5;
    b = 10;
    idade = 20;
    result = a * b;
    if (result >= 50 && idade >= 18) {
        return console.log("Vou ao cinema e sou maior de idade.") //console.log no escopo da função
    }else {
        return console.log("Não vou ao cinema.")
    }
}
cinema(); //só chamo a função

/*Tarefas
Na compra em um minimercado, entrou com 100 reais, ele tem q comprar 1 saco de arroz, 1 saco de açúcar, 
1 saco de feijão, 1 saco de sal. Ver se o dinheiro deu, dar o troco, senão, troco é negativo, retirar produtos do carrinho. 
Criar variáveis pra cada produto e para o dinheiro na carteira. 
*/