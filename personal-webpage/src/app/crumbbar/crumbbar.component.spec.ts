import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrumbbarComponent } from './crumbbar.component';

describe('CrumbbarComponent', () => {
  let component: CrumbbarComponent;
  let fixture: ComponentFixture<CrumbbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrumbbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrumbbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
