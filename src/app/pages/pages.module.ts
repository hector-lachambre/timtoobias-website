import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { BioComponent } from './home-page/components/bio/bio.component';
import { HomePageComponent } from './home-page/home-page.component';
import { StreamPageComponent } from './stream-page/stream-page.component';
import { SupportPageComponent } from './support-page/support-page.component';
import { MaterialModule } from 'src/vendor/material/material.module';


@NgModule({
    declarations: [HomePageComponent, StreamPageComponent, BioComponent, SupportPageComponent],
    imports: [
        CommonModule,
        CoreModule,
        MaterialModule
    ]
})
export class PagesModule {
}
