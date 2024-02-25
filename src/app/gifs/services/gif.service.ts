import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GIFResponse, Gif } from '../interfaces/gifs-response.interface';

@Injectable({
  providedIn: 'root'
})
export class GifService {

  public gifList:         Gif[] = [];
  private _tagsHistory:  string[] = [];
  
  private STORAGE_HISTORY_KEY:  string ='_gif-app-history';
  private API_KEY:      string = ''; 
  private GIF_BASE_API: string ='https://api.giphy.com/v1/gifs';

  constructor(private _http: HttpClient) {
    this.loadLocalStorage();
  }

  get tagsHistory(): string[] {
    return [ ...this._tagsHistory ];
  }

  private organizeHistory( tag:string ) {
    tag = tag.toLowerCase();

    if( this._tagsHistory.includes(tag) ) {
      this._tagsHistory = this._tagsHistory.filter( oldTag => oldTag !== tag );
    }

    this._tagsHistory.unshift( tag );
    this._tagsHistory = this._tagsHistory.slice(0, 10);
    this.saveLocalStorage();
  }

  private saveLocalStorage():void {
    localStorage.setItem(
      this.STORAGE_HISTORY_KEY, 
      JSON.stringify(this._tagsHistory) );
  }

  private loadLocalStorage():void {
    if( !localStorage.getItem(this.STORAGE_HISTORY_KEY) ) return;

    this._tagsHistory = JSON.parse( localStorage.getItem(this.STORAGE_HISTORY_KEY)! );

    if( this._tagsHistory.length === 0 ) return;
    this.searchTag( this._tagsHistory[0] );
  }

  searchTag( tag:string ):void {
    this.organizeHistory( tag );
    
    const url:string  = `${this.GIF_BASE_API}/search`;
    const params      = new HttpParams()
          .set('api_key', this.API_KEY)
          .set('limit', 10)
          .set('q', tag);

    this._http.get<GIFResponse>(url, { params })
      .subscribe( res => {
        this.gifList = res.data;
      });
  }

  clearHistory():void {
    this.gifList      = [];
    this._tagsHistory = [];
    localStorage.clear();
  }

}
 