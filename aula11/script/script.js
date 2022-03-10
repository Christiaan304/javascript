function verificar() {
    var pais = document.querySelector('input#txtpais')
    var res = document.querySelector('div#res')

    if (pais.value == 'brasil') {
        res.innerHTML = `Você está vivendo em ${pais.value}`
    } 
    else {
        res.innerHTML = `Você esta vivendo em ${pais.value}, você é estrangeiro`
    }
}