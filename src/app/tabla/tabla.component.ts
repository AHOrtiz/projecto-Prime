import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customerservice';
import { Customer } from '../interfaces/customer';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
 
  



  constructor(private customerService: CustomerService) { }
  first = 0;

  rows = 10;

  customers: Customer[] = [];
  ngOnInit() {
      this.customerService.getCustomersLarge().then(customers => this.customers = customers);
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
      return this.customers ? this.first === (this.customers.length - this.rows): true;
  }

  isFirstPage(): boolean {
      return this.customers ? this.first === 0 : true;
  }
}
