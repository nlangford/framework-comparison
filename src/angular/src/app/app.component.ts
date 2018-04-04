import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private appService: AppService) {
    this.loadLists();
  }
  title = 'Angular Application';
  lists = [];

  loadLists() {
    this.appService.getLists().subscribe(data => {this.lists = data;});
  }
}
