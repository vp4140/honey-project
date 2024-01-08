import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JazzFestivalComponent } from './jazz-festival.component';

describe('JazzFestivalComponent', () => {
  let component: JazzFestivalComponent;
  let fixture: ComponentFixture<JazzFestivalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JazzFestivalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JazzFestivalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
