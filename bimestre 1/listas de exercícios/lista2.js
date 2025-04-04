// #ex-7

function ParImpar(v1){
    if(v1%2==0){
        console.log("Par")
    }
    else console.log("Ímpar")
};

ParImpar(4)
ParImpar(87)
ParImpar(4568)

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

console.log(EhPrimo(13))
console.log(EhPrimo(1678))
console.log(EhPrimo(149))
console.log(EhPrimo(24))

// ex-9

function ConvertaCelsiusPFahrenheit(C){
    console.log(`o valor ${C}ºC transformado para F é ${C*1.8 + 32}`)
}

ConvertaCelsiusPFahrenheit(10)
ConvertaCelsiusPFahrenheit(35)
ConvertaCelsiusPFahrenheit(26)

// ex-10

function ContaPalavras(text){
    const quantidade = text.trim().split(/\s+/);
    
    if (text.trim() === "") {
        return 0;
    }
    
    return console.log(quantidade.length);
}

ContaPalavras("esse texto é muito curto e tem 9 palavras")

// ex 11

function ConversaoSegundosEmHoras(seg){
    s = 0
    m = 0
    h = 0

    while(seg>=60){
        m++
        seg -= 60

        if(m>=60){
            h++
            m -= 60
        }

        if((seg-60) < 0){
            s = seg
        }
    }

    console.log(`${h}h ${m}min e ${s}s`)
}

ConversaoSegundosEmHoras(3600)
ConversaoSegundosEmHoras(4508)
ConversaoSegundosEmHoras(78568)

//ex-12

function eqA(x, y) {
    return console.log(Math.sqrt(Math.pow(x, 2) + Math.pow(y, 3)) / Math.abs(x + y));
  }
  
  function eqB(x) {
    return console.log((1 + Math.sin(x)) / (1 + Math.cos(x)));
  }
  
  function eqC(x) {
    return console.log(1 + (1 / x) + (1 / Math.pow(x, 2)) + (1 / Math.pow(x, 3)) + (1 / Math.pow(x, 4)));
  }
  
  function eqD(x, y) {
    let frac = x / y;
    return console.log((x + Math.pow(frac, 2)) / (x - Math.pow(frac, 2)));
  }
  
  function eqE(x) {
    return console.log(Math.sqrt(Math.PI + Math.sqrt(Math.pow(Math.E, 3) + Math.sqrt(4 + Math.sqrt(x)))));
  }
  

eqA(5, 4)
eqB(18)
eqC(9)
eqD(7, 5)
eqE(3)
  