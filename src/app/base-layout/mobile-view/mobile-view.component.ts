import { Component, OnInit } from '@angular/core';
import { RouteItem } from '../route-item';
import { BaseView } from '../base-view';

@Component({
  selector: 'app-mobile-view',
  templateUrl: './mobile-view.component.html',
  styleUrls: ['./mobile-view.component.scss']
})
export class MobileViewComponent implements OnInit, BaseView {

  constructor() { }

  private routeItems: RouteItem[];

  route: object;

  ngOnInit() {
  }

}
