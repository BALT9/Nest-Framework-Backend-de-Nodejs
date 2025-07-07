import { Controller, Get } from "@nestjs/common";
import { TasksServices } from "./tasks.service";

@Controller({})
export class TaskController{

    tasksService: TasksServices;

    constructor(tasksService: TasksServices){
        this.tasksService = tasksService;
    }

    // aqui van las rutas 
    @Get('tasks')
    getAllTask(){
        // servicio 
        return this.tasksService.getTasks();
    }
 
}