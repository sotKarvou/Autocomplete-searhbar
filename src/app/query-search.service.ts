import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


interface Attributes {
  title: string;
  body: string;
}
export interface Article {
  type: string;
  id: string;
  attributes: Attributes;
}


@Injectable({
  providedIn: 'root',
})
export class QuerySearchService {
  tempUrl = '../assets/mock.json';
  constructor(private http: HttpClient) {}

  searchTerm(): Observable<Article[]> {
    return this.http.get<any>(this.tempUrl);
  }
}
