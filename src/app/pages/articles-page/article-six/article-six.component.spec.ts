import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleSixComponent } from './article-six.component';

describe('ArticleSixComponent', () => {
  let component: ArticleSixComponent;
  let fixture: ComponentFixture<ArticleSixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleSixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
