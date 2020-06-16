import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { PagesModule } from './pages/pages.module';
import { PresenterModule } from './presenter/presenter.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
      CoreModule,
      PagesModule,
      PresenterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
