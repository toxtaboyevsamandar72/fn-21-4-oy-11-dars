



// 1-misol
// 1.  Bahosi 5, 4, 3 bo’lgan o’quvchilarni ismlaridan iborat massiv qaytaruvchi getNamesByGrade(students, grade) funksiya tuzing. (map, filter)
// 5 baho - (85 - 100)
// 4 baho - (70 - 85)
// 3 baho – (60 - 70)


// const students = [
//     { name: "Quincy", percent: 96 },
//     { name: "Jason", percent: 84 },
//     { name: "Alexis", percent: 100 },
//     { name: "Sam", percent: 65 },
//     { name: "Katie", percent: 90 },
//     { name: "Anna", percent: 75 },
// ].map((item) => {
//     if (item.percent >= 85) {
//         return { ...item, grade: 5 };
//     } else if (item.percent < 85 && item.percent >= 70) {
//         return { ...item, grade: 4 };
//     } else if (item.percent < 70 && item.percent >= 60) {
//         return { ...item, grade: 3 };
//     } else {
//         return { ...item, grade: 2 };
//     }
// });

// function getNamesByGrade(students, grade) {
//     return students.filter((students) => {
//         return students.grade == grade;
//     }).map((students) => {
//         return students.name;
//     });
// }

// let result = getNamesByGrade(students, 5);

// console.log(result);





// 2-MASALA Massiv elementlari kvadratlaridan hosil bo’lgan massiv hosil qiling. (map)Input: 
// [1, 2, 3, 4, 5]
// Output: [1, 4, 9, 16, 25]



// let Number = [1, 2, 3, 4, 5];

// let res = Number.map((Number) => {
// return Number**2;
// });
// console.log(res);



// 5.  Satrdagi so’zlarning bosh harflarini oling. (split, map, join)
// Input: 'George Raymond Richard Martin'
// Output: 'GRRM'


// text = 'George Raymond Richard Martin';

// let res = text.split(" ").map((text) => {
//     return text.charAt().toUpperCase()
// }).join("")

// console.log(res);


// 6.  Massivdagi eng yosh va eng qarilarni topib, ularni yoshlarini farqini toping. (sort).


// let jobs = [
//     { name: 'John', age: 13 },
//     { name: 'Mark', age: 56 },
//     { name: 'Rachel', age: 45 },
//     { name: 'Nate', age: 67 },
//     { name: 'Jeniffer', age: 65 }
// ];

// let res = jobs.sort((a, b) => {
//     return a.age - b.age;
// });
// console.log(res.at(-1).age - res.at(0).age);

// 7.  N ta elementdan iborat massiv berilgan.
// Massiv elementlari orasidan juftlarini va toqlarini o'z ichiga oladigan massivlar hosil qilinsin. (filter)

// let Number = [1, 2, 3, 4, 5, 6, 13, 34, 9, 7];

// let res = Number.filter((num) => {
//     return num % 2 == 0;
// });

// let result = Number.filter((num) => {
//     return num % 2 == 1;
// });


// console.log(res,result);

// 9. Products massivini id, name, price, rating va discount bo'yicha sortlash; (sort)

let products = [
    {
        id: 6,
        name: "Smarthpone",
        price: 12000,
        rating: 4.5,
        discount: 20,
    },
    {
        id: 2,
        name: "Acer",
        price: 10000,
        rating: 4.3,
        discount: 10,
    },
    {
        id: 1,
        name: "Mac book",
        price: 17000,
        rating: 4.7,
        discount: 40,
    },
    {
        id: 4,
        name: "HP",
        price: 21000,
        rating: 4.1,
        discount: 30,
    },
    {
        id: 5,
        name: "Dell",
        price: 35000,
        rating: 4.9,
        discount: 30,
    },
];


//   let res = products.sort((a, b)=>{
//     return a.id - b.id;
//   })

//   console.log(res);


//   let res = products.sort((a, b)=>{
//     return a.price - b.price;
//   })

//   console.log(res);


// 10. Rating bo'yicha eng kuchli product topilsin. (sort)



// let res = products.sort((a, b)=>{
//     return return a.rating - b.rating
// })
// console.log(res.at(-1).rating);

// 11. Narxi eng past bo'lgan product topilsin. (sort)



// let res = products.sort((a,b)=>{
//     return a.price - b.price;
// })
// console.log(res.at(0).price);






// 13. Faqatgina products nomlaridangina iborat bo'lgan massiv qaytaring. (map)



// let res = products.map((num) => {
// return num.name;
// })
// console.log(res);


// 14. Id si 5 bo'lgan elementni nomini qaytaruvchi dastur yozing. (find)



// let res = products.find((num)=> {
//     if (num.id==5) {
//     return  num.name;
//     }
// });

// console.log(res);

// let res = products.find((num)=> num.id==5).name;

// console.log(res);




// 15. Id si 4 bo'lgan productni o'chiruvchi dastur yozing. (filter)

// let res = products.filter((num) => {
// return num.id !== 4;
// })

// console.log(res);



// 16. Berilgan satrni faqatgina harflardan iborat ekanligiga tekshiring (split, every)


// let text = " xwjfnfnfggwb1wb".split("").every((num)=>{
// return !Number(num);
// })

// console.log(text);


// 17. Massiv truthy va falsy elementlardan tuzilgan. O’sha massivdagi truthy va falsy elementlarni alohida massivlarga ajratib object qilib qaytaruvchi getTruthyFalsy funksiya tuzing. (filter)


// let res = [false, 1, 10, "", null, "abdulaziz", 1.13, 0]



// function getTruthyFalsy(val) {
//     return {
//         truthy: val.filter((item) => item),
//         folsey: val.filter((item) => !item),
//     }
// }


// let result = getTruthyFalsy(res);
// console.log(result);

// 18. Satr berilgan. 
// Satrdagi so'zlar uzunligidan iborat bo'lgan massiv qaytaring. (split, map)
// Input: "Men Abdulaziz Programmerman"
// Outpu: [3, 9, 13]

// let text = `Men Abdulaziz Programmerman`



// let res = text.split(" ")
// .map((num) => {
// return num.charAt().lingth;
// })
// console.log(res);




// 23. grade propertyga protcent 90-100 o'rtasida bo'lsa 5, 80-90 o'rtasida bo'lsa 4, 70-80 o'rtasida bo'lsa 3 bahoni, qolgan holatlarda 2 bahoni o'zlashtiring.(map)




const pupils = [
    {
        name: "Elbek",
        protcent: 95,
    },
    {
        name: "Zafar",
        protcent: 78,
    },
    {
        name: "Aziz",
        protcent: 83,
    },
    {
        name: "Jasur",
        protcent: 88,
    },
    {
        name: "Bobur",
        protcent: 66,
    },
    {
        name: "Kamron",
        protcent: 75,
    },
];




// let res = pupils.map((item) => {
//     if (item.protcent >= 90 && item.protcent <= 100) {
//         return { ...item, baho: 5 }
//     } else if (item.protcent >= 80 && item.protcent < 90) {
//         return { ...item, baho: 4 }
//     } else if (item.protcent >= 70 && item.protcent < 80) {
//         return { ...item, baho: 3 }
//     } else if (item.protcent < 70) {
//         return { ...item, baho: 2 }
//     }
// });
// console.log(res);








