
function somar () {
    var num1 = document.querySelector(".num1").value;
    var num2 = document.querySelector(".num2").value;

    if(isNaN(num1) || isNaN(num2)){
        alert("OPERAÇÃO INVÁLIDA");
        }
        else{

    var resultado = parseInt(num1) + parseInt(num2);
    document.querySelector(".resultado").innerHTML = resultado;
        }

}


function multiplicar () {
    var num1 = document.querySelector(".num1").value;
    var num2 = document.querySelector(".num2").value;
    
    if(isNaN(num1) || isNaN(num2)){
        alert("OPERAÇÃO INVÁLIDA");
        }
        else{
    var resultado = parseInt(num1) * parseInt(num2);
    document.querySelector(".resultado").innerHTML = resultado;
        }
}


function subtrair () {
    var num1 = document.querySelector(".num1").value;
    var num2 = document.querySelector(".num2").value;

    if(isNaN(num1) || isNaN(num2)){
        alert("OPERAÇÃO INVÁLIDA");
        }
        else{
   
   
    var resultado = parseInt(num1) - parseInt(num2);
    document.querySelector(".resultado").innerHTML = resultado;

        }
}



function limpar () {
   
        document.querySelector(".resultado").innerHTML = "_";
        document.querySelector(".num1").value = " ";
        document.querySelector(".num2").value = " ";
    
}
