import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {   // This is the coordinates for where the map is centralised
  latitude = 54.2361;
  longitude = -4.5481;

  // polygonClick (event) {
  //   this.latitude= event.coords.lat;
  //   this.longitude = event.coords.lng;
  // }
}
