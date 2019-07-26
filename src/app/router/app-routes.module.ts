import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BaseLayoutComponent} from '../base-layout/base-layout.component';

const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: true })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutesModule { }
