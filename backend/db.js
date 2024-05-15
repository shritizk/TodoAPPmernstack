const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://shritizkumar:1234@cluster0.3vv4wem.mongodb.net/')



const todoscema = mongoose.Schema({
    title : String , 
    description : String , 
    completed  : Boolean
})

const todo = mongoose.model('todos' , todoscema);
module.exports = {
    todo
}