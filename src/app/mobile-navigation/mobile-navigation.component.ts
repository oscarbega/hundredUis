import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mobile-navigation',
  templateUrl: './mobile-navigation.component.html',
  styleUrl: './mobile-navigation.component.scss'
})
export class MobileNavigationComponent {

  configView={
    picUrl:"",
    name:"",
    description:"",
    sections:[
      {
        navItems:[
          {
            title:"",
            icon:""
          }
        ]
      }
    ]

  }

  selectedView:number = 3;
  changeSelectedView(index:number){
    this.selectedView = index;
  }
}
