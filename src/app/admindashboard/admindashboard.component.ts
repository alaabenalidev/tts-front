import { Component } from '@angular/core';
import {User} from "../_models/User";
import {UserService} from "../Les Services/User.service";
import {CreditCardService} from "../Les Services/CreditCard.service";
import {ContactService} from "../Les Services/Contact.service";
import {CheckbookService} from "../Les Services/Checkbook.service";

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent {

  listRequestCreditCards: any[] = [];
  listRequestCheckBook: any[]=[];

  constructor(private userService: UserService, private creditCardService: CreditCardService, private contactService: ContactService,private checkbookService:CheckbookService) {
    this.loadRequestCreditCards()
    this.loadRequestCheckbook()
  }

  loadRequestCheckbook() {
    this.checkbookService.getRequestCheckbook().subscribe((data) => {
      this.listRequestCheckBook = data;
    })
  }

  loadRequestCreditCards() {
    this.creditCardService.getRequestCreditCards().subscribe((data) => {
      this.listRequestCreditCards = data;
    })
  }

  submitRequestCreditCard(id: number, b: boolean) {
    this.creditCardService.validationCreditCard({creditCard: id, status: b}).subscribe((data) => {
      this.loadRequestCreditCards();
    })
  }


  submitRequestCheckbook(id:number, b: boolean) {
    this.checkbookService.validationCheckbook({id, status: b}).subscribe((data) => {
      this.loadRequestCheckbook();
    })
  }

}
