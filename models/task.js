const mongoose=require('mongoose')
const validator=require('validator')
const taskSchema=mongoose.Schema({
    description:
    {
        type:String,
        required:true,
        trim:true,
    },
     
    completed:
    {
        type:Boolean,
        default:false,
    },

    owner:
    {
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'main'
    },
},{
    timestamps:true,
})

const Task=mongoose.model('Task',taskSchema)
module.exports=Task;