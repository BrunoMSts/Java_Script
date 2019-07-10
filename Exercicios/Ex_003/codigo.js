function gerar_tabuada(){
    var nume = document.getElementById('numero')
    var r = document.getElementById('seltab')
    if (nume.value.length == 0){
        window.alert('ERRO, Por favor digite um número!')
    }else{
        nume = Number(nume.value)
        r.innerHTML = ''
        for (cont=1; cont <= 10; cont++){
            let item = document.createElement('option')
            item.text = `${nume} x ${cont} = ${nume*cont}`
            r.appendChild(item)
        }
    }
}