import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AoboutComponent } from './aobout.component';

describe('AoboutComponent', () => {
  let component: AoboutComponent;
  let fixture: ComponentFixture<AoboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AoboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AoboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
