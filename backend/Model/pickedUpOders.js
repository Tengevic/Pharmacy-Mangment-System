const Connection = require("../mysql")
const {DataTypes} = require("sequelize")

const dbconnect = Connection.connect;

const PickedUpDoctorOder = dbconnect.define('PickedUpDoctorOder',{
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
    drugNames :{
        type: DataTypes.JSON
    },
    drugPrice :{
        type: DataTypes.JSON
    },
     drugQuantity:{
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


module.exports = PickedUpDoctorOder;