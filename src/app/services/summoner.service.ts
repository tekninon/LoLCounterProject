import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SummonerService {
  //URL = `http://localhost:4200/api/`;

  URL = `https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/`;
  API_KEY = "RGAPI-4dad0a1d-8bf7-4117-9bc7-7db42f27b0f0"; 
  constructor(private http: HttpClient ) { }

  getSummonerByName(name: string): Observable<any> {
    return this.http.get<any>(`${this.URL}${name}?api_key=${this.API_KEY}`); 
  }
}
