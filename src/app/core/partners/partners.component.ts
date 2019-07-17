import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
    selector: 'app-partners',
    templateUrl: './partners.component.html',
    styleUrls: ['./partners.component.css']
})
export class PartnersComponent implements OnInit {

    public isHandset$: Observable<boolean>;


    constructor(private bo: BreakpointObserver) {
    }


    ngOnInit() {

        this.isHandset$ = this.bo.observe([Breakpoints.Handset, Breakpoints.TabletPortrait])
                              .pipe(
                                  map(result => result.matches)
                              );
    }

}
