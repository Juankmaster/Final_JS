
//Objeto Calculadora
var Calculadora = {
// Metodo de inicio del Objeto  Calculadora
  init : function (){
    this.asignarEventos();
  },
// Metodo que asigna los eventos del teclado
  asignarEventos:function (){
    var teclas= document.getElementsByClassName('tecla');
    for (var i = 0; i < teclas.length; i++){
      teclas[i].onclick=this.eventosCalculadora;
      teclas[i].onmouseleave=this.eventoTeclaLiberada;
    }
 },
//Metodo para iprimir en la pantalla
  imprimirPantalla:function (tecla) {
   elementos = elementos + tecla;
   document.getElementById('display').innerHTML=elementos;
 },
//Metodo que realiza el evento cuando se libera un tecla
  eventoTeclaLiberada:function(event){
    event.target.style.width="4.8em";
 },
// Metodo que realiza la logica de la calculadora
  eventosCalculadora:function(event){
    var tecla= event.currentTarget.id;
    var numero = document.getElementById('display').innerHTML;

//Funcion que imprime los valores de las teclas en la pantalla
    if (numero == 0 && tecla.length <= 1) {
        elementos = document.getElementById('display').innerHTML=tecla;

// permite imprimir solo una vez el caracter punto
     }else if (tecla == '.'){
           if (elementos.indexOf(".")==-1){
            Calculadora.imprimirPantalla(tecla);
         }
//permite imprimir o eliminar el caracter menos
      }else if (tecla == '-') {
            if (elementos.indexOf("-")==-1) {
                Calculadora.imprimirPantalla(tecla);
      }else{
        var signo=elementos.indexOf('-');
            nuevaCadena = elementos.replace('-', '');
            elementos="";
            Calculadora.imprimirPantalla(nuevaCadena);
           }
// permite imprimir el caracter punto por primera vez
      }else if (numero == 0 && tecla == ".") {
         Calculadora.imprimirPantalla(tecla);
// Filtrar solo las teclas numericas y limitar la cantidad de elementos solo a ocho
      }else if (elementos.length < 8 &&  tecla.length<=1){
         Calculadora.imprimirPantalla(tecla);
//Permite  limpiar la pantalla
      }else if (tecla =='on') {
         document.getElementById('display').innerHTML=0;
         elementos="0";
//Permite realizar las operaciones matematicas segun la tecla presionada
      }else if (tecla == 'mas' || tecla == 'menos' || tecla == 'por' || tecla == 'dividido') {
         operacion = tecla;
         elemento1= parseFloat(document.getElementById('display').innerHTML);
         document.getElementById('display').innerHTML='';
      }else if (tecla == 'igual' && elemento1 != 0) {
         elemento2= parseFloat(document.getElementById('display').innerHTML);
         Calculadora.operacionesMatematicas(elemento1, elemento2, operacion);
      }
         document.getElementById(tecla).style.width="4.5em";
},//Fin metodo Calculadora
//Metodo que contiene la logica de las operaciones operaciones Matematicas
 operacionesMatematicas:function(num1, num2, operacion){
  switch (operacion) {
//Suma
    case 'mas':
             resultado = num1 + num2;
              Calculadora.imprimirResultado(resultado);
      break;
//Resta
    case 'menos':
           resultado = num1 - num2;
            Calculadora.imprimirResultado(resultado);
    break;
//Multiplicacion
    case 'por':
           resultado = num1 * num2;
          Calculadora.imprimirResultado(resultado);
    break;
//Division
   case 'dividido':
           resultado = num1 / num2;
            Calculadora.imprimirResultado(resultado);
    break;
    default:
    }

 },
//Metodo para limitar e imprimir el resultado de las operaciones mataematicas
 imprimirResultado:function (resultado) {
  var tama= resultado.toString();
   if (tama.length >8) {
     document.getElementById('display').innerHTML=resultado.toPrecision(5);
   }else {
     document.getElementById('display').innerHTML=resultado;
   }
 }

}//Fin Objeto Calculadora

Calculadora.init();
