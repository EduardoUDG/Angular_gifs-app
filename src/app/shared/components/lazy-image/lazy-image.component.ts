import { Component, Input, OnDestroy, OnInit } from '@angular/core';

let timeOut:any;

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrls: ['./lazy-image.component.css']
})
export class LazyImageComponent implements OnInit, OnDestroy {

  @Input()
  public urlImage!:string;

  @Input()
  public altText:string = '';

  public hasLoaded: boolean = false;

  ngOnInit(): void {
    if( !this.urlImage ) throw new Error('Url property is required');
  }

  ngOnDestroy(): void {
    clearTimeout( timeOut );
  }

  onLoad() {
    timeOut = setTimeout(() => {
      this.hasLoaded = true;
    }, 500);
  }

}
