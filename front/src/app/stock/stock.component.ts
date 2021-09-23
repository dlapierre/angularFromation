import { Component, OnInit } from '@angular/core';
import { Article } from '../interfaces/article';
import { ArticleService } from '../services/article.service';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss'],
})
export class StockComponent implements OnInit {
  faCoffee = faCoffee;
  faPlus = faPlus;
  faTrash = faTrash;
  selectedArticles = new Set<Article>();

  constructor(public articleService: ArticleService) {}

  ngOnInit(): void {}

  remove() {
    this.articleService.delete(this.selectedArticles);
    this.selectedArticles.clear();
  }

  toggle(a: Article) {
    if (this.selectedArticles.has(a)) {
      this.selectedArticles.delete(a);

      return;
    }

    this.selectedArticles.add(a);
  }
}
