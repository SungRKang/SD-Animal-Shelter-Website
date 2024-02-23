import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherRescuesComponent } from './other-rescues.component';

describe('OtherRescuesComponent', () => {
  let component: OtherRescuesComponent;
  let fixture: ComponentFixture<OtherRescuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtherRescuesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OtherRescuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
