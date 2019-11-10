import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class BreakpointService {

  public isHandset$: Observable<boolean>;

  public isXSmall$: Observable<boolean>;

  constructor(private bo: BreakpointObserver) {

    this.isHandset$ = this.bo.observe([Breakpoints.Handset, Breakpoints.TabletPortrait])
    .pipe(
        map(result => result.matches)
    );  

    this.isXSmall$ = this.bo.observe([Breakpoints.XSmall])
    .pipe(
        map(result => result.matches)
    );  
  }
}
