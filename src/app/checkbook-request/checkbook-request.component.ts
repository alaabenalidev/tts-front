import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from "@angular/router";
import {CheckbookService} from "../Les Services/Checkbook.service";

@Component({
  selector: 'app-checkbook-request',
  templateUrl: './checkbook-request.component.html',
  styleUrls: ['./checkbook-request.component.css']
})
export class CheckbookRequestComponent implements OnInit {
  checkbookRequestForm!: FormGroup; // Assurez-vous que la variable est correctement déclarée

  constructor(private fb: FormBuilder, private router: Router, private checkbookService: CheckbookService) {
    this.checkbookRequestForm = this.fb.group({
      quantity: [0, [Validators.required, Validators.min(0), Validators.max(5)]],
      // Ajoutez d'autres champs si nécessaire
    });
  }

  ngOnInit(): void {

  }

  onSubmit(): void {
    if (this.checkbookRequestForm.valid) {
      this.checkbookService.saveRequest(this.checkbookRequestForm.get('quantity')?.value).subscribe(data => {

      })
    } else {
      console.error('Le formulaire est invalide');
    }
  }

  public get quantityControl() {
    return this.checkbookRequestForm.get('quantity');
  }
}
