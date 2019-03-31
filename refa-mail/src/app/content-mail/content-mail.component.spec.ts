import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentMailComponent } from './content-mail.component';

describe('ContentMailComponent', () => {
  let component: ContentMailComponent;
  let fixture: ComponentFixture<ContentMailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentMailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
