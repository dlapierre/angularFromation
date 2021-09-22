import { Component, OnInit } from '@angular/core';
import { Article } from '../interfaces/article';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss'],
})
export class StockComponent implements OnInit {
  articles: Article[] = [
    {
      name: 'Tournevis',
      price: 2.99,
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
  constructor() {}

  ngOnInit(): void {}
}
