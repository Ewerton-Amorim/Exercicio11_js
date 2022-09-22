const readline = require('readline-sync');

console.log("A - Álcool R$4.00\nG - Gasolina R$5.00");

let tipoCombustivel = readline.question("Tipo de combustível A ou G: ");
let quantidadeCombustivel = readline.questionFloat("Quantidade de combustível: ");

let valorPago;
let precoAlcool;
let precoGasolina;

switch (tipoCombustivel) {
    case 'A':
        precoAlcool = quantidadeCombustivel * 4.00; // combustível sem desconto

        if (quantidadeCombustivel >= 1 && quantidadeCombustivel <= 20) { //entre 1 e 20
            precoAlcool -= (4.00 * (quantidadeCombustivel * 0.03)); //combustível com desconto de 3%
            console.log("Preço de álcool com 3% de desconto: R$" + precoAlcool);
            
        } else {
            precoAlcool -= (4.00 * (quantidadeCombustivel * 0.05));// combustível com desconto de 5%
            console.log("Preço de álcool com 5% de desconto: R$" + precoAlcool);
            
        }
        break;

    case 'G':
        precoGasolina = quantidadeCombustivel * 5.00; //combustível sem desconto

        if (quantidadeCombustivel >= 1 && quantidadeCombustivel <= 20) {
            precoGasolina -= (5.00 * (quantidadeCombustivel * 0.04)); // combustível com desconto deee 4%
            console.log("Preço a pagar de gasolina com desconto de 4%: R$" + precoGasolina);
        } else {
            precoGasolina -= (5 * (quantidadeCombustivel * 0.06));
            console.log("Preço a pagar de gasolina com desconto de 6%: R$" + precoGasolina);
        }
        break;

    default:
        console.log("Opção inválida");

}

console.log("quantidade de litros: " + quantidadeCombustivel + "L");
console.log("Tipo de combustível: " + tipoCombustivel);