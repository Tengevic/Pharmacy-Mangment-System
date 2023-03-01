const Connection = require("../mysql")
const {DataTypes} = require("sequelize")

const dbconnect = Connection.connect;

const Inventory= dbconnect.define('Inventory',{
    email:{
        type: DataTypes.STRING,
    },
    name:{
        type: DataTypes.STRING,
    },
   quantity:{
        type: DataTypes.STRING
   },
   batchId:{
        type:DataTypes.STRING
   },
    expireDate:{
        type: DataTypes.DATE,
    },
    price:{
        type:DataTypes.STRING
    },
    imagePath:{
        type:DataTypes.STRING
    },
},{
 
    timestamps: true

})
module.exports = Inventory;