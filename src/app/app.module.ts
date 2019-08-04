import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutesModule } from './router/app-routes.module';
import { AppComponent, NewDatabaseDialogComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {BaseLayoutModule} from './base-layout/base-layout.module';
import { MAT_DIALOG_DEFAULT_OPTIONS, MatButtonModule, MatInputModule, MatSnackBarModule } from '@angular/material';
import { CoreModule } from './core/core.module';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    NewDatabaseDialogComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutesModule,
    BrowserAnimationsModule,
    BaseLayoutModule,
    CoreModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    SharedModule,
    MatSnackBarModule
  ],
  entryComponents: [
    NewDatabaseDialogComponent
  ],
  providers: [
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { disableClose: true, hasBackdrop: true } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
