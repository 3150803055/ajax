function SimpleHttp(url,callback){
    this.http=new XMLHttpRequest();
}
//封装get方法
SimpleHttp.prototype.get=function (url,callback) {
    this.http.open("GET",url,true);
    const _this=this;
    this.http.onload=function () {
        if(_this.http.status === 200){
            callback(null,_this.http.responseText);
        }else{
            callback("什么玩意儿，错了错了！")
        }
    };
    this.http.send();
};
//封装post方法
SimpleHttp.prototype.post=function (url,dataObj,callback) {
    this.http.open("post",url,true);
    const _this=this;
    this.http.onload=function () {
        callback(null,_this.http.responseText);
    };
    this.http.setRequestHeader('Content-type','application/json');
    //发送请求post;
    this.http.send(JSON.stringify(dataObj));
};
//封装put方法
SimpleHttp.prototype.put=function (url,dataObj,callback) {
    this.http.open("put",url,true);
    const _this=this;
    this.http.onload=function () {
        callback(null,_this.http.responseText);
    };
    this.http.setRequestHeader('Content-type','application/json');
    //发送请求
    this.http.send(JSON.stringify(dataObj));
};
//封装delete方法
SimpleHttp.prototype.delete=function (url,callback) {
    this.http.open("DELETE",url,true);
    const _this=this;
    this.http.onload=function () {
        if(_this.http.status === 200){
            callback(null,_this.http.responseText);
        }else{
            callback("什么玩意儿，错了错了！")
        }
    };
    this.http.send();
};