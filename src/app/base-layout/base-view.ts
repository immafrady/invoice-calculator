import { EventEmitter, Input, Output } from '@angular/core';

export class BaseView {

  route?: object;
  @Input() appName: string;
  @Input() logoPath: string;

  @Output()
  fabClick = new EventEmitter<boolean>();

  clickFab(): void {}
}
