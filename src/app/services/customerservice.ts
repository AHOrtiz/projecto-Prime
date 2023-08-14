import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../interfaces/customer';

@Injectable()
export class CustomerService {

    constructor(private http: HttpClient) { }

    getCustomersSmall() {
        return this.http.get<any>('assets/customers-small.json')
            .toPromise()
            .then(res => <Customer[]>res.data)
            .then(data => { return data; });
    }

    getCustomersMedium() {
        return this.http.get<any>('assets/customers-medium.json')
            .toPromise()
            .then(res => <Customer[]>res.data)
            .then(data => { return data; });
    }

    getCustomersLarge() {
        const clientes :[Customer]=[
            {
                id: 1,
                name: "Prueba",
                country: {
                    code:"proeo",
                    name: "heloi"
                },
                company: "Hola",
                date: "20/02",
                status:  "activo",
                activity: 2,
                representative: {
                    name:"lñdffdslf"
                },
            }
        ]

        var promise = new Promise((resolve, reject) => {
            setTimeout(() => {
              console.log("Async Work Complete");
              resolve(clientes);
            }, 1000);
          });
          return promise;

        // return this.http.get<any>('assets/customers-large.json')
        //     .toPromise()
        //     .then(res => <Customer[]>res.data)
        //     .then(data => { return data; }); 
    }

    getCustomersXLarge() {
        return this.http.get<any>('assets/customers-xlarge.json')
            .toPromise()
            .then(res => <Customer[]>res.data)
            .then(data => { return data; });
    }

}