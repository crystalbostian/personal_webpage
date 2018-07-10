import { Component, OnInit } from '@angular/core';
import { selected } from '../crumbbar/crumbbar.component';
import { Constants } from '../constants';

@Component({
  selector: 'app-crystal',
  templateUrl: './crystal.component.html',
  styleUrls: ['./crystal.component.css']
})
export class CrystalComponent implements OnInit {
  selection: string = Constants.ABOUT;
  constructor() { }

  ngOnInit() { }

  onClick(){
    this.selection = selected;
  }
}
