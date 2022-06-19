//const calcular = document.getElementById('calcular')

function imc(){
    const peso = document.getElementById('peso').value// converte o valor direto na variavel.
    const altura = document.getElementById('altura').value
    const res = document.getElementById('res')

    if(peso !== '' && altura !== ''){ 
       
        const valorImc = (peso / (altura * altura)).toFixed(1)

        let classificacao = ''

        if(valorImc < 18.5 ){
            classificacao = 'Esta abaixo do peso'
        }else if(valorImc >= 18.5 && valorImc < 24.9){
            classificacao = 'Peso normal'
        }else if(valorImc >= 24.9 && valorImc < 29.9){
            classificacao = 'Sobre peso'
        }else if(valorImc >= 29.9 && valorImc < 34.9){
            classificacao = 'Obesidade grau 1'
        }else if(valorImc >= 34.9 && valorImc < 39.9){
            classificacao = 'Obesidade grau 2'
        }else{
            classificacao = 'Obesidade grau 3'

            res.textContent = `O resultado do seu imc é: ${valorImc} e a classificação é: ${classificacao}`
        }
        
    }else{
        res.textContent = '[ERROR] Preencha os dados!'

    }

}
//calcular.addEventListener('click', imc)