import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  f = new FormGroup({
    name: new FormControl('init', [Validators.required]),
    price: new FormControl(2.5, [Validators.required]),
    naqtyme: new FormControl(12, [Validators.required]),
  });
  constructor() {}

  ngOnInit(): void {}
}
