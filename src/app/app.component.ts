import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  tiles = [
    {text: '1', cols: 3, rows: 1, color: 'lightblue'},
  ];

  private addGridItem(): void {
    this.tiles.push({text: 'adding', cols: 3, rows: 1, color: 'lightblue'});
  }
}
