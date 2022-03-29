/*
let nomeSobrenome = `Crystian Fernandes`

function mudarNome(nome, sobrenome = ``)
{
    nomeSobrenome = console.log(`${nome} ${sobrenome}`)
}

console.log(nomeSobrenome)
mudarNome(`lorem`, `ipsum`)
*/

/*
for ( let i = 0; i < 20; i++ )
{
    if ( i % 2 == 1 )
    {
        console.log(i)
    }
}
*/


/*
let idade = 25

for ( let i = 0; i < idade, idade--; i++ )
{
    console.log(`Agora eu tenho ${idade} anos`)
}
*/

/*
let hora = new Date().getHours()

if ( hora < 12 )
{
    console.log(`A hora é ${hora}, bom dia!`)
}
else if ( hora < 18 )
{
    console.log(`A hora é ${hora}, boa tarde!`)
}
else
{
    console.log(`A hora é ${hora}, boa noite!`)
}
*/

/*
function fizzBuzz(numero)
{
    if ( typeof numero !== `number` )
        return console.log(`Não é um número`)

    if ( numero % 3 == 0 && numero % 5 == 0 )
        return console.log(`FizzBuzz`)

    if ( numero % 5 == 0 )
        return console.log(`Buzz`)

    if ( numero % 3 == 0 )
        return console.log(`Fizz`)

    else
        return console.log(numero)
}

fizzBuzz(11)
*/

/*
verificarVelocidade(130)

function verificarVelocidade(velocidade)
{
    const velocidadeMaxima = 70
    const kilometrosPorPonto = 5

    if ( velocidade <= velocidadeMaxima )
        console.log(`OK`)
    else 
    {
        const pontos = Math.floor(((velocidade - velocidadeMaxima) / kilometrosPorPonto))
        if ( pontos >= 12 )
            console.log(`carteira suspensa`)
        else
            console.log(`Você recebeu ${pontos} pontos`)
    }
}
*/

/*
exibirTipo(43)

function exibirTipo(limite)
{
    for ( let i = 0; i <= limite, limite--; i++ )
    {
        if ( limite % 2 == 0 )
            console.log(`${limite} é par`)
        else
            console.log(`${limite} é ímpar`)
    }
*/

/*
somar(10)

function somar(limite)
{
    let multiploTres = 0
    let multiploCinco = 0

    for ( let i = 0; i <= limite; i++ )
    {
        if ( i % 3 == 0 )
        {
            multiploTres += i
        }
        if ( i % 5 == 0 )
        {
            multiploCinco += i
        }
    }

    console.log(`A soma dos múltiplos de 3 e 5 do número ${limite} é ${multiploTres + multiploCinco}`)
}
*/

/*
const array = [75, 75, 80]

console.log(mediaDoAluno(array))

function mediaDoAluno(notas)
{
    let soma = 0
    for ( let nota of notas )
    {
        soma += nota
    }
    const media = soma / (notas.length)

    if ( media < 59 ) return 'F'
    if ( media < 69 ) return 'D'
    if ( media < 79 ) return 'C'
    if ( media < 89 ) return 'B'
    return 'A'
}
*/

/*
exibirNumerosPrimos(15)

function exibirNumerosPrimos(limite)
{
    for ( let numero = 2; numero <= limite; numero++ )
    {
        if (numeroPrimo(numero)) console.log(numero)
    }
}

function numeroPrimo(numero)
{
    for ( let divisor = 2; divisor < numero; divisor++ )
    {
        if ( numero % divisor == 0 )
        {
            return false
        }
    }
    return true
}
*/


