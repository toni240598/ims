import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CeoDashboardComponent } from './ceo-dashboard.component';

describe('CeoDashboardComponent', () => {
  let component: CeoDashboardComponent;
  let fixture: ComponentFixture<CeoDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeoDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CeoDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
