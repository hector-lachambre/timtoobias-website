import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { BioComponent } from './home-page/components/bio/bio.component';
import { HomePageComponent } from './home-page/home-page.component';
import { StreamPageComponent } from './stream-page/stream-page.component';
import { SupportPageComponent } from './support-page/support-page.component';
import { MaterialModule } from 'src/vendor/material/material.module';
import { LastArticleComponent } from './home-page/components/last-article/last-article.component';
import { ArticlesPageComponent } from './articles-page/articles-page.component';
import { ArticleDeuxComponent } from './articles-page/article-deux/article-deux.component';
import { ArticleTroisComponent } from './articles-page/article-trois/article-trois.component';


@NgModule({
    declarations: [HomePageComponent, StreamPageComponent, BioComponent, SupportPageComponent, LastArticleComponent, ArticlesPageComponent, ArticleDeuxComponent, ArticleTroisComponent],
    imports: [
        CommonModule,
        CoreModule,
        MaterialModule
    ]
})
export class PagesModule {
}
