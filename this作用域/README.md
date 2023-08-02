# 一些总结

1. 开启了严格模式，只是说使得函数内的this指向undefined，它并不会改变全局中this的指向。因此this1中打印的是undefined，而this2还是window对象。
另外，它也不会阻止a被绑定到window对象上
2. 把一个函数当成参数传递到另一个函数的时候，也会发生隐式丢失的问题，且与包裹着它的函数的this指向无关

    - this 永远指向最后调用它的那个对象
    - 匿名函数的this永远指向window
    - 使用.call()或者.apply()的函数是会直接执行的
    - bind()是创建一个新的函数，需要手动调用才会执行
    - 如果call、apply、bind接收到的第一个参数是空或者null、undefined的话，则会忽略这个参数
    - forEach、map、filter函数的第二个参数也是能显式绑定this的

3. 箭头函数它里面的this是由外层作用域来决定的，且指向函数定义时的this而非执行时

## 题目

```js

function foo() {
    console.log(this.a)
}
function doFoo(fn) {
    console.log(this)
    fn()
}
var obj = { a: 1, foo }
var a = 2
doFoo(obj.foo)

// ----------------- 分割线 ---------------

function foo() {
    console.log(this.a)
}
function doFoo(fn) {
    console.log(this)
    fn()
}
var obj = { a: 1, foo }
var a = 2
var obj2 = { a: 3, doFoo }

obj2.doFoo(obj.foo)

// ----------------- 分割线 ---------------

function Person(name) {
    this.name = name
    this.foo1 = function () {
        console.log(this.name)
        return function () {
            console.log(this.name)
        }
    }
    this.foo2 = function () {
        console.log(this.name)
        return () => {
            console.log(this.name)
        }
    }
    this.foo3 = () => {
        console.log(this.name)
        return function () {
            console.log(this.name)
        }
    }
    this.foo4 = () => {
        console.log(this.name)
        return () => {
            console.log(this.name)
        }
    }
}
var person1 = new Person('person1')
person1.foo1()()
person1.foo2()()
person1.foo3()()
person1.foo4()()

// ----------------- 分割线 ---------------

var num = 10
var obj = { num: 20 }
obj.fn = (function (num) {
    this.num = num * 3
    num++ // 21
    return function (n) {
        this.num += n
        num++
        console.log(num)
    }
})(obj.num)
var fn = obj.fn
fn(5)
obj.fn(10)
console.log(num, obj.num)

// ----------------- 分割线 ---------------

var x = 3,
obj = { x: 5 };
obj.fn = (function () {
    this.x *= ++x;
    return function (y) {
        this.x *= (++x) + y;
        console.log(x);
    }
})();
var fn = obj.fn;
obj.fn(6);
fn(4);
console.log(obj.x, x);

```
