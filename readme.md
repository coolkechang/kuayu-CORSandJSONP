# 设置本地域名映射
让 qq.com 映射到 127.0.0.1  就可以访问  http://qq.com:8888/index.html 了

让 chang.com 映射到 127.0.0.1  就可以访问 http://chang.com:9999/index.html 了


过程：

记事本（管理员身份运行）=> 点击“文件” => “打开” => 右下角选择“全部文件” => 点击“hosts” => 添加：127.0.0.1 chang.com 和 127.0.0.1 qq.com 两句。

# 启动
```
node-dev server,js 8888

node-dev server,js 9999
```
 

