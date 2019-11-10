import { NgModule } from '@angular/core';
import { MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule, MatSnackBarModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
    declarations: [],
    imports: [
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatButtonModule,
        MatToolbarModule,
        MatSnackBarModule
    ], exports: [
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatButtonModule,
        MatToolbarModule,
        MatSnackBarModule
    ]
})
export class MaterialModule {
}
