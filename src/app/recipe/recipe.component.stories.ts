import { Meta, StoryObj } from "@storybook/angular";
import { RecipeComponent } from "./recipe.component";

export default {
    title: 'Challenge 5: Recipe',
    component: RecipeComponent,
    parameters: {
      layout: 'fullscreen',
    },
    args:{
    },
    tags: ['autodocs'],
} as Meta;

type Story = StoryObj<RecipeComponent>;

export const Default: Story = {
  args: {
  },
};