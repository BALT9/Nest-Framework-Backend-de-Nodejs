import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { TaskController } from "./tasks.controller";
import { TasksServices } from "./tasks.service";

// midleware 
import { LoggerMiddleware } from "./logger/logger.middleware";

// un modulo puede contener varios controladores 
@Module({
    controllers: [TaskController],
    providers: [TasksServices]
})

// aqui se agrega el midleware  

export class TasksModule implements NestModule{
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(LoggerMiddleware).forRoutes('tasks')
    }
}