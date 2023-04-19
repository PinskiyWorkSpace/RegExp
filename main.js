/*
1. Вам дан массив с именами файлов
['module.jsx', 'index.html', 'style.css', 'index.js', 'file.ts', 'library.css', 'my.plugin.js']
Напишите функцию которая может перебрать такой массив и отфильтрует его оставив только имена файлов с расширениями .js .jsx .ts
*/


const task1 = ['module.jsx', 'index.html', 'style.css', 'index.js', 'file.ts', 'library.css', 'my.plugin.js'];

const arrayFilter = arr => {
  const regExp1 = /\S+(j|t)sx*/g;
  return arr.join(" ").match(regExp1);
};

console.log('Первая задача', arrayFilter(task1));


/*
  2. Напишите регулярное выражение, которое находит email адреса:
  До символа @ email может содержать не менее одного символа класса \w.
  После символа @ и до .(точки), после которой начинается домен, может 
  содержать только буквы и быть не короче трех символов.
  После .(точки) может содержать только буквы и быть от 2 до 5 символов в длину.

  Примеры валидные: info@methed.ru, max24@mail.com, java_script@google.io
  Примеры не валидные: my-mail@yandex.ru, tom_yam@ya.ru, zero@mai1.xyz
*/

const regExp2 = /^(\w+)@([a-z]){3,}\.([a-z]{2,8})$/gi;


/*
3. Напишите регулярное выражение, которое находит текст в скобках
Проверьте на этом примере
*/

const str3 = 'Здоровый (праздничный) ужин вовсе не обязательно должен состоять из шпината, гречки и вареной куриной грудки. Самыми лучшими способами приготовления еды (по мнению моей мамы) являются следующие: варка на пару, запекание или варка в воде. Помимо стандартных мандаринов и ананасов, отличным украшением любого стола станут необычные, экзотические фрукты(например: личи, рамбутан, тамаринд). Здоровой может быть даже выпечка, если она приготовлена на пару.';

const regExp4 = /\(.*?\)/gi; // с учетом скобок
const regExp3 = /(?<=\().*?(?=\))/gi; // только то, что в скобках
console.log('Третья задача', str3.match(regExp4));


/*
4.Напишите функцию которая принимает строку, в этой строке находит url адрес и заменяет с помощью replace на тег
домены вида http://site.ru, https://site.com на 
<a href="http://site.ru">http://site.ru</a>
*/

const regExp5 = /(https?:\/\/[^\s]+)/gi;
const str5 = 'Здоровый (праздничный) ужин вовсе не обязательно должен состоять из шпината, гречки и вареной куриной грудки. Самыми лучшими способами приготовления еды (по мнению моей мамы) являются следующие: варка на пару, запекание http://site.ru , или варка в воде. Помимо стандартных мандаринов и ананасов, отличным украшением любого стола станут необычные, экзотические фрукты(например: личи, рамбутан, тамаринд). Здоровой может https://site.com быть даже выпечка, если она приготовлена на пару.';

const searchUrl = str => {
  const arr = str.match(regExp5);
  arr.forEach(el => {
    console.log(`<a href="${el}">${el}</a>`);
  });
};

searchUrl(str5);

