import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ContactService} from "../Les Services/Contact.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  setSubjects(arg0: string) {
    throw new Error('Method not implemented.');
  }

  contactForm: FormGroup;
  showOptions: boolean = false;

  constructor(private formBuilder: FormBuilder,private contactService:ContactService,private router:Router) {
    this.contactForm = this.formBuilder.group({
      subject: [1, [Validators.required,Validators.min(1)]],
      message: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  selectSubject(subject: string): void {
    this.contactForm.get('subject')!.setValue(subject);
    this.showOptions = false;
  }

  onInputBlur(): void {
    this.showOptions = false;
  }

  onSubmit(): void {
    console.log(this.contactForm.value);
    if (this.contactForm.valid) {
      this.contactService.saveRequest(this.contactForm.get("subject")?.value, this.contactForm.get("message")?.value).subscribe(data=>{
        this.router.navigate(['/home']);
      })

    } else {
      alert('Veuillez remplir correctement le formulaire avant de soumettre.');
    }
  }


  // Méthodes pour accéder facilement aux contrôles du formulaire dans le template HTML
  public get nameControl() {
    return this.contactForm.get('name')!;
  }

  public get emailControl() {
    return this.contactForm.get('email')!;
  }

  public get subjectControl() {
    return this.contactForm.get('subject')!;
  }

  public get messageControl() {
    return this.contactForm.get('message')!;
  }
}
