import { Meta, moduleMetadata, StoryObj } from "@storybook/angular";
import { PasswordGeneratorComponent } from "./password-generator.component";
import { FormsModule } from "@angular/forms";

export default {
    title: 'Challenge 9: Password generator',
    component: PasswordGeneratorComponent,
    
    decorators: [
      moduleMetadata({
          imports: [
              FormsModule
          ]
      })
  ],
    args:{
    },
    tags: ['autodocs'],
} as Meta;

type Story = StoryObj<PasswordGeneratorComponent>;

export const Default: Story = {
  args: {
  },
};