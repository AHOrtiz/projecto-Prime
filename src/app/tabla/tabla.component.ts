import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customerservice';
import { Customer } from '../interfaces/customer';
import { EmpleadoService } from '../services/empleado';
import { Empleado } from '../interfaces/empleado';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
 
  constructor(private empleadoService: EmpleadoService) { }
  
  first = 0;

  rows = 10;

  empleados: Empleado[] = [];
  ngOnInit() {
      this.empleadoService.getEmpleado().then((empleados:any) => this.empleados = empleados);
  }

  next() {
      this.first = this.first + this.rows;
  }

  prev() {
      this.first = this.first - this.rows;
  }

  reset() {
      this.first = 0;
  }

  isLastPage(): boolean {
      return this.empleados ? this.first === (this.empleados.length - this.rows): true;
  }

  isFirstPage(): boolean {
      return this.empleados ? this.first === 0 : true;
  }
}
