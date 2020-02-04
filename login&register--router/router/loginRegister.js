let {Router}=require('express');
let router=new Router();
let usersModel=require('../model/users');
//注册路由
router.post('/register',async(req,res)=>{
    let {email,user_name,password,re_password}=req.body;
    let emailReg=/^[a-zA-Z0-9_]{5,16}@[a-zA-Z0-9]{2,8}\.com$/;
    let userNameReg=/^[a-zA-Z0-9_]{5,16}$/;
    let passwordReg=/^[a-zA-Z0-9_@#!]{6,20}$/;

    if(!emailReg.test(email)){
        res.send('邮箱输入不合法');
        return ;
    }else if(!userNameReg.test(user_name)){
        res.send('姓名输入不合法');
        return ;
    }else if(!passwordReg.test(password)){
        res.send('密码输入不合法');
        return ;
    }else if(password!==re_password){
        res.send('两次密码输入不一致');
        return ;
    }
    try{
        let findResult=await usersModel.findOne({email});
        if(findResult){
            res.send(`${email}邮箱已经注册过,不能重复注册`);
            return;
        }else{
            await usersModel.create({email,user_name,password});
            res.send(`${email}邮箱注册成功`);
        }
    }catch{

    }
});

//登录路由
router.post('/login',async(req,res)=>{
   let {email,password}=req.body;
   let emailReg=/^[a-zA-Z0-9_]{5,16}@[a-zA-Z0-9]{2,8}\.com$/;
   let passwordReg=/^[a-zA-Z0-9_!@#$]{5,16}$/;
   if(!emailReg.test(email)){
       res.send('邮箱输入不合法');
       return;
   }else if(!passwordReg.test(password)){
       res.send('密码输入不合法');
       return;
   }
   try{
       let findResult=await usersModel.findOne({email,password});
       if(findResult){
           res.redirect('http://www.baidu.com');
       }else{
           res.send('登录失败，邮箱或密码不正确')
       }

   }catch (e) {

   }
});
module.exports=router;