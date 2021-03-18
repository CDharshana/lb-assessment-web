import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoanService } from 'src/app/services/loan.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loan-form',
  templateUrl: './loan-form.component.html',
  styleUrls: ['./loan-form.component.scss']
})
export class LoanFormComponent implements OnInit {

  loanRequestForm: FormGroup; 
  loanInformationForm: FormGroup; 

  constructor(private fb: FormBuilder, private loanService: LoanService,private router: Router) { }
  
  ngOnInit() {
    this.loanRequestForm = this.fb.group({
      fullName: '',
      nameWithInitial: '',
      age: '',
      nic: '',
      address: ''
    })
    this.loanInformationForm = this.fb.group({
      amount: '',
      interestRate: '',
      loanTerm: '',
      installment: ''
    })
  }

  submitForm() {
    let body = Object.assign({}, this.loanRequestForm.value, this.loanInformationForm.value)
    console.log(body);
    this.loanService.addLoanRequest(body).subscribe(res => {
      console.log(res);
      this.router.navigateByUrl('/');

    });
  }

}
