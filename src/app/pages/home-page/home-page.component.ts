import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TitleService } from '../../core/services/title/title.service';
import { BreakpointService } from 'src/app/core/services/breakpoint/breakpoint.service';


@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

    public isHandset$: Observable<boolean>;


    constructor(private bs: BreakpointService, private titleService: TitleService) {
    }


    ngOnInit() {

        this.titleService.setSubTitle('Accueil');

        this.isHandset$ = this.bs.isHandset$;
    }

}
