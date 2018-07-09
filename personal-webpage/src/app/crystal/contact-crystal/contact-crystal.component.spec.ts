import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactCrystalComponent } from './contact-crystal.component';

describe('ContactCrystalComponent', () => {
  let component: ContactCrystalComponent;
  let fixture: ComponentFixture<ContactCrystalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactCrystalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactCrystalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
