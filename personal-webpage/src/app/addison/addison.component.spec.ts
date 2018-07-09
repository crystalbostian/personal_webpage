import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddisonComponent } from './addison.component';

describe('AddisonComponent', () => {
  let component: AddisonComponent;
  let fixture: ComponentFixture<AddisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
