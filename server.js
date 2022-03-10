const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const hostelSchema = new Schema({
    hostelNo: Number,
    name:String,
    rooms:Number,
    warden_name:String,
    mess_capacity:Number
  });

const hostel = mongoose.model('hostel',hostelSchema);



const url = "mongodb://localhost:27017/hosteldb?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";

mongoose.connect(url,{useNewUrlParser:true});

app.listen(3000,function()
{
    console.log('listening on 3000');
})

app.use(bodyParser.urlencoded({extended:true}));


app.get('/hostel',async(req,res)=>     //api creation
{
    
    console.log('hello World!');

    //res.send("Balaji viyan");
    const hostelList = await hostel.find();
    //console.log(hostelList.toJSON);
    res.json(hostelList);
});

app.post('/hostel',(req,res)=>
{
    //console.log(req.body);
    //res.send("namaha");
    res.json(req.body);
    const hostelObj = new hostel(req.body);
    hostelObj.save();

})

app.put('/hostel',async(req,res)=>
{
   
    var hostno = req.body.hostelNo;
    var findHost = await hostel.findOne({'hostelNo':hostno});
    console.log(findHost);

    findHost.name = req.body.name;
    findHost.mess_capacity= req.body.mess_capacity;
    findHost.save();
    res.json(req.body);
    
})

app.delete('/hostel',async(req,res)=>
{
   
    var hostno = req.body.hostelNo;
    var findHost = await hostel.findOne({'hostelNo':hostno});
    console.log(findHost);
    findHost.delete();
    findHost.save();
    res.json(req.body);
})










