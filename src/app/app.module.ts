import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {CheckboxModule} from 'primeng/checkbox';
import {RadioButtonModule} from 'primeng/radiobutton';
import {RippleModule} from 'primeng/ripple';
import { CommonModule } from '@angular/common';
import { TablaComponent } from './tabla/tabla.component';
import { CustomerService } from './services/customerservice';
import {TableModule} from 'primeng/table';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TablaComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    InputTextModule,
		CheckboxModule,
		ButtonModule,
		RadioButtonModule,
    RippleModule,
    FormsModule,
    TableModule,
    ScrollingModule,
    HttpClientModule
  ],
  providers: [CustomerService],  
  bootstrap: [AppComponent]
})
export class AppModule { }
