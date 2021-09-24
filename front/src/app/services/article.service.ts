import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Article } from '../interfaces/article';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  articles$ = new BehaviorSubject<Article[]>(this.readArticles());
  constructor() {
    this.articles$.subscribe({
      next: (articles) =>
        localStorage.setItem('articles', JSON.stringify(articles)),
    });
  }

  addArticle(arg0: Article) {
    this.articles$.value.push(arg0);
    this.articles$.next(this.articles$.value);
  }

  delete(articlesToDelete: Set<Article>) {
    // articlesToDelete.forEach((a) => {
    //   const index = this.articles.indexOf(a, 0);
    //   if (index > -1) {
    //     this.articles.splice(index, 1);
    //   }
    // });
    const articles = this.articles$.value.filter(
      (a) => !articlesToDelete.has(a)
    );
    this.articles$.next(articles);
  }

  readArticles(): Article[] {
    const str = localStorage.getItem('articles');
    if (!str) {
      return [];
    }
    return JSON.parse(str);
  }
}
