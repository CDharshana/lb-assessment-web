import { Component, OnInit } from '@angular/core';
import { LoanService } from 'src/app/services/loan.service';

@Component({
  selector: 'app-loan-table',
  templateUrl: './loan-table.component.html',
  styleUrls: ['./loan-table.component.scss']
})
export class LoanTableComponent implements OnInit {

  loanData = []
  selectedLoan: any;

  constructor(private loanService: LoanService) {
    this.selectedLoan = this.loanData[0];
  }

  ngOnInit(): void {
    this.getAllLoans();
  }

  getAllLoans(): void {
    this.loanService.getAllLoans().subscribe((res: any) => {
      console.log(res);
      this.loanData = res;
    })
  }

  viewLoan(loan) {
    this.selectedLoan = loan;
  }

}
