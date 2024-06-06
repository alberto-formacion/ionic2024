import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Album } from '../models/album';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private http: HttpClient) { }

  //http = Inject(HttpClient);

  getAllAlbums():Observable<Array<Album>>{
    return this.http.get<Array<Album>>('/assets/json/albums.json');
  }
}
