import { Controller, Get } from "@nestjs/common";

@Controller({})
export class TaskController{
    // aqui van las rutas 
    @Get('tasks')
    getAllTask(){
        return 'obteniendo todas las tareas';
    }
}