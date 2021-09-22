import { Injectable } from '@angular/core';
import { Article } from '../interfaces/article';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  articles!: Article[];

  constructor() {
    this.load();
  }

  addArticle(arg0: Article) {
    this.articles.push(arg0);
    this.save();
  }

  delete(a: Article) {}

  load() {
    const str = localStorage.getItem('articles');
    if (!str) {
      this.articles = [
        {
          name: 'Tournevis',
          price: 2.9,
          qty: 120,
        },
        {
          name: 'Marteau',
          price: 8.99,
          qty: 150,
        },
        {
          name: 'Perceuse',
          price: 82.99,
          qty: 15,
        },
        {
          name: 'Pelle',
          price: 15.99,
          qty: 5,
        },
      ];

      return;
    }
    this.articles = JSON.parse(str);
  }

  save() {
    localStorage.setItem('articles', JSON.stringify(this.articles));
  }
}
