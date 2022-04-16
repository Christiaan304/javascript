class Carro
{
    constructor
    (
        placa,
        marcaModelo,
        cor,
        anoModelo,
        municipio,
        estado,
        chassi,
        renavam,
        faturado,
        ufFaturado,
        combustivel,
        potencia,
        numeroMotor,
        proprietarioCPF,
        proprietarioNome
    )
    {
        this.placa = placa
        this.marcaModelo = marcaModelo
        this.cor = cor
        this.anoModelo = anoModelo
        this.municipio = municipio
        this.estado = estado
        this.chassi = chassi
        this.renavam = renavam
        this.faturado = faturado
        this.ufFaturado = ufFaturado
        this.combustivel = combustivel
        this.potencia = potencia
        this.numeroMotor = numeroMotor
        this.proprietarioCPF = proprietarioCPF
        this.proprietarioNome = proprietarioNome
    }

    idadeCarro()
    {
        let idade = new Date()
        return idade.getFullYear() - this.anoModelo
    }
}

let carro0 = new Carro
(
    `LCA9725`,
    `FIAT/PALIO EX`,
    `cinza`,
    1999,
    `Rio de Janeiro`,
    `RJ`,
    `9BD178296W0718141`,
    704219239,
    ``,
    ``,
    `gasolina`,
    61,
    ``,
    11414134770,
    `Thiago Pereira da Silva`
)

let carro1 = new Carro
(
    `LLQ2507`,
    `VW/GOL 1.0`,
    `preta`,
    2012,
    `São Gonçalo`,
    `RJ`,
    `9BWAA05U7CP177496`,
    452977401,
    31685506000377,
    `Rio de Janeiro`,
    `GASOLINA/ALCOOL/GAS NATURAL`,
    76,
    `CCNB55743`,
    15149216771,
    `JONATHAN BANDEIRA PEDROSA`
)

let carro2 = new Carro
(
    `KNS7825`,
    `honda/biz 125 ks`,
    ``,
    ``,
    ``,
    ``,
    `9C2JA04108R062365`,
    980640938,
    ``,
    ``,
    `Gasolina`
)

/*console.log(`${carro1.idadeCarro()}`)*/

class Pessoa
{
    constructor
    (
        nome,
        cpf,
        anoNascimento,
        sexo,
        nomeMae,
        cidadeNascimento,
        cidade,
        estadoNascimento,
        estado,
        logradouro,
        numero,
        bairro,
        cep
    )
    {
        this.nome = nome
        this.cpf = cpf
        this.anoNascimento = anoNascimento
        this.sexo = sexo
        this.nomeMae = nomeMae
        this.cidadeNascimento = cidadeNascimento
        this.cidade = cidade
        this.estadoNascimento = estadoNascimento
        this.estado = estado
        this.logradouro = logradouro
        this.numero = numero
        this.bairro = bairro
        this.cep = cep
    }

    idadePessoa()
    {
        let data = new Date()
        return data.getFullYear() - this.anoNascimento
    }
}

let pessoa0 = new Pessoa
(
    `Marcio Luiz da Conceição Silva`,
    03057344747,
    1974,
    `m`,
    `Antonia da Conceição Silva`,
    ``,
    ``,
    ``,
    ``,
    `Rua Conceição de Macabu`,
    247,
    `Jardim Marilea`,
    28890000
)

let pessoa1 = new Pessoa
(
    `Thiago Pereira da Silva`,
    11414134770,
    1987,
    `m`,
    `Cláudia Pereira da Silva`,
    `Niterói`,
    `Rio de Janeiro`,
    `Rio de Janeiro`,
    ``,
    `Rua Joaquim de Queiroz`,
    161,
    `Ramos`,
    21061610
)

let pessoa2 = new Pessoa
(
    `Renan Cunha da Costa`,
    14818397725,
    1991,
    `m`,
    `Conceição Elizabeth da Cunha`,
    `Rio de Janeiro`,
    ``,
    ``,
    ``,
    `Rua Barros Barreto`,
    103,
    `Bonsucesso`,
    21032140
)

/*console.log(`${pessoa0.idadePessoa()}`)*/

class Pyramid
{
    constructor(base, height)
    {
        this.base = base
        this.height = height
    }

    get volume()
    {
        return this.calcVolume().toFixed(2)
    }

    calcVolume()
    {
        return (1 / 3) * this.base * this.height
    }
}

/*
let piramide = new Pyramid(prompt(`digite o valor da base`), prompt(`digite o valor da altura`))
alert(`A pirâmide tem volume ${piramide.volume}`)
*/


class Sphere
{
    constructor(radius)
    {
        this.radius = radius
    }

    get volume()
    {
        return this.calcVolume().toFixed(2)
    }

    calcVolume()
    {
        return (4 / 3) * Math.PI * Math.pow(this.radius, 3)
    }

    get surfaceArea()
    {
        return this.calcSurfaceArea().toFixed(2)
    }

    calcSurfaceArea()
    {
        return 4 * Math.PI * Math.pow(this.radius, 2)
    }
}

class BlackHole extends Sphere
{
    constructor(radius, mass)
    {
        super(radius)
        this.mass = mass
    }
}


let terra = new Sphere(prompt(`digite o raio da terra`))
alert(`A Terra possui ${terra.surfaceArea} km² de área e ${terra.volume} km³ de volume`)
