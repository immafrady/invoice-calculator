import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss']
})
export class BaseLayoutComponent implements OnInit {

  private isMobile: boolean;

  constructor(
    breakpointObserver: BreakpointObserver
  ) {
    breakpointObserver
      .observe([
      Breakpoints.HandsetPortrait,
      Breakpoints.HandsetLandscape
      ])
      .subscribe(result => {
        this.isMobile = result.matches;
      });
  }

  ngOnInit() {
  }

}
