const Connection = require("../mysql")
const {DataTypes} = require("sequelize")

const dbconnect = Connection.connect;

const doctorUser= dbconnect.define('doctorUser',{
    name:{
        type: DataTypes.STRING,
    },
    contact:{
        type: DataTypes.STRING,
    },
   docId:{
        type: DataTypes.STRING
   },
   Email:{
        type:DataTypes.STRING,
   },
    password:{
        type: DataTypes.STRING,
    },
    datetime:{
        type:DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
},{
 
    timestamps: true

})
module.exports = doctorUser;