import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from '../../vendor/material/material.module';
import { AppRoutingModule } from '../app-routing.module';
import { ButtonComponent } from './button/button.component';
import { ContainerComponent } from './container/container.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { LayoutComponent } from './layout/layout.component';
import { PartnersComponent } from './partners/partners.component';
import { SectionComponent } from './section/section.component';
import { SeparatorComponent } from './separator/separator.component';
import { PlayerStatementService } from './services/player-statement/player-statement.service';
import { ScrollService } from './services/scroll/scroll.service';
import { TitleService } from './services/title/title.service';
import { SplitterComponent } from './splitter/splitter.component';
import { TitleComponent } from './title/title.component';
import { TwitchPlayerComponent } from './twitch-player/twitch-player.component';


@NgModule({
    declarations: [
        SeparatorComponent,
        LayoutComponent,
        PartnersComponent,
        ContainerComponent,
        SectionComponent,
        TitleComponent,
        ButtonComponent,
        CopyrightComponent,
        SplitterComponent,
        TwitchPlayerComponent
    ],
    imports: [
        CommonModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        LayoutModule,
        MaterialModule
    ], exports: [
        LayoutComponent,
        SectionComponent,
        SeparatorComponent,
        ButtonComponent,
        TitleComponent,
        SplitterComponent
    ],
    providers: [PlayerStatementService, ScrollService, TitleService]
})
export class CoreModule {
}
