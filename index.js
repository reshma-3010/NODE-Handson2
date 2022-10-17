const { request, response } = require('express');
const express=require('express');
 const app=express();
 const data={
    Name:"Reshma",
    Age:"21",
    City:"Nandyal",
    state:"Andhra Pradesh"
 }
 const jsonData=JSON.stringify(data);
 app.get('/',(request,response)=>{
    response.send(`<h1>Node Assignment 2</h1>
    <p>Go to /api route to see html data</p>
    <p>Go to /main route to see json data</p>`)
 })

 app.get('/api',(request,response)=>{
    response.write(`<h1>What is Express js?</h1>
    <h2>1.Express js is a free and open-source web application framework for nodejs.</h2>
    <h2>2.It is used for designing and building web applications quickly and easily</h2>`)
    response.end();
 })

 app.get('/main',(request,response)=>{
    response.write(jsonData)
    response.end();
 })

 app.listen('9000',()=>{
    console.log("Connected to port 9000")
 })