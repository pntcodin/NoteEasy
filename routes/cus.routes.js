const express = require("express");
const { CusModel } = require ("../models/CusModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const cusRouter = express.Router();

cusRouter.get("/",(req,res) => {
    res.send("User are u Ok");
});

cusRouter.post("/register", async(req,res) =>{
    const { name, email, password } = req.body;
    bcrypt.hash(password, 5 , async function(err,hash){
        if(err) return res.send({ message: "somthing worng", status:0});
        try{
            let cus = new CusModel({ name,email,password: hash});
            await cus.save();
            res.send({
                message:"Create Successfilly",
                status:1,
            });
        }catch(error){
            res.send({
                message: error.message,
                status:0,
            });
        }
    });
});

cusRouter.post("/login", async (req, res)=>{
    const { email, password } = req.body;
    let option = {
        expiresIn : "3m"
    }
    try{
        let data = await CusModel.find({ email });
        if (data.length >0){
            let token = jwt.sign({ userId: data[0]._id }, "admin",option);
            bcrypt.compare(password,data[0].password, function (err,result){
                if(err)
                return res.send({message:"Somthing Wrong: " +err,status:0});
            if(result){
                res.send({
                    message: "User logged in successfully",
                        token: token,
                        status: 1,
                });
            }else {
                res.send({
                    message: "Incorrect password",
                    status: 0,
                });
            }
            });
        }else {
            res.send({
                message: "User does not exist",
                status: 0,
            });
        }
    } catch (error) {
        res.send({
            message: error.message,
            status: 0,
        });
    }
});

module.exports = { cusRouter };