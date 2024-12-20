// Cotações de moedas
const cotacaoDolar = 5.80;
const cotacaoPeso = 0.0060;
const cotacaoYuan = 0.80;
const cotacaoEuro = 6.03;
const cotacaoLibra = 7.27;
const cotacaoIene = 0.039;
const cotacaoBitcoin = 567035.00;

// Função para converter
function converter() {
    const valorReal = parseFloat(document.getElementById('valor').value);
    const moedaEscolhida = document.getElementById('moedaEscolhida').value;

    // Verificar se o valor informado é válido
    if (isNaN(valorReal) || valorReal <= 0) {
        alert('Por favor, insira um valor válido maior que zero.');
        return;
    }

    let resultado;
    switch (moedaEscolhida) {
        case 'dolar':
            resultado = (valorReal / cotacaoDolar).toFixed(2);
            document.getElementById('resultado').innerHTML = `R$ ${valorReal.toFixed(2)} equivalem a $ ${resultado} dólares.`;
            break;
        case 'peso':
            resultado = (valorReal / cotacaoPeso).toFixed(2);
            document.getElementById('resultado').innerHTML = `R$ ${valorReal.toFixed(2)} equivalem a ${resultado} pesos argentinos.`;
            break;
        case 'yuan':
            resultado = (valorReal / cotacaoYuan).toFixed(2);
            document.getElementById('resultado').innerHTML = `R$ ${valorReal.toFixed(2)} equivalem a ¥ ${resultado} yuans chineses.`;
            break;
        case 'euro':
            resultado = (valorReal / cotacaoEuro).toFixed(2);
            document.getElementById('resultado').innerHTML = `R$ ${valorReal.toFixed(2)} equivalem a € ${resultado} euros.`;
            break;
        case 'libra':
            resultado = (valorReal / cotacaoLibra).toFixed(2);
            document.getElementById('resultado').innerHTML = `R$ ${valorReal.toFixed(2)} equivalem a £ ${resultado} libras esterlinas.`;
            break;
        case 'iene':
            resultado = (valorReal / cotacaoIene).toFixed(2);
            document.getElementById('resultado').innerHTML = `R$ ${valorReal.toFixed(2)} equivalem a ¥ ${resultado} ienes japoneses.`;
            break;
        case 'bitcoin':
            resultado = (valorReal / cotacaoBitcoin).toFixed(6);
            document.getElementById('resultado').innerHTML = `R$ ${valorReal.toFixed(2)} equivalem a ฿ ${resultado} bitcoins.`;
            break;
        default:
            document.getElementById('resultado').innerHTML = 'Selecione uma moeda válida.';
    }
}
