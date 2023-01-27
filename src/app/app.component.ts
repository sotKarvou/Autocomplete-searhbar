import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { BehaviorSubject, Observable, pipe } from 'rxjs';
import { QuerySearchService, Article } from './query-search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
 
  inputValue: string = '';
  myResults: Article[] = [];
  searchInitiated: boolean = false;
  myres$: Observable<Article[]> = this.qs.searchTerm()

  constructor(private http: HttpClient, private qs:QuerySearchService) {}

  search(event: any) {
   
  }
}
