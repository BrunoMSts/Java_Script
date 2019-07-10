function rangi(){
    var contador = document.getElementById('cont')
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var print = ''
    if (inicio.value.length == 0 || passo.value.length == 0 || fim.value.length == 0){
        window.alert('ERRO, Preencha todas as caixas')
    } else{
        inicio = Number(inicio.value)
        fim = Number(fim.value)
        passo = Number(passo.value)
        if (passo < 0){
            window.alert('ERRO, PASSO NÃO PODE SER NEGATIVO!')
        } else if (passo == 0){
            window.alert('PASSO 0 É CONSIDERADO 1')
            passo = 1
        } if (inicio<fim){
            for(inicio; inicio<=fim; inicio+=passo){
                print += inicio + ' '
            }
        } else{
            for(inicio; inicio>=fim; inicio-=passo){
                print += inicio + ' '
            }
        }      
    }contador.innerHTML = `${String.fromCodePoint('0x27A1')} ${print}`
}  
