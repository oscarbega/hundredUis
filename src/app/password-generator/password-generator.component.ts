import { Component, OnInit } from '@angular/core';
import { ValueChangeEvent } from '@angular/forms';

@Component({
  selector: 'app-password-generator',
  templateUrl: './password-generator.component.html',
  styleUrl: './password-generator.component.scss'
})
export class PasswordGeneratorComponent implements OnInit {
  ngOnInit(): void {
    this.generatePassword()
  }
  incudeUppercase = true
  includeLowercase = true
  includeNumbers = true
  includeSpecialChars = true

  length:number = 12;
  
  generatedPassword: string = '';
  showCopy:boolean = false;

  // Define character sets
  private uppercaseChars: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  private lowercaseChars: string = 'abcdefghijklmnopqrstuvwxyz';
  private numberChars: string = '0123456789';
  private specialChars: string = '!@#$%^&*()_+[]{}|;:,.<>?';

  // Function to generate the password
  generatePassword(): void {
    let charPool: string = '';
    let password: string = '';

    // Add selected character sets to the pool
    if (this.incudeUppercase) {
      charPool += this.uppercaseChars;
    }
    if (this.includeLowercase) {
      charPool += this.lowercaseChars;
    }
    if (this.includeNumbers) {
      charPool += this.numberChars;
    }
    if (this.includeSpecialChars) {
      charPool += this.specialChars;
    }

    // Ensure we have at least one character set selected
    if (charPool.length === 0) {
      alert('Please select at least one character set.');
      return;
    }

    // Generate a random password of the desired length
    for (let i = 0; i < this.length; i++) {
      const randomIndex = Math.floor(Math.random() * charPool.length);
      password += charPool[randomIndex];
    }

    // Store the generated password
    this.generatedPassword = password;
  }
  copy(){
    navigator.clipboard.writeText(this.generatedPassword).then(()=>{
      this.showCopy = true;
      setTimeout(() => {
        this.showCopy = false;
      },1000)
    })
  }

}
