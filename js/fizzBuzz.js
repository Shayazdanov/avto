/*
Условия работы
Если число делится без остатка на 3, то вместо него выводится слово Fizz
Если число делится без остатка на 5, то вместо него выводится слово Buzz
Если число делится без остатка и на 3, и на 5, то вместо числа выводится слово FizzBuzz
В остальных случаях выводится само число

Не будет работать если:
Функция принимает два параметра (begin и end), определяющих начало и конец диапазона (включительно). 
Для простоты считаем, что эти параметры являются целыми числами больше нуля. 
Если диапазон пуст (в случае, когда begin > end), то функция просто ничего не печатает.
*/

const fizzBuzz = (begin, end) => {
    if (begin > end || begin <= 0 || end <=0 || Number.isInteger(begin) === false || Number.isInteger(end) === false ){
        return console.log('числа не отвечают условиям! Ознакомтесь с условиями в файле fizzBuzz');
    };

    while (begin <= end){
        if ((begin % 5 === 0 && begin % 3 === 0)){
            console.log('fizzBuzz');
        }else if (begin % 5 === 0){
            console.log('Buzz');
        }else if (begin % 3 === 0){
            console.log('Fizz');
        }else {
            console.log(begin);
        }
        begin++;
    }
};

export default fizzBuzz;