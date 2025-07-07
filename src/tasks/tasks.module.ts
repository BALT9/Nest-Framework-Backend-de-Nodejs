import { Module } from "@nestjs/common";
import { TaskController } from "./tasks.controller";
import { TasksServices } from "./tasks.service";

// un modulo puede contener varios controladores 
@Module({

    controllers: [TaskController],
    providers: [TasksServices]
    
})

export class TasksModule{}