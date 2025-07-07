import { Injectable } from "@nestjs/common";

// los servicios se inyectan en los controladores
@Injectable() 
export class TasksServices{
    
    getTasks(){
        return 'tareas desde servicio';
    }
}