import {Component, Input} from '@angular/core';

import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'confirm-modal',
  templateUrl: `./confirm-modal.component.html`
})
export class ConfirmModal {
  @Input() name;

  constructor(public activeModal: NgbActiveModal) {}
}