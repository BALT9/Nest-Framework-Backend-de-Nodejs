import { Module } from "@nestjs/common";
import { TaskController } from "./tasks.controller";

// un modulo puede contener varios controladores 
@Module({
    controllers: [TaskController]
})

export class TasksModule{}