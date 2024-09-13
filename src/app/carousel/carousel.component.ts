import { Component, ElementRef, Input, QueryList, ViewChild, ViewChildren} from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  @ViewChildren('carousel')
  carousel!:QueryList<ElementRef>;
  @ViewChild('carouselContainer')
  carouselContainer!:ElementRef;
  @Input()
  images: string[]=["assets/images-carousel/img-1.jpeg","assets/images-carousel/img-2.jpeg","assets/images-carousel/img-3.jpeg","assets/images-carousel/img-4.jpeg","assets/images-carousel/img-5.jpg","assets/images-carousel/img-6.jpg","assets/images-carousel/img-7.webp"]
  isDragging:boolean=false
  startX:number = 0
  endX:number=0

  selectedIndex:number = 0;

  goPrev(){
    const index = (this.selectedIndex-1)%this.images.length
    this.selectedIndex=index>=0?index:(this.images.length+index)
  }
  goNext(){
    const index = (this.selectedIndex+1)%this.images.length
    this.selectedIndex=index
  }
  onMouseDown(event:MouseEvent){
    this.isDragging=true
    this.startX=event.clientX
  }
  onMouseMove(event:MouseEvent){
    if(this.isDragging){
      this.carousel.forEach((carousel: ElementRef) => {
        const carouselElement = carousel.nativeElement;
        carouselElement.style.transform = `translateX(${((event.clientX - this.startX) + this.endX)}px)`;
      });
    }
  }
  onMouseUp(event:MouseEvent){
    this.isDragging=false
    this.endX += (event.clientX - this.startX);
    this.isOverStar();
    this.isOverEnd();
  }
  

  isOverStar(){
    const firstElement = this.carousel.toArray()[0].nativeElement.getBoundingClientRect();
    if (firstElement.x > 0) {
      this.carousel.forEach(element => {
        element.nativeElement.classList.add('bouncy-transition')
        element.nativeElement.style.transform  = `translateX(0px)`
      });
      this.endX=0;
      setTimeout(() => {
        this.carousel.forEach((element: ElementRef) => {
          element.nativeElement.classList.remove('bouncy-transition');
        });
      }, 500);
    }
  }
  isOverEnd(){
    const firstElement = this.carousel.toArray()[0].nativeElement.getBoundingClientRect();
    const lastElement = this.carousel.toArray()[this.carousel.toArray().length - 1].nativeElement.getBoundingClientRect()
    const containerWidth = this.carouselContainer.nativeElement.getBoundingClientRect().width
    if (lastElement.x < containerWidth) {
      this.carousel.forEach(element => {
        element.nativeElement.classList.add('bouncy-transition')
        const win = window
        element.nativeElement.style.transform  = `translateX(${firstElement.x+(containerWidth - (lastElement.x+lastElement.width))}px)`
        
      });
      this.endX=firstElement.x+(containerWidth - (lastElement.x+lastElement.width))
      setTimeout(() => {
        this.carousel.forEach((element: ElementRef) => {
          element.nativeElement.classList.remove('bouncy-transition');
        });
      }, 500);
    }
  }
}
