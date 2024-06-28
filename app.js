/*let parrafo = document.querySelector('p');// se conecta con el objeto p en html
parrafo.innerHTML = 'indica un número entre 1 y 10'// muestra en pantalla esta texto*/
let numeroSecreto =0;
let intentos =0;
let listaNumerosSorteandos =[];
let numeroMaximo = 10;

function asignarTextoElemento(elemento,texto){
    let elementoHtml = document.querySelector(elemento);// se conecta a un objeto de la etiqueta de html h1
    elementoHtml.innerHTML = texto;// muestra en la pagina del juego el titulo   
    return;
}

function verificarIntento(){
   let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
   
   console.log(intentos);
   if(numeroDeUsuario===numeroSecreto){
      asignarTextoElemento('P',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`)
      document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
    // el usuario no acerto
     if(numeroDeUsuario > numeroSecreto){
        asignarTextoElemento('p','El Numero secreto es menor');
     }else{
        asignarTextoElemento('p','El Numero secreto es mayor');
     }
     intentos++;
     limpiarCaja();
   }
   return; //regresa la funcion
}
function limpiarCaja(){
    document.querySelector('#valorUsuario').value ='';
    
}

function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
  //si el numero generado esta incluido en la lista  
  console.log(numeroGenerado);
  console.log(listaNumerosSorteandos);
  //si ya se sortearon todos los numeros
    if(listaNumerosSorteandos.length== numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
    }else{

      if(listaNumerosSorteandos.includes(numeroGenerado)){
        return generarNumeroSecreto();
    }else{
        listaNumerosSorteandos.push(numeroGenerado);
        return numeroGenerado;
    }
}

}

function condicionesIniciales(){

    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
function reiniciarJuego(){
    //limpiar la caja, 
    limpiarCaja();
    //indicar mensar de intervalos de numeros
    //generar el numero aleatorio
    //inicializar el numero de intentos
     condicionesIniciales();
    //dejar el boton de nuevo juego se manda llamar id html y se le asigna nuevante el valor que tenia con set
    document.querySelector('#reiniciar').setAttribute('disabled','true');

}
 condicionesIniciales();