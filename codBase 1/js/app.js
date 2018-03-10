var operandoa;
var operandob;
var operacion;


function init(){
   //variables
   var display = document.getElementById("display");
   var siete = document.getElementById("7");
   var ocho = document.getElementById("8");
   var nueve = document.getElementById("9");
   var seis = document.getElementById("6");
   var cinco = document.getElementById("5");
   var cuatro = document.getElementById("4");
   var tres = document.getElementById("3");
   var dos = document.getElementById("2");
   var uno = document.getElementById("1");
   var cero = document.getElementById("0");
   var reset = document.getElementById("on");
   var mas = document.getElementById("mas");
   var igual = document.getElementById("igual");
   var dividido = document.getElementById("dividido");
   var por = document.getElementById("por");
   var menos = document.getElementById("menos");
   var punto = document.getElementById("punto");
  

   //Eventos


   siete.onclick = function(e){
     display.textContent = display.textContent + "7";
     
  }
   
   ocho.onclick = function(e){
     display.textContent = display.textContent + "8";
  }

   seis.onclick = function(e){
     display.textContent = display.textContent + "6";
  }

   nueve.onclick = function(e){
     display.textContent = display.textContent + "9";
  }

   cinco.onclick = function(e){
     display.textContent = display.textContent + "5";
  }

   cuatro.onclick = function(e){
     display.textContent = display.textContent + "4";
  }

   tres.onclick = function(e){
     display.textContent = display.textContent + "3";
  }

   dos.onclick = function(e){
     display.textContent = display.textContent + "2";
  }

   uno.onclick = function(e){
     display.textContent = display.textContent + "1";
  }

   cero.onclick = function(e){
     display.textContent = display.textContent + "0";
  }

   punto.onclick = function(e){
     display.textContent = display.textContent + ".";
  }

   reset.onclick = function(e){
     limpiar();
     display.textContent = display.textContent + "0";
     
  }


   mas.onclick = function(e){
     operandoa = display.textContent;
     operacion = "+";
     limpiar();
  }


   dividido.onclick = function(e){
     operandoa = display.textContent;
     operacion = "/";
     limpiar();
     numeros();
  }

   por.onclick = function(e){
     operandoa = display.textContent;
     operacion = "*";
     limpiar();

  }

   menos.onclick = function(e){
     operandoa = display.textContent;
     operacion = "-";
     limpiar();
  }


   igual.onclick = function(e){
     operandob = display.textContent;
     resolver();
  }
   

}



function maximo(){
 var texto = document.getElementById('display');
 if(texto.value.length<=2){
  texto.value=texto.value.substring(0,255);
 }
}




function limpiar(){
  display.textContent = "";
}


function resetear(){
   display.textContent = "";
   operandoa = 0;
   operandob = 0;
   operacion = "";
}


function resolver(){
  var res = 0;
  switch(operacion){
     case "+":
       res = parseFloat(operandoa) + parseFloat(operandob);
       break;

      case "/":
       res = parseFloat(operandoa) / parseFloat(operandob);
       break;

      case "*":
       res = parseFloat(operandoa) * parseFloat(operandob);
       break;

      case "-":
       res = parseFloat(operandoa) - parseFloat(operandob);
       break;

   }
   resetear();
   display.textContent = res;
}
