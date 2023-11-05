import { Injectable } from '@angular/core';
import { HttpClient }  from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private getUrl = 'https://https://reqres.in/api/unknown/2'; 

  constructor( private http: HttpClient) { }

  getDate(){
    return this.http.get(this.getUrl)
  }
}
