const Task = require("../models/task");

/**Creamos un contador autoincrementable */
let contador=0;
const cuenta = () => {
   contador ++
   return contador;
};


/**crear nueva tarea*/
async function addTask(req, res) {
 
  //nececitamos el numero del contador  
  contador=cuenta();
  const task = new Task();
  const params = req.body;

  task._id=contador //le asignamos un id , sabiendo que el  total de laBD y incrementamos con 1
  task.title = params.title;
  task.description = params.description;

  try {
     const taskStored = await task.save();
 
    if (!taskStored) {
      res.send(404).send({ msg: "No se ha podido guardar la tarea" });
    } else {
      res.status(200).send({ msg: task });
    }
  } catch (error) {
    res.status(500).send(error);
  }
}

/**recuperar todas las tareas*/
async function getTasks(req, res) {
  try {
    const tasks = await Task.find({ completed: false }).sort({
      created_at: -1,
    });

    if (tasks) {
      res.status(200).send({ datos: tasks });
    } else {
      res.status(404).send({ msg: "No se ha podido recuperar ninguna tarea" });
    }
  } catch (error) {
    res.status(500).send(error);
  }
}

/**update task por el id*/
async function updateTask(req, res) {
  //recuperamso el id que nos llega
  const id_task = req.params.id;

  //recuperamos los parametros que nos llega por el body
  const params = req.body;

  try {
    const task = await Task.findByIdAndUpdate(id_task, params);

    if (!task) {
      res.status(400).send({ msg: "No se ha encontrado la tarea" });
    } else {
      res.status(200).send({ msg: "Tarea actualizada con exito" });
    }
  } catch (error) {
    res.status(500).send(error);
  }
}

/**delete task por el id*/
async function deleteTask(req,res){
  try {
    const task=await Task.findByIdAndDelete(req.params.id);

    if(!task){
        res.status(400).send({msg:'Error al eliminar la tarea'});
    }else{
        res.status(200).send({msg:'La tarea ha sido eliminada con exito'});
    }
  } catch (error) {
    res.status(500).send(error);
  }
}

//exportamos tadas las fuunciones que iremos creando
module.exports = {
  addTask,
  getTasks,
  updateTask,
  deleteTask
};
