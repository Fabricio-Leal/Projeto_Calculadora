function Potencia(){
    let num = document.getElementById('visor').value
    return document.getElementById('visor').value = Math.pow(num, 2)    
}

function Raiz(){
    let num = document.getElementById('visor').value

    if(num < 0){
        document.getElementById('visor').value = "Entrada inválida"
    }else{
        return document.getElementById('visor').value = Math.sqrt(num)
    }
    
}

function mudaSinal(){
    let num = document.getElementById('visor').value
    return document.getElementById('visor').value = num - num*2
}

function Soma(num1, num2){
    return num1 + num2
}

function Subtracao(num1, num2){
    return num1 - num2
}

function Divisao(num1, num2){
    return num1 / num2
}

function Multiplicacao(num1, num2){
    return num1 * num2
}

function Porcentagem(num1, percent){


}

function Preencher(valor){
    let valorVisor = document.getElementById('visor').value
    document.getElementById('visor').value = valorVisor.concat(valor.value)
}

console.log(Multiplicacao(12, 2))