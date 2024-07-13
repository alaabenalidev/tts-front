import { Component } from '@angular/core';
import {UserService} from "../Les Services/User.service";
import {BankAccountService} from "../Les Services/BankAccount.service";
import {AuthService} from "../_auth/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  bank: any;
  isLoggedIn: boolean = false

  constructor(private bankAccountService:BankAccountService,private authService:AuthService) {
    this.loadBankAccountInfo()
    this.isLoggedIn = authService.isLoggedIn()
  }

  loadBankAccountInfo(){
    this.bankAccountService.getBankAccountByUser().subscribe(data=>{
      this.bank = data
    })
  }
}
