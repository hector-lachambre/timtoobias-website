import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../core/services/title/title.service';


@Component({
    selector: 'app-support-page',
    templateUrl: './support-page.component.html',
    styleUrls: ['./support-page.component.css']
})
export class SupportPageComponent implements OnInit {

    constructor(private titleService: TitleService) {
    }


    ngOnInit() {

        this.titleService.setSubTitle('Me soutenir');
    }
}
