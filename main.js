const form = document.getElementById('form-atividade');
const nomeCompleto = [];
const telefone = [];

let linhas ='';

form.addEventListener('submit', function(e) {
    e.preventDefault();
    adicionalinha();
    atualizaTabela();
})

function adicionalinha() {
    const inputNomeCompleto = document.getElementById('nome-completo');
    const inputTelefone = document.getElementById('telefone');

    if (nomeCompleto.includes(inputNomeCompleto.value)) {
        alert(`Os dados:${inputNomeCompleto.value} - ${inputTelefone.value} já foram inseridos`)
    }else {
        nomeCompleto.push(inputNomeCompleto.value);
        telefone.push(inputTelefone.value);

        let linha = `<tr>`;
        linha += `<td>${inputNomeCompleto.value}</td>`;
        linha += `<td>${inputTelefone.value}</td>`;
        linha += `</tr>`;

        linhas += linha;
    }
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}