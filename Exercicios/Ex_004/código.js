var array = []
function adciona(){
    var num1 = Number(document.getElementById('numero').value)
    var numbers = document.getElementById('numeros')
    res.innerHTML = ''
    if (document.getElementById('numero').value.length == 0){
        window.alert('Por Favor digite um número!')
    }else if (num1 > 100 || num1 < 0){
        window.alert('Número precisa estar no intervalo (0, 100)')
    }else{
        if (array.indexOf(num1) > -1) {
            window.alert('Erro, valor ja adcionado!')
        }else{
            let item = document.createElement('option')
            item.text = `O valor adcionado foi ${num1}`
            numbers.appendChild(item)
            array.push(num1)
        }
    }
}
var res = document.getElementById('res')
function limpa(){
    var maior = 0
    var menor = 0
    var soma = 0
    for (let c = 0; c < array.length; c++) {
        if (array[c] > maior) {
            maior = array[c]
        }
    }
    for (let c = 0; c < array.length; c++){
        soma += array[c]
    }
    res.innerHTML = `Temos ${array.length} números cadastrados!<br><br>
    O maior número é : ${maior}.<br><br>
    O menor número é : ${array.sort()[0]}.<br><br>
    A soma dos números é : ${soma}.<br><br>
    A média dos valores é : ${soma/array.length}.`
}