const mongoose=require('mongoose');

//aqui declararemso como estara formado nustro OBJ task
const TaskSchema= new mongoose.Schema({
    _id:{
        type:String,
        require:Number,
     }, 
    title:{
        type:String,
        require:true
     },
     description:{
        type:String,
        require:true
     },
     completed:{
        type:Boolean,
        require:true,
        default:false
     },
     created_at:{
        type:Date,
        default:Date.now
     },
});


//exportamos para poder usar este modelo

module.exports= mongoose.model("TaskModel",TaskSchema);

