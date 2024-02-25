import { Component } from '@angular/core';
import { GifService } from '../../services/gif.service';
import { Gif } from '../../interfaces/gifs-response.interface';

@Component({
  selector: 'app-gifs-page',
  templateUrl: './gifs-page.component.html',
  styleUrls: ['./gifs-page.component.css']
})
export class GifsPageComponent {

  constructor( private _gifService:GifService ) {}

  get gifs():Gif[] {
    return [...this._gifService.gifList];
  }

}