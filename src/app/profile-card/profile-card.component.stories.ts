import {Meta,StoryObj} from "@storybook/angular"
import { ProfileCardComponent } from "./profile-card.component";

export default {
    title: 'Components/carousels/GridActiveCarousel',
    component: ProfileCardComponent,
    args:{
        name
    },
    tags: ['autodocs'],
} as Meta;

type Story = StoryObj<ProfileCardComponent>;

export const Default: Story = {
  args: {
    name: "Johnny Rogers",
    socials: {
      "twitter": "@Jonnyrogers",
      "dribble":"",
      "insta":"",
      "linkdn":"",
      "meta":""
    },
    textContent: "Crafting brand and comunications strategies, creating visual designs,leading art direction, and capturing portraits through photography"
  },
};