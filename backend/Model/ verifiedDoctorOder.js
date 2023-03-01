const Connection = require("../mysql")
const {DataTypes} = require("sequelize")

const dbconnect = Connection.connect;

const verifiedDoctorOder = dbconnect.define('verifiedDoctorOder',{
    doctorName:{
        type: DataTypes.STRING,
    },
    doctorContact:{
        type: DataTypes.STRING,
    },
   doctorID:{
        type: DataTypes.INTEGER
   },
   doctorEmail:{
        type:DataTypes.STRING
   },
    drugId :{
        type: DataTypes.JSON
    },
    drugNames :{
        type: DataTypes.JSON
    },
    drugPrice :{
        type: DataTypes.JSON
    },
     drugQuantity:{
        type: DataTypes.JSON
    },
    realQuantity :{
        type: DataTypes.JSON
    },
    totalAmount:{
        type: DataTypes.STRING,
    },
    pickupDate:{
        type:DataTypes.STRING
    },
   
},{
 
    timestamps: true

})


module.exports = verifiedDoctorOder;