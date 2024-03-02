import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailablePetsComponent } from './available-pets.component';

describe('AvailablePetsComponent', () => {
  let component: AvailablePetsComponent;
  let fixture: ComponentFixture<AvailablePetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvailablePetsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AvailablePetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailablePetsComponent } from './available-pets.component';

describe('AvailablePetsComponent', () => {
  let component: AvailablePetsComponent;
  let fixture: ComponentFixture<AvailablePetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvailablePetsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AvailablePetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
