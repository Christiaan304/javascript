let valores = [2, 8, 5, 7, 3]
valores.push(`Lorem`)
valores.sort()

/*
for ( let pos = 0; pos < valores.length; pos++ )
{
    valores.sort()
    console.log(`A posição ${pos} tem valor ${valores[pos]}`)
}
*/

for ( let pos in valores )
{
    console.log(`A posição ${pos} tem valor ${valores[pos]}`)
}