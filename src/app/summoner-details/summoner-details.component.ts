import { Component, OnInit } from '@angular/core';
import { SummonerService } from '../services/summoner.service';

@Component({
  selector: 'app-summoner-details',
  templateUrl: './summoner-details.component.html',
  styleUrls: ['./summoner-details.component.scss']
})
export class SummonerDetailsComponent implements OnInit {


  summoner: any; 
  API_KEY="RGAPI-4dad0a1d-8bf7-4117-9bc7-7db42f27b0f0"; 

  constructor(
    private summonerService : SummonerService
  ) { }

  ngOnInit(): void {
    this.searchSummoner(); 
  }

  searchSummoner(){
    const name = "Tekninon"; 
    this.summonerService.getSummonerByName(name).subscribe((response) => {
      console.log(response);
      this.summoner = {
        name: response.name,
        level: response.level
      }; 
      
    })
  }

}
