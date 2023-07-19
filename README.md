# 一些题目

1. 在页面上输出如下数字图案。

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

2. 在页面上输出如下图案（等腰三角形）。

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

3. 有一个三位数x，被4除余2，被7除余3，被9除余5，请求出这个数.

    ```js
    for(var i = 100; i < 1000; i++) {
        if (i % 4 === 2 && i % 7 === 3 && i % 9 === 5) {
            console.log(i)
        }
    }
    ```

4. 求所有满足条件的四位数ABCD，它是13的倍数，且第3位数加上第2位数等于第4位数 (即：A=B+C)

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

5. 编写一个判断某个非负整数是否能够同时被3，5,7整除的函数，然后在页面上输出1~1000之间所有能同时被3,5,7整除的整数,并要求每行显示6个这样的数

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

6. 在页面上编程输出100～1000之间的所有素数，并要求每行显示6个素数

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

7. 编写一个非递归函数factorial(n)，计算12！-10！的结果

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

8. 斐波纳契(Fibonacci)数列的第一项是1,第二项是1，以后各项都是前两项的和。试用递归函数和非递归函数各编写一个程序，求斐波纳契数列第N项的值

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

9. 斐波纳契(Fibonacci)数列的第一项是1,第二项是1，以后各项都是前两项的和。请按逆序在页面中显示斐波纳契数列前40项的值(即，如果计算出来的数列是1，1,2,3，5，8…，那么显示的顺序是…,8，5,3,2，1，1)，并要求每行显示6个数.

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
