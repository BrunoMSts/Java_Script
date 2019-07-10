function carregar(){
    var horario = document.getElementById('horario')
    var img = document.getElementById('foto')
    var data = new Date();
    var hora = data.getHours();
    var hora_minutos = data.getHours() + 'h' + ' : ' + data.getMinutes() + 'm';
    horario.innerHTML = `Agora são ${hora_minutos}`
    if (hora >= 4 && hora < 12){
        //BOM DIA!
        img.src = "Dia.png"
        document.body.style.background = '#366e9b'
    } else if (hora >= 12 && hora < 18){
        //BOA TARDE!
        img.src = "Tarde.png"
        document.body.style.background = '#c63905'
    } else{
        //BOA NOITE!
        img.src = 'Noite.png'
        document.body.style.background = '#0f1a37'
    }
}

