document.querySelector('.parametro-senha_botao')
const numeroSenha = document.querySelector('.parametro-senha_texto'); 
let numeroSenha = 12; 
const botoes = document.querySelectorAll('.parametro-senha_botao');
botoes[0].onclick = diminuiTamanho; 

// código omitido 

const campoSenha = document.querySelector('#campo-senha');
const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
const numeros = '0123456789';
const simbolos ='!@%*?';
geraSenha();
const checkbox = document.querySelectorAll('.checkbox');
for(i=0; i < checkbox.length;i++){}
console.log(checkbox[0].checked);

function geraSenha (){
    let alfabeto = '';
    if (checkbox[0].checked){
        alfabeto= alfabeto + letrasMaiusculas;
    }
    if (checkbox[1].checked){
        alfabeto = alfabeto + letrasMinusculas;
    }
    if (checkbox[2].checked){
        alfabeto = alfabeto + numeros;
    }
    if (checkbox[3].checked){
        alfabeto = alfabeto + simbolos;
    }
    console.log(alfabeto);

    let senha = ' ';
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