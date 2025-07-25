import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";

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

    createTasks(task: CreateTaskDto){
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
            return new NotFoundException(`Task with id ${id} not found`); 
        }
        return taskFound;
    }

    updateTasks(id: number, task: UpdateTaskDto){
        return task;
    }

    deleteTasks(){
        return 'eliminando tareas..';
    }

    updateTasksStatus(){
        return 'actualizando tareas..';
    }
}