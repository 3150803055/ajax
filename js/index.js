const oHttp=new SimpleHttp();
// oHttp.get('http://jsonplaceholder.typicode.com/posts',function(err,data){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);
//     }
// });
//
var dataObj={
    "title":"靠靠靠",
    "name":"陈广源"
};
// oHttp.post('http://jsonplaceholder.typicode.com/posts',dataObj,function(err,data){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);
//     }
// });

// oHttp.put('http://jsonplaceholder.typicode.com/posts',dataObj,function(err,data){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);
//     }
// });

oHttp.delete('http://jsonplaceholder.typicode.com/posts',function(err,data){
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
});