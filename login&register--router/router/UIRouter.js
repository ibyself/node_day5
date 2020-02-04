let {Router} =require('express');
let {resolve}=require('path');
let router=new Router();
router.get('/register',(req,res)=>{
   let url=resolve(__dirname,'../public/register.html');
    res.sendFile(url);
});
router.get('/login',(req,res)=>{
    let url=resolve(__dirname,'../public/login.html');
    res.sendFile(url);
});
module.exports=router;