import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetThriftyComponent } from './get-thrifty.component';

describe('GetThriftyComponent', () => {
  let component: GetThriftyComponent;
  let fixture: ComponentFixture<GetThriftyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetThriftyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetThriftyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
