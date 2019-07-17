import { state, style, transition, trigger, useAnimation } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { EnterAnimation } from '../../animations/animations';


@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.css'],
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
export class ButtonComponent implements OnInit {

    @Input()
    public routerLink: string;


    @Input()
    public distanceAnimation: number;


    constructor() {
    }


    ngOnInit() {

    }
}
