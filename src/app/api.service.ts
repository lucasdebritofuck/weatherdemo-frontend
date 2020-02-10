import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  URL_API = 'http://localhost:8080/'

  constructor(private httpClient: HttpClient) { }

  public getCidades() {
    return this.httpClient.get(this.URL_API + "cidade/");
  }

  public getWeather(cidade_id: string) {
    return this.httpClient.get(this.URL_API + "weather/" + cidade_id);
  }

  public insertCidade(params: any) {
    return this.httpClient.post(this.URL_API + "cidade", params, { headers : new HttpHeaders({ 'Content-Type': 'application/json' })});
  }


}
