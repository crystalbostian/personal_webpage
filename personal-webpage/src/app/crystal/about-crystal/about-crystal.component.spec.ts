import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutCrystalComponent } from './about-crystal.component';

describe('AboutCrystalComponent', () => {
  let component: AboutCrystalComponent;
  let fixture: ComponentFixture<AboutCrystalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutCrystalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutCrystalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
