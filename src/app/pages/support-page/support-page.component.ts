import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../core/services/title/title.service';
import { BreakpointObserver } from '@angular/cdk/layout';
import { trigger, state, style, transition, useAnimation } from '@angular/animations';
import { EnterAnimation, SlideDown, Slideup } from 'src/app/animations/animations';
import { BreakpointService } from 'src/app/core/services/breakpoint/breakpoint.service';
import { Observable } from 'rxjs';
import { SocialService } from 'src/app/core/services/social/social.service';
import { MatSnackBar } from '@angular/material';

@Component({
    selector: 'app-support-page',
    templateUrl: './support-page.component.html',
    styleUrls: ['./support-page.component.css'],
    animations: [
        trigger('Slide', [
            transition(':enter', [
                useAnimation(
                    SlideDown
                )
            ]),
            transition(':leave', [
                useAnimation(
                    Slideup
                )
            ])
        ])
    ]
})
export class SupportPageComponent implements OnInit {

    public presenter01: boolean = false;
    public presenter02: boolean = false;
    public presenter03: boolean = false;
    public presenter04: boolean = false;
    public isHandset$: Observable<boolean>;

    constructor(
        private titleService: TitleService, 
        private bs: BreakpointService,
        public ss: SocialService,
        private _snackBar: MatSnackBar
    ) {

        this.isHandset$ = this.bs.isHandset$;
    }


    ngOnInit() {

        this.titleService.setSubTitle('Me soutenir');
    }

    presenter1() {
        this.presenter02 = false;
        this.presenter01 = !this.presenter01;
    }

    presenter2() {
        this.presenter01 = false;
        this.presenter02 = !this.presenter02;
    }

    presenter3() {
        this.presenter04 = false;
        this.presenter03 = !this.presenter03;
    }

    presenter4() {
        this.presenter03 = false;
        this.presenter04 = !this.presenter04;
    }

    copyToClipboard(e, message) {
    
        let input = document.createElement('input');
        input.value = e.target.innerHTML
        input.classList.add('hidden')
        e.target.parentElement.appendChild(input);
        input.select()
        document.execCommand('copy');
        e.target.parentElement.removeChild(input);

        this._snackBar.open(message, null, {
            duration: 2000,
        });      
    }
}
