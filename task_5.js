// Дан произвольный массив. Необходимо вывести количество элементов массива, 
// затем перебрать его и вывести в консоль каждый элемент массива.


let arr = [1,2,3,4,5];

console.log(arr.length);

arr.map(function(item, index, array){
   console.log(item);
});


//другой вариант

let arr1 = [1,2,3,4,5];

console.log(arr1.length);

arr1.forEach(function(item) {
  console.log(item);
});