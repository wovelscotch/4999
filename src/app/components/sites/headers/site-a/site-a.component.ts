import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-site-a',
  templateUrl: './site-a.component.html',
  styleUrls: ['./site-a.component.css']
})
export class SiteAComponent implements OnInit {

  title: string = 'CarParts.com';
  tag: string = "Get Your Car Parts Here!"
  constructor() { }

  ngOnInit() {
  }

}
