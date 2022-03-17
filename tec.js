const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
app.listen(3000,function()
{
    console.log('listening on 3000');
})

app.get('/hostel',async(req,res)=>     //api creation
{    
    console.log('hello Hoolers!');
    res.send("Balaji viyan");
    //const hostelList = await hostel.find();
    //console.log(hostelList.toJSON);
    //res.json(hostelList);
});
