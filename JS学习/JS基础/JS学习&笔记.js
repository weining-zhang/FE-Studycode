 
//  let firstName = 'bob';

// let person = {     
//     name:Blob,
//     age:30
// };
// let color = ['red','blue'];
// color[2] = 8;

// person.name = 'John';

// function greet(name,firstName) {
//     console.log('hello '+ name+' '+firstName);
// }
// greet('John','Smith');

// function square(number) {
//    return number * number;
// }
// console.log(square(2));

//三元运算符
// let points = 90;
// let type = points > 100 ? 'gold' : 'sliver';
// console.log(type);

//逻辑与运算符
// let highIncome = true;
// let goodCreditScore = true;
// let eligibleForLoan = highIncome && goodCreditScore;
// console.log(eligibleForLoan);

//非布尔值的逻辑或|| 运算
// let userColor = undefined;
// let defaultColor = 'blue';
// let currentColor = userColor || defaultColor;
// console.log(currentColor);

//交换输出顺序
// let a = 'red';
// let b = 'blue';

// let c = a;
// a = b;
// b = c;
// console.log(a);
// console.log(b);


//if...else语句
// let hour = 20;
// if (hour>=6 && hour<12) 
//     console.log('Good morning');
// else if (hour>=12 && hour<18) 
//     console.log('Good afternoon');
// else
//     console.log('Good evening');


// switch-case语句
// let role = 'moderator';
// switch(role) {
//     case 'guest':
//         console.log('Guest User');
//         break;
    
//     case 'moderator':
//         console.log('Moderator User');
//         break;

//     default:
//         console.log('Unknown User');
// }

// if...else语句写更简单
// if (role === 'guest') console.log('Guest User');
// else if (role === 'moderator') console.log('Moderator User');
// else console.log('Unknown User');


//for循环
// for (let i = 5; i > 0; i--) {
//     if (i % 2 !==0) console.log(i);
// }

//while循环
// let i = 5;
// while (i >= 0) {
//     if (i % 2 !==0) console.log(i);
//     i--;
// }


// do-while循环
// let i = 9;
// do {
//     if (i % 2 !==0) console.log(i);
//     i++;
// } while (i < 5)


// for-in循环：遍历对象的属性
// const person = {
//     name:'John',
//     age:30
// };
// for (let key in person)
//  console.log(key, person[key]);


// for-of循环：遍历一个数组中的元素
// const colors = ['red','blue','green']
// for (color of colors)
//  console.log(color);

// continue语句
// let i = 0;
// while (i <= 10) {
//     if (i % 2 ===0) {
//         i++;
//         continue;    //跳出循环
//     }
//     console.log(i);
//     i++;
// }

//------------------------------------------练习1--------------------------------------------

// 1、写一个函数传入两个数字，返回大的那一个
// let number = max(7,7);
// console.log(number);

// function max(x, y) {
//     // if (x > y) return x;     //用if-else语句写
//     // else return y;

//     return (x > y) ? x : y;     //用三元操作符写更简洁
// }


//2、宽大于高返回true，否则返回false
// let pic = isLandscape(400,600)
// console.log(pic);

// function isLandscape(width, height) {
//     // return (width > height) ? true : false;
//     return (width > height); //不需要写? true : false，因为比较操作符的结果就是true或者flase
// }


//3、FizzBuzz算法：能被5整除返回Fizz，能被3整除返回Buzz，能被3和5都整除返回FizzBuzz，
//  不能被3和5整除则返回输入值input，输入值不是一个数字则返回'Not a number'
// const output = fizzBuzz(11);
// console.log(output);

// function fizzBuzz(input) {
//     if(typeof input !=='number')  //typeof用来判断输入值类型是否为数字
//         return NaN;

//     if ((input % 5 === 0) && (input % 3 === 0))
//         return 'FizzBuzz';

//     if (input % 5 === 0) 
//         return 'Fizz';

//     if (input % 3 === 0) 
//         return 'Buzz';

//     return input;
// }


//4、输入speed，speed<=70时返回Ok，speed>70时每5公里计算为1 point，
//   point超过12时，即speed>=130时返回Licence suspended
// speed = checkSpeed(180);

// function checkSpeed(speed) {
//     const speedLimit = 70;
//     const kmPerPoint = 5;

//     if (speed < speedLimit + kmPerPoint) {
//         console.log('Ok');
//         return;
//     }
//     const points = Math.floor((speed - speedLimit) / kmPerPoint)
//     if (points >= 12) 
//         console.log('Licence suspended');
//     else
//         console.log('Points',points);
// }


// 5、输入limit，输出从0到输入数之间的所有整数，并标上是奇还是偶数
// showNumber(20);

// function showNumber(limit) {
//     for (let i = 0; i <= limit ; i++) {
//         const message = (i % 2 === 0) ? 'EVEN' : 'ODD';  //使用三元操作符更简洁
//         console.log(i,message);

//         // if (i % 2 === 0) 
//         //     console.log(i + " EVEN");
//         // else console.log(i + " ODD");
//     }
// }


// 6、输入一数组，输出这个数组的类真值数目
// const array = [1, 2, 3, 4, 5, null, '', 9];
// console.log(countTruthy(array));  


// function countTruthy(array) {
//     let count = 0;
//     for (let value of array)
//         if (value)
//             count++;
//     return count;
// }


//7、输出一个对象的所有属性和其对应值
// const movie = {
//     title: 'a',
//     releaseYear: 2020,
//     rating: 4.5,
//     director: 'b'
// };
// showProperties(movie);

// function showProperties(obj) {
//     for (let key in obj) {
//         if (typeof obj[key] === 'string')
//             console.log(key, obj[key]);
//     }
// }


//8、返回输入的数字范围内3的所有倍数与5的所有倍数的和
// console.log(sum(5));

// function sum(limit) {
//     let sum = 0;

//     for (i = 0; i <=limit; i++) {
//         if (i % 3 === 0 || i % 5 === 0)
//             sum += i;
//     }

//     return sum;
// }


// 9、输入一个数组里的数据计算平均值，再把平均值划分等级：1-59：F | 60-69：D
//    70-79：C | 80-89：B | 90-100：A
// const mark = [90, 90 ,90, 90];

// console.log(calculateGrade(mark));

// function calculateGrade(marks) {
//     const average = calculateAverage(marks);

//     if (average <= 59)  return 'F';
//     if (average <= 69)  return 'D';
//     if (average <= 79)  return 'C';
//     if (average <= 89)  return 'B';
//     return 'A';
// }

// function calculateAverage(array) {
//     let key;
//     let sum = 0;

//     for (key of array) {
//         sum += key;
//     }

//     return sum / array.length;
// }


//10、输入一个数字x，输出x行且每行对应一组*，第一行一个*，第一行两个*...
// showStar(5);

// function showStar(rows) {
//     for (let row = 1; row <= rows; row++) {
//         let pattern = '';
//         for (let i =0; i < row; i++) {
//             pattern += '*';
//         }
//         console.log(pattern);
//     }
// }


//11、输出limit范围内所有质数
// showPrimes(20);

// function showPrimes(limit) {        //嵌套循环可以把里面的函数剥离出来
//     for (let number = 2; number <= limit; number++) {
//         if (isPrime(number)) console.log(number);
//     }
// }

// function isPrime(number) {
//     for (let factor = 2; factor < number; factor++) 
//         if (number % factor === 0) 
//             return false;

//     return true;
// }

//----------------------------------------------------------------------------------------
//对象部分

//面向对象编程（OOP）范式
// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     isVisible: true,
//     darw: function() {
//         console.log('draw');
//     }
// };

// circle.darw();   //在对象(Object)中的函数称之为方法（Method）


//工厂函数Factory function
// function creatCircle(radius) {
//   return {
//     radius,
//     draw() {    //对象里定义函数可以直接写函数名不用带关键字function
//       console.log('draw');
//     }
//   };
// }

// const circle1 = creatCircle(1);
// console.log(circle1);

// const circle2 = creatCircle(2);
// console.log(circle2);


//构造函数
// function Circle(radius) {
//     this.radis = radius;
//     this.draw = function() {
//         console.log('draw');
//     }
// }

// const circle = new Circle(1);


//对象的动态性，即声明一个对象之后还可以对这个对象进行增加、删除等操作.
// const circle = {   //这里的const是指不能再重新声明circle这个常量，
//     radius: 1      //而不是不能修改circle所指向的对象. 
// };

// circle.color = 'yellow';
// circle.draw = function() {}

// delete circle.color;
// delete circle.draw;

// console.log(circle);


//克隆对象
// const circle = {
//   radius: 1,
//   draw() {
//     console.log('draw');
//   }
// };

// // const another = Object.assign({}, circle);  //用Object的assign方法复制对象

// const another = {...circle};  //直接用展开操作符复制对象

// console.log(another);


//------------------------------------------练习2--------------------------------------------

//1、创建一个地址对象，包含street、city、zipCode三个属性，创建一个函数输入一个地址对象，
//   显示这个对象的所有属性和对应的值。

// const address = {
//   street: 'Fifth Avenue',
//   city: 'NYC',
//   zipCode: '00001'
// };

// showAddress(address);

// function showAddress(address) {
//   for (let key in address) 
//     console.log(key, address[key]);
// }


//2、写一个工厂函数和一个构造函数，分别于用这两个函数初始化对象

// 工厂函数
// let rec1 = recTangle(2, 5);  

// console.log(rec1);

// function recTangle(width, height) {
//   return {
//     width,
//     height,
//   };
// }

// //构造函数
// function RecTangle(width, height) {
//   this.width = width;
//   this.height = height;
// }

// let rec2 = new RecTangle(3, 6);
// console.log(rec2);


//3、创建两个函数，一个比较输入的两个对象的属性是否相等，另一个比较两个对象是否指向同一个对象（地址）

// let rec1 = new RecTangle(2, 5);   //rec1和rec2虽然属性相同但两个是不同的对象（不同内存地址）
// let rec2 = new RecTangle(2, 5);  
// let rec3 = rec1;    //rec1和rec3两个对象指向同一个对象

// console.log(areEqual(rec1, rec2));
// console.log(areSame(rec1, rec2));
// console.log(areSame(rec1, rec3));

// function RecTangle(width, height) {
//   this.width = width;
//   this.height = height;
// }

// function areEqual(rec1, rec2) {
//   return rec1.width === rec2.width && rec1.height === rec2.height;
// }

// function areSame(rec1, rec2) {
//   return rec1 === rec2;     //全等===会比较两个对象的地址是否相同
// }


//4、创建一个博客对象，包含title、body、author、views、isLive（boolean值）、comments属性，
//   其中comments又包含author和body两个属性

// let post = {
//   title: 'a',
//   body: 'b',
//   author: 'c',
//   views: 10,
//   comments: [
//     {author:'a', body: 'b'},
//     {author:'c', body: 'd'},
//   ],
//   isLive: true
// };

// console.log(post);


//5、用构造函数创建上述博客帖子对象

// let post = new Post('a', 'b', 'c');

// console.log(post);

// function Post(title, body, author) {
//   this.title = title;
//   this.body = body;
//   this.author = author;
//   this.views = 0;
//   this.comments = [];
//   this.isLive = false;
// }

//-------------------------------------------------------------------------------------------
//数组部分

//向数组添加元素
// const numbers = [1, 2, 3, 4];

// // //末尾插入
// // numbers.push(5, 6);

// // //开头插入
// // numbers.unshift(1, 2);

// // //中间指定位置插入,splice方法第一个参数是第几个(0开始)元素，第二个参数是删除几个元素，后面参数是从第一个参数位置插入的数据
// // //splice方法会改变原数组，是直接在原数组上操作,返回被删除的元素组成的一个数组
// numbers.splice(2, 0, 'a', 'b')

// console.log(numbers);


//查找数组元素（值类型）
// const numbers = [1, 2, 3, 1, 4];

// //indexOf返回在数组中可以找到一个给定元素的第一个索引，第二个参数是从序号几开始查找,与以下两个方法第二个参数意义相同,若没有找到则返回-1
// console.log(numbers.indexOf(1, 2));

// //lastIndexOf返回输入的元素的最后一个在数组中的序号（有相同的元素的情况下）
// console.log(numbers.lastIndexOf(1));

// //includes返回bool值，表示数组中是否有这个元素
// console.log(numbers.includes(1));


//查找数组元素（引用类型）
// const courses = [
//   { id: 1, name: 'a' },
//   { id: 2, name: 'b' }
// ];

// //find返回查找到的对象本身
// const course = courses.find(function(course) {
//   return course.name === 'a';
// });
// console.log(course);

// // //findIndex返回查找到的对象在数组中的序号
// // const course = courses.findIndex(function(course) {
// //   return course.name === 'b';
// // });
// // console.log(course);


//箭头函数，当需要输入一个函数作为另一个函数的参数时可使用箭头函数
// const courses = [
//   { id: 1, name: 'a' },
//   { id: 2, name: 'b' }
// ];

// // const course = courses.find(function(course) {
// //   return course.name === 'a';
// // });
// const course = courses.find(course => course.name === 'a');        
// //首先去掉function关键字,然后用胖箭头(=>)分隔开函数参数和函数体,若只有一个参数可去掉参数的小括号，
// //若没有参数则直接加一对小括号，若函数体只有一行return语句，可去掉return关键字，删除函数体大括号
// //读作course去让它的name是否全等于a

// console.log(course);


//删除数组元素
// const numbers = [1, 2, 3, 4];

// //删除末尾的元素
// // const last = numbers.pop();   // “弹出”（返回）数组末尾的元素,改变原数组

// // console.log(numbers);
// // console.log(last);

// //删除开头的元素
// // const first = numbers.shift();   // “弹出”（返回）数组开头的元素,改变原数组

// // console.log(numbers);
// // console.log(first);

// //删除指定位置的元素

// const middle = numbers.splice(2,2);  //第一个参数是从序号几的元素开始，第二个参数是删除几个元素
                                        // 若只给第一个参数，则删除第一个参数序号及其之后的所有元素

// console.log(numbers);
// console.log(middle);


//清空数组
// let numbers = [1, 2, 3, 4];
// let another = numbers;    //这时是两个引用，即使清空numbers，它指向的旧地址还在，被another指向
//                           //Solution 1无效。
// //Solution 1（推荐）
// // numbers = [];   //只有在数组只有一个引用时常用

// //Solution 2（推荐）
// // numbers.length = 0;   //强制清空数组所有元素

// //Solution 3
// // numbers.splice(0, numbers.length);  //增加数组元素，删除元素也有此方法

// //Solution 4
// while (numbers.length > 0)  //遇到大型数组（元素多）时，消耗资源大，不推荐
//   numbers.pop();

// console.log(numbers);
// console.log(another);

//组合和切割数组  组合：concat方法、展开操作符 | 切割：slice方法

// const first = [{id: 1}];
// const second = [4, 5, 6];

// // const combined = first.concat(second);   //组合数组使用concat方法
// const combined = [...first, ...second]; //使用展开操作符组合数组更简洁
// first[0].id = 10;

// //切割数组使用slice(start, end)方法，start表示开始的序号，end表示结束的序号此方法不改变原数组，
// //返回一个新的数组，包含从start到end(不包括该元素)中的元素
// const slice = second.slice(0,2);

// console.log(combined);
// console.log(slice);


//遍历数组
// const numbers = [1, 2, 3];

// // Solution 1
// //使用for...of遍历数组

// // Solution 2
// numbers.forEach((number, index) => console.log(index, number)); //forEach()方法对数组的每个元素执行一次给定的函数
// //来遍历数组，参数可以一个也可以两个


//连接数组元素：join方法
// const numbers = [1, 2, 3];

// const joined = numbers.join('-'); //使用数组里的join方法
// console.log(joined);

// const message = 'This is my first message';
// const parts = message.split(' '); //split()方法用于把一个字符串分割成字符串数组，操作对象是字符串
// console.log(parts);               //该方法不改变原始字符串

// const combined = parts.join('-');
// console.log(combined);


//数组排序:sort方法（正序）、reverse方法（逆序）  注意：该方法改变原数组，在原数组上排序
// const numbers = [1, 3, 2];

// console.log(numbers.sort())
// console.log(numbers.reverse());

// //对对象数组进行排序
// const courses = [
//   { id: 1, name: 'Node.js'},
//   { id: 2, name: 'javascrpit'},  //j从大写换成小写之后ASCII码值改变了
// ];

// courses.sort(function(a, b) {
//   const nameA = a.name.toUpperCase(); //比较的两个对象大小写必须相同，若不同，需转换
//   const nameB = b.name.toUpperCase();

//   if (nameA < nameB) return -1;    // < 就return -1
//   if (nameA > nameB) return 1;     // > 就return 1
//   return 0;                        // = 就return 0
// });
// console.log(courses);


//检查数组元素：every方法（是否都符合）、some方法(是否存在至少一个符合)
// const numbers = [1, -1, 2, 3];

// const allPositive = numbers.every(function(value) {
//   return value >= 0;  //检查数组中元素值是否都>=0
// });

// const atLeastOnePositive = numbers.some(function(value) {
//   return value >= 0;  //检查数组中元素是否至少有一个值>=0
// });

// console.log(allPositive);
// console.log(atLeastOnePositive);


//筛选数组：filter方法（遍历一遍数组，返回一个筛选后的新数组，不改变原数组）
// const numbers = [1, -1, 2, 3];

// // const filtered = numbers.filter(function(n) {
// //   return n >= 0;
// // });
// const filtered = numbers.filter(n => n >= 0);  //上述语句可以用箭头函数简化代码

// console.log(filtered);


//map映射：可以将数组的元素映射为其他的东西，产生新数组而不改变原数组
//map()方法创建一个新数组，其结果是该数组中的每个元素都调用一次提供的函数后的返回值。

// const numbers = [1, -1, 2, 3];

// const items = numbers   //使用了链接方法
//   .filter(n => n >= 0)
//   .map(n => ({value: n})) //使用箭头函数去除return时,若return后是对象{}要加小括号，即({})
//   .filter(obj => obj.value > 1)
//   .map(obj => obj.value);   //将每个对象映射为数字

// console.log(items);


//缩减数组：reduce方法对数组中的每个元素执行一个由您提供的回调函数，将其结果汇总为单个返回值。
//         当想通过循环的方式得到或计算出某个值时可以考虑是否能用reduce方法
// const numbers = [1, -1, 2, 3];

// const sum = numbers.reduce((acc, cur) => acc + cur);

// console.log(sum);


//------------------------------------------练习3-------------------------------------------

//1、输入最小值和最大值，返回这个数字范围内组成的数组
// const numbers = arrayFromRange(-10, -4);

// console.log(numbers);

// function arrayFromRange(min, max) {
//   const output = [];
//   for (let i = min; i <= max; i++) 
//     output.push(i);
//   return output;
// }


//2、模仿数组includes方法，实现其功能
// const numbers = [1, 2, 3, 4];

// console.log(includes(numbers, 5));

// function includes(array, searchElement) {
//   for (let value of array) 
//     if (value === searchElement) 
//       return true;
//   return false;
// }


//3、写一个except函数，有两个参数，第一个参数传入第一个数组，第二参数传入第二个数组，返回第一个数组
//   中排除掉第二个数组后的新数组
// const numbers = [1, 2, 3, 4, 1];

// const output = except(numbers, [1, 2]);

// console.log(output);

// function except(array, excluded) {
//   const output =[];
//   for (let element of array)
//   if (!excluded.includes(element))
//   output.push(element);
//   return output;

//   // return array.filter(value => !excluded.includes(value));   //更简洁
// }


//4、写一个move函数，有三个参数array,index,offset，index表示选中的序号，offset表示偏移量
// const numbers = [1, 2, 3, 4];

// const output = move(numbers, 2, -2);

// console.log(output);

// function move(array, index, offset) {
//   const position = index + offset;
//   if (position >= array.length || position < 0) {
//     console.error('Invalid offset');
//     return;
//   }

//   const output = [...array];
//   const element = output.splice(index, 1)[0]; //splice返回的是一个数组，目的是要元素插入所以加[0]
//   output.splice(position, 0, element);
//   return output;
// }


//5、统计一个输入的数字在数组中出现的频率（次数）
// const numbers = [1, 2, 3, 4, 1, 3];

// const count = countOccurences(numbers, 1);

// console.log(count);

// function countOccurences(array, searchElement) {
//   // let sum = 0;
//   // for (let value of array) 
//   //   if (value === searchElement)
//   //     sum++;
//   // return sum;

//   return array.reduce((acc, cur) => (cur === searchElement) ? ++acc : acc,  0);
// }


//6、输入一个数组，返回数组中最大值
// const numbers = [1, 2, 3, 4, 5];

// const max = getMax(numbers);

// console.log(max);

// function getMax(array) {
//   if (array.length === 0) return undefined;

//   // let max = array[0];

//   // for (let value of array) 
//   //   if (value > max) 
//   //     max = value;
//   // return max;
  
//   return array.reduce((acc, cur) => (acc > cur) ? acc : cur);  //使用reduce方法
// }


//7、选出2018年评分大于4的电影，倒序排序评分（评分高的在前），控制台输出电影的title
// const movies = [
//   { title: 'a', year: 2018, rating: 4.5 },
//   { title: 'b', year: 2018, rating: 4.7 },
//   { title: 'c', year: 2018, rating: 3 },
//   { title: 'd', year: 2017, rating: 4.5 },
// ];

// const titles = movies
//   .filter(m => m.rating >=4 && m.year === 2018)
//   .sort((a, b) => {
//     if (a.rating < b.rating)  return -1;
//     if (a.rating > b.rating)  return 1;
//     return 0;
//   })
//   .reverse()
//   .map(m => m.title);

// console.log(titles);

//------------------------------------------------------------------------------------------
//函数部分

// JS定义函数的两种方式：函数声明和函数表达式
// // 函数声明
// function walk() {
//   console.log('walk');
// }

// // 函数表达式
// const run = function() {
//   console.log('run');
// };

// let move = run;
// run();
// move();


// 提升（Hoisting）：是JavaScript将声明移至顶部的默认行为，使得可以在声明之前使用这个函数或变量。
//                   函数声明会被置顶，函数表达式不会被置顶

// walk();  // 在函数声明之前可以调用这个函数，原理：提升（Hoisting）即声明被默认移至顶部

// //函数声明
// function walk() {
//   console.log('walk');
// }

// //函数表达式
// run();  // 报错，不可在函数表达式之前使用这个函数
// const run = function() {
//   console.log('run');
// };


// arguments对象：JS函数里有一个特殊对象arguments，无需明确指出参数名就能访问它们，第一个参数
//               可用arguments[0]访问这个值，第二个用arguments[1]，以此类推。arguments对象不是一个
//               数组,它类似于数组,但除了length属性和索引元素之外没有任何Array属性。
// function sum() {
//   let total = 0;
//   for (let value of arguments)
//     total += value;
//   return total;
// }

// console.log(sum(1, 2, 3, 4, 5, 10));


// 剩余操作符(...)：写法与展开操作符相同，表示可以输入多个参数，但剩余操作符必须是最后一个参数，
//                 它将输入给函数的所有参数转到一个 “数组” 中
// function sum(discount, ...prices) {
//   const total = prices.reduce((a, b) => a + b);
//   return total * discount;
// }

// console.log(sum(0.9, 20, 30, 50));


// 默认参数值：ES6之后可直接在参数后赋值，即是它的默认值，注意：给参数默认值时，
//            要么这个参数是所有参数的最后一个，要么它后面所有的参数都要给默认值
// function interest(principal, rate = 3.5, years = 5) {
//   return principal * rate / 100 * years;
// }

// console.log(interest(10000));


// getter和setter
// const person = {
//   firstName: 'Mosh',
//   lastName: 'Hamedani',
//   get fullName() {  // get语法将对象属性绑定到查询该属性时将被调用的函数
//     return `${person.firstName} ${person.lastName}` // 模板字符串,包含特定语法（${expression}）的占位符
//   }, 
//   set fullName(value) {   // setter负责设置键值,值是以参数的形式传递,函数得有一个参数
//     const parts = value.split(' ');
//     this.firstName = parts[0];
//     this.lastName = parts[1];
//   }
// };

// person.fullName = 'John Smith'; //设置setter之后就可以从外部改变对象内的值

// console.log(person.fullName); // 使用了get就不用写成person.fullName()了


// throw、try和catch
// const person = {
//   firstName: 'Mosh',
//   lastName: 'Hamedani',
//   get fullName() {  
//     return `${person.firstName} ${person.lastName}` 
//   }, 
//   set fullName(value) {
//     if (typeof value !== 'string')
//       throw new Error('Value is not a string.');  //throw自定义错误即创建异常

//     const parts = value.split(' ');
//     if (parts.length !== 2)
//       throw new Error('Enter a first and last name');

//     this.firstName = parts[0];
//     this.lastName = parts[1];
//   }
// };

// try {   //try语句写供测试的代码块，即可能出错的代码
//   person.fullName = 'John'; 
// }
// catch(err) {    //catch语句写处理错误的代码块
//   alert(err);
// }

// console.log(person.fullName); 


// this 关键字：this在对象中指向的是这个对象，在普通函数中this指向的是全局对象（window和node的global）
// 在构造函数里this指向使用new操作符创建出来的空对象，回调函数里this指向的也是全局对象（回调函数
// 不是对象中的方法），但是使用箭头函数this就可以被继承，即使用箭头函数的回调函数里this指向原对象
// // const video = {
// //   title: 'a',
// //   play() {
// //     console.log(this);
// //   }
// // };

// // video.stop = function() {
// //   console.log(this);
// // };

// // video.stop();

// const video = {
//   title: 'a',
//   tags: ['a', 'b', 'c'],
//   showTags() {
//     this.tags.forEach(tag => console.log(this.title, tag));
//   }
// };

// video.showTags();

//------------------------------------------练习4-------------------------------------------

// 1、传入一组参数，计算它们的和；再把参数调整成数组，输入一个数组，计算这个数组元素的和，需要判断
//    输入的是否为数组：使用Array.isArray()
// console.log(sum([1, 2, 3 ,4, 5]));

// function sum(...items) {
//   if (items.length === 1 && Array.isArray(items[0]))
//     items = [...items[0]];

//   return items.reduce((acc, cur) => acc + cur);
// }


// 2、创建一个circle对象，有一个半径属性是可读可写的，另一个面积属性是只读的
// const circle = {
//   radius: 2,
//   get area() { //实现只读：使用方法，对象里的方法是无法从外部改变其值的，使用get可以得到这个函数的返回值
//     return Math.PI * this.radius * this.radius;
//   }
// };

// circle.area = 4;  //外部改area后，area仍是原来的旧值

// console.log(circle.area);


// 3、统计一个输入的数字在数组中出现的频率（次数），判断countOccurences输入的第一个参数是否是数组
// const numbers = [1, 2, 3, 4, 1, 3];

// try {
//   const count = countOccurences(1, 1);
//   console.log(count);
// }
// catch(err) {
//   // alert(err);
//   console.log(err.message);
// }

// function countOccurences(array, searchElement) {
//   if (!Array.isArray(array))
//     throw new Error('Invalid array.');
    
//   return array.reduce((acc, cur) => (cur === searchElement) ? ++acc : acc, 0);
// }

