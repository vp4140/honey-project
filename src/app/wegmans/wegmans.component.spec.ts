import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WegmansComponent } from './wegmans.component';

describe('WegmansComponent', () => {
  let component: WegmansComponent;
  let fixture: ComponentFixture<WegmansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WegmansComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WegmansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
