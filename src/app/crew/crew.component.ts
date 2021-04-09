import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  inCrew: boolean = false;
  crew: object[] = [];

  candidates: object[] = [
    {name: "Sally Ride", favoriteColor: 'purple', photo: 'https://handlers.education.launchcode.org/static/images/sally-ride.jpg'},
    {name: "Mae Jemison", favoriteColor: 'orange', photo: 'https://handlers.education.launchcode.org/static/images/mae-jemison.jpg'},
    {name: "Ellen Ochoa", favoriteColor: 'ochre', photo: 'https://handlers.education.launchcode.org/static/images/ellen-ochoa.jpg'},
    {name: "Frederick Gregory", favoriteColor: 'sea green', photo: 'https://handlers.education.launchcode.org/static/images/frederick-gregory.jpg'},
    {name: "Guion Bluford", favoriteColor: 'mauve', photo: 'https://handlers.education.launchcode.org/static/images/guion-bluford.jpg'},
    {name: "Kjell Lindgren", favoriteColor: 'blue', photo: 'https://handlers.education.launchcode.org/static/images/kjell-lindgren.jpg'},
    {name: "Jeanette Epps", favoriteColor: 'aqua', photo: 'https://handlers.education.launchcode.org/static/images/jeanette-epps.jpg'}
  ];

  constructor() { }

  ngOnInit() { }

  // Code the 'addCrewMember' function here:
  addCrewMember(astronaut: object) {
    if (this.crew.includes(astronaut)) { 
      this.inCrew = true;
    } else {
      this.inCrew = false;
    }
    if (this.inCrew === true) {
      this.crew.splice(this.crew.indexOf(astronaut), 1);
    } else if (this.inCrew === false && this.crew.length < 3) {
      this.crew.push(astronaut);
    } 
  }

}
