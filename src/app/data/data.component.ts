import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent  implements OnInit {
  apiData:any;
  constructor(private apiService: ApiService){}

  ngOnInit() {
    this.apiService.getDate().subscribe((res: any) => {
      this.apiData = res.data
      console.log(this.apiData);
    });
  }
    
  }


