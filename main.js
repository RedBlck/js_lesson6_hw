// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let hello = 'hello world';
// console.log(hello.length);
// let lorem = 'lorem ipsum';
// console.log(lorem.length);
// let javascript = 'javascript is cool';
// console.log(javascript.length);


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let hello = 'hello world';
// console.log(hello.toUpperCase());
// let lorem = 'lorem ipsum';
// console.log(lorem.toUpperCase());
// let javascript = 'javascript is cool';
// console.log(javascript.toUpperCase());


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let hello = 'HELLO WORLD';
// console.log(hello.toLowerCase());
// let lorem = 'LOREM IPSUM';
// console.log(lorem.toLowerCase());
// let javascript = 'JAVASCRIPT IS COOL';
// console.log(javascript.toLowerCase());


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   ';
// console.log(str);
// console.log(str.trim());


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
//     let str = 'Каждый охотник желает знать';
//     let stringToarray = (str) => {
//         return str.split(' ');
//     }
// console.log(stringToarray(str));


// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
// let str = 'Каждый охотник желает знать';
// let delete_characters = (str, length) => {
//     return str.slice(0, length);
// }
// console.log(delete_characters(str, 8));



// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
// let str = "HTML JavaScript PHP";
// let insert_dash = (str) => {
//     return str.replaceAll(' ', '-').toUpperCase();
// }
// console.log(insert_dash(str));


// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
// let firstUp = (str) => {
//     return str[0].toUpperCase() + str.slice(1);
// }
// console.log(firstUp('хелоу октен'));



// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
// let capitalize = (str) => {
//     let arr = str.split(' ');
//     let result = arr.map(array => array.charAt(0).toUpperCase() + array.slice(1)).join(' ');
//     return result
// };
// console.log(capitalize('lets go to okten school'));