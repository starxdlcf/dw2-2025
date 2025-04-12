// EX 1
function Quadrante(x,y){
    if(x==y && y==0){
        return "origem"
        } else if(x==0 && y!=0){
            return "eixo x"
        } else if(x!=0 && y==0){
            return "eixo y"
        } else if(x>0 && y>0){
            return "Q1"
        } else if(x>0 && y<0){
            return "Q4"
        } else if(x<0 && y>0){
            return "Q2"
        } else if(x<0 && y<0){
            return "Q3"
        }
}
// console.log(Quadrante(10,15)) //q1
// console.log(Quadrante(-12,67)) //q2
console.log(Quadrante(12,-1)) //q4
// console.log(Quadrante(-6,-1)) //q3
// console.log(Quadrante(8,0)) // eixo y
// console.log(Quadrante(0,3)) // eixo x
// console.log(Quadrante(0,0)) // origem

// EX 2

   // let a = 7
// let b = 5
// let c = 7

// let a = 6
// let b = 6
// let c = 10

// let a = 6
// let b = 6
// let c = 6

// let a = 6
// let b = 8
// let c = 10

function QualTriangulo(a,b,c){
    let [x, y, z] = [a, b, c].sort((a, b) => b - a);

    if (x >= y+z) {
        console.log("Os valores " +x +","+ y+","+z +" não formam um triangulo\n")
    } else{
        if (x*x > y*y + z*z){
            console.log("Os valores " +x +","+ y+","+z +" formam um triangulo obtusângulo")
        } 
        if (x*x < y*y + z*z){
            console.log("Os valores " +x +","+ y+","+z +" formam um triangulo acutângulo")
        } 
        if (x*x == y*y + z*z){
            console.log("Os valores " +x +","+ y+","+z +" formam um triangulo retângulo\n")
        } 
        if ( x ==y && x==z){
            console.log("Os valores " +x +","+ y+","+z +" formam um triangulo equilátero\n")
        } 
        if ((x==y && x!=z) || (x==z && x!=y) || (y==z && y!=x)){
            console.log("Os valores " +x +","+ y+","+z +" formam um triangulo isósceles\n")
        }
}
}

QualTriangulo(7,7,5)

function calcularReajuste(salario) {
    let porcentagem;
  
    if (salario <= 400.00) {
        porcentagem = 15;
    } else if (salario <= 800.00) {
        porcentagem = 12;
    } else if (salario <= 1200.00) {
        porcentagem = 10;
    } else if (salario <= 2000.00) {
        porcentagem = 7;
    } else {
        porcentagem = 4;
    }
  
    const reajuste = salario * (porcentagem / 100);
    const salariofinal = salario + reajuste;
  
    console.log(`Salário com o reajuste: ${salariofinal.toFixed(2)}`);
    console.log(`Reajuste do salário: ${reajuste.toFixed(2)}`);
    console.log(`%: ${porcentagem} %\n`);
  }
  

  calcularReajuste(450.00);
  calcularReajuste(867.00);
  calcularReajuste(2000.00);

  function EhPalindromo(string){
    let gnirts = string.split('').reverse().join('');

    if(string == gnirts){
        return console.log("True")
    } else{
        return console.log(`False... A string revertida é: ${gnirts}`)
    }
  }

  EhPalindromo("arara")
  EhPalindromo("anna")
  EhPalindromo("baleia")

