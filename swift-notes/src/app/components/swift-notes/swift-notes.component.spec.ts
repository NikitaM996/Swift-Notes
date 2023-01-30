import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiftNotesComponent } from './swift-notes.component';

describe('SwiftNotesComponent', () => {
  let component: SwiftNotesComponent;
  let fixture: ComponentFixture<SwiftNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwiftNotesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwiftNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
