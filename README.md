# Fundamentos_de_Programacion
```
let objeto= {
    valor1: 1,
    valor2:2,
    "valor3": 3
}
console.log(objeto);
// No  es un arreglo como tal
console.log(objeto[0]);
/*
Al no tener comillas busca acceder a una variable anteriormente
creada, en esta caso no existe, por lo tanto no pude acceder a ella
*/
console.log(objeto[valor1]);
//Accede al valor del atributo "valor1" de forma correcta
console.log(objeto["valor1"]);
```
## JSON: Notación de Objetos de JavaScript

El JSON (JavaScript Object Notation) es un formato ligero de intercambio de datos ampliamente utilizado en el desarrollo de aplicaciones web y móviles. Se basa en una estructura de pares clave-valor que resulta fácilmente legible tanto para los humanos como para las máquinas. A continuación, exploraremos en detalle qué es JSON, su sintaxis y cómo se utiliza.

### Sintaxis de JSON

La sintaxis de JSON es simple y concisa. Los datos se representan en formato de texto y se organizan en una estructura jerárquica. Está compuesta por dos elementos principales: objetos y matrices.

- **Objetos**: un objeto JSON se delimita por llaves (`{}`) y contiene pares clave-valor. Cada par se compone de una clave (cadena de caracteres entre comillas dobles) seguida de dos puntos (`:`) y un valor. Los pares clave-valor se separan por comas (`,`). Por ejemplo:
```json
{
  "nombre": "Juan",
  "edad": 30,
  "ciudad": "Madrid"
}
```

- **Matrices**: una matriz JSON se delimita por corchetes (`[]`) y puede contener múltiples valores separados por comas. Los valores pueden ser objetos, matrices, cadenas, números, booleanos o `null`. Por ejemplo:
```json
[
  "Manzana",
  "Banana",
  "Naranja"
]
```

### Utilidades de JSON

JSON es ampliamente utilizado en el intercambio de datos entre aplicaciones y servidores, ya que es un formato independiente del lenguaje de programación. Algunas de las utilidades más comunes de JSON son:

1. **Almacenamiento y transmisión de datos**: JSON se utiliza para almacenar y transmitir datos estructurados en aplicaciones web y móviles. Los datos pueden ser enviados al servidor desde un cliente o viceversa en formato JSON, lo que facilita la manipulación y comprensión de los datos.

2. **API (Interfaz de Programación de Aplicaciones)**: muchas API utilizan JSON para el intercambio de datos. Cuando una aplicación solicita datos a una API, esta suele responder con una estructura JSON que contiene la información solicitada.

3. **Configuración**: JSON se utiliza para almacenar configuraciones y preferencias en archivos de configuración. Esta flexibilidad permite ajustar fácilmente el comportamiento de una aplicación sin necesidad de modificar el código fuente.

4. **Persistencia de datos**: JSON se utiliza para almacenar datos en bases de datos NoSQL como MongoDB, que admiten documentos JSON como formato de almacenamiento.

### Ventajas de JSON

JSON presenta varias ventajas significativas en comparación con otros formatos de intercambio de datos, entre las cuales se destacan:

- **Legibilidad**: la estructura de JSON es intuitiva y fácil de entender tanto para los desarrolladores como para los usuarios. Esto facilita la depuración, el análisis y la edición manual de los datos.

- **Compatibilidad**: JSON es compatible con una amplia variedad de lenguajes de programación, lo que facilita su uso en diferentes entornos de desarrollo.

- **Ligereza**: JSON es un formato liviano, lo que significa que la representación de los datos en formato JSON ocupa menos espacio en comparación con otros formatos, como XML.

- Fácil manipulación: JSON proporciona métodos y funciones sencillos para manipular y transformar datos. Las aplicaciones pueden convertir fácilmente datos JSON a objetos o estructuras de datos nativas de su lenguaje de programación.

En resumen, JSON es un formato de intercambio de datos ligero y fácil de leer que se utiliza ampliamente en el desarrollo de aplicaciones web y móviles. Su simplicidad y compatibilidad hacen que sea una opción preferida para el almacenamiento, transmisión y manipulación de datos estructurados en diversas aplicaciones.
