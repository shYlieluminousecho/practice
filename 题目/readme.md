# 题目练习

## 判断题 （✖、✔）

1. 在JavaScript中可以用十六进制形式表示浮点数常量 （✖）
2. 空字符串("")也是字符串常量 (✔)
3. 在定义JavaScript变量时，一定要指出变量名和值 (✖)
4. 用var定义一个变量后，如果没有赋予任何值，那么它的值是空值,即null. (✖)
5. JavaScript规定在使用任何变量之前必须先使用var声明它. (✖)
6. 在使用var x=1 声明变量x之后,赋值语句x="今天天气真好”将出错. (✖)
7. 表达式的类型只取决于运算符，与操作数无关。 (✖)
8. 两个整数进行除（/）运算,其结果也为整数。 (✖)
9. 如果有定义var a=true，b；那么 a||b 的结果为true (✔)
10. if语句可以实现多路分支 (✔)
11. break语句可以出现在各种不同循环语句的循环体中 (✔)
12. continue语句只能出现在循环体中 (✔)
13. switch语句中case子句后面的表达式可以是含有变量的整型表达式 (✔)
14. break语句在一个循环体内可使用多次 (✔)
15. break语句用于if语句，它表示退出该if语句 (✖)

## 单选题

1. 以下哪个常量值最大? (B)
A. 80  B.  0X65   C. 095  D. 0115

2. 下列各种运算符中, (A) 优先级最高
A. +    B. &＆    C. ==    D. *=

3. for（var i=0，j=10; i=j=10;  i++， j--） 循环次数是？(D)
A. 0   B. 1   C. 10    D. 无限

## 综合题目

1. 在条件和循环语句中,使用什么来标记语句组? // {} 花括号
2. 编写程序．通过用户输入的年龄判断是哪个年龄段的人(儿童:年龄＜14；青少年：14<=年龄＜24;青年：24<年龄＜40； 中年：40＜=年龄＜60; 老年：年龄〉=60)，并在页面上输出判断结果

    ```js
    var age = 20 // 用户输入的
    switch (true) {
        case age >= 60:
            document.write('老年')
            break
        case age >= 40 && age < 60:
            document.write('中年')
            break
        case age >= 24 && age < 40:
            document.write('青年')
            break
        case age >= 14 && age < 24:
            document.write('青少年')
            break
        case age <= 14:
            document.write('儿童')
            break
        default:
            document.write('年龄不在范围中')
            break
    }
    ```

3. 编写程序，根据用户输入的一个数字(0～6)．通过警示对话框显示对应的星期几(0： 星期日； 1: 星期一;……6: 星期六；)

    ```js
    var num = 6
    var arr = ['星期日','星期一','星期二','星期三','星期四','星期五','星期六']
    alert(arr[num])
    ```

4. 编写程序，计算10！(即 1*2*3＊·…10）的结果(10的阶乘))

    ```js
    var sum = 1
    for(var i=1;i<=10;i++) {
        sum *= i
    }
    console.log(sum)
    ```

5. 编写程序,计算 1!+2!+3!+…..＋10!的结果

    ```js
    // 计算阶层
    function layer(n) {
        var sum = 1
        for(var i=1;i<=10;i++) {
            sum *= i
        }
        return sum 
    }
    var sum = 0
    for(var i = 1; i <= 10; i++) {
        sum += layer(i)
    }
    console.log(sum)
    ```

6. 在页面上输出如下数字图案。

    ```html
    1
    1 2
    1 2 3
    1 2 3 4
    1 2 3 4 5
    ```

    ```js
    for (var i = 1; i <= 5; i++) {
        for (var j = 1; j <= i; j++) {
            document.write(j + '&nbsp;')
        }
        document.write('<br>')
    }
    ```

7. 在页面上输出如下图案（等腰三角形）。

    ```html
        *
       * *
      * * * 
     * * * *
    * * * * *    
    ```

    ```js
    for(var i = 1 ; i <= 5; i++) {
        // 打印空白数
        for(var j= 1; j <= 5-i; j++) {
            document.write('&nbsp;')
        }
        //打印*
        for(var j=1;j<=i;j++) {
            document.write('*' + '&nbsp;')
        }
        document.write('<br>')
    }
    ```

8. 有一个三位数x，被4除余2，被7除余3，被9除余5，请求出这个数.

    ```js
    for(var i = 100; i < 1000; i++) {
        if (i % 4 === 2 && i % 7 === 3 && i % 9 === 5) {
            console.log(i)
        }
    }
    ```

9. 求所有满足条件的四位数ABCD，它是13的倍数，且第3位数加上第2位数等于第4位数 (即：A=B+C)

    ```js
    for(var i=1000; i< 10000; i++) {
        // 千位数
        var  k = parseInt(i / 1000 % 10)
        // 百位数
        var h = parseInt(i / 100 % 10)
        // 十位数
        var t = parseInt(i / 10 % 10)
        // 个位数
        var s = parseInt(i % 10)
        if (i % 13 === 0 && k == h + t) {
            console.log(i)
        }
    }

    ```

10. 编写一个判断某个非负整数是否能够同时被3，5,7整除的函数，然后在页面上输出1~1000之间所有能同时被3,5,7整除的整数,并要求每行显示6个这样的数

    ```js
    function fn(num) {
        return (num % 3 === 0 && num % 5 === 0 && num % 7 === 0)
    }
    var arr = []
    for (var i = 1; i <= 1000; i++) {
        if (fn(i)) {
            arr[arr.length] = i
        }
    }
    for (var j = 1; j < arr.length; j++) {//j 不能从0开始，0%任何数都是0
        document.write(arr[j] + '&nbsp;')
        if (j % 7 === 0) {// 一行显示6个
            console.log(j);
            document.write('<br>')
        }
    }
    ```

11. 在页面上编程输出100～1000之间的所有素数，并要求每行显示6个素数

    ```js
    function fn(num) {
        var count = 0
        for (var i = 2; i <= num - 2; i++) {
            if (num % i === 0) {
                count++
                break
            }
        }
        if (count === 0) {
            return true
        }
        return false
    }
    var arr = []
    for(var i = 100; i < 1000; i++) {
        if (fn(i)) {
            arr[arr.length] = i
        }
    }
    for(var i = 1; i < arr.length; i++) {
        document.write(arr[i] + '&nbsp;')
        if (i % 7 === 0) {
            document.write('<br>')
        }
    }
    ```

12. 编写一个非递归函数factorial(n)，计算12！-10！的结果

    ```js
    function factorial(num) {
        var sum = 1
        for(var i = 1; i <= num; i++) {
            sum *= i
        }
        return sum
    }
    var res = factorial(12) - factorial(10)
    console.log(res)
    ```

13. 斐波纳契(Fibonacci)数列的第一项是1,第二项是1，以后各项都是前两项的和。试用递归函数和非递归函数各编写一个程序，求斐波纳契数列第N项的值

    ```js
    function fb(n) {
        if (n === 1 || n === 2) {
            return 1
        }
        return fb(n - 1) + fb(n - 2)
    }

    function fb2(n) {
        var n1 = 1
        var n2 = 1
        var sum = 0
        for (var i = 2; i < n; i++) {
            sum = n1 + n2
            n1 = n2
            n2 = sum
        }
        return sum
    }
    ```

14. 斐波纳契(Fibonacci)数列的第一项是1,第二项是1，以后各项都是前两项的和。请按逆序在页面中显示斐波纳契数列前40项的值(即，如果计算出来的数列是1，1,2,3，5，8…，那么显示的顺序是…,8，5,3,2，1，1)，并要求每行显示6个数.

    ```js
    function fb(n) {
        if (n === 1 || n === 2) {
            return 1
        }
        return fb(n - 1) + fb(n - 2)
    }
    var arr = []
    for(var i = 1; i < 40; i++){
       arr[arr.length] = fb(i)
    }
    for(var i = arr.length; i >= 0; i--) {
        document.write(arr[i])
        if (i % 7 === 0) {
            document.write('<br>')
        }
    }
    ```
