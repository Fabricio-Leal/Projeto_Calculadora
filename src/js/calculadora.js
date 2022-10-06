class Calcular{
    constructor(firstNumber, operator, secondNumber){
        this.firstNumber = firstNumber
        this.operator = operator
        this.secondNumber = secondNumber
    }

    Potencia(num){
        return Math.pow(num, 2)    
    }
    
    Raiz(num){
        return Math.sqrt(num)
    }
    
    mudaSinal(num){
        return num - num*2
    }
    
    Soma(num1, num2){
        return num1 + num2
    }
    
    Subtracao(num1, num2){
        return num1 - num2
    }
    
    Divisao(num1, num2){
        return num1 / num2
    }
    
    Multiplicacao(num1, num2){
        return num1 * num2
    }
    
    Porcentagem(num1, percent){
    
    
    }
}