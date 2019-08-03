import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { BaseLayoutDirective } from './base-layout.directive';
import { MobileViewComponent } from './mobile-view/mobile-view.component';
import { WebViewComponent } from './web-view/web-view.component';
import { BaseView } from './base-view';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss']
})
export class BaseLayoutComponent implements OnInit {

  @ViewChild(BaseLayoutDirective, { static: true })
  appBaseLayout: BaseLayoutDirective;

  title = '';


  constructor(
    private breakpointObserver: BreakpointObserver,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  ngOnInit() {
    this.breakpointObserver
      .observe([
        Breakpoints.Handset,
        Breakpoints.Tablet
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
    const containerRef = viewContainerRef.createComponent(componentFactory);
    (containerRef.instance as BaseView).appName = '报销计算器';
    (containerRef.instance as BaseView).logoPath = 'assets/images/logo-small.png';
  }

}
