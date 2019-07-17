import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav, MatSidenavContent } from '@angular/material';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ScrollService } from '../services/scroll/scroll.service';


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


    public isHandset$: Observable<boolean>;


    public scrollTop: number;


    public opened = false;


    public name = 'timtoobias';


    constructor(private bo: BreakpointObserver, public ss: ScrollService) {
    }


    ngOnInit() {

        this.isHandset$ = this.bo.observe([Breakpoints.Handset, Breakpoints.TabletPortrait])
                              .pipe(
                                  map(result => result.matches)
                              );
    }


    public closeSidenav() {

        this.isHandset$.subscribe(
            bool => {

                if (bool) {
                    this.sidenav.close();
                }
            });
    }


    public scrollHandler(e: Event) {

        this.scrollTop = this.content.getElementRef().nativeElement.scrollTop;

        this.ss.scrollTop = this.scrollTop;
    }
}
