let {Router} =require('express');
let {resolve}=require('path');
let router=new Router();
router.get('/register',(req,res)=>{
   res.render('register',{errMsg:{}});
});
router.get('/login',(req,res)=>{
    let {email}=req.query;
    res.render('login',{errMsg:{email}});
});
module.exports=router;