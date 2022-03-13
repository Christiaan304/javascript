function tabuada()
{
    let numero = document.querySelector(`input#txtnumero`).value
    let tabuada = document.querySelector(`select#seltab`)

    if ( numero.length == 0 )
    {
        window.alert(`Por favor, digite um número`)
    }
    else
    {
        let n = Number(numero)
        tabuada.innerHTML = ``

        for(c = 1; c <= 10; c++ )
        {
            let item = document.createElement(`option`)
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tabuada.appendChild(item)
        }
    }
}