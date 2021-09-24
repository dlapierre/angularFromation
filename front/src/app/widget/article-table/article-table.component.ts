import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Article } from 'src/app/interfaces/article';

@Component({
  selector: 'app-article-table',
  templateUrl: './article-table.component.html',
  styleUrls: ['./article-table.component.scss'],
})
export class ArticleTableComponent implements OnInit {
  selectedArticles = new Set<Article>();
  @Input() articles: Article[] | null = [];

  @Output() articleToggle = new EventEmitter<Set<Article>>();
  constructor() {}

  ngOnInit(): void {}

  toggle(a: Article) {
    if (this.selectedArticles.has(a)) {
      this.selectedArticles.delete(a);
      this.articleToggle.emit(this.selectedArticles);
      return;
    }

    this.selectedArticles.add(a);
    this.articleToggle.emit(this.selectedArticles);
  }
}
