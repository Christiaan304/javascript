function verificar()
{
    var data = new Date()
    var ano = data.getFullYear()
    var formulario_ano = document.querySelector(`input#txtano`)
    var res = document.querySelector(`div#res`)

    if (formulario_ano.value.length == 0 || Number(formulario_ano.value) > ano || Number(formulario_ano.value) <= 1920)
    {
        window.alert(`[ERRO] Verifique os dados e tente novamente`)
    }
    else
    {
        var formulario_sexo = document.getElementsByName(`radsex`)
        var idade = ano - Number(formulario_ano.value)
        var genero = ``
        var img = document.createElement(`img`)
        img.setAttribute(`id`, `foto`)

        if (formulario_sexo[0].checked)
        {
            genero = `Homem`

            if (idade >= 0 && idade < 10)
            {
                // criança
                img.setAttribute(`src`, `image/foto-bebe-m.png`)
            }
            else if (idade < 21)
            {
                //jovem
                img.setAttribute(`src`, `image/foto-jovem-m.png`)
            }
            else if (idade < 50)
            {
                //adulto
                img.setAttribute(`src`, `image/foto-adulto-m.png`)
            }
            else
            {
                // idoso
                img.setAttribute(`src`, `image/foto-idoso-m.png`)
            }
        }
        else
        {
            genero = `Mulher`

            if (idade >= 0 && idade < 10)
            {
                img.setAttribute(`src`, `image/foto-bebe-f.png`)
            }
            else if (idade < 21)
            {
                img.setAttribute(`src`, `image/foto-jovem-f.png`)
            }
            else if (idade < 50)
            {
                img.setAttribute(`src`, `image/foto-adulto-f.png`)
            }
            else
            {
                img.setAttribute(`src`, `image/foto-idoso-f.png`)
            }
        }

        res.style.textAlign = `center`
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}