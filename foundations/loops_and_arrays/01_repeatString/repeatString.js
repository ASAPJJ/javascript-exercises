const repeatString = function(str, num) {
    let resultado = ""
    if(num>=0){
        for(let i=0;i<num;i++){
           resultado += str;
        }
    }else{
        return "ERROR";
    }
    return resultado;
};

// Do not edit below this line
module.exports = repeatString;
