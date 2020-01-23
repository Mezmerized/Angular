import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';


@Injectable()
export class HttpService {
    private rootUrl = 'https://swapi.co/api/';
    private peopleUrl = 'people/';
    private filmsUrl = 'films/';
    private planetsUrl = 'planets/';
    private speciesUrl = 'species/';
    private vehiclesUrl = 'vehicles/';
    private starshipsUrl = 'starships/';

    constructor (private httpClient: HttpClient) {}

    getPeople() {
        return this.httpClient.get(this.rootUrl + this.peopleUrl)
        }

    getFilms() {
        return this.httpClient.get(this.rootUrl + this.filmsUrl)
        }

    getPlanets() {
        return this.httpClient.get(this.rootUrl + this.planetsUrl)
        }
        
    getSpecies() {
        return this.httpClient.get(this.rootUrl + this.speciesUrl)
        }
    
    getVehicles() {
        return this.httpClient.get(this.rootUrl + this.vehiclesUrl)
        }

    getStarships() {
        return this.httpClient.get(this.rootUrl + this.starshipsUrl)
        }
    
    

}






