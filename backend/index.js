const express = require('express');
const { createTodo, updateTodo } = require('./types');
const { todo } = require('./db');
const app = express();
const cors = require('cors')
app.use(express.json());
app.use(cors());



app.get('/todos',async function(req,res){
    const todos = await todo.find({});
    res.json({
        todos
    })
}


)



app.put('/todo',async function(req,res){
    const updatePaload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePaload);
    if(!parsedPayload.success){
        res.status(401).json({
            msg : "you have entered wrong input"
        })
        return ;
    }

    await todo.update({
        _id : req.body.id
    },{
        completed : true    
    })

    res.json({
        msg : "todo updated"
    })
    
})

app.post('/todo',async function(req,res){
    console.log("req recived")
    const createPayload = req.body;
    console.log(createPayload)  
    const parsedPayload = createTodo.safeParse(createPayload);
    console.log(parsedPayload)
    if(!parsedPayload.success){
        res.status(401).json({
            msg : "you have entered wrong input"
        })
        return ;
    }
    
    await todo.create({
        title : createPayload.title , 
        description : createPayload.description,
        completed : false
    })

    res.json({
        msg : "todo created"
    })

    
})


app.listen(3000 , ()=>{
    console.log("hello user")
})