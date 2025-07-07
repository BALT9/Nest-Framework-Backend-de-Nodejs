import { Injectable } from "@nestjs/common";

// los servicios se inyectan en los controladores
@Injectable() 
export class TasksServices{
    
    getTasks(){
        return ["tarea1","tarea2","tarea3"];
    }

    createTasks(){
        return 'creando tareas..';
    }

    updateTasks(){
        return 'modificando tareas..';
    }

    deleteTasks(){
        return 'eliminando tareas..';
    }

    updateTasksStatus(){
        return 'actualizando tareas..';
    }
}