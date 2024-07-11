import { Component } from '@angular/core';

@Component({
  selector: 'app-transfer-log',
  templateUrl: './transfer-log.component.html',
  styleUrls: ['./transfer-log.component.css']
})
export class TransferLogComponent {
  transactionLogEntries: any[] = [];

  constructor() {
    // Initialize transactionLogEntries with sample data or fetch it from a service
    this.transactionLogEntries = [
      { id: 1, sender: 'John', receiver: 'Jane', amount: 100, time: '2024-05-01 10:00:00' },
      { id: 2, sender: 'Jane', receiver: 'John', amount: 200, time: '2024-05-02 11:00:00' },
      // Add more transaction log entries as needed
    ];
  }
}
