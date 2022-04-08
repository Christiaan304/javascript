/*const prompt = require("prompt-sync")({sigint: true})*/
/*
let n1 = prompt(`Digite o primeiro número: `)
let n2 = prompt(`Digite o segundo número: `)
let operacao = prompt(`Digite uma operação: `)

let sum = (n1, n2) => Number(n1) + Number(n2)
let sub = (n1, n2) => Number(n1) - Number(n2)
let mul = (n1, n2) => Number(n1) * Number(n2)
let div = (n1, n2) => (Number(n1) / Number(n2)).toFixed(2)

if ( operacao == `adicao` )
{
    alert(`${n1} + ${n2} é igual a ${sum(n1, n2)}`)
}
else if ( operacao == `subtracao` )
{
    alert(`${n1} - ${n2} é igual a ${sub(n1, n2)}`)
}
else if ( operacao == `multiplicacao` )
{
    alert(`${n1} * ${n2} é igual a ${mul(n1, n2)}`)
}
else if ( operacao == `divisao` )
{
    if ( Number(n2) == 0 )
    {
        alert(`Não é possível dividir por zero`)
    }
    else
    {
        alert(`${n1} / ${n2} é igual ${div(n1, n2)}`)
    }
}
*/

let numeroPorta = Math.floor( Math.random()*13001 )

if ( numeroPorta % 13 == 0 )
{
    alert(`Você abriu a porta ${numeroPorta}, você foi para o inferno`)
}
else if ( numeroPorta % 7 == 0 )
{
    alert(`Você abriu a porta ${numeroPorta}, você foi para o céu`)
}
else
{
    alert(`Você abriu a porta ${numeroPorta}, você voltou ao mundo normal`)
}
