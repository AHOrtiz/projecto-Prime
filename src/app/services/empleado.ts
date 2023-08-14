import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{Empleado} from '../interfaces/empleado';

@Injectable()

export class EmpleadoService{
    constructor(private http: HttpClient){}

    getEmpleado(){
        var empleados: [Empleado?] = []

        empleados.push({
            id:1,
            name: "Allison",
            date : "28/03/97",
            status : "Aceptado"
        })
        empleados.push({
            id:1,
            name: "Allison",
            date : "28/03/97",
            status : "Aceptado"
        })
        var promise = new Promise((resolve, reject) => {
            setTimeout(() => {
              console.log("Async Work Complete");
              resolve(empleados);
            }, 1000);
          });
          return promise;
    }
}
