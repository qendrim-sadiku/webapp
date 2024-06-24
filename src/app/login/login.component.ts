// login.component.ts

import { Component, OnInit } from '@angular/core';
import { StateDataService } from '../state-data.service';

interface StateData {
  name: string;
  image: string;
  phoneCode: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
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
    // const selectedStateName = target?.value;
    // this.selectedState = this.states.find(state => state.name === selectedStateName) || null;
    console.log(selectedState);
    this.selectedState = selectedState;
  }
  

  resetSelection() {
    this.selectedState = null;
  }
}
