var minhaVar = 'minha variavel';

function minhaFunc(x, y){
    return x + y;
}
//ES06 ou ES 2015
let num = 2;
const PI = 3.14;

var numeros = [1,2,3];
numeros.map(function(valor){
    return valor * 2;
});
numeros.map(valor =>{valor * 2}); //Es 2015 Ecma Script

class Matematica {
    soma(x,y){
        return x+y;
    }
}

var n1 : string = 'teste'; //tipagem de variavel