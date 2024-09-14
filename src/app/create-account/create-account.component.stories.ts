import { Meta, StoryObj } from "@storybook/angular";
import { CreateAccountComponent } from "./create-account.component";

export default {
    title: 'Challenge 7: Create Account',
    component: CreateAccountComponent,
    parameters: {
      layout: 'fullscreen',
    },
    args:{
    },
    tags: ['autodocs'],
} as Meta;

type Story = StoryObj<CreateAccountComponent>;

export const Default: Story = {
  args: {
  },
};