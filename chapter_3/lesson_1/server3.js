// 引入 fs 模块
var fs = require("fs")
// 引入 events 模块， Node 有多个内置的事件，我们可以通过引入 events 模块，并通过实例化 EventEmitter 类来绑定和监听事件。
var events = require("events")

// 实例化事件对象
var EventEmitter = new events.EventEmitter()

var getText = () => {
  fs.readFile('./index.html', (err, data) => {
    if (err) {
      return 
    }
    // console.log(2)
    // 将 data 广播出去
    EventEmitter.emit('data', data.toString())
  })
}
getText()

// 监听data
EventEmitter.on('data', (text) => {
  console.log(text)
})