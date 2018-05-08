// Funcion para redicir el tamaño de las teclas de la Calculadora
function tamanoteclaPresionada (elemento) {
    var tecla= event.currentTarget.id;
    elemento.style.width="4.5em";
    var numero = document.getElementById('display').innerHTML;

//Funcion que imprime los valores de las teclas en la pantalla

function imprimirPantalla(tecla) {
    elementos = elementos + tecla;
    document.getElementById('display').innerHTML=elementos;
}

// Evita que el cero se imprima como primera valor

if (numero == 0 && tecla.length <= 1) {
    elementos = document.getElementById('display').innerHTML=tecla;

  }

// permite imprimir solo una vez el caracter punto
else if (tecla == '.') {
      if (elementos.indexOf(".")==-1) {
      imprimirPantalla(tecla);

      }
  }
//permite imprimir o eliminar el caracter menos
else if (tecla == '-') {
    if (elementos.indexOf("-")==-1) {
      imprimirPantalla(tecla);

    }else{
    var signo=elementos.indexOf('-');
    nuevaCadena = elementos.replace('-', '');
    elementos="";
    imprimirPantalla(nuevaCadena);
      }
  }
// permite imprimir el caracter punto por primera vez
else if (numero == 0 && tecla == ".") {

        imprimirPantalla(tecla);
   }

// Filtrar solo las teclas numericas y limitar la cantidad de elementos solo a ocho
 else if (elementos.length < 8 &&  tecla.length<=1){
            imprimirPantalla(tecla);
  }

//Permite  limpiar la pantalla
 else if (tecla =='on') {

      document.getElementById('display').innerHTML=0;
      elementos="0";

  }

  else if (tecla == 'mas' || tecla == 'menos' || tecla == 'por' || tecla == 'dividido') {

     operacion = tecla;
     elemento1= parseFloat(document.getElementById('display').innerHTML);
      document.getElementById('display').innerHTML='';


  }else if (tecla == 'igual' && elemento1 != 0) {

     elemento2= parseFloat(document.getElementById('display').innerHTML);
      operacionesMatematicas(elemento1, elemento2, operacion);

  }

//Funcion que realiza las operaciones matematicas
  function operacionesMatematicas(num1, num2, operacion){

    switch (operacion) {
      case 'mas':
               resultado = num1 + num2;
                document.getElementById('display').innerHTML=resultado.toPrecision(2);
        break;

    case 'menos':
             resultado = num1 - num2;
              document.getElementById('display').innerHTML=resultado.toPrecision(2);
      break;

    case 'por':
             resultado = num1 * num2;
            //  resultado.toPrecision(4);
              document.getElementById('display').innerHTML=resultado.toPrecision(2);
      break;

    case 'dividido':
             resultado = num1 / num2;
              document.getElementById('display').innerHTML=resultado.toPrecision(2);
      break;
      default:

    }

  }

}//Fin funcion

// Funcion para restablecer tamaño de las teclas de la Calculadora
function tamanoteclaLiberada (elemento) {
 elemento.style.width="4.8em";
 // alert("hola la tecla es:"+event.currentTarget.id+ "elemento="+elemento);

}

function operacionesMatematicas(elementos){


}

var Calculadora = {

  sumar:function () {

  },

  restar:function () {

  },

  multiplicar:function () {

  },

  dividir:function () {

  },

  asignarEventos:function () {
  var teclas= document.getElementsByClassName('tecla');
  for (var i = 0; i < teclas.length; i++) {
      teclas[i].onclick=this.eventoTamanoTeclaPresionada;
      teclas[i].onmouseleave=this.eventoTeclaLiberada;
      // teclas[i].onclick=this.mostrarEnPantalla;
   }

  },

  mostrarEnPantalla:function(event){
    // var tecla= event.currentTarget.id;
    // alert(tecla);
    var numero = document.getElementById('display').innerHTML;
      if (numero != 0) {

    }
  },

    eventoTamanoTeclaPresionada:function (event) {
    tamanoteclaPresionada(event.target);
  },
    eventoTeclaLiberada:function (event) {
    tamanoteclaLiberada(event.target);
  },


  init:function () {
    this.asignarEventos();
    // this.mostrarEnPantalla();
  }


}

  Calculadora.init();
