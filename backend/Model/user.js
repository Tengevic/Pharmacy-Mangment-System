const Connection = require("../mysql")
const {DataTypes} = require("sequelize")

const dbconnect = Connection.connect;

const User = dbconnect.define('User',{
    name:{
        type: DataTypes.STRING,
    },
    contact:{
        type: DataTypes.STRING,
    },
   email:{
        type: DataTypes.STRING
   },
   nic:{
        type:DataTypes.STRING
   },
    password :{
        type: DataTypes.STRING
    },
    role :{
        type: DataTypes.STRING
    },
    datetime:{
        type:DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
   
},{
 
    timestamps: true

})


module.exports = User;