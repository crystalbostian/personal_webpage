import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsCrystalComponent } from './projects-crystal.component';

describe('ProjectsCrystalComponent', () => {
  let component: ProjectsCrystalComponent;
  let fixture: ComponentFixture<ProjectsCrystalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsCrystalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsCrystalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
