import { Injectable } from "@nestjs/common";

// interface es para definir un tipo de dato =  objeto user 
export interface User{
    "name": string,
    "age": number
};

// los servicios se inyectan en los controladores
@Injectable() 
export class TasksServices{

    // array q guardara los datos de tipo any(json)
    private tasks:any = [];

    // este servicio retornara un objeto de tipo User 
    getTasks(): User{
        return this.tasks;
    }

    createTasks(task:any){
        console.log(task);
        this.tasks.push({
            ...task,
            id: this.tasks.length + 1,
        });
        return task;
    }

    getTask(id: number){
        const taskFound = this.tasks.find(task => task.id === id)
        if(!taskFound){
            return "No se encontro la tarea";
        }
        return taskFound;
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