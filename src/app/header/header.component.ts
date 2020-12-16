import { Component, OnInit } from '@angular/core';
import { FoodType, FoodTypeColor, FoodTypeName } from '../cal-data.types';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public foodTypeWithColor = [
    {
      name: FoodTypeName[FoodType.Fruit],
      color: FoodTypeColor[FoodType.Fruit]
    },
    {
      name: FoodTypeName[FoodType.Meat],
      color: FoodTypeColor[FoodType.Meat],
    },
    {
      name: FoodTypeName[FoodType.Vegetable],
      color: FoodTypeColor[FoodType.Vegetable],
    },
    {
      name: FoodTypeName[FoodType.Drink],
      color: FoodTypeColor[FoodType.Drink],
    },
    {
      name: FoodTypeName[FoodType.Snack],
      color: FoodTypeColor[FoodType.Snack],
    },
    {
      name: FoodTypeName[FoodType.Other],
      color: FoodTypeColor[FoodType.Other],
    },
  ];

  public currentDate: string;

  constructor() { }

  ngOnInit() {
    const today = new Date();
    this.currentDate = `${today.getFullYear()}/${today.getMonth()+1}/${today.getDate()}`;
  }

}
