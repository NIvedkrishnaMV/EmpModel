const mongoose=require('mongoose');
const schema=mongoose.Schema({
    name:String,
    location:String,
    position:String,
    salary:Number
});
const emplModel=mongoose.model('Employee',schema);
module.exports=emplModel;