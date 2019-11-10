import { animate, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, HostBinding, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerMetadata } from '../services/player-statement/player-metadata';
import { PlayerStatementService } from '../services/player-statement/player-statement.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BreakpointService } from '../services/breakpoint/breakpoint.service';


@Component({
    selector: 'app-twitch-player',
    templateUrl: './twitch-player.component.html',
    styleUrls: ['./twitch-player.component.css'],
    animations: [
        trigger('fade', [
            transition(':enter', [
                style({opacity: 0}),
                animate('0.2s cubic-bezier(0.4, 0.0, 0.2, 1)', style({opacity: 1})),
            ]),
            transition(':leave', [
                animate('0.5s cubic-bezier(0.4, 0.0, 0.2, 1)', style({opacity: 0}))
            ])
        ]),
        trigger('slideFade', [
            transition(':leave', [
                style({transform: 'translateY(0)', opacity: 1}),
                animate('0.5s cubic-bezier(0.4, 0.0, 1, 1)', style({transform: 'translateY(336px)', opacity: 0}))
            ])
        ])
    ]
})
export class TwitchPlayerComponent implements OnInit {

    public playerMetadata: PlayerMetadata;

    public isHandset$: Observable<boolean>;

    public isHandset: boolean;

    @HostBinding('style.top') top;

    @HostBinding('style.right') right;

    @HostBinding('style.bottom') bottom;

    @HostBinding('style.left') left;


    @HostBinding('style.width') width;


    @HostBinding('style.height') height;


    @HostBinding('style.position') position;


    @HostBinding('style.z-index') zindex;
    
    @HostBinding('style.paddingTop') paddingTop;


    public loaded = false;


    public isTranstionning = false;


    constructor(
        private bs: BreakpointService, 
        private pss: PlayerStatementService, 
        private elRef: ElementRef, 
        private r: Router) {
    }


    ngOnInit() {

        this.elRef.nativeElement.addEventListener('transitionstart', () => {

            this.isTranstionning = true;
        });

        this.elRef.nativeElement.addEventListener('transitionend', () => {

            setTimeout(() => this.isTranstionning = false, 50);
        });

        this.isHandset$ = this.bs.isHandset$

        this.pss.getStatement().subscribe(pm => {

            this.playerMetadata = pm;

            if (pm.active && pm.position !== null) {

                this.position = 'absolute';
                this.zindex = 100;

                this.top = `${ pm.position.y }px`;
                this.left = `${ pm.position.x }px`;

                this.width = `${pm.position.width}px`;
                this.height = `${pm.position.height}px`;
            } else if (pm.active && pm.position === null && pm.isHandset) {
                this.position = 'fixed';
                this.zindex = 102;

                const padding = 16;
                
                this.width = '100%';
                this.height = '56.25vw';

                this.right = 0;
                this.left = null;

                this.bottom = 0;
                this.top = null;
            } else if (pm.active && pm.position === null && !pm.isHandset) {

                this.position = 'fixed';
                this.zindex = 102;

                const width = 320;
                const height = 180;

                this.width = `${width}px`;
                this.height = `${height}px`;

                this.top = `calc(100vh - ${ height + 16 }px)`;
                this.left = `calc(100vw - ${ width + 33 }px)`;
            }
        });

    }


    joinStream() {
        this.r.navigate(['/stream']);
    }


    closeStream() {
        this.pss.getStatement().next(new PlayerMetadata(false, null, this.isHandset));
    }
}
