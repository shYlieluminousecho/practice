# 封装 JSONP

```js
function jsonp(url, params, callback) {
    var funcName = 'jsonp_' + Date.now() + Math.random().toString().substr(2, 5)
    var script = document.createElement('script');
    if (Object.prototype.toString.call(params) === '[object Object]') {
        var tempArr = []
        for (const key in params) {
            var value = params[key]
            tempArr.push(key + '=' + value)
        }
        // tempArr => ['key1=value1', 'key2=value2']
        params = tempArr.join('&') // => key1=value1&key2=value2
    }
    script.src = url + '?' + params + 'callback=' + funcName

    document.body.appendChild(script)

    window[funcName] = function(data) {
        callback(data);
        // 最后要清空
        delete window[funcName];
        document.body.removeChild(script)
    }
}
```
