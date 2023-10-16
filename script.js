function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var bom = window.document.getElementById('bom')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `<strong>Agora são ${hora} horas</strong>.`
    if (hora >= 0 && hora <12 ){
        bom.innerHTML = '<strong>BOM DIA!</strong>'
        img.src = 'imagem/manha.png'
        document.body.style.background = '#f5dbb8'
    } else if (hora >= 12 && hora <=18 ){
        bom.innerHTML = '<strong>BOA TARDE!</strong>'
        img.src = 'imagem/tarde.png'
        document.body.style.background = '#b9846f'
    } else {
        bom.innerHTML = '<strong>BOA NOITE!</strong>'
        img.src = 'imagem/noite.png'
        document.body.style.background = '#59505d'
    }
}
