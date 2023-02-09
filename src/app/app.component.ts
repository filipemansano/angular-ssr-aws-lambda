import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  data$!: Observable<any[]>;

  constructor(
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.data$ = this.http.get<any[]>('https://api.publicapis.org/entries').pipe(
      map((data:any) => data.entries)
    );
  }
}
