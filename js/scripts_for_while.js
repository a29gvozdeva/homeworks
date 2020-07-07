/**
 * Вывести # столько раз, сколько указал пользователь.
 */
const userCount = Number(prompt('Put your count'));
let i = 1;
while (i < userCount) {
    alert('#');
    i++;
}

/**
 * Пользователь ввел число, а на экран вывелись все числа от введенного до 0.
 */
const userNumber = Number(prompt('Put your number'));
/*
 * range [n, 0)
 * */
for (let i = userNumber; i > 0; i--) {
    console.log(i);
}

/**
 * Запросить число и степень. Возвести число в указанную степень и вывести результат.
 */
let userBase = Number(prompt('Put your base'));
const userPower = Number(prompt('Put your power'));
let result = userBase;

for (let i = 1; i < userPower; i++) {
    result = result * userBase;
}
console.log(result);

/**
 * Запросить 2 числа и найти все общие делители.
 */
const userNumber1 = Number(prompt('Put your Number1'));
const userNumber2 = Number(prompt('Put your Number2'));
/**
 * проверку на минимальное/максимальное значение можно обойти логическим условие в теле функции
 */

getCommonDividers(userNumber2, userNumber1);

/**
 * Именование функций предпочтительно начинать с глагола
 */

//function devidersCommon(minNumber, maxNumber) {

/**
 * Еще один метод решения проблемы минимального и максимального значения
 */
function getCommonDividers(anyNumber1, anyNumber2) {
    const limit = Math.min(anyNumber2, anyNumber1);
    for (let i = 1; i <= limit; ++i) {
        if (( anyNumber1 % i === 0 ) && ( anyNumber2 % i === 0 )) {
            console.log(i);
        }
    }
}

/**
 * Оптимальный код будет следующий
 */
/**
 *
 * @param {number} a
 * @param {number} b
 * @returns {number[]}
 */
function getCommonDividersFinal(a, b) {
    const dividers = [];
    const min = a < b ? a : b;
    /**
     * После минимального числа смотреть не имеет смысла
     */
    for (let i = 1; i <= min; ++i) {
        if (a % i === 0 && b % i === 0) {
            dividers.push(i);
        }
    }
    return dividers;
}

// 5)
/**
 * Посчитать факториал введенного пользователем числа.
 */
const userCount2 = Number(prompt('Put your count'));

function getFactorial(count) {
    let result = 1;
    for (let i = 1; i <= count; ++i) {
        result *= i;
    }
    return result;
}

console.log(getFactorial(userCount2));

/**
 * Предлагать пользователю решить пример 2 + 2 * 2 до тех пор, пока он не решит его правильно.
 */

let userAnswer;
do {
    userAnswer = Number(prompt('How much is 2 + 2 * 2 = ?'));
}
while (userAnswer !== 6);
alert('Your answer is right');

/**
 * Делить число 1000 на 2 до тех пор, пока не получится число
 меньше 50. Вывести это число и сколько делений произвели.
 */

let i2 = 0;
let resultDevide = 1000;
do {
    resultDevide /= 2;
    i2++;
}
while (resultDevide > 50);
console.log(i2);
console.log(resultDevide);

/**
 * Вывести все числа от 1 до 100, которые кратные указанному пользователем числу.
 */
const userCount3 = Number(prompt('Put your count'));
/**
 * Optimazed
 */
for (let i = userCount3; i <= 100; i += userCount3) {

    console.log(i);

}