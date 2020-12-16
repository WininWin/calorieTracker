import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FoodType, IFood, IFoodDataByDate, initData } from './cal-data.types';



@Injectable({
  providedIn: 'root'
})
export class CalDataService {
   
  private readonly localStorageKey = 'cal-tracker';

  private readonly foodType = {
    "F": FoodType.Fruit,
    "M": FoodType.Meat,
    "V": FoodType.Vegetable,
    "D": FoodType.Drink,
    "S": FoodType.Snack,
    "O": FoodType.Other,
  }

  private currentFoodData = this.foodDataArr.slice();
  private lastUpdatedDate: number;
  public foodDataSource = new BehaviorSubject<IFoodDataByDate[]>(this.currentFoodData);
  public foodData$ = this.foodDataSource.asObservable();
  
  constructor() { 
  }

  private updateLocalStorage(foodDataArr: IFoodDataByDate[]) {
    let currentData = this.changeFoodDataArrToString(foodDataArr);
    localStorage.setItem(this.localStorageKey, currentData);
  }

  private changeFoodDataArrToString(foodDataArr: IFoodDataByDate[]) {
    const foodDataToStr = foodDataArr.reduce((result, foodDataByArr, index) => {
      let currentCalData = foodDataByArr.lastThirtyDaysCalories.join(':');
      return `${result}${foodDataByArr.foodType}${currentCalData}${index !== foodDataArr.length-1 ? ';' : ''}`
    }, '');
    return `${this.currentDateAsSum}/${foodDataToStr}`;
  }

  private get foodDataArr(): IFoodDataByDate[] {
    const foodDataFromLocalStorage = localStorage.getItem(this.localStorageKey);

    const foodInitData = `${this.currentDateAsSum}/${initData}`;
    const foodDataArr = this.parseDataFromLocalStorage(foodDataFromLocalStorage || foodInitData);
    return foodDataArr;
  }

  private get currentDateAsSum(): number {
    const currentDate = new Date();
    const dateToSum = currentDate.getFullYear() + currentDate.getMonth() + currentDate.getDate();
    return dateToSum+1;
  }

  private parseDataFromLocalStorage(data: string): IFoodDataByDate[] {

    const dateAndFoodData = data.split('/');
    this.lastUpdatedDate = parseInt(dateAndFoodData[0]);
    const foodArrByDate = dateAndFoodData[1].split(';').map((item => {

      const currentFoodDate = {
        foodType: this.foodType[item.charAt(0)],
        lastThirtyDaysCalories: item.substring(1).split(':').map(foodCal => parseInt(foodCal))
      };

      if (this.currentDateAsSum !== this.lastUpdatedDate) {
        currentFoodDate.lastThirtyDaysCalories.push(0);
      }

      return currentFoodDate;
    }));

    return foodArrByDate;
  }

  public updateFoodData(food: IFood) {

    const hasFoodType = this.currentFoodData.some(item => item.foodType === food.foodType)

    const needUpdateForFoodType = hasFoodType ? this.currentFoodData.find(item => item.foodType === food.foodType) : {
      lastThirtyDaysCalories: [],
      foodType: food.foodType
    } as IFoodDataByDate;

    if (!hasFoodType) {
      this.currentFoodData.push(needUpdateForFoodType);
    }

    if (this.currentDateAsSum === this.lastUpdatedDate) {
      needUpdateForFoodType.lastThirtyDaysCalories[needUpdateForFoodType.lastThirtyDaysCalories.length-1] += food.calories;
    } else {
      this.lastUpdatedDate = this.currentDateAsSum;
      needUpdateForFoodType.lastThirtyDaysCalories.push(food.calories);
    }

    // maintain data of 30days
    this.currentFoodData.forEach(item => {
      if (item.lastThirtyDaysCalories.length > 30) {
        item.lastThirtyDaysCalories.shift();
      }
    })

    setTimeout(() => {
      this.updateLocalStorage(this.currentFoodData);
      this.foodDataSource.next(this.currentFoodData);
    }, 750);
  }



}
