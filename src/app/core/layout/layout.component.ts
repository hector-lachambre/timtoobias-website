import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav, MatSidenavContent } from '@angular/material';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ScrollService } from '../services/scroll/scroll.service';
import { BreakpointService } from '../services/breakpoint/breakpoint.service';


@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

    @ViewChild('drawer', {static: false})
    public sidenav: MatSidenav;


    @ViewChild('content', {static: false})
    public content: MatSidenavContent;
    

    public scrollTop: number;


    public opened = false;


    public name = 'timtoobias';


    public isHandset$: Observable<boolean>;


    constructor(private bs: BreakpointService, public ss: ScrollService) {
    }

    ngOnInit() {
        this.isHandset$ = this.bs.isHandset$;
        window.addEventListener('scroll', () => this.scrollHandler())
    }

    public closeSidenav() {

        this.bs.isHandset$.subscribe(
            bool => {

                if (bool) {
                    this.sidenav.close();
                }
            });
    }


    public scrollHandler() {

        this.scrollTop = window.scrollY;

        this.ss.scrollTop = this.scrollTop;
    }
}
