function crearContador() {
  let contador = 0;

  return function incrementar () {
    contador = contador + 1;
    return contador;
  };
}

const contador1 = crearContador();
contador1();
contador1();