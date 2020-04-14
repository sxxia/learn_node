let http = require('http')
let fs = require('fs')
let template = require('art-template')

let server = http.createServer()

server.on('request', (req, res) => {
  let url = req.url
  if (url === '/') {
    // 读取template.html中的内容，并且转换成字符串格式
    fs.readFile('./template.html', (error, data) => {
      if (error) {
        return res.end('can not find template.html')
      }
      let dataStr = data.toString()
      let htmlStr = template.render(dataStr, {
        name: 'pubdreamcc',
        Title: '首页',
        main: '个人信息',
        age: 24,
        hobbies: ['写代码', '读书', '篮球']
      })  // template.render()方法编译模板文档并返回渲染结果。
      res.end(htmlStr)
    })
  } else {
    res.end('404 NOT found')
  }
})

// 绑定端口号，开启服务器
server.listen(3000, () => {
  console.log('服务器已经启动，可以访问。。。')
})