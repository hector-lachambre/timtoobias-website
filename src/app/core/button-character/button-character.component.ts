import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button-character',
  templateUrl: './button-character.component.html',
  styleUrls: ['./button-character.component.css']
})
export class ButtonCharacterComponent implements OnInit {

  @Input() link: string;
  @Input() content: string;
  @Input() image: string;
  @Input() reverse: boolean;
  @Input() color: string = 'var(--primary-color)';

  constructor() { }

  ngOnInit() {
  }

}
