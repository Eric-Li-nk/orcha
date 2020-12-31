import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrchaComponent } from './orcha.component';

describe('OrchaComponent', () => {
  let component: OrchaComponent;
  let fixture: ComponentFixture<OrchaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrchaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrchaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
