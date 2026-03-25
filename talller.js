var nombre = "Vanessa";
console.log("Nombre inicial:", nombre);

nombre = "María";
console.log("Nombre reasignado:", nombre);

const apellido = "Torres";
// apellido = "Gomez"; //  Esto da error porque cuando se usa const,
 ese valor queda fijo, Si se intenta cambiar va a dar error 
console.log("Const no se puede reasignar");

if (false) {
  let edad = 20;
}
// console.log(edad); // la variable edad vive únicamente
dentro de las llaves del if, al acceder fuera arroja error
console.log("let tiene alcance de bloque");

let texto = "Hola";
let numero = 25;
let booleano = true;
let vacio = null;
let indefinido;

console.log(typeof texto);
console.log(typeof numero);
console.log(typeof booleano);
console.log(typeof vacio); // object (bug histórico de JS)
console.log(typeof indefinido);


let persona = {
  nombre: "Ana",
  edad: 28
};

let hobbies = ["leer", "correr", "viajar"];

console.log(typeof persona); // object
console.log(typeof hobbies); // object

let numero1 = 10;
let numero2 = "5";

console.log(numero1 + numero2); // 105 (string) El + con un string concatena en lugar de sumar
console.log(numero1 * numero2); // 50 (number). Los demás operadores aritméticos convierten el string a número

console.log(String(25)); 
console.log(Number("100")); 
console.log(Boolean("")); 
console.log(Boolean("hola")); 


console.log(10 === "10"); //  === compara valor Y tipo sin hacer conversiones
console.log(10 == "10");  // == compara solo el valor aunque los tipos 
sean diferentes por lo que convierte datos automáticamente


let num = 7;

if (num % 2 === 0) {
  console.log("Es par");
} else {
  console.log("Es impar");
}


for (let i = 1; i <= 5; i++) {
  console.log(i);
}

try {
  throw new Error("Este es un error.");
} catch (error) {
  console.log("Ocurrió un problema:", error.message);
}

function multiplicar(a, b) {
  return a * b;
}
console.log(multiplicar(3, 4));

const multiplicarArrow = (a, b) => a * b;
console.log(multiplicarArrow(5, 6));

const saludar = () => "¡Hola a todos!";
console.log(saludar());

let globalVar = "Soy global";

function prueba() {
  let localVar = "Soy local";
  console.log(globalVar); // funciona
  console.log(localVar);  // funciona
}

prueba();
// console.log(localVar); // Error

let coche = {
  marca: "Toyota",
  mostrarMarca: function () {
    console.log("Marca:", this.marca);
  }
};

coche.mostrarMarca(); // this se refiere al objeto coche


let frutas = ["Manzana", "Banana"];
console.log(frutas);

frutas.push("Naranja");
console.log(frutas);

frutas.pop();
console.log(frutas);

let numeros = [1, 2, 3];

let duplicados = numeros.map(n => n * 2);
console.log(duplicados);

let mayores = numeros.filter(n => n > 1);
console.log(mayores);

frutas.forEach(fruta => console.log(fruta));

let encontrada = frutas.find(f => f === "Banana");
console.log(encontrada);

let indice = frutas.findIndex(f => f === "Manzana");
console.log(indice);

let libro = {
  titulo: "Cien años de soledad",
  autor: "Gabriel García Márquez",
  mostrarInfo: function () {
    console.log(`${this.titulo} - ${this.autor}`);
  }
};

libro.mostrarInfo();

class Animal {
  constructor(nombre) {
    this.nombre = nombre;
  }

  saludar() {
    return `Hola, soy ${this.nombre}`;
  }
}

let animal1 = new Animal("Firulais");
console.log(animal1.saludar());

class Perro extends Animal {
  constructor(nombre, raza) {
    super(nombre);
    this.raza = raza;
  }
}

let perro1 = new Perro("Max", "Labrador");
console.log(perro1.saludar());
console.log(perro1.raza);