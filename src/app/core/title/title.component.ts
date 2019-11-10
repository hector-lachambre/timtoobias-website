import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BreakpointService } from '../services/breakpoint/breakpoint.service';


@Component({
    selector: 'app-title',
    templateUrl: './title.component.html',
    styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

    @Input()
    public center: boolean = false;

    public isHandset$: Observable<boolean>;


    constructor(private bs: BreakpointService) {
    }


    ngOnInit() {

        this.isHandset$ = this.bs.isHandset$
    }

}
