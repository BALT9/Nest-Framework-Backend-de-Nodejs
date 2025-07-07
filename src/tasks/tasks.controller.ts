import { Controller, Delete, Get, Patch, Post, Put } from "@nestjs/common";
import { TasksServices } from "./tasks.service";

@Controller({})
export class TaskController{

    tasksService: TasksServices;

    constructor(tasksService: TasksServices){
        this.tasksService = tasksService;
    }

    // aqui van las rutas 
    @Get('/tasks')
    getAllTask(){
        // servicio 
        return this.tasksService.getTasks();
    }

    @Post('/tasks')
    createTask(){
        // crear tarea
        return this.tasksService.createTasks();
    }

    @Put('/tasks')
    updateTask(){
        // crear tarea
        return this.tasksService.updateTasks();
    }

    @Delete('/tasks')
    deleteTask(){
        // crear tarea
        return this.tasksService.deleteTasks();
    }

    @Patch('/tasks')
    updateTaskStatus(){
        // crear tarea
        return this.tasksService.updateTasksStatus();
    }
 
}