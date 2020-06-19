import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { StreamPageComponent } from './pages/stream-page/stream-page.component';
import { SupportPageComponent } from './pages/support-page/support-page.component';
import { ArticlesPageComponent } from './pages/articles-page/articles-page.component';


const routes: Routes = [
    {path: '', component: HomePageComponent, data: {animation: 'HomePage'}},
    {path: 'stream', component: StreamPageComponent, data: {animation: 'StreamPage'}},
    {path: 'support', component: SupportPageComponent, data: {animation: 'SupportPage'}},
    {path: 'articles', component: ArticlesPageComponent, data: {animation: 'SupportPage'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
