// src/app/components/bottom-modal/bottom-modal.component.ts
import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-bottom-modal',
  templateUrl: './bottom-modal.component.html',
  styleUrls: ['./bottom-modal.component.scss']
})
export class BottomModalComponent {
  constructor(public activeModal: NgbActiveModal) {}
}
