const button = document.getElementById('btn-boas-vindas');
const x = document.getElementById('nome-completo');

button.addEventListener('click', function() {
    boasVindas(x.value);
});

function boasVindas(nome) {
    alert('Seja bem-vindo, ' + nome);
    console.log('Seja bem-vindo ' + nome);
}
