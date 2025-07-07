import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { ProjectsModule } from './projects/projects.module';
import { ProductosModule } from './productos/productos.module';

@Module({
  // estoy importando Task.module.ts 
  imports: [TasksModule, ProductosModule  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
