import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const needModules = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule
]

@NgModule({
  declarations: [],
  imports: [
    ...needModules
  ],
  exports: [
    ...needModules
  ]
})
export class SharedModule { }
