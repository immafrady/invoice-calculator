import { Component, Input, OnInit } from '@angular/core';
import { RouteItem } from '../route-item';
import { BaseView } from '../base-view';

@Component({
  selector: 'app-web-view',
  templateUrl: './web-view.component.html',
  styleUrls: ['./web-view.component.scss']
})
export class WebViewComponent implements OnInit, BaseView {
  @Input() appName: string;
  @Input() logoPath: string;

  @Input()
  private routeItems: RouteItem[];

  route: object;

  constructor() { }


  ngOnInit() {
  }




}
