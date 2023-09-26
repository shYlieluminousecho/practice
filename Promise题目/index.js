
const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

function MyPromise(executor) { // 接收一个执行器函数
  this.status = PENDING // 定义一个状态
  this.result = undefined // 定义一个返回值
  this.tasks = [] // 执行的任务列表

  // 保存 this
  var _this = this

  // 封装一个函数，用于改变promise的状态，并设置返回值
  function changeStatus(type, data) {
    if (_this.status !== PENDING) return
    _this.status = type
    _this.result = data
    _this.tasks.forEach(item => {
      item[type](_this.result)
    })
  }

  // 成功回调
  function resolve(data) {
    // 改变promise的状态
    changeStatus(FULFILLED, data)
  }

  // 失败回调
  function reject(data) {
    // 改变promise的状态
    changeStatus(REJECTED, data)
  }
  try {
    executor(resolve, reject)
  } catch (error) {
    reject(error)
  }
}


// then 回调函数
MyPromise.prototype.then = function (onFulfilled, onRejected) {
  const _this = this
  return new MyPromise((resolve, reject) => {
    if (_this.status === FULFILLED) {
      const result = onFulfilled(_this.result)
      // 判断result的返回值类型
      try {
        if (result instanceof MyPromise) {
          return result.then(resolve, reject)
        } else {
          return resolve(result);
        }
      } catch (error) {
        reject(error)
      }
    } else if (_this.status === REJECTED) {
      const result = onRejected(_this.result)
      // 判断result的返回值类型
      try {
        if (result instanceof MyPromise) {
          return result.then(resolve, reject)
        } else {
          return reject(result);
        }
      } catch (error) {
        reject(error)
      }
    } else {
      _this.tasks.push({
        [FULFILLED]() {
          const result = onFulfilled(_this.result)
          try {
            if (result instanceof MyPromise) {
              return result.then(resolve, reject)
            } else {
              return resolve(result);
            }
          } catch (error) {
            reject(error)
          }
        },
        [REJECTED]() {
          const result = onRejected(_this.result)
          try {
            if (result instanceof MyPromise) {
              return result.then(resolve, reject)
            } else {
              return resolve(result);
            }
          } catch (error) {
            reject(error)
          }
        }
      })
    }
  })
}

// 实现 all 方法
MyPromise.prototype.all = function () {
  
}
