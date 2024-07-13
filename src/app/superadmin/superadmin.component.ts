import {Component} from '@angular/core';
import {UserService} from "../Les Services/User.service";
import {User} from "../_models/User";
import {CreditCardService} from "../Les Services/CreditCard.service";
import {ContactService} from "../Les Services/Contact.service";
import {CheckbookService} from "../Les Services/Checkbook.service";

@Component({
  selector: 'app-superadmin',
  templateUrl: './superadmin.component.html',
  styleUrls: ['./superadmin.component.css']
})
export class SuperadminComponent {
  listRequestUsers: User[] = [];
  listRequestCreditCards: any[] = [];
  listRequestContactUpdate: any[] = [];
  listRequestContactDelete: any[] = [];
  listRequestContactOther: any[] = [];
  listRequestCheckBook: any[]=[];

  constructor(private userService: UserService, private creditCardService: CreditCardService, private contactService: ContactService,private checkbookService:CheckbookService) {
    this.loadRequestUsers()
    this.loadRequestCreditCards()
    this.loadRequestContactUpdate()
    this.loadRequestContactDelete()
    this.loadRequestContactOther()
    this.loadRequestCheckbook()
  }

  loadRequestUsers() {
    this.userService.getRequestUsers().subscribe((data) => {
      this.listRequestUsers = data;
    })
  }

  loadRequestCreditCards() {
    this.creditCardService.getRequestCreditCards().subscribe((data) => {
      this.listRequestCreditCards = data;
    })
  }

  loadRequestContactUpdate() {
    this.contactService.getRequestUpdate().subscribe((data) => {
      this.listRequestContactUpdate = data;
    })
  }

  loadRequestContactDelete() {
    this.contactService.getRequestDelete().subscribe((data) => {
      this.listRequestContactDelete = data;
    })
  }

  loadRequestContactOther() {
    this.contactService.getRequestOther().subscribe((data) => {
      this.listRequestContactOther = data;
    })
  }

  loadRequestCheckbook() {
    this.checkbookService.getRequestCheckbook().subscribe((data) => {
      this.listRequestCheckBook = data;
    })
  }

  submitRequestUser(user: number, status: boolean) {
    this.userService.submitRequestUser(user, status).subscribe(() => {
        this.loadRequestUsers();
      }
    )

  }

  submitRequestCreditCard(id: number, b: boolean) {
    this.creditCardService.validationCreditCard({creditCard: id, status: b}).subscribe((data) => {
      this.loadRequestCreditCards();
    })
  }

  validateContact(id: number, b: boolean) {
    this.contactService.validationContact({id, status: b}).subscribe((data) => {
      this.loadRequestContactDelete();
      this.loadRequestContactUpdate();
      this.loadRequestContactOther();
    })

  }

  submitRequestCheckbook(id:number, b: boolean) {
    this.checkbookService.validationCheckbook({id, status: b}).subscribe((data) => {
      this.loadRequestCheckbook();
    })
  }
}
