import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonCharacterComponent } from './button-character.component';

describe('ButtonCharacterComponent', () => {
  let component: ButtonCharacterComponent;
  let fixture: ComponentFixture<ButtonCharacterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonCharacterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
