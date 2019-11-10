import { Component, Input, OnInit } from '@angular/core';


@Component({
    selector: 'app-section',
    templateUrl: './section.component.html',
    styleUrls: ['./section.component.css']
})
export class SectionComponent {

    @Input()
    public paddingVertical = '0px';

    constructor() {
    }
}
