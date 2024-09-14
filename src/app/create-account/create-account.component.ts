import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.scss'
})
export class CreateAccountComponent {
  showPassword=false;
  accountForm: FormGroup
  constructor(
    private fb: FormBuilder
  ) {
    this.accountForm = this.fb.group({
      firstName:['h',Validators.required],
      lastName:['h',Validators.required],
      email:['',Validators.required,Validators.email],
      password:['',Validators.required],
    })
  }

  onSubmit(event:Event){
    event.preventDefault();
    console.log(this.accountForm.status);
  }

}
