import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {CreditCardService} from "../Les Services/CreditCard.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-creditcard',
  templateUrl: './creditcard.component.html',
  styleUrls: ['./creditcard.component.css']
})
export class CreditcardComponent implements OnInit{
  creditCardForm!: FormGroup; // Assurez-vous que creditCardForm est correctement déclaré

  constructor(private router:Router,private fb: FormBuilder,private creditCardService:CreditCardService) { }

  ngOnInit(): void {
    this.creditCardForm = this.fb.group({
      // fullName: ['', Validators.required],
      // email: ['', [Validators.required, Validators.email]],
      // phone: ['', Validators.required],
      annualIncome: [0, Validators.required],
      // address: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.creditCardForm.valid) {
      this.creditCardService.requestCreditCard(this.creditCardForm.value).subscribe(data=>{
        this.creditCardForm.reset();
        this.router.navigate(['/home']);
      })

    } else {
      console.error('Formulaire invalide');
    }
  }
}
