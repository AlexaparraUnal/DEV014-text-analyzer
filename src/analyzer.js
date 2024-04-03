const analyzer = {
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.

    let palabras = 0; //inicio la variable en 0
    for (let i = 0; i < text.length; i++) {   //recorre cada caracter del texto principio a fin
      if (text[i] !== " ") {  //se utiliza el operador de desigualdad para  comparar la posicion i con espacio en blanco
        if (i === 0 || text[i - 1] === " ") { //verifica si es posicion 0 o el caracter anterior es un espacio

          palabras++;//cumplido lo anterior se incremanta palabras 

        }
      }
    }

    return palabras;
  },

  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.

    const caracteres = text.length;
    return caracteres;

  },

  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.

    // const sinespacios = text.trim(" ");
    //const caracteres = sinespacios.length;

    //return caracteres;
    const caracteres = 0; //inicio la variable en 0
    for (let i = 0; i < text.length; i++) {   //recorre cada caracter del texto principio a fin
      if (text[i] !== " ") {  //se utiliza el operador de desigualdad para  comparar la posicion i con espacio en blanco
        if (i === 0 || text[i - 1] === " ")
          caracteres.length

      }
    }

  },

  getAverageWordLength: (text) => {
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    let palabras = 0;
    let longitudTotal = 0;
    for (let i = 0; i < text.length; i++) {   //recorre cada caracter del texto principio a fin
      if (text[i] !== " " && (i === 0 || text[i - 1] === " ")) { //verifica si es posicion 0 o el caracter anterior es un espacio
        palabras++;
      }
      if (text[i] !== " ") {
        longitudTotal++;
      }
    }
    let media;
    if (palabras > 0) {
      media = longitudTotal / palabras;

    } else {
      media = 0;
    }
    return media;
  },

  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    let numero = 0;
    const separacion = text.split(" ");
    for (let i = 0; i < separacion.length; i++) {
      if (!isNaN(parseInt(separacion[i]))) {
        numero++;
      }
    }
    return numero;
  },

  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    let suma = 0;
    const separacion = text.split(" ");
    for (let i = 0; i < separacion.length; i++) {
      if (!isNaN(parseInt(separacion[i]))) {

        suma += parseInt(separacion[i]);

      }
    }
    return suma;

  }

}

export default analyzer;
