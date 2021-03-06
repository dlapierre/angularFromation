import { Directive, ElementRef, OnDestroy, OnInit } from '@angular/core';

@Directive({
  selector: '[appAutofocus]',
})
export class AutofocusDirective implements OnDestroy, OnInit {
  constructor(private elt: ElementRef<HTMLInputElement>) {
    console.log('directive autofocus instantiated');
  }

  ngOnDestroy(): void {
    console.log('Directive autofocus destroyed');
  }

  ngOnInit(): void {
    // this.elt.nativeElement.focus();
    this.elt.nativeElement.select();
  }
}
