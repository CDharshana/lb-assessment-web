import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoanFormComponent } from 'src/app/component/loan-form/loan-form.component';
import { LoanTableComponent } from 'src/app/component/loan-table/loan-table.component';
import {LoanCalculatorComponent} from 'src/app/component/loan-calculator/loan-calculator.component'
const routes: Routes = [
  {path: 'loan-form', component: LoanFormComponent},
  {path: 'loan-calculator', component: LoanCalculatorComponent},
  {path: 'loan-table', component: LoanTableComponent},
  { path: '',   redirectTo: 'loan-table', pathMatch: 'full' },
  { path: '**', component: LoanTableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
