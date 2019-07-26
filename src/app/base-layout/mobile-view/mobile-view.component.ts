import { Component, OnInit, ViewChild } from '@angular/core';
import { RouteItem } from '../route-item';
import { BaseView } from '../base-view';
import { MatDrawer } from '@angular/material';
import { Observable, of, Subject } from 'rxjs';

@Component({
  selector: 'app-mobile-view',
  templateUrl: './mobile-view.component.html',
  styleUrls: ['./mobile-view.component.scss']
})
export class MobileViewComponent implements OnInit, BaseView {

  drawerStatus = false;

  subjectDrawerOpened = new Subject<boolean>();

  private routeItems: RouteItem[];

  route: object;

  constructor() { }

  ngOnInit() {
  }

}
