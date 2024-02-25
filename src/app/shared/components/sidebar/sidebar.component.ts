import { Component } from '@angular/core';
import { GifService } from 'src/app/gifs/services/gif.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor( private _gifService:GifService ) {}

  get tags(): string[] {
    return this._gifService.tagsHistory;
  }
  
  onSearchTag( tag:string ):void {
    this._gifService.searchTag( tag );
  }

  clearHistoryTag():void {
    this._gifService.clearHistory();
  }

  get hasTags() {
    return this._gifService.gifList.length > 0;
  }

}
