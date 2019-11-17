import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-site-c',
  templateUrl: './site-c.component.html',
  styleUrls: ['./site-c.component.css']
})
export class SiteCComponent implements OnInit {

  title: string = 'The Media Socializer';
  tag: string = "~Tell your friends what's going on~"
  constructor() { }

  ngOnInit() {
  }

}
