import {Meta,StoryObj} from "@storybook/angular"
import { AddToBagComponent } from "./add-to-bag.component";

export default {
    title: 'Challenge 2: Add to bag',
    component: AddToBagComponent,
    args:{
    },
    tags: ['autodocs'],
} as Meta;

type Story = StoryObj<AddToBagComponent>;

export const Default: Story = {
  args: {
    title: "Custom Fit Polo Bear Oxford Shirt",
    brand: "polo ralph",
    description:"Blue polo with a classic cut. Made of smooth and soft cotton",
    price: 132,
    discount: 25,
    sizing:["s","m","l","xl","xxl"]
  },
};