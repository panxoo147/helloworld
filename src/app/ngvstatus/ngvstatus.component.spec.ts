import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgvstatusComponent } from './ngvstatus.component';

describe('NgvstatusComponent', () => {
  let component: NgvstatusComponent;
  let fixture: ComponentFixture<NgvstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgvstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgvstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
