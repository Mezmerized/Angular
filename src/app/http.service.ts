import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable()
export class HttpService {
    constructor (private httpClient: HttpClient) {}

    getPeople() {
        return this.httpClient.get('https://swapi.co/api/people/')
        }

    getFilms() {
        return this.httpClient.get('https://swapi.co/api/films/')
        }

    getPlanets() {
        return this.httpClient.get('https://swapi.co/api/planets/')
        }
        
    getSpecies() {
        return this.httpClient.get('https://swapi.co/api/species/')
        }

}






