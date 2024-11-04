//////////----- Majburiy masalalar -----//////////



// 1-Misol

// Foydalanuvchining ismi va familiyasidan iborat string kiriting. Har bir so'z bosh harf bilan boshlanadigan qilib qaytaruvchi funksiyani yozing.

// let arr = "Muhammadaliyev Abdulbosid";
// function toUpperCaseName(arg) {
//     return arg.toUpperCase()
// }
// console.log(toUpperCaseName(arr));




// 2-Misol

// Berilgan stringni aylantiruvchi funksiyani yozing. Stringni teskari shaklida qaytaring.

// let arr = "Hello world";
// function reverse(arg) {
//     return arg.split('').reverse().join('')
// }
// console.log(reverse(arr));




// 3-Misol

// Massivdagi sonlarning o'rtacha qiymatini qaytaruvchi funksiyani yozing.

// let arr = [1, 2, 3, 4, 5];
// let sum = 0;
// function middleNumber(arg) {
//     let count = arg.length;
//     for (let i = 0; i < count; i++) {
//         sum += arg[i];
//     }
//     return count > 0 ? sum / count : 0;
// }
// console.log(middleNumber(arr));




// 4-Misol

// Massivdagi har bir elementning uzunligini qaytaruvchi funksiyani yozing. Funksiya qabul qilgan massiv ichidagi so'zlarning uzunligini qaytarishi kerak.

// let fruits = ["apelsin", "tarvuz", "banan", "gilos", "nok", "olma"];
// function elementLength(arg) {
//     let length = [];
//     for (let i = 0; i < arg.length; i++) {
//         length.push(arg[i].length)
//     }
//     return length
// }
// console.log(elementLength(fruits));




// 5-Misol

// Berilgan massivdagi barcha toq sonlarni chiqaruvchi funksiyani yozing.

// let arr = [1, 2, 3, 4, 5, 6];
// let res = arr.filter(function(value) {
//     return value % 2 == 1;
// })
// console.log(res);




// 6-Misol

// Ikki obyektni qabul qilib, ularni birlashtiruvchi funksiyani yozing.

// let obj1 = {name: "Abdulaziz", age: 45};
// let obj2 = {email: "test@gmail.com", number: +998902323222};
// function twoObjectAdd(obj1, obj2) {
//     return {...obj1, ...obj2};
// }
// console.log(twoObjectAdd(obj1, obj2));




// 7-Misol

// Foydalanuvchidan string qabul qilib, undagi bo‘sh joylarni olib tashlaydigan funksiyani yozing.

// let arr = "  Assalomu    ala  ykum ";
// function freePlaceRemove(arg) {
//     return arg.split(' ').join('');
// }
// console.log(freePlaceRemove(arr));




// 8-Misol

// Obyektdagi barcha qiymatlarni massivga o‘tkazuvchi funksiyani yozing.

// let obj = {
//     name: "Shukurullo",
//     age: 21,
//     email: "test@gmail.com",
//     isMarried: true,
// }
// function objectToArray(arg) {
//     let arr = [];
//     let keys = Object.keys(arg)
//     for (let i = 0; i < keys.length; i++) {
//         arr.push(arg[keys[i]]);
//     }
//     return arr
// }
// console.log(objectToArray(obj));




// 9-Misol

// Berilgan massivdagi sonlarning eng kichigi va eng kattasini aniqlab, obyekt sifatida qaytaruvchi funksiyani yozing (masalan, `{min: 2, max: 10}`).

// let arr = [2, 18, 32, 9, 15];
// function minAndMax(arg) {
//     let min = arg[0];
//     let max = arg[0];
//     for (let i = 1; i < arg.length; i++) {
//         if (arg[i] < min) {
//             min = arg[i]
//         }
//         if (arg[i] > max) {
//             max = arg[i]
//         }
//     }
//     return {
//         min: min,
//         max: max 
//     }
// }
// console.log(minAndMax(arr));




// 10-Misol

// Berilgan stringda nechta unli harf borligini hisoblovchi funksiyani yozing.

// let str = "Assalomu alaykum";
// let vowels = "AaEeIiOoUu";
// function countWowels(str) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (vowels.includes(str[i])) {
//             count++
//         }
//     }
//     return count
// }
// console.log(countWowels(str));




// 11-Misol

// Massivni qabul qilib, har bir elementiga 2 qo‘shadigan va qaytadigan funksiyani yozing.

// let arr = [1, 2, "salom", 3, 4, 5, "hayr", true];
// function valueAdd(arg) {
//     let sum = [];
//     for (let i = 0; i < arg.length; i++) {
//         sum.push(arg[i] + 2)
//     }
//     return sum;
// }
// console.log(valueAdd(arr));




// 12-Misol

// Massiv ichida eng uzun so'zni aniqlab qaytaruvchi funksiyani yozing.

// let arr = ["Apelsin", "Banan", "Olma", "Gilos", "Nok", "Behi", "Qulupnay"];
// function findTheBigLenth(arg) {
//     let max = arg[0];
//     for (let i = 1; i < arg.length; i++) {
//         if (arg[i].length > max.length) {
//             max = arg[i]
//         }
//     }
//     return max
// }
// console.log(findTheBigLenth(arr));




// 13-Misol

// Foydalanuvchidan massiv qabul qilib, uning ichidagi raqamlarni o‘rtacha qiymatidan katta bo‘lgan elementlarni ajratib qaytaruvchi funksiyani yozing.

// let arr = [1, 7, 9, 5, 8, 11];
// function bigFromMiddleNumber(arg) {
//     let sum = 0;
//     let res = [];
//     for (let i = 0; i < arg.length; i++) {
//         sum += arg[i]
//     }

//     let average = sum / arg.length;
//     for (let i = 0; i < arg.length; i++) {
//         if (arg[i] > average) {
//             res.push(arg[i])
//         }
//     }
//     return res;
// }
// console.log(bigFromMiddleNumber(arr));




// 14-Misol

// Stringni qabul qilib, “u” bilan boshlanadigan va tugaydigan belgini olib tashlaydigan funksiyani yozing.

// let arr = "Umidujonu";
// function removeAllU(str) {
//     let res = "";
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] !== "u" && str[i] !== "U") {
//             res += str[i];
//         }
//     }
//     return res
// }
// console.log(removeAllU(arr));




// 15-Misol

// Berilgan massivdagi barcha raqamlarning kvadratlari yig'indisini hisoblaydigan funksiyani yozing.

// let arr = [2, 4, 6, 8, 10];
// function countAllNumbers(arg) {
//     let sum = 0;
//     for (let i = 0; i < arg.length; i++) {
//         if (typeof arg[i] === 'number') {
//             sum += arg[i] ** 2
//         }
//     }
//     return sum
// }
// console.log("Berilgan massivdagi barcha raqamlarning kvadratlarini yig'indisini: " + countAllNumbers(arr));




// 16-Msiol

// Massivni teskari qilib qaytaruvchi funksiyani yozing (bunda massiv ichidagi elementlar teskari tartibda joylashadi).

// let arr = ["salom", true, 15, 68, "hayr", false];
// function reverseElement(arg) {
//     return arg.join(',').split(',').reverse()
// }
// console.log(reverseElement(arr));




// 17-Misol

// Stringni qabul qilib, uni har bir so‘zini katta harflarda yozib qaytaradigan funksiyani yozing.

// let str = "Assalomu alaykum";
// function toUpperCaseStr(str) {
//     return str.toUpperCase()
// }
// console.log(toUpperCaseStr(str));




// 18-Misol

// Obyektlar massividan berilgan yoshdan kattalarni ajratib qaytaradigan funksiyani yozing.

// let people = [
//     {name: "Alisher", age: 21},
//     {name: "Xurshid", age: 16},
//     {name: "Salohiddin", age: 13},
//     {name: "Bobur", age: 18}
// ]
// let age = 15;
// function filter(users, age) {
//     let res = [];
//     for (let i = 0; i < users.length; i++) {
//         if (users[i].age > age) {
//             res.push(users[i])
//         }
//     }
//     return res
// }
// console.log(filter(people, age));




// 19-Misol

// Massiv ichida nechta marta berilgan element uchrashganini aniqlovchi funksiyani yozing.

// let arr = [5, 1, 3, 4, 5, "salom", true, 5];
// function sameElement(arg, element) {
//     let count = 0;
//     for (let i = 0; i < arg.length; i++) {
//         if (arg[i] === element) {
//             count++
//         }
//     }
//     return count
// }
// console.log(sameElement(arr, 5));




// 20-Misol

// Ikki string qabul qilib, ularning umumiy harflarini ajratib qaytaradigan funksiyani yozing.

// let str1 = "Hello";
// let str2 = "World";
// function commonLetters(str1, str2) {
//     let common = [];
//     for (let i = 0; i < str1.length; i++) {
//         let char = str1[i];
//         if (str2.includes(char) && !common.includes(char)) {
//             common.push(char);
//         }
//     }
//     return common.join('');
// }
// console.log(commonLetters(str1, str2));








//////////----- Ixtiyoriy masalalar -----//////////




// 1-Misol

// Berilgan string ichida eng ko'p uchrayotgan belgini topuvchi funksiyani yozing. Masalan, "JavaScript" so'zida eng ko'p uchrayotgan belgi "a".

// function mostFrequentCharacter(str) {
//     let res = {};
//     for (let i = 0; i < str.length; i++) {
//         let char = str[i];
//         if (res[char]) {
//             res[char] += 1;
//         } else {
//             res[char] = 1;
//         }
//     }
//     let maxChar = '';
//     let maxCount = 0;
//     for (let char in res) {
//         if (res[char] > maxCount) {
//             maxCount = res[char];
//             maxChar = char;
//         }
//     }
//     return maxChar;
// }
// console.log("Bu yerda eng ko'p ishlatilgan: " + mostFrequentCharacter('JavaScript') + " harfdir.");




// 2-Misol

// Ikkita massiv qabul qilib, ulardagi o'xshash elementlarni qaytaruvchi funksiyani yozing. Funksiya faqat har ikkala massivda ham mavjud bo'lgan elementlarni o'z ichiga olgan yangi massivni qaytarsin.

// let arr1 = [1, 2, 3, 4];
// let arr2 = [2, 6, 8, 4];
// function sameElement(arg1, arg2) {
//     let newArr = [];
//     for (let i = 0; i < arg1.length; i++) {
//         let element = arg1[i]
//         if (arg2.includes(element) && !newArr.includes(element)) {
//             newArr.push(element)
//         }
//     }
//     return newArr
// }
// console.log("Bir-biriga o'xsash elementlar: " + sameElement(arr1, arr2))




// 3-Misol

// Massiv ichidagi obyektlarni berilgan kalit bo'yicha tartiblaydigan funksiyani yozing. Masalan, talabalarning ro'yxati bo'lib, har birida `{name: "Ism", age: son}`. Funksiya talabalarning yoshini oshish tartibida qaytarsin.

// let students = [
//     {name: "Alisher", age: 20 },
//     {name: "Akmal", age: 18 },
//     {name: "Javohir", age: 22 },
//     {name: "Muhtorjon", age: 19 }
// ];
// function sortStudents(arg) {
//     return arg.sort(function(a, b) {
//         return a.age - b.age
//     })
// }
// console.log(sortStudents(students));




// 4-Misol

// Obyekt ichidagi har bir qiymatni tekshirib, agar son bo'lsa 2 ga ko'paytiruvchi funksiyani yozing. Funksiya obyektni o'zgartirmasdan, yangi obyektni qaytarsin.

// let originalObject = {
//     name: "Ali",
//     age: 20,
//     height: 180,
//     isStudent: true
// };
// function makeObject(obj) {
//     let newObj = {}; 
//     for (const key in obj) {
//         if (typeof obj[key] === 'number') {
//             newObj[key] = obj[key] * 2; 
//         } else {
//             newObj[key] = obj[key];
//         }
//     }
//     return newObj;
// }
// console.log(makeObject(originalObject));
// console.log(originalObject); 




// 5-Misol

// Massiv qabul qilib, ichidagi barcha sonlar yig'indisini hisoblaydigan, lekin faqat takrorlanmas sonlarni qo'shadigan funksiyani yozing. Masalan, `[1, 2, 2, 3, 4, 4]` uchun natija `10` bo'lishi kerak (1 + 2 + 3 + 4).

// let arr = [1, 2, 3, 5, 5, 4, 50];
// function uniqueNumbers(arg) {
//     let uniqueNumbers = [];
//     let num = [];
//     let sum = 0;
//     for (let i = 0; i < arg.length; i++) {
//         num = arg[i]
//         if (!uniqueNumbers.includes(num)) {
//             uniqueNumbers.push(num)
//         }
//     }
//     for (let i = 0; i < uniqueNumbers.length; i++) {
//         sum += uniqueNumbers[i]
//     }
//     return sum
// }
// console.log(uniqueNumbers(arr));