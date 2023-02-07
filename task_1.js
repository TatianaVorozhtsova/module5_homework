// Напишите программу, которая работала бы следующим образом: в prompt вводится значение. 
// С помощью унарного плюса (арифметический оператор) необходимо преобразовать его в число, 
// затем проверить с помощью typeof, принадлежит ли оно к множеству Number.
// Если это число, то вывести в консоль чётное оно или нечётное.
// Если передано не число, выведите: «Упс, кажется, вы ошиблись».
// *NaN, хоть и относится к типу Number, числом не является. Добавьте отдельную проверку для этого значения.


let a = + prompt ('Пожалуйста, введите любое значение');

if (typeof (a) === "number") {
  
  if ( isNaN(a)) {
    alert ("!Упс, кажется, вы ошиблись!");
 
  } 
  
  else if (a % 2 === 0) {
      console.log("Чётное число");
  }
  else {
      console.log ("Нечётное число");
  }
  
}


// Ещё вариант, немного иначе:


let b = + prompt ('Пожалуйста, введите любое значение');

if (Number.isNaN (b)) {
  alert ("!Упс, кажется, вы ошиблись!");
} 

if (Number.isFinite (b)) {

  if (b % 2 === 0) {
      console.log("Чётное число");
    }
  else {
      console.log ("Нечётное число");
    }

}
