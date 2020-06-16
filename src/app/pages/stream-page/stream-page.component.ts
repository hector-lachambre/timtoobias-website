import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild, SecurityContext } from '@angular/core';
import { Observable } from 'rxjs';
import { ElementPosition } from '../../core/services/player-statement/element-position';
import { PlayerMetadata } from '../../core/services/player-statement/player-metadata';
import { PlayerStatementService } from '../../core/services/player-statement/player-statement.service';
import { ScrollService } from '../../core/services/scroll/scroll.service';
import { TitleService } from '../../core/services/title/title.service';
import { BreakpointService } from 'src/app/core/services/breakpoint/breakpoint.service';
import { environment } from 'src/environments/environment';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
    selector: 'app-stream-page',
    templateUrl: './stream-page.component.html',
    styleUrls: ['./stream-page.component.css']
})
export class StreamPageComponent implements OnInit, AfterViewInit, OnDestroy {

    public isHandset$: Observable<boolean>;
    public isXSmall$: Observable<boolean>;
    public isXSmall: boolean;
    public chatPopupUrl: string = `https://www.twitch.tv/embed/timtoobias/chat?darkpopout&parent=${environment.domain}`;


    @ViewChild('player', {static: true})
    public player: ElementRef;


    constructor(
        private bs: BreakpointService,
        private pss: PlayerStatementService,
        private ss: ScrollService,
        private titleService: TitleService,
        private sanitizer: DomSanitizer
    ) {
    }


    ngOnInit() {

        this.titleService.setSubTitle('Stream');

        this.isHandset$ = this.bs.isHandset$
        this.isXSmall$ = this.bs.isXSmall$

        this.isXSmall$.subscribe(b => this.isXSmall = b)
    }


    ngAfterViewInit(): void {

        this.updateStatement();

        window.onresize = this.updateStatement.bind(this);
    }


    ngOnDestroy(): void {

        this.pss.getStatement().next(new PlayerMetadata(true, null, this.isXSmall));

        window.onresize = null;
    }

    public getChatUrl() {
        return this.sanitizer.bypassSecurityTrustUrl(this.chatPopupUrl);
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
                    ),
                    this.isXSmall
                ));
        }, 100);
    }


    private getOffset(el) {

        const offsetTop = el.offsetTop
        const offsetLeft = el.offsetLeft

        return {top: offsetTop, left: offsetLeft};
    }

}
