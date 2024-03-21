import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavBarComponent } from './nav-bar.component';
import { AdoptablePetsComponent } from '../adoptable-pets/adoptable-pets.component';

describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavBarComponent] // Updated from imports to declarations
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('AdoptablePetsComponent', () => {
  let component: AdoptablePetsComponent;
  let fixture: ComponentFixture<AdoptablePetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdoptablePetsComponent] // Updated from imports to declarations
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdoptablePetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
