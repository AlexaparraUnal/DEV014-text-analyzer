# Analizador de texto

## Índice

* [1. Generalidades del proyecto]
* [2. Funcionalidades]
* [3. Instrucciones de uso]
* [4. Tecnologías]
* [5. Estructura]
* [6. Pruebas]
* [7. Créditos]




## 1. Generalidades del proyecto

  Este proyecto es un analizador de texto, el cual utiliza un input para que el usuario al ingresar
  su texto, sea tomado y analizado por el sistema,  arrojando algunas métricas como longitud, estructura del texto, conteo de palabras, caracteres, números, suma de números, entre otras, que sirven al usuario para dar una mayor comprensión, para toma de decisiones y uso de su texto.



## 2. Funcionalidades

  Este proyecto tiene varias funcionalidades como lo son: 
    1. un cuadro de texto, el cual permite al usuario, por medio de un input, ingresar el texto con el cual se va a trabajar 

    2.  unas métricas, que se arroja al analizar el texto.


    * **Recuento de palabras**: la aplicación  cuenta  el número de
    palabras en el texto de entrada y muestra este recuento.

    * **Recuento de caracteres**: la aplicación  cuenta  el número de
    caracteres en el texto de entrada, incluidos espacios y signos de
    puntuación, y muestra este recuento.

    * **Recuento de caracteres excluyendo espacios y signos de puntuación**:
    la aplicación  cuenta  el número de caracteres en el texto de
    entrada, excluyendo espacios y signos de puntuación, y muestra este recuento.

    * **Recuento de números**: la aplicación cuenta  cuantos números hay en
    el texto de entrada y muestra este recuento .

    * **Suma total de números**: la aplicación suma todos los números que
    hay en el texto de entrada y muestra el resultado.

    * **Longitud media de las palabras**: la aplicación  calcula la
    longitud media de las palabras en el texto de entrada y la muestra .

    "Todas estas se muestran en el lado izquierdo del cuadro de texto , automáticamente mientras el usuario va ingresando algo al mismo."

    3. La aplicación tiene un botón de" limpiar" para el contenido de la caja de texto que funciona haciendo clic, y que también borra las métricas y que dan los valores en ceros.

## 3. Instrucciones de uso

  Para usar esta aplicación, se debe ingresar un texto cualquiera en el cuadro de texto, ya sea que contenga letras, caracteres, números.

  La aplicación va a ir mostrando los resultados de las métricas a mano izquierda; Si se requiere ingresar otro texto se da en el botón "limpiar", y automáticamente se borrará el texto y las métricas quedaran en ceros.


## 3. Instrucciones de uso

  Para usar esta aplicación, se debe ingresar un texto cualquiera en el cuadro de texto, ya sea que contenga letras, caracteres, números.

  La aplicación va a ir mostrando los resultados de las métricas a mano izquierda; Si se requiere ingresar otro texto se da en el botón "limpiar", y automáticamente se borrará el texto y las métricas quedarán en ceros.

## 4. Tecnologías 

  1. HTML: se desarrolla HTML semántico
    -La aplicación tiene un encabezado 
    -La aplicación usa un cuadro de texto (textarea)
    -La aplicación usa un `<ul>`, con 6 hijos `<li>`
    -La aplicación cuenta con un pie de página donde se usa un `<footer>` que es padre de un `<p>`
    -La aplicación usa un `<button>`

  2. CSS:
    

  - La aplicación usa selectores de tipo: header, footer, selectores CSS de clase, LI, selectores de atributo, de id, y de textarea.
 

  "Se utiliza un modelo de caja (box model): border, margen, padding"


### JavaScript

* **Tipos de datos primitivos**
* **Strings (cadenas de caracteres)**
* **Variables (declaración, asignación, ámbito)*
* **Uso de condicionales (if-else, switch, operador ternario, lógica booleana)**
* **Uso de bucles/ciclos (while, for, for..of)**
* **Funciones (params, args, return)**

  


## 5. Estructura.

El proyecto tiene esta estructura:

├── src
│   ├── analyzer.js
│   ├── index.html
│   ├── index.js


1. analizer.js:  En este se encuentran todas las funciones, que dan respuesta a las métricas, y en la última línea realiza el proceso de exportación de las funciones para que pueda ser importado y usado en otras clases
2. Index.html: En este se encuentra la estructura del proyecto
3. index.js: Se encuentra toda la lógica del proyecto, se realiza la importación del analyzer es decir de las funciones, así, con métodos se pueda acceder a los elementos del DOM por medio de selectores css, y poder dar valor a las métricas. Por último se encuentra la función del botón que sirve para realizar el borrado de las métricas y texto.

## 6. Pruebas

Este proyecto cuenta con 3 conjuntos de pruebas:

### Pruebas unitarias

 se prueba cada unidad de código por separado, estas se ejecutan por medio del comando "npm run test", el cual ejecuta los métodos que se contiene en el analyzer.js



### Pruebas de criterios mínimos de aceptación

Estas pruebas analizan los archivos
[`index.html`](src/index.html),
[`index.js`](src/index.html),
[`analyzer.js`](src/analyzer.js)
y
[`style.css`](src/style.css)


Estas se  ejecutan  con el comando `npm run test:oas`

#### Pruebas end-to-end

se verifica el funcionamiento de todo el sistema, se ejecutan  con el comando `npm run test:e2e` 

## 7. Créditos

  Realizado por : Paola Alexandra Parra Pena 