const {Sequelize,DataTypes} = require("sequelize");
require('dotenv').config();
const {
    DB_USERNAME,
    DB_PASSWORD,
    DB_HOSTNAME,
    DB_PORT,
    DB_NAME
} = process.env;


const sequelize = new Sequelize(`postgres://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOSTNAME}:${DB_PORT}/${DB_NAME}`);
sequelize.authenticate()
.then(()=>{
    console.log("Connected to DB")
})
.catch(err=>{
    console.log(err)
})

const User = sequelize.define(
    "users",
    {
        customer_number:{
            type:DataTypes.INTEGER
        },
        first_name:{
            type: DataTypes.STRING
        }, 
        last_name:{
            type: DataTypes.STRING
        },
        user_name:{
            type: DataTypes.STRING
        },
        email:{
            type:DataTypes.STRING
        },
        date_of_birth:{
            type:DataTypes.DATE
        },
        password:{
            type:DataTypes.STRING
        },
        last_login:{
            type:DataTypes.DATE
        },

    }
);

module.exports = User;