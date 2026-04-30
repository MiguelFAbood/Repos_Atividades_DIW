let nome = prompt("Qual é o seu nome?");

let rendaMensal = Number(prompt("Qual a sua renda mensal?"));
while (isNaN(rendaMensal) || rendaMensal <= 0) {
    rendaMensal = Number(prompt("Por favor, digite um número válido para a renda:"));
}

let qtdDespesas = Number(prompt("Quantas despesas deseja informar? (Mínimo 1, Máximo 5)"));

if (qtdDespesas < 1) {
    qtdDespesas = 1;
} else if (qtdDespesas > 5) {
    qtdDespesas = 5;
}

let totalDespesas = 0;

for (let i = 1; i <= qtdDespesas; i++) {
    let valorDespesa = Number(prompt("Digite o valor da Despesa " + i + ":"));
    
    while (isNaN(valorDespesa) || valorDespesa < 0) {
        valorDespesa = Number(prompt("Valor inválido! Digite um número para a Despesa " + i + ":"));
    }
    
    totalDespesas += valorDespesa;
}

let sobra = rendaMensal - totalDespesas;
let statusOrcamento = "";

if (totalDespesas > rendaMensal) {
    statusOrcamento = "⚠️ Atenção: você gastou mais do que ganhou.";
} else {
    let margemSobra = (sobra / rendaMensal);
    if (margemSobra >= 0.30) {
        statusOrcamento = "✅ Ótimo: boa margem de sobra.";
    } else {
        statusOrcamento = "🙂 Ok: dá para melhorar a sobra.";
    }
}

let resultadoFinal = `
--- RELATÓRIO DE ORÇAMENTO ---
Usuário: ${nome}
Renda: R$ ${rendaMensal.toFixed(2)}
Total de Despesas: R$ ${totalDespesas.toFixed(2)}
Sobra: R$ ${sobra.toFixed(2)}
Classificação: ${statusOrcamento}
------------------------------
`;

alert(resultadoFinal);
console.log(resultadoFinal);