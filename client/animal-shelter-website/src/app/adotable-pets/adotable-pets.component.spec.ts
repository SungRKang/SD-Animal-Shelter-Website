import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdotablePetsComponent } from './adotable-pets.component';

describe('AdotablePetsComponent', () => {
  let component: AdotablePetsComponent;
  let fixture: ComponentFixture<AdotablePetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdotablePetsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdotablePetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
