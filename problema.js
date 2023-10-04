// Creamos una funcion de X'' a X'
function x2ax1(X2) {
  //Definimos una variable vacia de x1(x') para guardar luego las combinaciones de letras
  var X1 = '';
  //Esto nos dice cuántos caracteres hay en X2
  const largo = X2.length;
  console.log(largo);
  //Hacemos un bucle donde siempre será la posicion par lo que metemos en X1
  for (var i = 0; i < largo; i += 2) {
    X1 = X1 + X2[i];
  }
  //variable vacia para guardar un número
  var car =""; 
  // Aqui siempre sera impar para poder hacer que no coincida con las posiciones de anterior bucle
  if (largo % 2 === 0) {
    car = largo - 1;
  } else {
    car = largo - 2;
  }
  //aqui es para hacer el bucle donde metemos en las posiciones impar las letras que quedan
  while (car >= 0) {
    X1 = X1 + X2[car];
    car = car - 2;
  }
  //retorna el resultado
  return X1;
}

// Función para transformar X' en X
function x1ax(X1) {
  //Definimos una variable para guardar el resultado y para guardar los consantes para poder dar la vuelta
  var X = '';
  var conso = '';
  //Creamos el bucle para donde tambien contara el, cuanto de largo es la frase
  for (var i = 0; i < X1.length; i++) {
  //Miramos si en X1 en la posicion que esta hay vocales en mayuscula o minuscula
    if ('aeiouAEIOU'.includes(X1[i])) {
      //Aqui es para que X guarde el conso por si tiene, y lo vuelve a poner en nada, para guardar los consonantes y de X1 se lo pasa a X
      X = X + conso;
      conso = '';
      X = X + X1[i];
    } else {
    //Aqui entramos cuando es un consonante y no un vocal.
      conso = X1[i] + conso;
    }
  }
  //Para cuando acabe guardamos el ultimo consonante por si tiene.
  X = X + conso;

  return X;
}

// Función para decodificar un mensaje
function desco(X2) {
  //Aqui es que llamos la funcion de X2 a X1 y luego con el resultado que nos de de X1 a X y entregamos el resultado final
  const X1 = x2ax1(X2);
  const X = x1ax(X1);
  return X;
}


document.addEventListener("DOMContentLoaded", function () {
  // Almacenamos lo que escribe el usuario
  var encriptado = document.getElementById("encriptado");
  // Guardamos el botón en una variable para utilizarlo más adelante para un evento
  var buttonclic = document.getElementById("buttonclic");

  buttonclic.addEventListener("click", () => {
    var resultado = desco(encriptado.value);
    document.getElementById("resultado").innerText = resultado;
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Almacenamos lo que escribe el usuario
  var encriptado = document.getElementById("encriptado2");
  // Guardamos el botón en una variable para utilizarlo más adelante para un evento
  var buttonclic = document.getElementById("buttonclic2");

  buttonclic.addEventListener("click", () => {
    var resultado = x2ax1(encriptado.value);
    document.getElementById("resultado2").innerText = resultado;
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Almacenamos lo que escribe el usuario
  var encriptado = document.getElementById("encriptado3");
  // Guardamos el botón en una variable para utilizarlo más adelante para un evento
  var buttonclic = document.getElementById("buttonclic3");

  buttonclic.addEventListener("click", () => {
    var resultado = x1ax(encriptado.value);
    document.getElementById("resultado3").innerText = resultado;
  });
});