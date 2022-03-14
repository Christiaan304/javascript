let vec = [2, 1, 4, 8, 7, 55, `CHB`]

vec.push(0, `lorem`, 3)
vec.sort()
console.log(vec)
console.log(`O vetor tem ${vec.length} posições`)
console.log(2*vec[4])

let pos = vec.indexOf(3)

if ( pos == -1 )
{
    console.log(`O valor não foi encontrado`)
}
else
{
    console.log(`O valor está na posição ${pos}`)
}

