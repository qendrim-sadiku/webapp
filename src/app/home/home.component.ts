import { Component } from '@angular/core';
import { coaches } from '../../coach-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  isOverlayVisible: boolean = false;

  coaches = coaches;
  filteredCoaches = coaches;
  searchQuery: string = '';

  filterCoaches(event: Event) {
    const input = event.target as HTMLInputElement;
    const query = input.value;

    this.searchQuery = query;
    if (query.length > 0) {
      this.filteredCoaches = this.coaches.filter(coach =>
        coach.title.toLowerCase().includes(query.toLowerCase()) ||
        coach.content.toLowerCase().includes(query.toLowerCase())
      );
    } else {
      this.filteredCoaches = [];
    }
  }

  showOverlay() {
    this.isOverlayVisible = true;
  }

  hideOverlay() {
    this.isOverlayVisible = false;
  }
}
