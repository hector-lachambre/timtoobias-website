import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';


@Injectable()
export class TitleService {

    private baseTitle = 'Timtoobias |';


    private currentTitle;


    constructor(private title: Title) {
    }


    setSubTitle(value: string) {
        this.title.setTitle(`${ this.baseTitle } ${ value }`);
    }
}
