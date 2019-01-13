import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsHeaderComponent } from './analytics-header.component';

describe('AnalyticsHeaderComponent', () => {
  let component: AnalyticsHeaderComponent;
  let fixture: ComponentFixture<AnalyticsHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyticsHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
