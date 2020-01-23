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
}
