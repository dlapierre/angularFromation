import { Article } from './../interfaces/article';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ArticleService } from './article.service';
import { map } from 'rxjs/operators';

const url = 'http://localhost:3000/api/articles';
@Injectable({
  providedIn: 'root',
})
export class HttpArticleService extends ArticleService {
  constructor(protected http: HttpClient) {
    super();
    console.log('Http service');
    this.refresh();
  }

  addArticle(a: Article) {
    super.addArticle(a);
    this.http.post<void>(url, a).subscribe({
      next: () => {
        console.log('success');
        this.refresh();
      },
      complete: () => {
        console.log('complete');
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  delete(articlesToDelete: Set<Article>) {
    super.delete(articlesToDelete);
    const ids = [...articlesToDelete].map((a) => a.id);
    this.http
      .delete<void>(url, {
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(ids),
      })
      .subscribe({
        next: () => {
          console.log('success');
          this.refresh();
        },
        complete: () => {
          console.log('complete');
        },
        error: (error) => {
          console.log(error);
        },
      });
  }

  refresh() {
    this.http
      .get<Article[]>('http://localhost:3000/api/articles')
      .pipe(
        map((articles) => {
          articles.forEach((a) => (a.name = '***' + a.name.toUpperCase()));
          return articles;
        })
      )
      .subscribe({
        next: (articles) => {
          console.log('articles: ', articles);
          this.articles$.next(articles);
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
