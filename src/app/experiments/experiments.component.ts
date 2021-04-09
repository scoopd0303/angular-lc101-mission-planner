import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {
   experiments: string[] = ['Moon soil sample', 'Plant growth in orbit', 'Human bone density changes', 'Water droplet podcast for grades K-5', 'Satellite launch'];
   missionAgenda: string[] = [];

   constructor() { }

   ngOnInit() { }

  addToAgenda(experiment: string) {
    if(this.missionAgenda.includes(experiment)) {
      this.missionAgenda.splice(this.missionAgenda.indexOf(experiment), 1);
    } else if(!this.missionAgenda.includes(experiment) && this.missionAgenda.length < 3){
      this.missionAgenda.push(experiment);
      console.log('hi');
    }
  }

}
