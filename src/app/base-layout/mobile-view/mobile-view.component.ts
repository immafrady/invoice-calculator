import { Component, OnInit } from '@angular/core';
import { BaseView } from '../base-view';
import { ActivatedRoute } from '@angular/router';
import { RouteData } from '../../shared/interfaces/route-data';
import { MatBottomSheet } from '@angular/material';
import { BottomSheetComponent } from '../bottom-sheet/bottom-sheet.component';

@Component({
  selector: 'app-mobile-view',
  templateUrl: './mobile-view.component.html',
  styleUrls: ['./mobile-view.component.scss']
})
export class MobileViewComponent extends BaseView implements OnInit {

  constructor(
    route: ActivatedRoute,
    private bottomSheet: MatBottomSheet
  ) {
    super();
    route.data.subscribe((item: RouteData)  => {
      this.title = item.title;
    });
  }

  private title: string;

  route: object;

  ngOnInit() {
  }

  clickFab(): void {
    this.bottomSheet.open(BottomSheetComponent);
  }

}
