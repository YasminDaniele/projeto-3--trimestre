document.querySelector('.parametro-senha_botao')
const numeroSenha = document.querySelector('.parametro-senha_texto'); 
let numeroSenha = 12; 
numeroSenha.textContent = tamanhoSenha;
const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
const numeros = '0123456789';
const simbolos = '!@%*?';
const botoes = document.querySelectorAll('.parametro-senha_botao');
botoes[0].onclick = diminuiTamanho; 
const campoSenha = document.querySelector('#campo-senha');
const checkbox = document.querySelectorAll('.checkbox');
const forcaSenha = document.querySelector('.forca');

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
    classificaSenha(alfabeto.length);
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

{campoSenha.value = senha;
classificaSenha();
}

function classificaSenha(tamanhoAlfabeto){
    forcaSenha.classList.remove('fraca','media','forte');
    if (tamanhoSenha > 11){
    forcaSenha.classList.add('forte');
    } else if (tamanhoSenha > 5 && tamanhoSenha < 12) {
        forcaSenha.classList.add('media');
    } else if (tamanhoSenha < 6){
        forcaSenha.classList.add('fraca');
    }
}

function classificaSenha(tamanhoAlfabeto){
        let entropia = tamanhoSenha * Math.log2(alfabeto.length);
        if (entropia > 57){
            forcaSenha.classList.add('forte');
        } else if (entropia > 35 && entropia < 57 ){
            forcaSenha.classList.add('media'); 
            forcaSenha.classList.add('fraca');
        }
        const valorEntropia = document.querySelector('.entropia');
        valorEntropia.textContent = 2**Math.floor(entropia)/(100e6*60*60*24);
        console.log(entropia);
    }
   

