import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
//querySelector texto ingresado 
const textarea = document.querySelector('textarea[name="user-input"]');
//getelementarybyid boton limpiar 
const Limpiar = document.getElementById('reset-button');
//event listener para el input
const WordCount = document.querySelector("li[data-testid=word-count]")
const characterCount = document.querySelector("li[data-testid=character-count]")
const excluding = document.querySelector("li[data-testid=character-no-spaces-count]")
const number = document.querySelector("li[data-testid=number-count]")
const sumnumber = document.querySelector("li[data-testid=number-sum]")
const average = document.querySelector("li[data-testid=word-length-average]")



textarea.addEventListener("input", function () {
  WordCount.innerHTML = "palabras: " + analyzer.getWordCount(textarea.value)
  characterCount.innerHTML = "caracteres: " + analyzer.getCharacterCount(textarea.value)
  excluding.innerHTML = "caracteres sin espacio: " + analyzer.getCharacterCountExcludingSpaces(textarea.value)
  number.innerHTML = "numeros: " + analyzer.getNumberCount(textarea.value)
  sumnumber.innerHTML = "total numeros: " + analyzer.getNumberSum(textarea.value)
  average.innerHTML = "media: " + analyzer.getAverageWordLength(textarea.value)
});

Limpiar.addEventListener("click", () => {
  textarea.value = '';
  WordCount.innerHTML = "palabras: " + 0
  characterCount.innerHTML = "caracteres: " + 0
  excluding.innerHTML = "caracteres sin espacio: " + 0
  number.innerHTML = "numeros: " + 0
  sumnumber.innerHTML = "total numeros: " + 0
  average.innerHTML = "media: " + 0

  });
