import { NgModule } from '@angular/core';
import { MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
    declarations: [],
    imports: [
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatButtonModule,
        MatToolbarModule,
    ], exports: [
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatButtonModule,
        MatToolbarModule
    ]
})
export class MaterialModule {
}
