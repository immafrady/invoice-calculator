import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appBaseLayout]'
})
export class BaseLayoutDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
