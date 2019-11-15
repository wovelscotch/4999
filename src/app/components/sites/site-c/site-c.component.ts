import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-site-c',
  templateUrl: './site-c.component.html',
  styleUrls: ['./site-c.component.css']
})
export class SiteCComponent implements OnInit {

  title: string = 'Site C';
  constructor() { }

  ngOnInit() {
  }

}
