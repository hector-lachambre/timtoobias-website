import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleCinqComponent } from './article-cinq.component';

describe('ArticleCinqComponent', () => {
  let component: ArticleCinqComponent;
  let fixture: ComponentFixture<ArticleCinqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleCinqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleCinqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
