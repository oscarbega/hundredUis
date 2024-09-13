import { Meta, StoryObj } from "@storybook/angular";
import { CarouselComponent } from "./carousel.component";

export default {
    title: 'Challenge 6: Carousel',
    component: CarouselComponent,
    parameters: {
      layout: 'fullscreen',
    },
    args:{
    },
    tags: ['autodocs'],
} as Meta;

type Story = StoryObj<CarouselComponent>;

export const Default: Story = {
  args: {
  },
};