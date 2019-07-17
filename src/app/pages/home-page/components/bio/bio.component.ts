import { state, style, transition, trigger, useAnimation } from '@angular/animations';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EnterAnimation } from '../../../../animations/animations';


@Component({
    selector: 'app-bio',
    templateUrl: './bio.component.html',
    styleUrls: ['./bio.component.css'],
    animations: [
        trigger('EnterLeave', [
            state('flyIn', style({transform: 'translateX(0)', opacity: 1})),
            transition(':enter', [
                useAnimation(
                    EnterAnimation
                )
            ])
        ])
    ]
})
export class BioComponent implements OnInit {

    public isHandset$: Observable<boolean>;


    constructor(private bo: BreakpointObserver) {
    }


    ngOnInit() {

        this.isHandset$ = this.bo.observe([Breakpoints.Handset, Breakpoints.TabletPortrait])
                              .pipe(
                                  map(result => result.matches)
                              );
    }
}
