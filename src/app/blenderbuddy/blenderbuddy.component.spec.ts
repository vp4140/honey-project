import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlenderbuddyComponent } from './blenderbuddy.component';

describe('BlenderbuddyComponent', () => {
  let component: BlenderbuddyComponent;
  let fixture: ComponentFixture<BlenderbuddyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlenderbuddyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlenderbuddyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
