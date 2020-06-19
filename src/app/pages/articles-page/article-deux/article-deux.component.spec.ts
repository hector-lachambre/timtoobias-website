import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleDeuxComponent } from './article-deux.component';

describe('ArticleDeuxComponent', () => {
  let component: ArticleDeuxComponent;
  let fixture: ComponentFixture<ArticleDeuxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleDeuxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleDeuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
