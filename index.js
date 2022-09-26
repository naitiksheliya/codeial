const express =require("express");
const app =express();
const router = express.Router();
const port=8000; 

const homeController=require("./controllers/home_controllers")
const userController=require("./controllers/user_controllers")

app.set('view engine','ejs')
app.set('views','./views')

app.use('/',require('./routes'));
app.use('/users',require('./routes/users'));
app.use('/admin',require('./routes/admin'));

app.get('/',homeController.home);
// app.get('/profile',userController.Router);
// app.get('/proflile',userController.proflie);

app.listen(port,function(err){
    if(err){
        console.log(`there is errore in running the server ${err}`)
    }
    else{
        console.log(`server is up and running at ${ port}`)
    }
});

module.exports=router; 