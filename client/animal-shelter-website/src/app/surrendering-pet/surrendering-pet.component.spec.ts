import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurrenderingPetComponent } from './surrendering-pet.component';

describe('SurrenderingPetComponent', () => {
  let component: SurrenderingPetComponent;
  let fixture: ComponentFixture<SurrenderingPetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SurrenderingPetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SurrenderingPetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
