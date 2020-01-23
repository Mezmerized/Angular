import { Component } from '@angular/core';
import { HttpService } from './http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HttpService]
})
export class AppComponent {
  people: any = [];
  films: any = [];
  planets: any [];
  species: any [];
  vehicles: any [];
  starships: any [];


  constructor(private httpService: HttpService) {}

  onGetPeople() {
    this.httpService.getPeople()
        .subscribe(
       data => {console.log(data);
       // this.people = data;
       })
  }

  onGetFilms() {
    this.httpService.getFilms()
        .subscribe(
       data => {console.log(data);
       // this.films = data;
       })
  }

  onGetPlanets() {
    this.httpService.getPlanets()
        .subscribe(
       data => {console.log(data);
       // this.planets = data;
       })
  }

  onGetSpecies() {
    this.httpService.getSpecies()
        .subscribe(
       data => {console.log(data);
       // this.species = data;
       })
  }

  onGetVehicles() {
    this.httpService.getVehicles()
        .subscribe(
       data => {console.log(data);
       // this.vehicles = data;
       })
  }

  onGetStarships() {
    this.httpService.getStarships()
        .subscribe(
       data => {console.log(data);
       // this.starships = data;
       })
  }
}
