document.getElementById('form-grades').addEventListener('input', function(event){
   
    const styleN1 = document.querySelector('#form-n1');
    const styleAp = document.querySelector('#form-ap');
    const styleAi = document.querySelector('#form-ai');
    const styleN3 = document.querySelector('#form-n3');
    
    let validationN1 = styleN1.value;
    let validationAp = styleAp.value;
    let validationAi = styleAi.value;
    let validationN3 = styleN3.value;

    // validação N1 ###################################
    if (validationN1 > 10){
        document.getElementById('n1-error').innerHTML = 'O valor da nota não pode ser maior que 10.';
        document.getElementById('n1-error').classList.remove('is-hidden');
        styleN1.classList.add('is-danger');
    }
    else{
        document.getElementById('n1-error').innerHTML = '';
        styleN1.classList.remove('is-danger');
    }

    // validação AP
    if (validationAp > 10){
        document.getElementById('ap-error').innerHTML = 'O valor da nota não pode ser maior que 10.';
        document.getElementById('ap-error').classList.remove('is-hidden');
        styleAp.classList.add('is-danger');
    }
    else{
        document.getElementById('ap-error').innerHTML = '';
        styleAp.classList.remove('is-danger');
    }

    // validação AI
    if (validationAi > 10){
        document.getElementById('ai-error').innerHTML = 'O valor da nota não pode ser maior que 10.';
        document.getElementById('ai-error').classList.remove('is-hidden');
        styleAi.classList.add('is-danger');
    }
    else{
        document.getElementById('ai-error').innerHTML = '';
        styleAi.classList.remove('is-danger');
    }

    // validação N3
    if (validationN3 > 10){
        document.getElementById('n3-error').innerHTML = 'O valor da nota não pode ser maior que 10.';
        document.getElementById('n3-error').classList.remove('is-hidden');
        styleN3.classList.add('is-danger');
    }
    else{
        document.getElementById('n3-error').innerHTML = '';
        styleN3.classList.remove('is-danger');
    }

});