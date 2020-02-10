import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  cidade_id: string;
  weathers: any;

  constructor(private apiService: ApiService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.cidade_id = params.get('id');
    })
   }

  ngOnInit(): void {
    this.apiService.getWeather(this.cidade_id).subscribe(
      (data) => {
        this.weathers = data;
        this.weathers = this.weathers.dataList;
      }
    )
  }

}
