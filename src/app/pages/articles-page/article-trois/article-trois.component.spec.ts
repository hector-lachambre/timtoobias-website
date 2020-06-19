import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleTroisComponent } from './article-trois.component';

describe('ArticleTroisComponent', () => {
  let component: ArticleTroisComponent;
  let fixture: ComponentFixture<ArticleTroisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleTroisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleTroisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
