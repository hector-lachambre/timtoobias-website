import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
    selector: 'app-title',
    templateUrl: './title.component.html',
    styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

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
