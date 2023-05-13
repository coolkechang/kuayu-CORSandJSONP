//通过CORS方法，我们用下面的代码就可访问到friends.json。
//CORS是对方设置的，允许被人访问时才能进行访问
// const request = new XMLHttpRequest()
// request.open('get', 'http://qq.com:8888/friends.json')
// request.onreadystatechange = () => {
//   if (request.readyState === 4 && request.status === 200) {
//     console.log(request.response)
//   }
// }
// request.send()



//如果没有CORS，也可用JSONP的方法进行跨域访问。浏览器阻止我们跨域访问friends.json。但并不阻止我们引用js。所以如果对方在qq-com中创建friends,js并将数据存放在里面，我们通过引用friend.js便可得到数据。
//同样JSONP的方法也是对方主动将数据等信息通过写一个js文件存下来，别人访问这个js才能得到数据
//这里对jsonp进行了封装：function json(url) {return new Promise((resolve, reject) => {...}
function jsonp(url) {
  return new Promise((resolve, reject) => {
    const random = 'changJSONCallbackName' + Math.random()
    window[random] = (data) => {
      resolve(data)
    }
    const script = document.createElement('script')
    script.src = `${url}?callback=${random}`
    //这里注意：在JSONP中函数名不写成functionName。而要写成callback
    script.onload = () => {
      script.remove()
    }
    //每次请求都会使页面添加一个script标签，这里对script做个监听，删除这个标签。
    script.onerror = () => {
      reject()
    }
    document.body.appendChild(script)
  })
}
jsonp('http://chang.com:8888/friends.js')
  .then((data) => {
    console.log(data)
  })




