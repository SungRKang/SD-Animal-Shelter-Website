import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<<< HEAD:client/animal-shelter-website/src/app/nav-bar/nav-bar.component.spec.ts
import { NavBarComponent } from './nav-bar.component';

describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavBarComponent);
========
import { AdoptablePetsComponent } from './adoptable-pets.component';

describe('AdoptablePetsComponent', () => {
  let component: AdoptablePetsComponent;
  let fixture: ComponentFixture<AdoptablePetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdoptablePetsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdoptablePetsComponent);
>>>>>>>> d37220d (fixed spelling and created the extra components):client/animal-shelter-website/src/app/adoptable-pets/adoptable-pets.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
