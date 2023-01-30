import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSwiftNoteComponent } from './edit-swift-note.component';

describe('EditSwiftNoteComponent', () => {
  let component: EditSwiftNoteComponent;
  let fixture: ComponentFixture<EditSwiftNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSwiftNoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditSwiftNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
