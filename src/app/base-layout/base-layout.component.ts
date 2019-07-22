import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { BaseLayoutDirective } from './base-layout.directive';
import { MobileViewComponent } from './mobile-view/mobile-view.component';
import { WebViewComponent } from './web-view/web-view.component';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss']
})
export class BaseLayoutComponent implements OnInit {

  @ViewChild(BaseLayoutDirective, { static: true })
  appBaseLayout: BaseLayoutDirective;


  constructor(
    private breakpointObserver: BreakpointObserver,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  ngOnInit() {
    this.breakpointObserver
      .observe([
        Breakpoints.HandsetPortrait,
        Breakpoints.HandsetLandscape
      ])
      .subscribe(result => {
        this.loadComponent(result.matches);
      });
  }

  loadComponent(isMobile) {
    let componentFactory;
    if (isMobile) {
      componentFactory = this.componentFactoryResolver.resolveComponentFactory(MobileViewComponent);
    } else {
      componentFactory = this.componentFactoryResolver.resolveComponentFactory(WebViewComponent);
    }
    const viewContainerRef = this.appBaseLayout.viewContainerRef;
    viewContainerRef.clear();
    viewContainerRef.createComponent(componentFactory);
  }

}
