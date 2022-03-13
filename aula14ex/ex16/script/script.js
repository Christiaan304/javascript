function contar()
{
    var inicio = document.querySelector(`input#txtinicio`).value
    var fim = document.querySelector(`input#txtfim`).value
    var passo = document.querySelector(`input#txtpasso`).value
    var res = document.querySelector(`div#res`)

    if ( inicio.length == 0 || fim.length == 0 || passo.length == 0 )
    {
        window.alert(`Dados faltando, verifique novamente`)
    }
    else
    {
        res.innerHTML = `Contando: <br>`
        var i = Number(inicio)
        var f = Number(fim)
        var p = Number(passo)

        if ( p <= 0 )
        {
            window.alert(`Passo inválido! Considerando passo 1`)
            p = 1
        }
        if ( i < f )
        {
            // contagem crescente
            for ( i; i <= f; i += p )
            {
                res.innerHTML += ` ${i} \u{1F449}`
            }
        }
        else
        {
            // contagem decrescente
            for ( i; i >= f; i -= p )
            {
                res.innerHTML += ` ${i} \u{1F449} `
            }
        }
        res.innerHTML += ` \u{1F3C1}`
    }
}