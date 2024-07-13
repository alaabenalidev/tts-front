import { Component } from '@angular/core';
import {TransactionService} from "../Les Services/Transaction.service";

@Component({
  selector: 'app-transfer-log',
  templateUrl: './transfer-log.component.html',
  styleUrls: ['./transfer-log.component.css']
})
export class TransferLogComponent {
  transactionLogEntries: any[] = [];

  constructor(private transactionService:TransactionService) {
    this.loadTransaction()
  }

  loadTransaction(){
    this.transactionService.getAllTransactions().subscribe(data=>{
      this.transactionLogEntries = data;
    })
  }
}
