import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuentryComponent } from './quentry.component';

describe('QuentryComponent', () => {
  let component: QuentryComponent;
  let fixture: ComponentFixture<QuentryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuentryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
