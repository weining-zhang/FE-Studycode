//--------------------------------------对象部分------------------------------------------
//值类型：值类型将值存在变量里，x改变y不改变
// let x = 10;
// let y = x;

// x = 20;
//引用类型：引用类型将内存地址存在变量里，x和y指向同一个内存地址，x改变y也改变
// let x = { value: 10 };
// let y = x;

// x.value = 20;


// let number = 10;

// function increase(number) {
//   number++;
// }
// increase(number);//传进函数的这个值自增了变成11，但是
// console.log(number); //打印的number跟函数里的number是两个不同的变量，这里打印的是全局定义的number

// let obj = { value: 10 };

// function increase(obj) {
//   obj.value++;
// }
// increase(obj);// 本质是将上面定义的obj复制到函数修改
// console.log(obj); //打印的obj是经过函数修改后的结果，因为引用类型复制的是引用(地址)



//增加、删除对象属性

// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function() {
//     console.log('draw');
//   }
// }

// const circle = new Circle(10);

// // circle.location = { x: 1 }; //对象里增加一个属性的第一种方法
// // console.log(circle);
// // delete circle.location;//对象里删除一个属性的第1种方法
// // console.log(circle);


// const propertyName = 'center location';
// circle[propertyName] = { x: 1 };//对象里增加一个属性的第二种方法
// console.log(circle);
// delete circle[propertyName];//对象里删除一个属性的第2种方法,方括号里是属性的名称
// console.log(circle);



// 枚举/遍历对象

// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function() {
//     console.log('draw');
//   }
// }
// const circle = new Circle(10);

// const keys = Object.keys(circle);//要拿到对象的所有键，可用Object对象的keys方法，该方法只返回
// console.log(keys);               //实例的成员

// if ('radius' in circle)//要检查对象中是否包含某个属性或方法可用in操作符
//   console.log('Circle has a radius.');



//抽象Abstraction：隐藏对象复杂细节的部分(方法、属性)，只显示必要的部分；即对象外部不可使用它们

// function Circle(radius) {
//   this.radius = radius;

//   let defaultLocation = { x: 0, y: 0 };//去掉this，用let声明即可让外部不可使用它们；不把它们
//   let computeOptimumLocation = function(factor) {//设成对象属性
//     //...
//   }

//   this.draw = function() {
//     computeOptimumLocation(0.1);

//     console.log('draw');
//   }
// }

// const circle = new Circle(10);
// circle. //可知Circle对象里没有defaultLocation这个属性也没有computeOptimumLocation这个方法，它们
// //只是作为构造函数内部的局部变量来存在，可称它们为Circle对象的私有成员



//getter和setter：getter是一个用于读取对象属性的函数

// function Circle(radius) {
//   this.radius = radius;

//   let defaultLocation = { x: 0, y: 0 };

//   this.draw = function() {
//     console.log('draw');
//   }

// //Object.defineProperty(obj, prop, descriptor)方法会直接在一个对象上定义一个新属性或者修改一个
// //现有属性，并返回此对象。obj是要定义属性的对象，prop是要改的属性，descriptor是属性描述符。这是
// //ES5的写法，ES6写法更为简单
//   Object.defineProperty(this, 'defaultLocation', {
//     get: function() { //get只设置这个属性是只读的，外部不可修改这个属性
//       return defaultLocation;
//     },
//     set: function(value) { //设置set才可以从外部修改这个属性的值
//       if (!value.x || !value.y) 
//         throw new Error('Invalid location.');

//       defaultLocation = value;
//     }
//   })
// }

// const circle = new Circle(10);
// // circle.defaultLocation = 1; // 没有按照这个属性所需的格式修改就会报错
// circle.defaultLocation = { x: 1, y: 1 }
// console.log(circle.defaultLocation);

//--------------------------------------练习------------------------------------------
// 1、写一个计时器构造函数

// function Stopwatch() {
//   let startTime, endTime, running, duration = 0;

//   this.start = function() {
//     if (running)
//       throw new Error('Stopwatch has already started.');

//     running = true;

//     startTime = new Date();
//   };

//   this.stop = function() {
//     if (!running)
//       throw new Error('Stopwatch is not started.');

//     running = false;

//     endTime = new Date();

//     const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
//     duration += seconds;
//   };

//   this.reset = function() {
//     startTime = null;
//     endTime = null;
//     running = false;
//     duration = 0;
//   };

//   Object.defineProperty(this, 'duration', {
//     get: function() { return duration; }
//   });
// }

//------------------------------------------------------------------------------------------

//原型继承
// function Circle(radius) {
//   //定义在构造函数里的属性和方法称为实例成员
//   this.radius = radius;

//   this.move = function() {//实例方法中也可以引用原型的成员,draw是原型成员
//     this.draw();
//     console.log('move');
//   }
// }

// //原型里的称为原型对象成员
// Circle.prototype.draw = function() {//这样draw方法就不会出现在用Circle构造函数创建的对象中了，
//   console.log('draw');//draw放在了构造函数的原型里，创建出来的对象可以继承这个方法
// }

// const c1 = new Circle(1);
// const c2 = new Circle(1);

// Circle.prototype.toString = function() {//每个对象原型都有toString方法，可以改写这个方法；之所以
//   return 'Circle with radius ' + this.radius;//运行这个实现而不是原来定义的是因为这个符合就近原则
// }



//枚举对象原型的成员
// function Circle(radius) {
//   //实例成员有两个：radius和move
//   this.radius = radius;

//   this.move = function() {
//     this.draw();
//     console.log('move');
//   }
// }

// Circle.prototype.draw = function() { //对象原型成员：draw
//   console.log('draw');
// }

// const c1 = new Circle(1);
// const c2 = new Circle(1);

// console.log(Object.keys(c1));//keys方法只返回实例的成员

// for (let key in c1) {//for-in循环返回所有的成员(实例+原型)
//   console.log(key);
// }



//原型继承：有Shape和Circle两个构造函数，本来两个构造函数的原型分别是Shape.prototype和Circle.prototype,
//Shape.prototype和Circle.prototype的原型是Object.prototype；现在要使Circle.prototype的原型是
//Shape.prototype以继承Shape.prototype的成员

// function Shape() {
// }

// Shape.prototype.duplicate = function() {
//   console.log('duplicate');
// }

// function Circle(radius) {
//   this.radius = radius;
// }

// Circle.prototype = Object.create(Shape.prototype);//这样Circle.prototype就继承了Shape.prototype

// Circle.prototype.draw = function() {
//   console.log('draw');
// }

// const s = new Shape();
// const c = new Circle(1);



//重设构造器属性：重设原型对象后，应该同时重设构造器属性；这样用原型构造器创建的对象才是原来的
//构造函数的对象而不是后来继承的原型对象的构造函数
// function Shape() {
// }

// Shape.prototype.duplicate = function() {
//   console.log('duplicate');
// }

// function Circle(radius) {
//   this.radius = radius;
// }

// Circle.prototype = Object.create(Shape.prototype);//这样Circle.prototype就继承了Shape.prototype
// Circle.prototype.constructor = Circle;//重设构造器属性

// Circle.prototype.draw = function() {
//   console.log('draw');
// }

// const s = new Shape();
// const c = new Circle(1);



//基类构造器super constructor
// function Shape(color) {//Circle原型继承Shape原型，故Shape原型为基类
//   this.color = color;
// }

// Shape.prototype.duplicate = function() {
//   console.log('duplicate');
// }

// function Circle(radius, color) {
//   Shape.call(this, color);//这里调用Shape函数，函数里的this是指向全局对象window的，这里要把this
//   //映射到新建的circle对象上用call方法，结合new的过程理解

//   this.radius = radius;
// }

// Circle.prototype = Object.create(Shape.prototype);//这样Circle.prototype就继承了Shape.prototype
// Circle.prototype.constructor = Circle;//重设构造器属性

// Circle.prototype.draw = function() {
//   console.log('draw');
// }

// const s = new Shape();
// const c = new Circle(1, 'red');



//继承中间函数：如果上面要多次改变它的原型继承，可封装成一个函数，那么就可以复用了
// function Shape(color) {
//   this.color = color;
// }

// Shape.prototype.duplicate = function() {
//   console.log('duplicate');
// }

// function extend(Child, Parent) { //把原型继承操作封装为一个函数，让它可以复用
//   Child.prototype = Object.create(Parent.prototype);
//   Child.prototype.constructor = Child;
// }

// function Circle(radius, color) {
//   Shape.call(this, color);
//   this.radius = radius;
// }
// extend(Circle, Shape);

// Circle.prototype.draw = function() {
//   console.log('draw');
// }

// function Square(size) {
//   this.size = size;
// }
// extend(Square, Shape);

// const s = new Shape();
// const c = new Circle(1, 'red');
// const sq = new Square(10);



//方法重写method overriding
// function extend(Child, Parent) { //把原型继承操作封装为一个函数，让它可以复用
//   Child.prototype = Object.create(Parent.prototype);
//   Child.prototype.constructor = Child;
// }

// function Shape() {
// }

// Shape.prototype.duplicate = function() {//父类定义的一个方法
//   console.log('duplicate');
// }

// function Circle() {
// }
// extend(Circle, Shape);

// Circle.prototype.duplicate = function() {//重写父类定义的方法，必须要在继承(extend函数)之后写
//   Shape.prototype.duplicate.call(this);//如果要调用父类定义的方法，用call方法

//   console.log('duplicate circle');
// }

// const c = new Circle();



//多态Polymorphism
// function extend(Child, Parent) { //把原型继承操作封装为一个函数，让它可以复用
//   Child.prototype = Object.create(Parent.prototype);
//   Child.prototype.constructor = Child;
// }

// function Shape() {}

// Shape.prototype.duplicate = function() {//父类定义的一个方法
//   console.log('duplicate');
// }

// function Circle() {} // 子类1

// extend(Circle, Shape);
// Circle.prototype.duplicate = function() {//重写父类定义的方法，必须要在继承(extend函数)之后写
//   console.log('duplicate circle');
// }

// function Square() {} // 子类2

// extend(Square, Shape);
// Square.prototype.duplicate = function() {//再次重写父类定义的方法，在Square构造函数里的实现
//   console.log('duplicate square');
// }

// const shapes = [
//   new Circle(),
//   new Square()
// ];

// for (let shape of shapes) {//同一个duplicate方法在circle、shape对象上有不同的实现，这就是多态
//   shape.duplicate();
// }



//组合
// function mixin(target, ...sources) {//这里的...是剩余操作符：打包
//   Object.assign(target, ...sources);//这里的...是展开操作符：打散
// }

// const canEat = {
//   eat: function() {
//     console.log('eating');
//   }
// };
// const canWalk = {
//   walk: function() {
//     console.log('walking');
//   }
// };
// const canSwim = {
//   swim: function() {
//     console.log('swimming');
//   }
// };

// function Person() {
// }

// // Object.assign(Person.prototype, canEat, canWalk);//将canEat和canWalk两个对象组合到Person的原型
// mixin(Person.prototype, canEat, canWalk);

// const person = new Person();
// console.log(person);

// function Goldfish() {
// }

// // Object.assign(Goldfish.prototype, canEat, canSwim);
// mixin(Goldfish.prototype, canEat, canSwim);

// const goldfish = new Goldfish();
// console.log(goldfish);


//--------------------------------------练习------------------------------------------
//1、使子类能继承父类构造函数的成员
// function HtmlElement() {
//   this.click = function() {
//     console.log('clicked');
//   };
// }
// HtmlElement.prototype.focus = function() {
//   console.log('focused');
// }

// function HtmlSelectElement(items = []) {
//   this.items = items;
//   this.addItem = function(item) {
//     this.items.push(item);
//   };
//   this.removeItem = function(item) {
//     this.items.splice(this.items.indexOf(item), 1);
//   }
// }
// // HtmlSelectElement.prototype = Object.create(HtmlElement.prototype);//不继承父类构造函数的成员，
// //只继承了父类构造函数原型的成员
// HtmlSelectElement.prototype = new HtmlElement();//这样就继承了父类构造函数的成员
// HtmlSelectElement.prototype.constructor = HtmlSelectElement;


//2、实现render方法的多态
// function extend(Child, Parent) {
//   Child.prototype = new Parent();
//   Child.prototype.constructor = Child;
// }

// function HtmlElement() {
//   this.click = function() {
//     console.log('clicked');
//   };
// }
// HtmlElement.prototype.focus = function() {
//   console.log('focused');
// }

// function HtmlSelectElement(items = []) {
//   this.items = items;

//   this.addItem = function(item) {
//     this.items.push(item);
//   };
//   this.removeItem = function(item) {
//     this.items.splice(this.items.indexOf(item), 1);
//   };
//   this.render = function() {
//     return `
//     <select>${this.items.map(item => ` 
//       <option>${item}</option>`).join('')}
//     </select>`
//     // for (let item of this.items) //除了for-of，map也可以检查数组的每个元素并执行相应的函数
//     //   console.log(`<option>${item}</option>`);
//   }
// }
// extend(HtmlSelectElement, HtmlElement);

// function HtmlImageElement(src) {
//   this.src = src;
//   this.render = function() {
//     return `<img src="${this.src}" />`;
//   }
// }
// extend(HtmlImageElement, HtmlElement)


// const elements = [
//   new HtmlSelectElement([1, 2, 3]),
//   new HtmlImageElement('http://')
// ];

// for (element of elements) 
//   console.log(element.render());

//------------------------------------------------------------------------------------------


// ES6：类
// class Circle { //类本质是个(构造)函数
//   constructor(radius) {
//     this.radius = radius;
//     this.move = function() {
//     }
//   }

//   draw() {// 在构造器外的方法或属性定义在这个类的原型里，定义“类”的方法的时候，前面不需要加上function这个关键字
//     console.log('draw');
//   }
// }

// const c = new Circle(1);



// ES6：类置顶：类表达式和类声明都不会被置顶，在定义类前都不可使用它们

// const c = new Circle(); //在定义类前使用会报错

// //类声明
// class Circle {
// }

// //类表达式:基本不使用，都使用类声明方式来定义类
// const Square = class {
// };



// ES6：静态方法Static method：我们用静态方法的方式创建不属于具体实例的工具函数
// class Circle {
//   constructor(radius) {
//     this.radius = radius;
//   }

//   //实例方法：必须创造特定对象才可以使用实例方法
//   draw() {
//   }

//   //静态方法:加static关键字;静态方法只能通过类调用，实例不能调用
//   static parse(str) {
//     const radius = JSON.parse(str).radius;
//     return new Circle(radius);
//   }
// }

// // const circle = new Circle(1);
// const circle = Circle.parse('{"radius": 1}');
// console.log(circle);
// // Circle.parse()//静态方法不用创建具体实例也可以调用



// ES6：this关键字
// // 'use strict'//启用严格模式，这个模式下this不会指向全局对象window或global而是undefined，防止你
// //               修改全局对象的属性，JS运行环境总是以严格模式执行类体当中的内容

// // const Circle = function() {
// //   this.draw = function() { console.log(this); }
// // }

// // const c = new Circle();
// // //方法调用
// // c.draw();//当以一个对象的方法调用draw时，this指向这个对象本身

// // const draw = c.draw;

// // //函数调用
// // draw();//当以一种独立函数的的方式调用draw时，this指向全局对象

// class Circle {
//   draw() {
//     console.log(this);
//   }
// }

// const c = new Circle();
// const draw = c.draw;//得到draw方法的引用
// draw();



//用Symbol私有化成员：外部不可访问私有成员(属性和方法)
// const _radius = Symbol();
// const _draw = Symbol();

// class Circle {
//   constructor(radius) {
//     this[_radius] = radius;//用[]，里面写属性的名称即可成为私有属性
//   }

//   [_draw]() {//用[]，里面写方法的名称即可成为私有方法
//   }
// }

// const c = new Circle(1);



//用弱映射WeakMap私有化成员,这里的get和set是WeakMap的方法

// //写法1、每个私有成员独立拥有一个弱映射
// const _radius = new WeakMap();
// const _move = new WeakMap();

// class Circle {
//   constructor(radius) {
//   //wm.set(key, value)方法根据指定的key和value在WeakMap对象中添加/更新元素.
//   //key必须是对象，key就是Circle对象的实例(结合定义构造器里的属性要加this理解)；value是这个成员的值
//     _radius.set(this, radius);

//     _move.set(this, () => {
//       console.log('move', this);
//     });
//   }

//   //如果要在类中访问私有成员，要用get方法
//   draw() {
//   //wm.get(key)方法返回与指定键key相关联的值,key就是Circle对象的实例
//     console.log(_radius.get(this));
//     _move.get(this)();//_move.get(this)返回一个函数，再加()就是调用这个函数

//     console.log('draw');
//   }  
// }

// const c = new Circle(1);

// //写法2、创建一个弱映射(WeakMap对象)包含所有的私有成员
// // const privateProps = new WeakMap();

// // class Circle {
// //   constructor(radius) {
// //     privateProps.set(this, { //这个privateProps对象是私有成员的集合
// //       radius: radius,
// //       move: () => {
// //         console.log('move', this);
// //       }
// //     });
// //   }

// //   draw() {
// //     console.log(privateProps.get(this).radius);//privateProps.get(this)获得所有私有成员的集合，
// //     //                                           再用.操作符访问集合里的成员。
// //     privateProps.get(this).move();

// //     console.log('draw');
// //   }  
// // }

// // const c = new Circle(1);



//ES6：类的getter和setter
// const _radius = new WeakMap();

// class Circle {
//   constructor(radius) {
//     _radius.set(this, radius);
//   }

//   get radius() {
//     return _radius.get(this);
//   }
//   set radius(value) {
//     if (value <= 0) 
//       throw new Error('Invalid radius.');
//     _radius.set(this, value);
//   }
// }

// const c = new Circle(1);

// console.log(c.radius);
// c.radius = 10;//有了get可以直接访问属性那样来访问而不用方法
// console.log(c.radius);
// c.radius = -1;



//ES6:类的继承
// class Shape {
//   constructor(color) {
//     this.color = color;
//   }

//   move() { //所有类体添加的方法都会放在实例的原型里.
//     console.log('move');
//   }
// }

// class Circle extends Shape {//直接使用extends关键字来表示继承，也不用再重设构造器了.
//   constructor(color, radius) {
//   //如果父类有构造器，子类又想添加一个构造器，在子类的构造器中必须先调用父类的构造器，以创建一个父类的实例.
//     super(color); //可以用super关键字引用父类实例，像调用函数一样调用构造器.

//     this.radius = radius;//调用父类构造器后就可以添加属于子类的新属性了
//   }
  
//   draw() {
//     console.log('draw');
//   }
// }

// const c = new Circle('red', 10);


//ES6：类的方法重写
// class Shape {
//   move() {
//     console.log('move');
//   }
// }

// class Circle extends Shape {
//   move() {//这里重写了父类的move方法
//   //super关键字用于访问和调用一个对象的父对象上的函数：
//   //super()调用父类构造函数，super.function()调用父类上的方法，function为方法的名称
//     super.move();//通过super调用父类的move方法
//     console.log('circle shape');
//   }
// }

// const c = new Circle();

//-------------------------------------------练习----------------------------------------------

//1、模仿一个栈，有push、pop、peek三个方法，peek显示栈顶元素
// const _items = new WeakMap();

// class Stack {
//   constructor() {
//     _items.set(this, []);
//   }
//   push(obj) {
//     _items.get(this).push(obj);
//   }

//   pop() {
//     const items = _items.get(this);

//     if (items.length === 0)
//       throw new Error('Stack is empty.');

//     return items.pop();
//   }

//   peek() {
//     const items = _items.get(this);

//     if (items.length === 0)
//       throw new Error('Stack is empty.');

//     return items[items.length - 1];
//   }

//   get count() {
//     return _items.get(this).length;
//   }
// }

// const s = new Stack();

//------------------------------------------------------------------------------------------
