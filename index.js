//importamos el mongoose
const mongoose = require("mongoose");

const app = require("./app");
const port = 3000;

//aqui guardamos el path de la BD de mongo
const urlMongoTasks ="mongodb+srv://root:7092002Cacat@cluster0.mxgpzub.mongodb.net/tasks_api";

//nos conectamos a la BD
  try {
    mongoose.connect(urlMongoTasks)

        console.log("Conexion con la BD Mongo Establecida");
        //pondemos el servidor a la escucha
        app.listen(port, () => {
          console.log(
            `El servidor esta funcionando y escuchando en el puerto ${port}`
          );
        });
    
  } catch (error) {
   console.log(error)
  }

