import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ArticleService } from './article.service';

@Injectable({
  providedIn: 'root',
})
export class HttpArticleService extends ArticleService {
  constructor(protected http: HttpClient) {
    super();
    console.log('Http service');
    this.refresh();
  }

  refresh() {
    this.http.get('http://localhost:3000/api/articles').subscribe({
      next: (data) => {
        console.log(data);
      },
      complete: () => {
        console.log('complete');
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
