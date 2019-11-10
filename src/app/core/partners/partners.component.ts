import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BreakpointService } from '../services/breakpoint/breakpoint.service';


@Component({
    selector: 'app-partners',
    templateUrl: './partners.component.html',
    styleUrls: ['./partners.component.css']
})
export class PartnersComponent implements OnInit {

    public isHandset$: Observable<boolean>;


    constructor(private bs: BreakpointService) {
    }


    ngOnInit() {

        this.isHandset$ = this.bs.isHandset$
    }

}
