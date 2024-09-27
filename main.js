document.querySelector('.parametro-senha_botao')
const numeroSenha = document.querySelector('.parametro-senha_texto'); 
let numeroSenha = 12; 
const botoes = document.querySelectorAll('.parametro-senha_botao');
botoes[0].onclick = diminuiTamanho; 

// código omitido 

const campoSenha = document.querySelector('#campo-senha');
const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
geraSenha();

function geraSenha (){
    let senha = " ";
    for (let i = 0; i < tamanhoSenha;i++) {
        let numeroAleatorio = Math.random()*letrasMaiusculas.length;
        numeroAleatorio = Math.floor(numeroAleatorio);
        senha = senha + letrasMaiusculas[numeroAleatorio];
        console.log( letrasMaiusculas[numeroAleatorio]);
    }
    campoSenha.value = letrasMaiusculas; 
}

function diminuiTamanho(){
    if (tamanhoSenha > 1) {
         // tamanhoSenha = tamanhoSenha - 1;
        tamanhoSenha--; 
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}
botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function aumentaTamanho() {
    if (tamanhoSenha < 20) {
       // tamanhoSenha = tamanhoSenha + 1;
       tamanhoSenha++; 
     }
    numeroSenha.textContent = tamanhoSenha; 
    geraSenha();                                                                                                    
}