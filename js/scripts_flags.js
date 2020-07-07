// flag 1.
/**
 * дан массив, нужно проверить, есть ли в нем элемент со значением 'c' или нет.
 * Если есть - вывести 'есть', если нет - вывести 'нет'.
 */
const newArray = ['a', 'g', 'd', 'd', 't'];

const isC = value => value === 'c';

const result = newArray.some(isC);// excellent
/**
 * Other solution
 */
const result2 = newArray.includes('c');

/**
 * not bad
 */
if (result) {
    console.log('is');
} else {
    console.log('not is');
}

/**
 * better
 */
console.log(result ? 'is' : 'isn\'t');

// flag 2.

const newArray1 = ['a', 'g', 'd', 'c', 'd', 't'];

/**
 * необходимо создать функцию hasElem,
 * которая параметром будет принимать массив и возвращать
 * true, если 'c' есть в массиве,
 * и false - если нет *
 */

/**
 *
 * @param {Array} arr - some array
 * @returns {boolean}
 */
const hasElem = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'c') {
            return true;
        }
    }
    return false;
};

console.log(hasElem(newArray1));

// flag 3.
/**
 * Дан массив с числами. Проверьте, что в этом массиве есть число 5.
 * Если есть - выведите 'да', а если нет - выведите 'нет'.
 */
const newArray2 = [12, 35, 345, 3];
/**
 * никогда не забываем писать "тело" условных конструкций (фигурные скобки)
 */
if (newArray2.some((value) => value === 5)) {
    console.log('yes');
} else {
    console.log('no');
}

/**
 * My solution
 */
console.log(newArray2.includes(5) ? 'yes' : 'no');

// flag 4.
/**
 * Дано число, например 31.
 * Проверьте, что это число не делится ни на одно другое число кроме себя самого и единицы.
 * То есть в нашем случае нужно проверить, что число 31 не делится на все числа от 2 до 30.
 * Если число не делится - выведите 'false', а если делится - выведите 'true'.
 */
const newCount = 8;
let result4 = false;

for (let i = 2; i <= ( newCount - 1 ); i++) {
    if (newCount % i === 0) {
        result4 = true;
        break; // stop cycle is good =)
    } else {
        result4 = false;
    }
}

console.log(result);

// flag 5

/**
 * Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд.
 * Если есть - выведите 'да', а если нет - выведите 'нет'.
 */

const newArr1 = [1, 2, 3, 4, 6, 5];
let result5;
/**
 * В условии цикла есть логическая ошибка:
 * когда i будет раной (length - 1) в  цикле мы запрашиваем элемент с (i + 1),
 * т.е. с таким индексом которого нет,  иными словами выходим за границы цикла
 */
for (let i = 0; i < newArr1.length; i++) {
    if (newArr1[i] === newArr1[i + 1]) {
        result5 = true;
        break;
    } else {
        result5 = false;
    }
}

/**
 * Solution
 */
let _result = false;
for (let i = 1; i < newArr1.length; i++) {

    if (newArr1[i] === newArr1[i - 1]) {
        result5 = true;
        break;
    }

}

console.log(result5);

