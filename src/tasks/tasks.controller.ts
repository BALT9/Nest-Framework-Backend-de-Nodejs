import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post, Put, Query } from "@nestjs/common";
import { TasksServices, User } from "./tasks.service";
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";

//pipes
import { ValidateTaskPipe } from "./pipes/validate-task/validate-task.pipe";

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
    //@UsePipes(new ValidationPipe()) //esto activa la validacion del dto
    createTask(@Body() task: CreateTaskDto){
        // crear tarea
        // console.log(task);
        return this.tasksService.createTasks(task);
    }

    @Get('/tasks/:id')
    getTask(@Param('id') id:string){
        console.log(id);
        return this.tasksService.getTask(parseInt(id));
    }

    @Put('/tasks/:id')
    updateTask(@Param('id') id:string, @Body() task: UpdateTaskDto){ 
        // crear tarea
        return this.tasksService.updateTasks(parseInt(id),task);
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

    @Get('/notfound')
    @HttpCode(404)
    notFoundPage(){
        return '404 not found';
    }
 
    // pipe 
    @Get('/greet')
    greet(@Query(ValidateTaskPipe) query: {name:string, age:number}){
        console.log(typeof query.age);
        console.log(typeof query.name);
        return `Hello ${query.name}, de ${query.age} años`;
    }
}