import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { PlayerMetadata } from './player-metadata';


@Injectable()
export class PlayerStatementService {

    private statement: Subject<PlayerMetadata>;


    constructor() {

        this.statement = new Subject();
        this.statement.next(new PlayerMetadata(false, null));
    }


    public getStatement(): Subject<PlayerMetadata> {

        return this.statement;
    }
}
