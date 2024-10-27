import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  signUpWithEmail: boolean = false;
  isPassVisible: boolean = false;
  accountForm: FormGroup;
  
  constructor(
    private fb : FormBuilder
  ) {
    this.accountForm = this.fb.group({
      name:['',Validators.required],
      email:['',[Validators.required, Validators.email]],
      pass:['',[Validators.required, Validators.minLength(6)]],
    })
  }

  onSubmit(e:Event){
    e.preventDefault();
    console.log(this.accountForm.status)
  }

}
