import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../models/Item';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  items: Item[]  = [];
  url:string = 'http://localhost:3000/items';

  httpOptions = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  constructor( private http: HttpClient) { }


  getItems(): Observable< Item[] > {

    return this.http.get<Item[]>(this.url);
  }

  addItem(item: Item) : Observable< Item > {
    return this.http.post<Item>( this.url, item, this.httpOptions );
  }

  toogleItem(item: Item) : Observable< Item > {
    return this.http.put<Item>( this.url + '/' + item.id,  this.httpOptions );
  }

  deleteItem( item: Item ) : Observable< Item > {
    return this.http.delete<Item>( this.url + item.id );
  }
}
