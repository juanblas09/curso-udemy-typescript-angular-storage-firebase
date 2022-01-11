function multiplicar(n1: number, n2:number):number{
    return n1*n2;
}

function promedio(notas:Array<number>):number {
    let suma:number=0;
    for (let nota of notas) {
        suma+=nota;
    }
    return (suma/notas.length);
}

console.log(multiplicar(10,5));
console.log((promedio([60,80,90])).toFixed(2))
