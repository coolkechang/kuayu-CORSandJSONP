window['{{xxx}}']({ { data } })

/*
{{}}是占位符
其实这个文件内容只是作为占位符用，可以省去，直接将其写到后台（server.js）里面更好。如下：
1.将： const string = fs.readFileSync('./public/friends.js').toString()
改成： const string = `window['{{xxx}}']({{ data }})`
2.删除这个文件
*/