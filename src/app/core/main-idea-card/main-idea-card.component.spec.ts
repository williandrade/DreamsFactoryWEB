import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainIdeaCardComponent } from './main-idea-card.component';

describe('MainIdeaCardComponent', () => {
  let component: MainIdeaCardComponent;
  let fixture: ComponentFixture<MainIdeaCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainIdeaCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainIdeaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
