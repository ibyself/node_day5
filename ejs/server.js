let express=require('express');
let app=express();
app.set('view engine','ejs');
app.set('views','./views');
app.get('/test',(req,res)=>{
    const person=[{name:'kobe',age:19},{name:'wade',age:18},{name:'sun',age:20}];
    res.render('index',{person});
});
app.listen(3000,(err)=>{
    if(!err) console.log("服务器启动成功");
    else console.log(err);
});