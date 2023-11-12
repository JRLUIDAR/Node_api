//importamos express
const express= require('express');

//importamos el controlador que es el que nos proporcionara los metodos
const Controller=require('../controllers/controller');

//inicializamos un OBJ de express
const _router=express.Router()

//rutas addTask
_router.post('/addTask',Controller.addTask);

//recuperar todas las tareas
_router.get('/tasks',Controller.getTasks);

//update task por el id
_router.put('/update/:id',Controller.updateTask);

//delete task por el id
_router.delete('/delete/:id',Controller.deleteTask);

module.exports=_router;