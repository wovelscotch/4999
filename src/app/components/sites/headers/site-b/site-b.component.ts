import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-site-b',
  templateUrl: './site-b.component.html',
  styleUrls: ['./site-b.component.css']
})
export class SiteBComponent implements OnInit {
  title: string = 'Emailer.co.uk';
  tag: string = "Your friendly neighborhood email service..."
  constructor() { }

  ngOnInit() {
  }

}
