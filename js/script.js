let cl = console.log;

let exercise = document.getElementsByClassName('result');


for (let i = 0; i < exercise.length; ++i) {
  let variableStr = '';

  exercise[i].onclick =  () => {

    for (let j = 0; j < exercise.length; ++j) {

      if (j != i && exercise[j].classList.contains('result__vizited')) {
        exercise[j].classList.remove('result__vizited');
        break;
      }

    }
    
    console.clear();

  
    switch (i) {
      case 0 :
        variableStr = 'aaa@bbb@ccc';
        cl(exercise1(variableStr));
        break;
    
      case 1 :
        exercise2();
        break;

      case 2 :
        exercise3();
        break;

      case 3 :
        cl(`arr = [4, 2, 5, 19, 13, 0, 10]\nsquareSumm = ${exercise4()}`);
        break;

      case 4 :
        cl(`a = 3, b = 5 \na - b = ${exercise5(3, 5)}`);
        cl(`a = 6, b = 1 \na - b = ${exercise5(6, 1)}`);
        break;

      case 5 :
        cl(exercise6());
        break;

      case 6 :
        cl(exercise7());
        break;

      case 7 :
        cl(exercise8());
        break;

      case 8 :
        exercise9();;
        break;

      case 9 :
        exercise10('https://tech.onliner.by/2018/04/26/smart-do-200/?utm_source=main_tile&utm_medium=smartdo200#zag3');
        break;

    }
  }
}
/*1. Дана строка 'aaa@bbb@ccc'. Замените все @ на ! с помощью глобального поиска и замены. */
let exercise1 = (str) => {
  return str.replace(/@/gi, '!');
}

/*2. В переменной date лежит дата в формате 2025-12-31. Преобразуйте эту
дату в формат 31/12/2025. */
let exercise2 = () =>  {
  let date = new Date(),
      variableDate = '';
  
  variableDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`;
  cl(`Date now = ${variableDate}`);
  cl(variableDate.replace(/\//gi, '/'));
}

/*3. Дана строка «Я учу javascript!». Вырежете из нее слово «учу» и слово
«javascript» тремя разными способами (через substr, substring, slice).*/
let exercise3 = () =>  {
  let str = 'Я учу javascript!',
      variableStr = str.substr(2, 3);
  
  cl(`str = ${str}`);
  cl(`substr = ${variableStr}`);
  variableStr = str.substring(6);
  cl(`substring = ${variableStr}`);
  variableStr = str.slice(2, 5);
  cl(`slice = ${variableStr}`);
}

/*4. Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень
из суммы кубов его элементов. Для решения воспользуйтесь циклом for. */
let exercise4 = () =>  {
  return (Math.sqrt([4, 2, 5, 19, 13, 0, 10].reduce( (sum, value) => { return sum += value ** 3; }, 0)));
}

/*5. Даны переменные a и b. Отнимите от a переменную b и результат
присвойте переменной c. Сделайте так, чтобы в любом случае в переменную
c записалось положительное значение. Проверьте работу скрипта при a и b,
равных соответственно 3 и 5, 6 и 1. */
let exercise5 = (a, b) =>  {
  return Math.abs(a - b);
}

/*6. Выведите на экран текущую дату-время в формате 12:59:59 31.12.2014.
Для решения этой задачи напишите функцию, которая будет добавлять 0
перед днями и месяцами, которые состоят из одной цифры (из 1.9.2014
сделает 01.09.2014). */
let exercise6 = () =>  {
  let date = new Date();

  let newDate = {
      hours: date.getHours() + '',
      min: date.getMinutes() + '',
      sec: date.getSeconds() + '',
      day: date.getDate() + '',
      month: date.getMonth() + '',
      year: date.getFullYear() + ''
  };

  newDate = Object.assign(newDate, checkAndWriteStr(newDate));

  return `${newDate.hours}:${newDate.min}:${newDate.sec} ${newDate.day}.${newDate.month}.${newDate.year}`;
}

let checkAndWriteStr = (obj) => {
  for( let i in obj) {
    if (obj[i].length < 2) obj[i] = '0' + obj[i];
  }
  return obj;
}

/*7. Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая
найдет строки aba, abba, abbba по шаблону: буква 'a', буква 'b' любое
количество раз, буква 'a'. */
let exercise7 = () =>  {
  return 'aa aba abba abbba abca abea'.match(/ab+a/gi);

}

/*8. Напишите ф-цию строгой проверки ввода номер телефона в
международном формате (<код страны> <код города или сети> <номер
телефона>). Функция должна возвращать true или false. Используйте
регулярные выражения. */
let exercise8 = () =>  {
  let num = prompt('Введите номер: например + 375 29 1234567','+375 29 1234567');

  let regexp = /^\+375.?(44|33|17|29).?[0-9\s?\-?]+?$/gi;

  return regexp.test(num);
}

/*9. Напишите ф-цию строгой проверки адреса эл. почты с учетом следующих
условия:
- весь адрес не должен содержать русские буквы и спецсимволы, кроме
одной «собачки», знака подчеркивания, дефиса и точки;
- имя эл. почты (до знака @) должно быть длиной более 2 символов, причем
имя может содержать только буквы, цифры, но не быть первыми и
единственными в имени;
- после последней точки и после @, домен верхнего уровня (ru, by, com и т.п.)
не может быть длиной менее 2 и более 11 символов.
Функция должна возвращать true или false. Используйте регулярные
выражения. */
let exercise9 = () =>  {
  let email = 'email@mail.ru',
      wrong = 'ema il@dfdf.ru';
  
  let regexp = /^([a-z][\w\-\.]*[a-z]){2,}@[a-z\.]{2,11}\.[a-z]{2,11}$/i;

  cl(`email = ${regexp.test(email)}`);
  cl(`wrong email = ${regexp.test(wrong)}`);
}

/*10. Напишите ф-цию, которая из полного адреса с параметрами и без,
например: https://tech.onliner.by/2018/04/26/smart-do-200/?
utm_source=main_tile&utm_medium=smartdo200#zag3 , получит адрес
доменного имени (https://tech.onliner.by), остальную часть адреса без
параметров (/2018/04/26/smart-do-200/), параметры
(utm_source=main_tile&utm_medium=smartdo200) и хеш (#zag3). В адресе
может и не быть каких-либо составляющих. Ф-ция должна возвращать
массив. */
let exercise10 = (link) =>  {
  let regexp = /(^https\:\/\/[\w\-\.]+(?=\/)){1}([\w\/\.\-]+(?=\?))(?:\?)(.+(?=\#))(\#.*)/;

  let arrAddress = link.match(regexp);

  cl(`link = ${arrAddress[0]}`);
  cl(`domen = ${arrAddress[1]}`);
  cl(`without params = ${arrAddress[2]}`);
  cl(`params = ${arrAddress[3]}`);
  cl(`hash = ${arrAddress[4]}`);
}