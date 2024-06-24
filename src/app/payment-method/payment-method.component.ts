import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BottomModalComponent } from '../components/bottom-modal/bottom-modal.component';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrl: './payment-method.component.scss'
})
export class PaymentMethodComponent {

  constructor(private modalService: NgbModal) {}

  openBottomModal() {
    this.modalService.open(BottomModalComponent, { windowClass: 'bottom-modal' });
  }

}

