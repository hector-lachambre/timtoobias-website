import { animate, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, HostBinding, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerMetadata } from '../services/player-statement/player-metadata';
import { PlayerStatementService } from '../services/player-statement/player-statement.service';


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


    @HostBinding('style.top') top;


    @HostBinding('style.left') left;


    @HostBinding('style.width.px') width;


    @HostBinding('style.height.px') height;


    @HostBinding('style.position') position;


    public loaded = false;


    public isTranstionning = false;


    constructor(private pss: PlayerStatementService, private elRef: ElementRef, private r: Router) {
    }


    ngOnInit() {

        console.log(this.elRef.nativeElement);

        this.elRef.nativeElement.addEventListener('transitionstart', () => {

            this.isTranstionning = true;
        });

        this.elRef.nativeElement.addEventListener('transitionend', () => {

            setTimeout(() => this.isTranstionning = false, 50);
        });

        this.pss.getStatement().subscribe(pm => {

            this.playerMetadata = pm;

            if (pm.active && pm.position !== null) {

                this.position = 'absolute';

                this.top = `${ pm.position.y }px`;
                this.left = `${ pm.position.x }px`;

                this.width = pm.position.width;
                this.height = pm.position.height;
            } else if (pm.active && pm.position === null) {

                this.position = 'fixed';

                const width = 320;
                const height = 180;

                this.width = width;
                this.height = height;

                this.top = `calc(100vh - ${ height + 16 }px)`;
                this.left = `calc(100vw - ${ width + 33 }px)`;
            }
        });

    }


    joinStream() {
        this.r.navigate(['/stream']);
    }


    closeStream() {
        this.pss.getStatement().next(new PlayerMetadata(false, null));
    }
}
