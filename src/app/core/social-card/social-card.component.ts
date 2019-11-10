import { Component, OnInit, Input, HostBinding, ElementRef } from '@angular/core';
import { BreakpointService } from '../services/breakpoint/breakpoint.service';
import { element } from 'protractor';
import { SocialService } from '../services/social/social.service';

@Component({
  selector: 'app-social-card',
  templateUrl: './social-card.component.html',
  styleUrls: ['./social-card.component.css']
})
export class SocialCardComponent implements OnInit {

  @HostBinding('class.social-card--large') public bindLargeClass: boolean;

  @Input()
  public content: string;

  @Input()
  public icon: string;

  @Input()
  public btnBackground: string;

  @Input()
  public btnContent: string;

  @Input()
  public link: string;

  constructor(private bs: BreakpointService) { }

  ngOnInit() {

    this.bs.isHandset$.subscribe(b => this.bindLargeClass = !b)
  }

  reflect(e) {

    let element: HTMLElement = e.target

    let hl: HTMLElement = element.querySelector('.card-highlight')

    hl.classList.add('reflect')

    hl.addEventListener('animationend', () => hl.classList.remove('reflect'))
  }
}
