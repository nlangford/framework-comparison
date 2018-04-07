import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditModal } from './edit-modal.component';

describe('ModalComponent', () => {
  let component: EditModal;
  let fixture: ComponentFixture<EditModal>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditModal ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
