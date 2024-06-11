const not = "este cálculo está incorreto"
const right = "este cálculo está correto"
const nul = "cálculo desconhecido"
var num = document.getElementById('num')
var sus = document.getElementById('sus')

function calcular(operacao) {
    let resultado;
    let descricao;
    let status;

    if (operacao === 'soma') {
        if (5 + 5 === 10) {
            descricao = "5 + 5";
            resultado = 10;
            status = right;
        } else {
            status = not;
        }
    } else if (operacao === 'subtracao') {
        if (5 - 5 === 0) {
            descricao = "5 - 5";
            resultado = 0;
            status = right;
        } else {
            status = not;
        }
    } else if (operacao === 'multiplicacao') {
        if (5 * 5 === 25) {
            descricao = "5 * 5";
            resultado = 25;
            status = right;
        } else {
            status = not;
        }
    } else if (operacao === 'divisao') {
        if (5 / 5 === 1) {
            descricao = "5 / 5";
            resultado = 1;
            status = right;
        } else {
            status = not;
        }
    } else {
        descricao = "Operação Desconhecida"
        resultado = nul;
        status = nul;
    }

    adicionarResultadoNaTabela(descricao, resultado, status);
}

function adicionarResultadoNaTabela(descricao, resultado, status) {
    const tabela = document.getElementById("resultado-tabela");
    const novaLinha = document.createElement("tr");

    const celulaDescricao = document.createElement("td");
    celulaDescricao.textContent = descricao;
    celulaDescricao.classList.add("text-color");
    novaLinha.appendChild(celulaDescricao);

    const celulaResultado = document.createElement("td");
    celulaResultado.textContent = resultado;
    celulaResultado.classList.add("text-color");
    novaLinha.appendChild(celulaResultado);

    const celulaStatus = document.createElement("td");
    celulaStatus.textContent = status;
    celulaStatus.classList.add("text-color");
    novaLinha.appendChild(celulaStatus);

    tabela.appendChild(novaLinha);
}

if (5 + 5 === 10) {
    console.log("5 mais 5 é igual a 10")
    console.log(right)
}  else {
    console.log(not)
}

if (5 - 5 === 0) {
    console.log("5 menos 5 é igual a 0")
    console.log(right)
}  else {
    console.log(not)
}

if (5 * 5 === 25) {
    console.log("5 vezes 5 é igual a 25")
    console.log(right)
}  else {
    console.log(not)
}

if (5 / 5 === 1) {
    console.log("5 dividido por 5 é igual a 1")
    console.log(right)
}  else {
    console.log(not)
}

console.log("cálculo terminado")