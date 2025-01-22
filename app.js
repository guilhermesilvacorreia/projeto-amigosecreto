//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

//lista 
let listaDeAmigos =[];

 

function adicionarAmigos(){
    //busca valor 
    let digiteNome = document.getElementById('amigo').value.toUpperCase().trim() // -> elimina espaços;
    //verifa se o nome já esta na lista ou se não foi digitado nada
    if(listaDeAmigos.includes(digiteNome)){
        alert('Erro: Nome repetido');
    }else if(digiteNome ==''){ 
        alert('Por favor, digite um nome');

    }else{
        listaDeAmigos.push(digiteNome)
        atualizarLista();
        // Atualiza a lista na interface
   

       // Limpa o campo de entrada
      document.getElementById('amigo').value = '';
    }
     
}

 
function atualizarLista() {
// Obtém o elemento da lista
const listaHTML = document.getElementById('listaAmigos');
listaHTML.innerHTML = ''; // -> Limpa a lista atual

 // Adiciona cada nome da lista como um item da lista HTML
 listaDeAmigos.forEach((amigo) => {
    const li = document.createElement('li');
    li.textContent = amigo;
    listaHTML.appendChild(li);
});
}
 
 // Sorteio e embaralhamento
function sortearAmigos() {
    if (listaDeAmigos.length < 2) {
        alert('Erro: É necessário pelo menos 2 pessoas para sortear.');
        return;
    }

    // Cria um array de índices e embaralha
    let indicesLista = Array.from(listaDeAmigos.keys());
    let embaralharIndices = indicesLista.sort(() => Math.random() - 0.5);

    // Associa cada pessoa ao próximo índice
    let resultado = [];
    let i = 0;
    while (i < embaralharIndices.length) {
        let sorteador = listaDeAmigos[embaralharIndices[i]];
        let sorteado = listaDeAmigos[embaralharIndices[(i + 1) % embaralharIndices.length]];
        resultado.push(`${sorteador} tirou ${sorteado}`);
        i++; // Incrementa o contador
    }

    // Exibe os resultados na interface
    exibirResultado(resultado);
}

// Atualiza os resultados na interface
function exibirResultado(resultado) {
    const resultadoHTML = document.getElementById('resultado');
    resultadoHTML.innerHTML = ''; // -> Limpa resultados anteriores

    resultado.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = item;
        resultadoHTML.appendChild(li);
    });
}