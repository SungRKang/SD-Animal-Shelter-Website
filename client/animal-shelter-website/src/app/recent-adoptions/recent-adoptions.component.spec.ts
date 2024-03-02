import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentAdoptionsComponent } from './recent-adoptions.component';

describe('RecentAdoptionsComponent', () => {
  let component: RecentAdoptionsComponent;
  let fixture: ComponentFixture<RecentAdoptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentAdoptionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecentAdoptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
