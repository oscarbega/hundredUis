import { Meta, moduleMetadata, StoryObj } from "@storybook/angular";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { SignUpComponent } from "./sign-up.component";

export default {
    title: 'Challenge 10: Sign Up',
    component: SignUpComponent,
    decorators:[
        moduleMetadata({
            imports: [FormsModule, CommonModule,ReactiveFormsModule],
        })
    ],
    parameters: {
      layout: 'fullscreen',
      backgrounds:{
        default:'light',
        values: [
            { name: 'light', value: '#e6e7f0' },
        ]
      }
    },
    args:{
    },
    tags: ['autodocs'],
} as Meta;

type Story = StoryObj<SignUpComponent>;

export const Default: Story = {
  args: {
  },
};