import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.scss'
})
export class ProfileCardComponent {
  textContent:string="";
  name:string="";
  socials:{
    meta:string;
    linkdn:string;
    twitter:string;
    insta:string;
    dribble:string;
  }={
    meta: '',
    linkdn: '',
    twitter: '',
    insta: '',
    dribble: ''
  }
  profilePicUrl:string="";
}
