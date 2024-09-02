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
        n1Bit = (n1Value === true)? 1 : 0;
    });
    /*  this se refere ao elemento html que disparou o evento nesse caso input. 
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
    function finalGrade (b, c, d, e) {

        // identifica qual a maior nota (N1 ou N2) e calcula nota necessária em N3
        if (c >= d) {
            prevGrade = 12-c
            console.log('ca - lculei substituindo n2')
        } else {
            prevGrade = 12-d
            console.log('ca - lculei substituindo n1')
        }

        console.log('Mé - dia: ' + b)

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
    function showMsg(m,n,o){ //m=tipo de msg, n=id emoji, o=id texto, p=variavel de texto q=select emoji
        document.getElementById(m).classList.remove('is-hidden'); // mostra msg
        document.getElementById(n).innerHTML = q; // ajusta emoji
        document.getElementById(o).innerHTML = p; // ajusta texto
    }

    //Calculo principal ############################
    
    const actions = {

        '0000': () => {
            console.log('00 - '),
            clearGrades();
            clearMsg ();
            showMsg('message-alert','emoji-alert','text-alert') //m=tipo de msg, n=id emoji, o=id texto, p=variavel de texto
            },

        // #####
        '0001': () => console.log('01 - '),
        // #####
        '0010': () => console.log('02 - '),
        // #####
        '0011': () => console.log('03 - '),
        // #####
        '0100': () => console.log('04 - '),
        // #####
        '0101': () => console.log('05 - '),
        // #####
        '0110': () => console.log('06 - '),
        // #####
        '0111': () => console.log('07 - '),
        // #####
        '1000': () => {
            console.log('08 - AP');
            // configura emogi e texto da mensagem
            let = prevGrade = (12-n1);
            if (n1 >= 6) { 
                q = '🤓';
                p = '<b>Muito bem!</b> </br> Você só precisa tirar ' + prevGrade + ' em N2 para manter a média. </br> <i>(N2 é igual a média entre AP e AI.)</i>'
                
            } else{
                q = '😳'
                p = '<b>Atenção!</b> </br> você precisa tirar pelo menos ' + prevGrade + ' em N2. Continue estudando.';
            }
            clearGrades(); //reseta notas
            clearMsg (); // reseta mensagem
            // configura mensagem
            //m=tipo de msg, n=id emoji, o=id texto, p=variavel de texto q variavel do emoji
            showMsg('message-default','emoji-default','text-default') 
            document.getElementById("text-default").innerHTML = p;
            // configura notas
            document.getElementById("p-n1").innerHTML = n1;
                
            },
        // #####
        '1001': () => {
            console.log('09 - '),
            clearGrades(); //reseta notas
            clearMsg (); // reseta mensagem
            
            // configura emogi e texto da mensagem
            media = (n1+n3)/2;
            let fildConfig;
            if (media >= 6) { 
                q = '🤓';
                p = '<b>Parabéns! Você foi aprovado</b> </br> Sua média foi: ' + media
                // configura mensagem
                //m=tipo de msg, n=id emoji, o=id texto, p=variavel de texto q variavel do emoji
                showMsg('message-success','emoji-success','text-success') 
                document.getElementById("text-success").innerHTML = p;
                
            } else{
                q = '😳'
                p = '<b>Você não obteve a média necessária.</b> </br> Entre em contato com a secretária para mais informações'
                // configura mensagem
                //m=tipo de msg, n=id emoji, o=id texto, p=variavel de texto q variavel do emoji
                showMsg('message-alert','emoji-alert','text-alert') 
                document.getElementById("text-alert").innerHTML = p;
            }
            
            // configura notas
            document.getElementById("p-n1").innerHTML = n1;
            document.getElementById("p-n3").innerHTML = n3;
            document.getElementById("p-media").innerHTML = media;
            },

        // #####
        '1010': () => {
            console.log('10 - '),
            clearGrades(); //reseta notas
            clearMsg (); // reseta mensagem
            
            // configura emogi e texto da mensagem
            media = (n1+n3)/2;

            if(n1>n2){
                prevGrade = 12 -n1
            } else {
                pervGrade = 12 -n2
            };

            if (prevGrade <=6) { 
                q = '🧐';
                p = '<b>Atenção</b> </br> Você precisa tirar: ' + prevGrade + ' em N3 para ser aprovado. Continue estudando'
                // configura mensagem
                //m=tipo de msg, n=id emoji, o=id texto, p=variavel de texto q variavel do emoji
                showMsg('message-success','emoji-success','text-success') 
                document.getElementById("text-success").innerHTML = p;
                
            } else{
                q = '😳'
                p = '<b>Atenção!</b> </br> Não e mais possível atingir a média necessária em N3. Entre em contato com a secretária academica para mais informações'
                // configura mensagem
                //m=tipo de msg, n=id emoji, o=id texto, p=variavel de texto q variavel do emoji
                showMsg('message-alert','emoji-alert','text-alert') 
                document.getElementById("text-alert").innerHTML = p;
            }
            
            // configura notas
            document.getElementById("p-n1").innerHTML = n1;
            document.getElementById("p-n3").innerHTML = n3;
            document.getElementById("p-media").innerHTML = media;
            },

        // #####

        '1011': () => 
            console.log('11 - '),

            // #####
        '1100': () => {console.log('12 - ');
            let = prevGrade = 24-ap-(2*n1);
            if (prevGrade <= 10) {  
                q = '🤓';
                p = 'Muito bem. Você só precisa tirar: ' + prevGrade + ' em AI.'
            } else{
                q = '😳'
                p = 'Atenção. Você precisa tirar: ' + prevGrade + ' em AI. Continue estudando.'
            };
        clearGrades(); //reseta notas
        clearMsg (); // reseta mensagem
        // configura mensagem
        //m=tipo de msg, n=id emoji, o=id texto, p=variavel de texto q variavel do emoji
        showMsg('message-default','emoji-default','text-default',n1) 
        document.getElementById("text-default").innerHTML = (p);
        // configura notas
        document.getElementById("p-n1").innerHTML = n1;
        document.getElementById("p-ap").innerHTML = ap;
        },     

        // #####
        '1101': () => console.log('13 - '),
        // #####
        '1110': () => console.log('14 - '),
        // #####
        '1111': () => console.log('15 - '),

        };
        
        /* console.log(n1Bit);
        console.log(apBit);
        console.log(aiBit);
        console.log(n3Bit);   */
        
        // Converte as variáveis para uma chave binária
        const key = `${n1Bit}${apBit}${aiBit}${n3Bit}`;
        console.log(key);
        
        // Executa a ação correspondente
        actions[key]();

        document.getElementById

});
