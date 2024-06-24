// state-data.service.ts

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

export interface StateData {
  name: string;
  phoneCode: string;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class StateDataService {
  private stateDataUrl = '../state-data.json'; // Adjust path as per your project structure

  constructor(private http: HttpClient) {}

  getStateData(): Observable<StateData[]> {
    return this.http.get<{ [key: string]: StateData }>(this.stateDataUrl).pipe(
      map((data: { [key: string]: StateData }) => {
        return Object.keys(data).map(key => data[key]);
      })
    );
  }
}
