import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { RouteItem } from '../route-item';
import { BaseView } from '../base-view';
import { MatTabNav } from '@angular/material';

@Component({
  selector: 'app-web-view',
  templateUrl: './web-view.component.html',
  styleUrls: ['./web-view.component.scss']
})
export class WebViewComponent implements OnInit, BaseView {
  @Input() appName: string;
  @Input() logoPath: string;

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

  constructor() { }


  ngOnInit() {
  }

  handleTabChange(ev) {
  }


}
