// Task1: initiate app and run server at 3000
const express=require('express');
const app=new express();


const path=require('path');
app.use(express.static(path.join(__dirname+'/dist/FrontEnd')));
// Task2: create mongoDB connection 
require('./Db/connection');

//Task 2 : write api with error handling and appropriate api mentioned in the TODO below
app.use(express.json());
const empl=require('../Casestudy2/model/emplModel');
        //TODO: get data from db  using api '/api/employeelist'
        app.get('/api/employeelist',async(req,res)=>{
            try {
                const data=await empl.find()
                res.send(data);
            } catch (error) {
                console.log(error);
            }
        })
        //TODO: get single data from db  using api '/api/employeelist/:id'
        app.get('/api/employeelist/:id',async(req,res)=>{
            try
            {
                const id=req.params.id;
                const data=await empl.findById(id);
                res.send(data);
            }
            catch(error){
                console.log(error);
            }
        })
        
        //TODO: send data from db using api '/api/employeelist'
        //Request body format:{name:'',location:'',position:'',salary:''}
        app.post('/api/employeelist',async(req,res)=>
        {
            try {
                const data=req.body;
                await empl(data).save();
                res.send("data added");
            } catch (error) {
                console.log(error);
            }
        })
        //TODO: delete a employee data from db by using api '/api/employeelist/:id'
        app.delete('/api/employeelist/:id',async(req,res)=>{
            try {
                const id=req.params.id;
                await empl.findByIdAndDelete(id);
                res.send({message:"Data deleted"});
            } catch (error) {
               console.log(error); 
            }
        })
        //TODO: Update  a employee data from db by using api '/api/employeelist'

        //Request body format:{name:'',location:'',position:'',salary:''}
        app.put('/api/employeelist',async(req,res)=>{
            try {
                const id=req.params.id;
            const item = req.body;
            const updatedUser=await empl.findByIdAndUpdate(id,req.body);
            updatedUser.save()
            res.send({updatedUser});
            } catch (error) {
            console.log(error);    
            }
        })

//! dont delete this code. it connects the front end file.
app.listen(3000,()=>{
    console.log(`running in 3000`);
})
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/Frontend/index.html'));
});



