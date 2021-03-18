import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-loan-calculator',
  templateUrl: './loan-calculator.component.html',
  styleUrls: ['./loan-calculator.component.scss']
})
export class LoanCalculatorComponent implements OnInit {

  loanInformationForm: FormGroup; 
  constructor(private fb: FormBuilder) { 

  }

  ngOnInit(): void {
    this.loanInformationForm = this.fb.group({
      amount: '',
      interestRate: '',
      loanTerm: '',
      capital: '',
      interest: '',
      installment: ''
    })
  }
  submitForm() {
    let body = Object.assign({}, this.loanInformationForm.value)
    console.log(body);
    // this.loanService.requestLoan(body).subscribe(res => {
    //   console.log(res);
    // })
    let amount = Number(body.amount);
    let interestRate = Number(body.interestRate);
    let loanTerm = Number(body.loanTerm);

    let inst = ((amount*interestRate/100)+amount) /loanTerm;


    document.getElementById('lblName').innerHTML = `Installment : ${inst.toFixed(2).toString()} Per Month`;
  }
  

}
