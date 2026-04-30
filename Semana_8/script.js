const catalogo = [
    { id: 1, titulo: "Inception", tipo: "filme", ano: 2010, generos: ["Ficção Científica", "Ação"], nota: 8.8, assistido: true },
    { id: 2, titulo: "Breaking Bad", tipo: "serie", ano: 2008, generos: ["Crime", "Drama"], nota: 9.5, assistido: true },
    { id: 3, titulo: "Parasita", tipo: "filme", ano: 2019, generos: ["Suspense"], nota: 8.6, assistido: false },
    { id: 4, titulo: "The Bear", tipo: "serie", ano: 2022, generos: ["Comédia", "Drama"], nota: 8.5, assistido: true },
    { id: 5, titulo: "O Poderoso Chefão", tipo: "filme", ano: 1972, generos: ["Crime", "Drama"], nota: 9.2, assistido: false },
    { id: 6, titulo: "Dark", tipo: "serie", ano: 2017, generos: ["Mistério", "Ficção Científica"], nota: 8.7, assistido: false }
];

console.log("Catálogo Completo:", catalogo);

console.log("Primeiro título:", catalogo[0].titulo);

console.log("Ano do último item:", catalogo[catalogo.length - 1].ano);

const terceiroItemGeneros = catalogo[2].generos;
if (terceiroItemGeneros.length >= 2) {
    console.log("Segundo gênero do terceiro item:", terceiroItemGeneros[1]);
} else {
    console.log("O terceiro item possui apenas um gênero.");
}

console.log("--- Listagem Geral ---");
catalogo.forEach(item => {
    console.log(`- [${item.tipo.toUpperCase()}] ${item.titulo} (${item.ano})`);
});

const titulosEmCaixaAlta = catalogo.map(item => item.titulo.toUpperCase());
console.log("Títulos em Caixa Alta:", titulosEmCaixaAlta);

const naoAssistidos = catalogo.filter(item => !item.assistido);
console.log(`Existem ${naoAssistidos.length} itens não assistidos.`);

const notaAlta = catalogo.find(item => item.nota >= 9);
if (notaAlta) {
    console.log(`Item nota 9+: ${notaAlta.titulo} (Nota: ${notaAlta.nota})`);
} else {
    console.log("Nenhum item com nota igual ou superior a 9 encontrado.");
}

const mediaGeral = catalogo.reduce((acc, item) => acc + item.nota, 0) / catalogo.length;

const assistidos = catalogo.filter(item => item.assistido);
const mediaAssistidos = assistidos.length > 0 
    ? assistidos.reduce((acc, item) => acc + item.nota, 0) / assistidos.length 
    : 0;

console.log(`Média Geral: ${mediaGeral.toFixed(2)}`);
console.log(`Média dos Assistidos: ${mediaAssistidos.toFixed(2)}`);

const temAntigo = catalogo.some(item => item.ano < 2000);
const todosTemGenero = catalogo.every(item => item.generos.length >= 1);

console.log("Existe algum item anterior a 2000?", temAntigo ? "Sim" : "Não");
console.log("Todos os itens possuem gêneros?", todosTemGenero ? "Sim" : "Não");

const output = document.getElementById("output");

const totalFilmes = catalogo.filter(item => item.tipo === "filme").length;
const totalSeries = catalogo.filter(item => item.tipo === "serie").length;

const ranking = [...catalogo].sort((a, b) => b.nota - a.nota).slice(0, 3);

output.innerHTML = `
    <h2>Resumo do Catálogo</h2>
    <ul>
        <li><strong>Total de itens:</strong> ${catalogo.length}</li>
        <li><strong>Filmes:</strong> ${totalFilmes} | <strong>Séries:</strong> ${totalSeries}</li>
        <li><strong>Não assistidos:</strong> ${naoAssistidos.length}</li>
        <li><strong>Média geral de notas:</strong> ${mediaGeral.toFixed(2)}</li>
    </ul>
    
    <h3>Top 3 Ranking</h3>
    <ol>
        ${ranking.map(item => `<li>${item.titulo} - Nota: ${item.nota}</li>`).join('')}
    </ol>
`;