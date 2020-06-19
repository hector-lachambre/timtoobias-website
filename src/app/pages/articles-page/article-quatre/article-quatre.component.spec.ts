import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleQuatreComponent } from './article-quatre.component';

describe('ArticleQuatreComponent', () => {
  let component: ArticleQuatreComponent;
  let fixture: ComponentFixture<ArticleQuatreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleQuatreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleQuatreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
