import { Component } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app, woop wopp';
  name='ninja';
  ninja ={
    name: "ryu",
    belt: "red"
  }

  yell(e: any){
    alert("i am yelling")
    console.log(e)
  }
}
