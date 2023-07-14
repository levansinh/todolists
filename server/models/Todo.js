import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const schema = new Schema(
    {
        title: { type: String ,required:"true"},
        description:{type: String ,required:'true'},
        complete: {type: String,default:false},
        },
        {timestamps:true}
);

export const TodoModel = mongoose.model('ToDo',schema)