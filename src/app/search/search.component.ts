import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs';

interface Attributes {
  title: string;
  body: string;
}
interface Article {
  type: string;
  id: string;
  attributes: Attributes;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  tempUrl = '../assets/mock.json';
  query: FormControl = new FormControl('');
  searchInitiated: boolean = false;
  articles: Article[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.query.valueChanges
      .pipe(
        debounceTime(750),
        distinctUntilChanged(),
        switchMap((test) =>
          this.http
            .get<Article[]>(this.tempUrl)
            .pipe(
              map((articles) =>
                articles.filter((article) =>
                  article.attributes.title.includes(test)
                )
              )
            )
        )
      )
      .subscribe((data) => {
        this.searchInitiated = true;
        if (this.query.value === '') {
          this.searchInitiated = false;
          this.articles = [];
        } else {
          this.articles = data;
        }
      });
  }
}
