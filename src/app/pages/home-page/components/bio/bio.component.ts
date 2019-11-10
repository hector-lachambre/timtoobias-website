import { state, style, transition, trigger, useAnimation } from '@angular/animations';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EnterAnimation } from '../../../../animations/animations';
import { BreakpointService } from 'src/app/core/services/breakpoint/breakpoint.service';


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


    constructor(private bs: BreakpointService) {
    }


    ngOnInit() {

        this.isHandset$ = this.bs.isHandset$;
    }
}
