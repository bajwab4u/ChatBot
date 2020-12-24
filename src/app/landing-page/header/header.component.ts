import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { slideInLeft } from 'ng-animate';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('slideInLeft', [transition('* => *', useAnimation(slideInLeft))])
  ]
})
export class HeaderComponent implements OnInit {
  slideInLeft:any;
  title:string="Sales Managment System"
  constructor() { }

  ngOnInit(): void {
  }

}
