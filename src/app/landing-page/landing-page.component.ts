import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation, animate } from '@angular/animations';
import { bounce } from 'ng-animate';
import { Router } from '@angular/router';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  animations: [
    trigger('bounce', [transition('* => *', useAnimation(bounce))])
 ],
})
export class LandingPageComponent  {
  bounce:any;
 
  constructor(private router: Router) { }
  onClick(){
    this.router.navigate(['home']);
  }
  

}
