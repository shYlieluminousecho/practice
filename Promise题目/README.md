# 一些题目

## 基础题目

```js
const promise1 = new Promise((resolve, reject) => {
  console.log('promise1')
})
console.log('1', promise1);

// -------------------- 分割线 ----------------------

const promise = new Promise((resolve, reject) => {
  console.log(1);
  resolve('success')
  console.log(2);
});
promise.then(() => {
  console.log(3);
});
console.log(4);

// -------------------- 分割线 ----------------------

const promise = new Promise((resolve, reject) => {
  console.log(1);
  console.log(2);
});
promise.then(() => {
  console.log(3);
});
console.log(4);

// -------------------- 分割线 ----------------------

const promise1 = new Promise((resolve, reject) => {
  console.log('promise1')
  resolve('resolve1')
})
const promise2 = promise1.then(res => {
  console.log(res)
})
console.log('1', promise1);
console.log('2', promise2);

// -------------------- 分割线 ----------------------

const fn = () => (new Promise((resolve, reject) => {
  console.log(1);
  resolve('success')
}))
fn().then(res => {
  console.log(res)
})
console.log('start')

// -------------------- 分割线 ----------------------

const fn = () =>
  new Promise((resolve, reject) => {
    console.log(1);
    resolve("success");
  });
console.log("start");
fn().then(res => {
  console.log(res);
});

```

## Promise 结合 setTimeout

```js
console.log('start')
setTimeout(() => {
  console.log('time')
})
Promise.resolve().then(() => {
  console.log('resolve')
})
console.log('end')

// -------------------- 分割线 ----------------------

const promise = new Promise((resolve, reject) => {
  console.log(1);
  setTimeout(() => {
    console.log("timerStart");
    resolve("success");
    console.log("timerEnd");
  }, 0);
  console.log(2);
});
promise.then((res) => {
  console.log(res);
});
console.log(4);

// -------------------- 分割线 ----------------------

setTimeout(() => {
  console.log('timer1');
  setTimeout(() => {
    console.log('timer3')
  }, 0)
}, 0)
setTimeout(() => {
  console.log('timer2')
}, 0)
console.log('start')

// -------------------- 分割线 ----------------------

setTimeout(() => {
  console.log('timer1');
  Promise.resolve().then(() => {
    console.log('promise')
  })
}, 0)
setTimeout(() => {
  console.log('timer2')
}, 0)
console.log('start')

// -------------------- 分割线 ----------------------

Promise.resolve().then(() => {
  console.log('promise1');
  const timer2 = setTimeout(() => {
    console.log('timer2')
  }, 0)
});
const timer1 = setTimeout(() => {
  console.log('timer1')
  Promise.resolve().then(() => {
    console.log('promise2')
  })
}, 0)
console.log('start');

// -------------------- 分割线 ----------------------

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('success')
  }, 1000)
})
const promise2 = promise1.then(() => {
  throw new Error('error!!!')
})
console.log('promise1', promise1)
console.log('promise2', promise2)
setTimeout(() => {
  console.log('promise1', promise1)
  console.log('promise2', promise2)
}, 2000)

// -------------------- 分割线 ----------------------

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("success");
    console.log("timer1");
  }, 1000);
  console.log("promise1里的内容");
});
const promise2 = promise1.then(() => {
  throw new Error("error!!!");
});
console.log("promise1", promise1);
console.log("promise2", promise2);
setTimeout(() => {
  console.log("timer2");
  console.log("promise1", promise1);
  console.log("promise2", promise2);
}, 2000);

```

## Promise 结合 then、catch、finally

```js

const promise = new Promise((resolve, reject) => {
  resolve("success1");
  reject("error");
  resolve("success2");
});
promise
.then(res => {
    console.log("then: ", res);
})
.catch(err => {
    console.log("catch: ", err);
})

// -------------------- 分割线 ----------------------

const promise = new Promise((resolve, reject) => {
  reject("error");
  resolve("success2");
});
promise
.then(res => {
    console.log("then1: ", res);
  }).then(res => {
    console.log("then2: ", res);
  }).catch(err => {
    console.log("catch: ", err);
  }).then(res => {
    console.log("then3: ", res);
  })

// -------------------- 分割线 ----------------------

Promise.resolve(1)
  .then(res => {
    console.log(res);
    return 2;
  })
  .catch(err => {
    return 3;
  })
  .then(res => {
    console.log(res);
  });

// -------------------- 分割线 ----------------------

Promise.reject(1)
  .then(res => {
    console.log(res);
    return 2;
  })
  .catch(err => {
    console.log(err);
    return 3
  })
  .then(res => {
    console.log(res);
  });

// -------------------- 分割线 ----------------------

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('timer')
        resolve('success')
    }, 1000)
})
const start = Date.now();
promise.then(res => {
  console.log(res, Date.now() - start)
})
promise.then(res => {
  console.log(res, Date.now() - start)
})

// -------------------- 分割线 ----------------------

Promise.resolve().then(() => {
  return new Error('error!!!')
}).then(res => {
  console.log("then: ", res)
}).catch(err => {
  console.log("catch: ", err)
})

// -------------------- 分割线 ----------------------

const promise = Promise.resolve().then(() => {
  return promise;
})
promise.catch(console.err)

// -------------------- 分割线 ----------------------

Promise.resolve(1)
  .then(2)
  .then(Promise.resolve(3))
  .then(console.log)

// -------------------- 分割线 ----------------------

Promise.reject('err!!!')
  .then((res) => {
    console.log('success', res)
  }, (err) => {
    console.log('error', err)
  }).catch(err => {
    console.log('catch', err)
  })

// -------------------- 分割线 ----------------------

Promise.reject('error!!!')
  .then((res) => {
    console.log('success', res)
  }).catch(err => {
    console.log('catch', err)
  })

// -------------------- 分割线 ----------------------

Promise.resolve()
  .then(function success (res) {
    throw new Error('error!!!')
  }, function fail1 (err) {
    console.log('fail1', err)
  }).catch(function fail2 (err) {
    console.log('fail2', err)
  })

// -------------------- 分割线 ----------------------

Promise.resolve('1')
  .then(res => {
    console.log(res)
  })
  .finally(() => {
    console.log('finally')
  })
Promise.resolve('2')
  .finally(() => {
    console.log('finally2')
   return '我是finally2返回的值'
  })
  .then(res => {
    console.log('finally2后面的then函数', res)
  })

// -------------------- 分割线 ----------------------

Promise.resolve('1')
  .finally(() => {
    console.log('finally1')
    throw new Error('我是finally中抛出的异常')
  })
  .then(res => {
    console.log('finally后面的then函数', res)
  })
  .catch(err => {
    console.log('捕获错误', err)
  })

// -------------------- 分割线 ----------------------

function promise1 () {
  let p = new Promise((resolve) => {
    console.log('promise1');
    resolve('1')
  })
  return p;
}
function promise2 () {
  return new Promise((resolve, reject) => {
    reject('error')
  })
}
promise1()
  .then(res => console.log(res))
  .catch(err => console.log(err))
  .finally(() => console.log('finally1'))

promise2()
  .then(res => console.log(res))
  .catch(err => console.log(err))
  .finally(() => console.log('finally2'))

// -------------------- 分割线 ----------------------

function promise1 () {
  let p = new Promise((resolve) => {
    console.log('promise1');
    resolve('1')
  })
  return p;
}
function promise2 () {
  return new Promise((resolve, reject) => {
    reject('error')
  })
}
promise1()
  .then(res => console.log(res))
  .catch(err => console.log(err))
  .then(() => console.log('finally1'))

promise2()
  .then(res => console.log(res))
  .catch(err => console.log(err))
  .then(() => console.log('finally2'))

// -------------------- 分割线 ----------------------

function runAsync (x) {
    const p = new Promise(r => setTimeout(() => r(x, console.log(x)), 1000))
    return p
}
Promise.all([runAsync(1), runAsync(2), runAsync(3)])
  .then(res => console.log(res))

// -------------------- 分割线 ----------------------

function runAsync (x) {
  const p = new Promise(r => setTimeout(() => r(x, console.log(x)), 1000))
  return p
}
function runReject (x) {
  const p = new Promise((res, rej) => setTimeout(() => rej(`Error: ${x}`, console.log(x)), 1000 * x))
  return p
}
Promise.all([runAsync(1), runReject(4), runAsync(3), runReject(2)])
  .then(res => console.log(res))
  .catch(err => console.log(err))

// -------------------- 分割线 ----------------------

function runAsync (x) {
  const p = new Promise(r => setTimeout(() => r(x, console.log(x)), 1000))
  return p
}
Promise.race([runAsync(1), runAsync(2), runAsync(3)])
  .then(res => console.log('result: ', res))
  .catch(err => console.log(err))

// -------------------- 分割线 ----------------------

function runAsync(x) {
  const p = new Promise(r =>
    setTimeout(() => r(x, console.log(x)), 1000)
  );
  return p;
}
function runReject(x) {
  const p = new Promise((res, rej) =>
    setTimeout(() => rej(`Error: ${x}`, console.log(x)), 1000 * x)
  );
  return p;
}
Promise.race([runReject(0), runAsync(1), runAsync(2), runAsync(3)])
  .then(res => console.log("result: ", res))
  .catch(err => console.log(err));

```

## Promise 结合 async/await

```js

async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
}
async function async2() {
  console.log("async2");
}
async1();
console.log('start')

// -------------------- 分割线 ----------------------

async function async1() {
  console.log("async1 start");
  new Promise(resolve => {
    console.log('promise')
  })
  console.log("async1 end");
}
async1();
console.log("start")

// -------------------- 分割线 ----------------------

async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
}
async function async2() {
  setTimeout(() => {
    console.log('timer')
  }, 0)
  console.log("async2");
}
async1();
console.log("start")

// -------------------- 分割线 ----------------------

async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
  setTimeout(() => {
    console.log('timer1')
  }, 0)
}
async function async2() {
  setTimeout(() => {
    console.log('timer2')
  }, 0)
  console.log("async2");
}
async1();
setTimeout(() => {
  console.log('timer3')
}, 0)
console.log("start")

// -------------------- 分割线 ----------------------

async function async1 () {
  console.log(1);
  await new Promise(resolve => {
    console.log(2)
  })
  console.log(3);
  return 4
}
console.log(5)
async1().then(res => console.log(res))
console.log(6)

// -------------------- 分割线 ----------------------

async function async1 () {
  console.log(1);
  await new Promise(resolve => {
    console.log(2)
    resolve(3)
  }).then(res => console.log(res))
  console.log(4);
  return 5
}
console.log(6)
async1().then(res => console.log(res))
console.log(7)

// -------------------- 分割线 ----------------------

async function async1 () {
  console.log(1);
  await new Promise(resolve => {
    console.log(2)
    resolve(3)
  })
  console.log(4);
  return 5
}
console.log(6)
async1().then(res => {
  console.log(res)
})
new Promise(resolve => {
  console.log(7)
  setTimeout(() => {
    console.log(8)
  })
})

// -------------------- 分割线 ----------------------

async function async1() {
  console.log(1);
  await async2();
  console.log(2);
}

async function async2() {
  console.log(3);
}

console.log(4);

setTimeout(function() {
  console.log(5);
}, 0);

async1();

new Promise(function(resolve) {
  console.log(6);
  resolve();
}).then(function() {
  console.log(7);
});
console.log(8)

// -------------------- 分割线 ----------------------

async function testSomething() {
  console.log(1);
  return 2;
}

async function testAsync() {
  console.log(3);
  return Promise.resolve(4);
}

async function test() {
  console.log(5);
  const v1 = await testSomething();
  console.log(v1);
  const v2 = await testAsync();
  console.log(v2);
  console.log(v1, v2);
}

test();

var promise = new Promise(resolve => {
  console.log(6);
  resolve(7);
});
promise.then(val => console.log(val));

console.log(8);

// -------------------- 分割线 ----------------------

async function async1 () {
  await async2();
  console.log('async1');
  return 'async1 success'
}
async function async2 () {
  return new Promise((resolve, reject) => {
    console.log('async2')
    reject('error')
  })
}
async1().then(res => console.log(res))

// -------------------- 分割线 ----------------------

async function async1 () {
  try {
    await Promise.reject(1)
  } catch(e) {
    console.log(e)
  }
  console.log(2);
  return Promise.resolve(3)
}
async1().then(res => console.log(res))
console.log(4)

// -------------------- 分割线 ----------------------

async function async1 () {
  // try {
  //   await Promise.reject(1)
  // } catch(e) {
  //   console.log(e)
  // }
  await Promise.reject(1)
    .catch(e => console.log(e))
  console.log(2);
  return Promise.resolve(3)
}
async1().then(res => console.log(res))
console.log(4)

// -------------------- 分割线 ----------------------

const first = () => (new Promise((resolve, reject) => {
    console.log(3);
    let p = new Promise((resolve, reject) => {
        console.log(7);
        setTimeout(() => {
            console.log(5);
            resolve(6);
            console.log(p)
        }, 0)
        resolve(1);
    });
    resolve(2);
    p.then((arg) => {
        console.log(arg);
    });
}));
first().then((arg) => {
    console.log(arg);
});
console.log(4);

// -------------------- 分割线 ----------------------

const async1 = async () => {
  console.log(1);
  setTimeout(() => {
    console.log(2)
  }, 2000)
  await new Promise(resolve => {
    console.log(3)
  })
  console.log(4)
  return 5
} 
console.log(6);
async1().then(res => console.log(res));
console.log(7);
Promise.resolve(8)
  .then(9)
  .then(Promise.resolve(10))
  .catch(11)
  .then(res => console.log(res))
setTimeout(() => {
  console.log(12)
}, 1000)

// -------------------- 分割线 ----------------------

const async1 = async () => {
  console.log('async1');
  setTimeout(() => {
    console.log('timer1')
  }, 2000)
  await new Promise(resolve => {
    console.log('promise1')
  })
  console.log('async1 end')
  return 'async1 success'
} 
console.log('script start');
async1().then(res => console.log(res));
console.log('script end');
Promise.resolve(1)
  .then(2)
  .then(Promise.resolve(3))
  .catch(4)
  .then(res => console.log(res))
setTimeout(() => {
  console.log('timer2')
}, 1000)

// -------------------- 分割线 ----------------------

const p1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve('resolve3');
    console.log('timer1')
  }, 0)
  resolve('resolve1');
  resolve('resolve2');
}).then(res => {
  console.log(res)
  setTimeout(() => {
    console.log(p1)
  }, 1000)
}).finally(res => {
  console.log('finally', res)
})


```

## 面试题

1. 使用Promise实现每隔1秒输出1,2,3

    ```js

    const arr = [1,2,3]
    arr.reduce((prev, cur) => {
        return prev.then(() => {
            return new Promise(resolve => {
                setTimeout(() => {
                    console.log(cur)
                    resolve(cur)
                }, 1000)
            })
        })
    }, Promise.resolve())

    ```

2. 使用Promise实现红绿灯交替重复亮
红灯3秒亮一次，黄灯2秒亮一次，绿灯1秒亮一次；如何让三个灯不断交替重复亮灯？（用Promise实现）三个亮灯函数已经存在

    ```js
    function red() {
        console.log('red');

    }
    function green() {
        console.log('green');
    }
    function yellow() {
        console.log('yellow');
    }

    ```

    ```js
    function red() {
        console.log('red');

    }
    function green() {
        console.log('green');
    }
    function yellow() {
        console.log('yellow');
    }

    function repeatLight(cb, timer) {
        return new Promise(resolve => {
            setTimeout(() => resolve(cb()), timer)
        })
    }

    function step() {
        Promise.resolve()
            .then(() => repeatLight(red, 3000))
            .then(() => repeatLight(green, 2000))
            .then(() => repeatLight(yellow, 1000))
            .then(() => step())
    }
    step()

    ```

3. 实现mergePromise函数
实现mergePromise函数，把传进去的数组按顺序先后执行，并且把返回的数据先后放到数组data中

    ```js
    const time = (timer) => {

        return new Promise(resolve => {
            setTimeout(() => {
                resolve()
            }, timer)
        })
    }
    const ajax1 = () => time(2000).then(() => {
        console.log(1);
        return 1
    })
    const ajax2 = () => time(1000).then(() => {
        console.log(2);
        return 2
    })
    const ajax3 = () => time(1000).then(() => {
        console.log(3);
        return 3
    })

    function mergePromise () {
    // 在这里写代码
    }

    mergePromise([ajax1, ajax2, ajax3]).then(data => {
        console.log("done");
        console.log(data); // data 为 [1, 2, 3]
    });

    // 要求分别输出
    // 1
    // 2
    // 3
    // done
    // [1, 2, 3]

    ```

    答案

    ```js
    function mergePromise(arr) {
        // 在这里写代码
        const data = [] // 初始化 data 用来保存所有的异步任务
        return arr.reduce((prev, cur) => {
            return prev.then(cur).then(res => {
                data.push(res)
                return data
            })
        }, Promise.resolve())
    }
    ```

4. 根据promiseA+实现一个自己的promise

    ```js
    ```

5. 封装一个异步加载图片的方法

    ```js
    function loadImg(url) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = function() {
                console.log('图片加载完成')
                resolve(img)
            }
            img.onerror = function() {
                reject(new Error('Could not load image at' + url))
            }
            img.src = url
        })
    }
    
    ```
