import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageHumanComponent } from './manage-human.component';

describe('ManageHumanComponent', () => {
  let component: ManageHumanComponent;
  let fixture: ComponentFixture<ManageHumanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageHumanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageHumanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
