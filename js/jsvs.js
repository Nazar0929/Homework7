// Створити масив з трьох чисел. Змінити значення другого елемента масиву на 10.

const array = [4, 7, 9];
array[1] = 10;
console.log(array);


// Створити масив із трьох рядків. Додати до масиву ще одну рядків.

const massive = ["Ivan", "Taras", "Vadim"];
massive[3] = "Miroslav";
console.log(massive);

// Створити скрипт який поверне суму всіх чисел в масиві.

const nums = [3, 9, 12];
let sum = 0;

for (let i = 0; i < nums.length; i += 1) {
    sum += nums[i]
}

console.log(sum);


// Створити масив з 5-ти чисел. Вивести на екран всі елементи масиву за допомогою циклу for.

const numbers = [1, 4, 5, 2, 9];

for (let i = 0; i < numbers.length; i += 1) {
    console.log(numbers[i]);
    
}


// Створити масив із 5-ти рядків. Вивести на екран кожен рядокз масиву, 
// який містить більше 5-ти символів.


const names = ["text", "massive", "Vadim", "Teacher", "Nazar"];
for (let i = 0; i < names.length; i += 1) {
    if (names[i].length > 5) {
        console.log(names[i]);
        
    }
}


// Створити масив з 10-ти чисел. Знайти та вивести на екран максимальне значення з масиву.




const ten = [3, 12, 7, 88, 23, 4, 99, 11, 2, 5];
let max = ten[0];

for (let i = 1; i < ten.length; i += 1) {
    if (ten[i] > max) {
        max = ten[i];
    }
}

console.log(max);


// Створити масив з 10-ти чисел. Знайти всі парні числа в масиві та вивести їх на екран.

const number = [32, 1, 9, 8, 6, 5, 4, 44];
for (let i = 0; i < number.length; i += 1) {
    if (number[i] % 2 === 0) {
        console.log(number[i]);
        
    }
}
