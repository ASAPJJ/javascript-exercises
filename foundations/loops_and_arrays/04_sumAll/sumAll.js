const sumAll = function(valorA, valorB) {
    let mayor=0;
    let menor=0;
    let suma=0;
    if(Number.isInteger(valorA) && Number.isInteger(valorB) && valorA>0 && valorB>0){
        if(valorA>valorB){
            mayor = valorA;
            menor = valorB;
        }else{
            mayor = valorB;
            menor = valorA;
        }
        for(let i = menor; i<=mayor;i++){
            suma += i; 
        }
    } else{
        return "ERROR";
    }
    return suma;
};

// Do not edit below this line
module.exports = sumAll;
