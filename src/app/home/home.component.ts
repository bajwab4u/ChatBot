import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  bikes=[{
    title:'Harley Davidson',
    model:'2006',
    img:'../../../assets/Landing Page/1.png'
  },{
    title:'Dirt Bike',
    model:'2009',
    img:'../../../assets/Landing Page/2.png'
  },{
    title:'Heavy Bike',
    model:'2011',
    img:'../../../assets/Landing Page/3.png'
  },{
    title:'Heavy Bike',
    model:'2014',
    img:'../../../assets/Landing Page/4.png'
  }]
  constructor() { }

  ngOnInit(): void {
  }

}
