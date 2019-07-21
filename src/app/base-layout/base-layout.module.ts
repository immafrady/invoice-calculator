import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseLayoutComponent } from './base-layout.component';
import { MobileViewComponent } from './mobile-view/mobile-view.component';
import { WebViewComponent } from './web-view/web-view.component';

@NgModule({
  declarations: [BaseLayoutComponent, MobileViewComponent, WebViewComponent],
  imports: [
    CommonModule
  ]
})
export class BaseLayoutModule { }
