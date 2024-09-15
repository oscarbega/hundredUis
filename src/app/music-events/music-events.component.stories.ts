import { Meta, moduleMetadata, StoryObj } from "@storybook/angular";
import { MusicEventsComponent } from "./music-events.component";
import { EventCardComponent, EventCard } from "./event-card/event-card.component";

export default {
    title: 'Challenge 7: Music Event',
    component: MusicEventsComponent,
    parameters: {
      layout: 'fullscreen',
    },
    decorators:[
      moduleMetadata({
        declarations:[MusicEventsComponent, EventCardComponent]
      })
    ],
    args:{
      events: [{
        title: '',
        description: '',
        isSoldOut: false,
        date: new Date(),
        time: '',
        color: 'bg-red-100'
      },
      {
        title: '',
        description: '',
        isSoldOut: false,
        date: new Date(),
        time: '',
        color: 'bg-red-100'
      },
      {
        title: '',
        description: '',
        isSoldOut: false,
        date: new Date(),
        time: '',
        color: 'bg-red-100'
      },{
        title: '',
        description: '',
        isSoldOut: false,
        date: new Date(),
        time: '',
        color: 'bg-red-100'
      },
      {
        title: '',
        description: '',
        isSoldOut: false,
        date: new Date(),
        time: '',
        color: 'bg-red-100'
      },]
    },
    tags: ['autodocs'],
} as Meta;

type Story = StoryObj<MusicEventsComponent>;

export const Default: Story = {
  args: {
    events: [{
      "title": "Swiftogeddon - the taylor swift club night",
      "description": "Swiftogeddon is a night dedicated to worshipping at the altar of Taylor Swift: non-stop Swifty all night: deep cuts, extended mixes, fan favourites",
      "isSoldOut": true,
      "date": new Date("2024-09-15T17:22:41.643Z"),
      "time": "21:00",
      "color": "bg-red-100"
    }, {
      "title": "Lana del rave",
      "description": "Launching the first ever ‘Lana Del Rave’ at Heaven Nightclub. Join us fora night devoted to the Queen of Alternative as well as favourites from...",
      "isSoldOut": false,
      "date": new Date("2024-12-17T17:22:41.643Z"),
      "time": "22:00",
      "color": "bg-lime-100"
    }, {
      "title": "'MASSAOKE: XMAS LIVE at the Electric Ballroom!",
      "description": "Featuring all your favourite festive hits from WHAM, SLADE, MARIAH, WIZARD, THE POGUES and many more - as well as hairbrush anthems...",
      "isSoldOut": false,
      "date": new Date("2024-12-19T17:22:41.643Z"),
      "time": "18:30",
      "color": "bg-blue-100"
    }, {
      "title": "Eleni Tsaligopoulou full-band",
      "description": "Eleni Tsaligopoulou is one of the most popular and beloved Greek singers with a wide range of repertoire and timeless hits. During her 30 year...",
      "isSoldOut": false,
      "date": new Date("2024-12-22T17:22:41.643Z"),
      "time": "19:00",
      "color": "bg-purple-100"
    }]
  },
};