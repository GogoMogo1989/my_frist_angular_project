import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})


export class DirectoryComponent implements OnInit {


    ninjas = [
      {name: "Yoshi", belt: "black"},
      {name: "Berna", belt: "white"},
      {name: "Kovács", belt: "szuper-black"},
    ]

    constructor(){
     
    }


    ngOnInit() {
      
    }
}
