import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoanFormComponent } from './component/loan-form/loan-form.component';
import { LoanTableComponent } from './component/loan-table/loan-table.component';
import { LoanCalculatorComponent } from './component/loan-calculator/loan-calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    LoanFormComponent,
    LoanTableComponent,
    LoanCalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
