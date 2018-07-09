import { Component, OnInit } from '@angular/core';
import { CrumbbarComponent } from '../crumbbar/crumbbar.component';

@Component({
  selector: 'app-crystal',
  templateUrl: './crystal.component.html',
  styleUrls: ['./crystal.component.css']
})
export class CrystalComponent implements OnInit {
  selected = "crystal";
  constructor() { }

  ngOnInit() { }
}
