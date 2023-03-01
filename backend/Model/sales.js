const Connection = require("../mysql")
const {DataTypes} = require("sequelize")

const dbconnect = Connection.connect;

const sales= dbconnect.define('sales',{
    drugName:{
        type: DataTypes.JSON,
    },
    datetime:{
        type:DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },   
   tax:{
        type: DataTypes.STRING
   },
   paidAmount:{
        type:DataTypes.STRING
   },
    Balance :{
        type: DataTypes.DATE,
    },

},{
 
    timestamps: true

})
module.exports = sales;