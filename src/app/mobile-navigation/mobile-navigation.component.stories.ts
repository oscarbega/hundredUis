import {applicationConfig, Meta,moduleMetadata,StoryObj} from "@storybook/angular"
import { MobileNavigationComponent } from "./mobile-navigation.component";
import { provideRouter, RouterLink, RouterModule, RouterOutlet, Routes } from "@angular/router";
import { ProfilePageComponent } from "./profile-page/profile-page.component";
import { NoPageComponent } from "./no-page/no-page.component";

const routes:Routes=[
  {path:'',component:ProfilePageComponent},
  {path:'no-page',component:NoPageComponent},
]

export default {
    title: 'Challenge 3: Mobile Navigation',
    component: MobileNavigationComponent,
    decorators:[
      moduleMetadata({
        declarations:[NoPageComponent,ProfilePageComponent],
        imports:[RouterOutlet]
      }),
      applicationConfig({
        providers:[provideRouter(routes)]
      })
    ],
    args:{
    },
    tags: ['autodocs'],
} as Meta;

type Story = StoryObj<MobileNavigationComponent>;

export const Default: Story = {
  args: {
  },
};