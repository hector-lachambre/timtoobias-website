import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { PlayerMetadata } from './player-metadata';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';


@Injectable()
export class PlayerStatementService {

    private statement: BehaviorSubject<PlayerMetadata>;

    public isHandset$: Observable<boolean>;

    public isHandset: boolean

    constructor(private bo: BreakpointObserver) {

        this.statement = new BehaviorSubject(new PlayerMetadata(false, null, false));

        this.isHandset$ = this.bo.observe([Breakpoints.XSmall])
        .pipe(
            map(result => result.matches)
        );

        this.isHandset$.subscribe(b => {

            this.isHandset = b

            let last = this.statement.getValue()

            this.statement.next(new PlayerMetadata(last.active, last.position, b));
        })
    }


    public getStatement(): BehaviorSubject<PlayerMetadata> {

        return this.statement;
    }
}
