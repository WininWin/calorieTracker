import { Component, OnInit } from '@angular/core';
import { DateType } from '../cal-data.types';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit {

  public dateType = DateType;

  constructor() { }

  ngOnInit() {

  }

}
