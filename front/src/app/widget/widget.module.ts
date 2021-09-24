import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutofocusDirective } from './autofocus.directive';
import { EllipsisPipe } from './ellipsis.pipe';

@NgModule({
  declarations: [AutofocusDirective, EllipsisPipe],
  exports: [AutofocusDirective, EllipsisPipe],
  imports: [CommonModule],
})
export class WidgetModule {}
