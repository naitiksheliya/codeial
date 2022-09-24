const express =require("express");
const app =express();
const port=8000;

app.listen(port,function(err){
    if(err){
        console.log(`there is errore in running the server ${err}`)
    }
    else{
        console.log(`server is up and running at ${ port}`)
    }
});

