import { Component, Input, OnInit } from '@angular/core';
import { RouteItem } from '../route-item';
import { BaseView } from '../base-view';
@Component({
  selector: 'app-web-view',
  templateUrl: './web-view.component.html',
  styleUrls: ['./web-view.component.scss']
})
export class WebViewComponent extends BaseView implements OnInit {

  private routes: RouteItem[] = [{
    path: '/aa',
    label: 'AA'
  }, {
    path: '/bb',
    label: 'BB'
  }];

  @Input()
  private routeItems: RouteItem[];

  route: object;

  constructor() {
    super();
  }


  ngOnInit() {
  }

  handleTabChange(ev) {
  }
}
