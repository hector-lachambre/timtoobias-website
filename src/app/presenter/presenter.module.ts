import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafePipe } from './safe/safe.pipe';



@NgModule({
  declarations: [SafePipe],
  imports: [
    CommonModule
  ],
  providers: [],
  exports: [
    SafePipe
  ]
})
export class PresenterModule { }
