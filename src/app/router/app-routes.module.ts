import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BaseLayoutComponent} from '../base-layout/base-layout.component';
import { RouteData } from '../shared/interfaces/route-data';

const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    data: {
      title: '首页'
    } as RouteData
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
