import { Component, OnInit } from '@angular/core';
import { Constants } from '../constants';

export var selected: string = Constants.ABOUT;

@Component({
  selector: 'app-crumbbar',
  templateUrl: './crumbbar.component.html',
  styleUrls: ['./crumbbar.component.css']
})
export class CrumbbarComponent implements OnInit {
  names: string[] = [Constants.ABOUT, Constants.PROJECTS, Constants.CONTACT];
  selectedOne: string = Constants.ABOUT;

  constructor() { }

  ngOnInit() { 
  }

  onSelectionChange(selection: string): void{
    selected = selection;
    this.selectedOne = selection;
  }
}
