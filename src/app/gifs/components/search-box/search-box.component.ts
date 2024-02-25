import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifService } from '../../services/gif.service';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {

  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor( private _gifService:GifService ) {}

  searchTag():void {
    const newTag = this.tagInput.nativeElement.value.trim();
    if( !newTag ) return;

    this._gifService.searchTag( newTag );
    this.resetInput();
  }

  resetInput():void {
    this.tagInput.nativeElement.value = '';
  }

}
