import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from "@nestjs/common";
import { TasksServices, User } from "./tasks.service";

@Controller({})
export class TaskController{

    tasksService: TasksServices;

    constructor(tasksService: TasksServices){
        this.tasksService = tasksService;
    }

    // aqui van las rutas 
    @Get('/tasks')
    getAllTasks(@Query() query: any): User{
        console.log(query);
        // servicio 
        return this.tasksService.getTasks();
    }

    @Post('/tasks')
    createTask(@Body() task: any){
        // crear tarea
        // console.log(task);
        return this.tasksService.createTasks(task);
    }

    @Get('/tasks/:id')
    getTask(@Param('id') id:string){
        console.log(id);
        return this.tasksService.getTask(parseInt(id));
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