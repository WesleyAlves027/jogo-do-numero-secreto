let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarUmNumeroAleatorio();

let tentativas = 1;

console.log(numeroSecreto);

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female', {rate:1.2});
}
function exibirTextoinicial(){
    exibirTextoNaTela('h1', 'Jogo da sorte');
    exibirTextoNaTela('p', 'Escolha um número de 1 a 10');
}

exibirTextoinicial()

function gerarUmNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random()* numeroLimite + 1);
   let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

   if(quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
   }

   if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarUmNumeroAleatorio();
   }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
   }
}

function verificarChute(){

    let chute = document.querySelector('input').value;
    let palavraTentativa = tentativas > 1 ? `tentativas`:`tentativa`;
    let mensagem = `Você acertou o número secreto com ${tentativas} ${palavraTentativa}`;

    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!!!');
        exibirTextoNaTela('p', mensagem);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute > numeroSecreto){
            exibirTextoNaTela('p', `O número secreto é menor que ${chute}`);
        }else{
            exibirTextoNaTela('p', `O número secreto é maior que ${chute}`);    
        }
        tentativas++
        limparCampo()
    }
}
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = "";
}
function reiniciarJogo(){
    numeroSecreto = gerarUmNumeroAleatorio();
    limparCampo()
    exibirTextoinicial()
    document.getElementById('reiniciar').setAttribute('disabled', true);
    tentativas = 1;
}

