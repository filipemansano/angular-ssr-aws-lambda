import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  id!: string;
  constructor(
    private route:ActivatedRoute,
    private titleService:Title
  ){
    this.id = route.snapshot.paramMap.get('id')!;
    this.titleService.setTitle(`Page -> ${this.id}`);
  }
}
