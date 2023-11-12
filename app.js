const express= require('express');
const app=express();

//cargamos las rutas
const _router=require('./ROUTER/router');

//permitimos es use de JSON en el cuerpo de la peticion, o sea en el body del request
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//usemos estas router
app.use('/api',_router);

module.exports=app;
