const User = require("../model/User");

exports.get_users = async(req,res,next)=>{
    try {
        const userList = await User.findAll();
        res.send(userList);
        console.log("userList",userList);
    } catch (error) {
        res.send(error);
    }
}

exports.add_user = async(req,res,next)=>{
    try {
        const newUser = await User.create({
            customer_number:req.body.customer_number,
            first_name:req.body.first_name,
            last_name:req.body.last_name,
            user_name:req.body.user_name,
            email:req.body.email,
            date_of_birth:req.body.date_of_birth,
            password:req.body.password,
            last_login:req.body.last_login
        })
        res.send({user:newUser})
    } catch (error) {
        res.send(error);
    }
}

exports.delete_user = async(req,res,next)=>{
    try {
        await User.destroy({
            where:{
                id:req.params.id
            }
        })
        res.send("user successfully deleted");
    } catch (error) {
        console.log(error);
    }
}

exports.update_user = async(req,res,next)=>{
    try {
        const user = await User.findOne({
            where:{
                id:req.params.id
            }
        });
        user.customer_number=req.body.customer_number,
        user.first_name = req.body.first_name;
        user.last_name = req.body.last_name,
        user.user_name = req.body.user_name,
        user.email = req.body.email,
        user.date_of_birth = req.body.date_of_birth,
        user.password = req.body.password,
        user.last_login = req.body.last_login
        await user.save();
        res.send(user);
    } catch (error) {
        res.send(error);
    }
}