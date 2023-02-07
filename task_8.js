// Создайте произвольный массив Map. 
// Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».
// Используйте шаблонные строки.


let listMap = new Map ()
listMap.set (12,"Зайцев");
listMap.set (23,"Волков");
listMap.set (34,"Медведев");
listMap.set (45,"Лисицин");
listMap.set (56,"Барсуков");

console.log (listMap.size);

listMap.forEach((value, key) => {
console.log(`Ключ - ${key}, значение -  ${value}.`); 
});