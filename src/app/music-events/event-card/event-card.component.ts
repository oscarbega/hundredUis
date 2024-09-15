import { Component, Input } from '@angular/core';

export interface EventCard{
  title:string;
  description:string;
  isSoldOut: boolean;
  date: Date;
  time: string;
  color: string;
}

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.scss'
})
export class EventCardComponent {
  @Input()
  cardInfo: EventCard = {
    title: 'Swiftogeddon - the taylor swift club night',
    description: 'Swiftogeddon is a night dedicated to worshipping at the altar of Taylor Swift: non-stop Swifty all night: deep cuts,fan favourites uhsiaouilda ujeafhwe sifhewhiu ouiwaHF WOIEHF',
    isSoldOut: false,
    date: new Date('04/24/2025'),
    time: '21:00',
    color: 'bg-red-100'
  }
  isToday(date: Date): boolean {
    const today = new Date();
  
    // Compare year, month, and day
    return (
      date.getFullYear() === today.getFullYear() &&
      date.getMonth() === today.getMonth() &&
      date.getDate() === today.getDate()
    );
  }

}
