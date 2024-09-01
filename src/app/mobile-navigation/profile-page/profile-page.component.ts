import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.scss'
})
export class ProfilePageComponent {
  configView={
    picUrl:"https://upload.wikimedia.org/wikipedia/commons/1/14/9-94702_user-outline-icon-clipart-png-download-profile-icon.png",
    name:"Lisa Richardson",
    description:" Environmental metereologist",
    sections:[
      {
        navItems:[
          {
            title:"Personal Data",
            icon:"people-fill"
          },
          {
            title:"Messages",
            icon:"envelope-fill"
          },
          {
            title:"Notifications",
            icon:"bell-fill"
          },
          {
            title:"Location",
            icon:"geo-alt-fill"
          },
          {
            title:"Comunnity",
            icon:"person-heart"
          },
        ]
      },
      {
        navItems:[
          {
            title:"Personal Data",
            icon:"people-fill"
          },
          {
            title:"Settings",
            icon:"gear-fill"
          },
        ]
      }
    ]

  }
}
