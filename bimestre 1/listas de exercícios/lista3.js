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
// console.log(Quadrante(12,-1)) //q4
// console.log(Quadrante(-6,-1)) //q3
// console.log(Quadrante(8,0)) // eixo y
// console.log(Quadrante(0,3)) // eixo x
// console.log(Quadrante(0,0)) // origem

// EX 2
function QualTriangulo(x, y, z){
    let vtemp = 0
    let resultado = ""
    //reordenar variáveis
    if(x>y && x<z){
        vtemp = x
        x = z
        z = vtemp
    } else if(x<y && x>z){
        vtemp = x
        x = y
        y = vtemp
    } else if(x<y && x<z && y>z){
        vtemp = x
        x = y
        y = vtemp
    }  else if(x<y && x<z && y<z){
        vtemp = x
        x = z
        z = vtemp
    }

    //função de tipo de triangulo
    if(x==y && y==z){
        resultado += "Triângulo Equilátero | "
    } else if(x==y && x!=z) {
        resultado += "Triângulo Isóceles | "
    } else if(x!=y && x!=z && y!=z){
        resultado += "Triângulo Escaleno | "
    } else if(x==(y+z)){
        return "Não forma Triângulo"
    }

    // função de formar triangulo + tipo de angulo
    if(x^2 == (y^2 + z^2)){
        resultado += "Triângulo Retângulo"
    } else if(x^2 > (y^2 + z^2)){
        resultado += "Triângulo Obtusângulo"
    } else if(x^2 < (y^2 + z^2)){
        resultado += "Triângulo Acutângulo"
    }

    console.log(resultado)
}
QualTriangulo(3, 4, 5) // retangulo
QualTriangulo(8, 10, 6) // retangulo
QualTriangulo(7, 5, 7) // acutangulo, isoceles
QualTriangulo(10, 6, 6) // obtusangulo, isoceles
QualTriangulo(6, 6, 6) // acutangulo, equilatero
QualTriangulo(5, 2, 7) // nao forma triangulo