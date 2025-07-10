import { IsString } from "class-validator"

// se usa con controlador y servicio 
export class CreateTaskDto{
    @IsString()
    title: string

    @IsString()
    descripcion: string
}