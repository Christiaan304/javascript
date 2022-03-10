function carregar() 
{
    var msg = document.getElementById(`msg`)
    var img = document.getElementById(`imagem`)
    var data = new Date()
    var hora = data.toLocaleTimeString()

    msg.innerHTML = `Agora são ${hora}`

    if (hora >= 0 && hora < 12) 
    {
        // dia
        img.src = `image/manha.png`
        document.body.style.background = `#e2cd9f`
    }
    else if (hora >= 12 && hora <= 18)
    {
        // tarde
        img.src = `image/tarde.png`
        document.body.style.background = `#fd9f14`
    }
    else 
    {
        // noite
        img.src = `image/noite.png`
        document.body.style.background = `#515151`
    }
}