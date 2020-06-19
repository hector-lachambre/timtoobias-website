import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleDeuxCompletComponent } from './article-deux-complet.component';

describe('ArticleDeuxCompletComponent', () => {
  let component: ArticleDeuxCompletComponent;
  let fixture: ComponentFixture<ArticleDeuxCompletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleDeuxCompletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleDeuxCompletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
