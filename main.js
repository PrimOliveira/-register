const form = document.getElementById("formAtividade");
const nomeContato = [];
const numeroContato = [];

let linhas = '';



form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function atualizaTabela() {
    const inputNovoName = document.getElementById('NomeContato');
    const inputNovoNumber = document.getElementById('NumeroContato');

    if (nomeContato.includes(inputNovoName.value)) {
        alert(`Seu contato ja foi inserido ${inputNovoName.value}, obrigado!`)


    } else {
        nomeContato.push(inputNovoName.value);
        numeroContato.push(parseInt(inputNovoNumber.value));


        let linha = '<tr>';
        linha += `<td>${inputNovoName.value} </td> `;
        linha += `<td>${inputNovoNumber.value}</td>`;
        linha += '</tr>';

        linhas += linha;
    }
}
function adicionaLinha() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}