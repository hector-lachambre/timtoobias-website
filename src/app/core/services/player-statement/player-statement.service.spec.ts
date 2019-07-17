import { TestBed } from '@angular/core/testing';

import { PlayerStatementService } from './player-statement.service';


describe('PlayerStatementService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: PlayerStatementService = TestBed.get(PlayerStatementService);
        expect(service).toBeTruthy();
    });
});
