import { Component, Input, OnInit } from '@angular/core';
import { BaseView } from '../base-view';
import { ActivatedRoute } from '@angular/router';
import { RouteData } from '../../shared/interfaces/route-data';

@Component({
  selector: 'app-mobile-view',
  templateUrl: './mobile-view.component.html',
  styleUrls: ['./mobile-view.component.scss']
})
export class MobileViewComponent implements OnInit, BaseView {

  @Input() appName: string;
  @Input() logoPath: string;

  private title: string;

  route: object;

  constructor(
    route: ActivatedRoute
  ) {
    route.data.subscribe((item: RouteData)  => {
      this.title = item.title;
    });
  }

  ngOnInit() {
  }


}
