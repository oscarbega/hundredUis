import {applicationConfig, Meta,moduleMetadata,StoryObj} from "@storybook/angular"
import { provideRouter, RouterLink, RouterModule, RouterOutlet, Routes } from "@angular/router";

import { ContactUsComponent } from "./contact-us.component";


export default {
    title: 'Challenge 4: Contact Us',
    component: ContactUsComponent,
    parameters: {
      layout: 'fullscreen',
    },
    args:{
    },
    tags: ['autodocs'],
} as Meta;

type Story = StoryObj<ContactUsComponent>;

export const Default: Story = {
  args: {
  },
};