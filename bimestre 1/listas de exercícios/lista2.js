// #ex-7

function ParImpar(v1){
    if(v1%2==0){
        console.log("Par")
    }
    else console.log("Ímpar")
};

// ParImpar(4)
// ParImpar(87)
// ParImpar(4568)

// ex-8

function EhPrimo(v1){
    let n = 2
    let r = "Primo"
    while(n<v1){
        if(v1%n == 0){
            return r = "Não Primo"
        }
        n++
    }
    return r
};

// console.log(EhPrimo(13))
// console.log(EhPrimo(1678))
// console.log(EhPrimo(149))
// console.log(EhPrimo(24))

// ex-9

function ConvertaCelsiusPFahrenheit(C){
    console.log(`o valor ${C}ºC transformado para F é ${C*1.8 + 32}`)
}

// ConvertaCelsiusPFahrenheit(10)
// ConvertaCelsiusPFahrenheit(35)
// ConvertaCelsiusPFahrenheit(26)

// ex-10

function ContaPalavras(text){
    
}