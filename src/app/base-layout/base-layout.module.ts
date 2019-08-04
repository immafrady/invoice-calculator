import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseLayoutComponent } from './base-layout.component';
import { MobileViewComponent } from './mobile-view/mobile-view.component';
import { WebViewComponent } from './web-view/web-view.component';
import { BaseLayoutDirective } from './base-layout.directive';
import { MatButtonModule, MatIconModule, MatListModule, MatMenuModule, MatSidenavModule, MatTabsModule } from '@angular/material';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { RouterModule } from '@angular/router';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';

@NgModule({
  declarations: [
    BaseLayoutComponent,
    BaseLayoutDirective,
    MobileViewComponent,
    WebViewComponent,
    BottomSheetComponent
  ],
  entryComponents: [
    MobileViewComponent,
    WebViewComponent,
    BottomSheetComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    MatListModule,
    MatTabsModule,
    MatBottomSheetModule,
    MatMenuModule
  ],
  bootstrap: [BaseLayoutComponent]
})
export class BaseLayoutModule { }
