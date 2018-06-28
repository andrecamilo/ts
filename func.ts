
let isMaiorQue12 = function (parametro: number): boolean{
    return parametro < 12
}

let distancia = 4
console.log(`foi ${distancia} é maior ${isMaiorQue12(distancia) ? 'sim': 'não'}`)   

let call = (nome: string) => console.log(`vai la, ${nome} `)
call('r2')

function inc (speed: number, inc: number = 1): number {
    return speed + inc
}

console.log(`inc (4,1) = ${inc(4,1) }`)
console.log(`inc (4) = ${inc(4) }`)