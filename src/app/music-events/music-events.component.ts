import { Component, Input } from '@angular/core';
import { EventCard } from './event-card/event-card.component';

@Component({
  selector: 'app-music-events',
  templateUrl: './music-events.component.html',
  styleUrl: './music-events.component.scss'
})
export class MusicEventsComponent {
  @Input()
  events: EventCard[]=[
    {
      title: '',
      description: '',
      isSoldOut: false,
      date: new Date(),
      time: '',
      color: 'bg-red-100'
    }
  ];


}
