import { Component } from '@angular/core';

@Component({
  selector: 'app-add-to-bag',
  templateUrl: './add-to-bag.component.html',
  styleUrl: './add-to-bag.component.scss'
})
export class AddToBagComponent {
  brand:string="";
  title:string="";
  selectedPic=0;
  description: string="";
  price: number = 0;
  discount: number|undefined;
  sizing:string[]=[];
  selectedSizing:string="";
  imagesUrls: string[]=[
    "https://img.kwcdn.com/product/fancy/0b32b02d-baf7-421f-960b-acae9815058f.jpg?imageView2/2/w/800/q/70/format/webp",
    "https://img.kwcdn.com/product/fancy/5b1ce262-6f58-4135-a1e4-b481f1bc5699.jpg?imageView2/2/w/800/q/70/format/webp",
    "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/77b67b4ebdd2079a9a8fb180962c0287.jpg?imageView2/2/w/800/q/70/format/webp"
  ]

  onImagePick(index:number){
    this.selectedPic=index;
  }
  isIncluded(size:string){
    return this.sizing.includes(size);
  }
  onSizeClicked(size:string){
    this.selectedSizing=size
  }
  isSizeSelected(size:string){
    return this.selectedSizing===size;
  }
}
