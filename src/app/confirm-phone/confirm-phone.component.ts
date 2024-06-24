import { Component } from '@angular/core';
import { StateDataService } from '../state-data.service';


interface StateData {
  name: string;
  image: string;
  phoneCode: string;
}

@Component({
  selector: 'app-confirm-phone',

  templateUrl: './confirm-phone.component.html',
  styleUrl: './confirm-phone.component.scss'
})
export class ConfirmPhoneComponent {
  selectedState: StateData | null = null;
  states: StateData[] = [];
  phoneNumber: string = ''; // Add phoneNumber property

  constructor(private stateDataService: StateDataService) {}

  ngOnInit() {
    this.stateDataService.getStateData().subscribe(data => {
      this.states = data;
      
    });
  }

  onSelectState(event: any,selectedState: StateData | null) {
    const target = event.target as HTMLSelectElement;
    this.selectedState = selectedState;
  }
  

  resetSelection() {
    this.selectedState = null;
  }

}
