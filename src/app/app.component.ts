import { Component } from '@angular/core';
declare const google: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {   // This is the coordinates for where the map is centralised

  latitude = 54.2361;
  longitude = -4.5481;

  onMapReady(map) {
    this.initDrawingManager(map);
  }

  initDrawingManager(map: any) {
    const options = {
      drawingControl: true,
      drawingControlOptions: {
        drawingModes: ["polygon"]
      },
      polygonOptions: {
        draggable: true,
        editable: true
      },
      drawingMode: google.maps.drawing.OverlayType.POLYGON
    };

    const drawingManager = new google.maps.drawing.DrawingManager(options);
    drawingManager.setMap(map);
  }

  markers: marker[] =  [
    {
      name:'London',
      lat: 51.23945,
      lng: -0.57591,
      draggable: true
    },
    {
    name:'Birmingham',
    lat: 52.4862,
    lng: -1.8904,
    draggable: true
    }
  ];
  constructor(){

  }
}

  interface marker{
    name?: string;
    lat: number;
    lng: number;
    draggable: boolean;
  }
