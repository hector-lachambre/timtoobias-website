import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ElementPosition } from '../../core/services/player-statement/element-position';
import { PlayerMetadata } from '../../core/services/player-statement/player-metadata';
import { PlayerStatementService } from '../../core/services/player-statement/player-statement.service';
import { ScrollService } from '../../core/services/scroll/scroll.service';
import { TitleService } from '../../core/services/title/title.service';


@Component({
    selector: 'app-stream-page',
    templateUrl: './stream-page.component.html',
    styleUrls: ['./stream-page.component.css']
})
export class StreamPageComponent implements OnInit, AfterViewInit, OnDestroy {

    public isHandset$: Observable<boolean>;


    @ViewChild('player', {static: true})
    public player: ElementRef;


    constructor(
        private bo: BreakpointObserver,
        private pss: PlayerStatementService,
        private ss: ScrollService,
        private titleService: TitleService
    ) {
    }


    ngOnInit() {

        this.titleService.setSubTitle('Stream');

        this.isHandset$ = this.bo.observe([Breakpoints.Handset, Breakpoints.TabletPortrait])
                              .pipe(
                                  map(result => result.matches)
                              );
    }


    ngAfterViewInit(): void {

        this.updateStatement();

        window.onresize = this.updateStatement.bind(this);
    }


    ngOnDestroy(): void {

        this.pss.getStatement().next(new PlayerMetadata(true, null));

        window.onresize = null;
    }


    private updateStatement() {

        const self = this;

        setTimeout(() => {

            const pos = self.player.nativeElement.getBoundingClientRect();

            const offset = this.getOffset(self.player.nativeElement);

            self.pss
                .getStatement()
                .next(new PlayerMetadata(
                    true,
                    new ElementPosition(
                        offset.left,
                        offset.top,
                        pos.width,
                        pos.height
                    )
                ));
        }, 100);
    }


    private getOffset(el) {

        const rect = el.getBoundingClientRect();
        const scrollLeft = this.ss.scrollLeft;
        const scrollTop = this.ss.scrollTop;

        return {top: rect.top + scrollTop, left: rect.left + scrollLeft};
    }

}
