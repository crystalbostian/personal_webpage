import { Component, OnInit } from '@angular/core';
import { Constants } from '../constants';

@Component({
  selector: 'app-crumbbar',
  templateUrl: './crumbbar.component.html',
  styleUrls: ['./crumbbar.component.css']
})
export class CrumbbarComponent implements OnInit {
  selected: string = Constants.ABOUT;
  names: string[] = [Constants.HOMEPAGE, Constants.ABOUT, Constants.PROJECTS, Constants.CONTACT];

  constructor() { }

  ngOnInit() {
  }

  onSelectionChange(selection: string): void{
    this.selected = selection;
  }
}
