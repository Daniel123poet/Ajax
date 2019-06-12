function obj2str(obj) {

    obj.t = new Date().getTime();
    var res = [];
    for(key in obj){
        //URL中不允许出现中文
        //解决中文问题  encodeURIComponent
        //URL 只可以出现字母/数字/下划线/ASCII码
        res.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
    }
    return res.join('&');
}


function ajax(url, obj, timeout, success, error) {

    //key=value&key=value
    //0. 将对象转换成字符串
    var str = obj2str(obj);
    //1. 创建异步对象
    var xmlhttp, timer;

    if(window.XMLHttpRequest){
        //for IE7+, FF, Chrome, Safari, Opera
        xmlhttp = new XMLHttpRequest();
    }else{
        //for IE5, IE6
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        /*
        * IE浏览器中，如果通过Ajax发送请求，那么IE浏览器认为同一个URL只有一个结果
        * */
    }

    //2. 设置请求方式和请求地址
    /*
    * method：请求的类型；GET 或 POST
      url：文件在服务器上的位置
      async：true（异步）或 false（同步）
    * */
    xmlhttp.open('GET', url+'?'+str, true);
    //3. 发送请求
    xmlhttp.send();
    //4. 监听状态的变化
    xmlhttp.onreadystatechange = function () {
        //5. 处理返回结果
        if(xmlhttp.readyState === 4){
            clearInterval(timer);
            //判断是否请求成功

            /*
            *  存有 XMLHttpRequest 的状态。从 0 到 4 发生变化。
            0: 请求未初始化
            1: 服务器连接已建立
            2: 请求已接收
            3: 请求处理中
            4: 请求已完成，且响应已就绪
            * */
            if(xmlhttp.status >= 200 && xmlhttp.status < 300 || xmlhttp.status === 304){
                // console.log('接收到服务器返回的数据');
                success(xmlhttp);
            }else{
                // console.log('没有接收到服务器返回的数据');
                error(xmlhttp);
            }

        }

    };
    //判断外界是否传入了超时时间
    if(timeout){
        timer = setInterval(function () {
            console.log('中断请求');
            xmlhttp.abort();
            clearInterval(timer);
        }, timeout);
    }

}