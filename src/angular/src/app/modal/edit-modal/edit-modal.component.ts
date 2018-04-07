import {Component, Input} from '@angular/core';

import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'edit-modal',
  templateUrl: `./edit-modal.component.html`
})
export class EditModal {
  @Input() name;

  constructor(public activeModal: NgbActiveModal) {}
}