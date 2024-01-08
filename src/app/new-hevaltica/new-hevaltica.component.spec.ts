import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewHevalticaComponent } from './new-hevaltica.component';

describe('NewHevalticaComponent', () => {
  let component: NewHevalticaComponent;
  let fixture: ComponentFixture<NewHevalticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewHevalticaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewHevalticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
