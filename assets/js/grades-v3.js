// lista se os campos receberam input
const n1List = document.getElementById('form-n1');
const apList = document.getElementById('form-ap');
const aiList = document.getElementById('form-ai');
const n3List = document.getElementById('form-n3');

let n1Bit = 0;
let apBit = 0;
let aiBit = 0;
let n3Bit = 0;

    n1List.addEventListener('input', function() {
        // Checa se o campo N1 foi preenchido
        const n1Value = this.value.trim() !== ''; 
        n1Bit = (n1Value === true)? 1 : 0; // isso aqui é uma operação ternaria, tipo um if simplificado
    });
    /*  entendi que this se refere ao elemento html que disparou o evento nesse caso input. 
     value acesso o valor atual do elemento e 
     trim remove espaços antes e depois da string em caso de acidente */
    
    apList.addEventListener('input', function() {
        // Checa se o campo AP foi preenchido
        const apValue = this.value.trim() !== '';
        apBit = (apValue === true)? 1 : 0;
    });

    aiList.addEventListener('input', function() {
        // Checa se o campo AI foi preenchido
        const aiValue = this.value.trim() !=='';
        aiBit = (aiValue === true)? 1 : 0;
    });

    n3List.addEventListener('input', function() {
        // Checa se o campo AI foi preenchido
        const n3Value = this.value.trim() !== '';
        n3Bit = (n3Value === true)? 1 : 0;
    });

//captura as informações do formulário
const formulario = document.getElementById('form-grades'); 
// Adicionando um ouvinte de evento para a submissão do formulário
formulario.addEventListener('submit', function(event) {
  
    // evita que o formulário recarregue depois de enviar as informações
    event.preventDefault();
    
    // variaveis que pegam as informações do form como string
    var n1String = document.getElementById('form-n1').value;
    var apString = document.getElementById('form-ap').value;
    var aiString = document.getElementById('form-ai').value;
    var n3String = document.getElementById('form-n3').value;
    
    // string >> number
    let n1 = Number(n1String);
    let ap = Number(apString);
    let ai = Number(aiString);
    let n3 = Number(n3String);

     // Ajusta as casas decimais
    n1 = parseFloat(n1.toFixed(2));
    ai = parseFloat(ai.toFixed(2));
    ap = parseFloat(ap.toFixed(2));
    n3 = parseFloat(n3.toFixed(2));
    
    let n2 = (ap+ai)/2;
    let media = (n1+n2)/2; // inicializada como n1+n2

    //ajusta os calculos para 2 casas decimais
    media = media.toFixed(2); 
    n2 = parseFloat(n2.toFixed(2)); 
    
    // Função que define a mensagem deve ser enviada quando houver N3
    // Os parâmetros são  os seguintes: media = b, N1 =c, N2 = d, N3 = e
    function finalGrade (b, c, d) {

        // identifica qual a maior nota (N1 ou N2) e calcula nota necessária em N3
        if (c >= d) {
            prevGrade = 12-c
            console.log('calculei substituindo n2')
        } else {
            prevGrade = 12-d
            console.log('calculei substituindo n1')
        }

        console.log('Média: ' + b)
    }

    // Função para resetar a mensagem
    function clearMsg(){
        document.getElementById("message-alert").classList.add('is-hidden');
        document.getElementById("message-default").classList.add('is-hidden');
        document.getElementById("message-success").classList.add('is-hidden');
    };
    
    // Função para resetar o resultado exibido
    function clearGrades(){

    document.getElementById("p-n1").innerHTML = '--';
    document.getElementById("p-n2").innerHTML = '--';
    document.getElementById("p-n3").innerHTML = '--';
    document.getElementById("p-media").innerHTML = '--';
    };

    //Função para mostrar mensagem m=tipo de msg, n=id emoji, o=id texto, p=variavel de texto
    function showMsg(m,n,o,q,p){ //m=tipo de msg, n=id emoji, o=id texto, p=variavel de texto q=select emoji
        document.getElementById(m).classList.remove('is-hidden'); // mostra msg
        document.getElementById(n).innerHTML = q; // ajusta emoji
        document.getElementById(o).innerHTML = p; // ajusta texto
    }

    //Calculo principal ############################
    
    const actions = {

        '0000': () => {
            console.log('00 - input none');
            clearMsg ();
            console.log('message: clear');
            clearGrades ();
            console.log('info grades: clear');

            finalGrade();
    
        },
        // #####
        '0001': () => {
            console.log('01 - input N1');
            clearMsg ();
            console.log('message: clear');
            clearGrades ();
            console.log('info grades: clear');

            finalGrade();
    
        },

        // #####
        '0010': () => {
                console.log('02 - input AP');
                clearMsg ();
                console.log('message: clear');
                clearGrades ();
                console.log('info grades: clear');
    
                finalGrade();
        
            },

        // #####
        '0011': () => {
            console.log('03 - input N1, AP');
            clearMsg ();
            console.log('message: clear');
            clearGrades ();
            console.log('info grades: clear');

            finalGrade();
    
        },

        // #####
        '0100': () => {
            console.log('04 - input AI');
            clearMsg ();
            console.log('message: clear');
            clearGrades ();
            console.log('info grades: clear');

            finalGrade();
    
        },

        // #####
        '0101': () => {
            console.log('05 - input N1, AI');
            clearMsg ();
            console.log('message: clear');
            clearGrades ();
            console.log('info grades: clear');

            finalGrade();
    
        },

        // #####
        '0110': () => {
            console.log('06 - input AP, AI');
            clearMsg ();
            console.log('message: clear');
            clearGrades ();
            console.log('info grades: clear');

            finalGrade();
    
        },

        // #####
        '0111': () => {
            console.log('07 - input N1, AP, AI');
            clearMsg ();
            console.log('message: clear');
            clearGrades ();
            console.log('info grades: clear');

            finalGrade();
    
        },

        // #####
        '1000': () => {
            console.log('08 - input N3');
            clearMsg ();
            console.log('message: clear');
            clearGrades ();
            console.log('info grades: clear');

            finalGrade();
    
        },


        // #####
        '1001': () => {
            console.log('09 - input N1, N3');
            clearMsg ();
            console.log('message: clear');
            clearGrades ();
            console.log('info grades: clear');

            finalGrade();
    
        },

        // #####
        '1010': () => {
            console.log('10 - input AP, N3');
            clearMsg ();
            console.log('message: clear');
            clearGrades ();
            console.log('info grades: clear');

            finalGrade();
    
        },
            
        // #####
        '1011': () => {
            console.log('11 - input N1, AP, N3');
            clearMsg ();
            console.log('message: clear');
            clearGrades ();
            console.log('info grades: clear');

            finalGrade();
    
        },

        // #####
        '1100': () => {
            console.log('12 - input AI, N3');
            clearMsg ();
            console.log('message: clear');
            clearGrades ();
            console.log('info grades: clear');

            finalGrade();
    
        },
            
        // #####
        '1101': () => {
            console.log('case 03 - input N1, AI, N3');
            clearMsg ();
            console.log('message: clear');
            clearGrades ();
            console.log('info grades: clear');

            finalGrade();
    
        },

        // #####
        '1110': () => {
            console.log('14 - input AP, AI, N3');
            clearMsg ();
            console.log('message: clear');
            clearGrades ();
            console.log('info grades: clear');

            finalGrade();
    
        },

        // #####
        '1111': () => {
            console.log('15 - input N1, AP, AI, N3');
            clearMsg ();
            console.log('message: clear');
            clearGrades ();
            console.log('info grades: clear');

            finalGrade();
    
        },

    };
              
        // Converte as variáveis para uma chave binária
        const key = `${n3Bit}${aiBit}${apBit}${n1Bit}`;
        
        // Executa a ação correspondente
        actions[key]();
        console.log('bin: ' + key);
        
        document.getElementById

});
