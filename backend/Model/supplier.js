const Connection = require("../mysql")
const {DataTypes} = require("sequelize")

const dbconnect = Connection.connect;

const Supplier = dbconnect.define('Supplier',{
    supplierID:{
        type: DataTypes.STRING,
    },
    name:{
        type: DataTypes.STRING,
    },
   email:{
        type: DataTypes.STRING
   },
   contact:{
        type:DataTypes.STRING
   },
    drugsAvailable :{
        type: DataTypes.STRING
    },
   
},{
 
    timestamps: true

})


module.exports = Supplier;