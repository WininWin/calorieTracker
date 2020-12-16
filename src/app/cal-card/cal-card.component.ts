import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CalDataService } from '../cal-data.service';
import { DateType, FoodType, FoodTypeColor, FoodTypeName, IFood, IFoodDataByDate } from '../cal-data.types';
import { map } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cal-card',
  templateUrl: './cal-card.component.html',
  styleUrls: ['./cal-card.component.scss']
})
export class CalCardComponent implements OnInit {

  @Input() public dateType: DateType;

  public cardTitle: string;
  public cardSubTitle: string;

  public foodDataArr$: Observable<IFood[]>;

  public foodTypeName = Object.values(FoodTypeName);

  public caloriesForm: FormGroup;
  public isLoading = false;

  public caloriesData = [];

  constructor(
    private calDataService: CalDataService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.caloriesForm = this.formBuilder.group({
      typeName: [null, [Validators.required]],
      calories: [null, Validators.required]
    });
    switch(this.dateType) {
      case DateType.Daily:
        this.cardTitle = DateType.Daily;
        this.cardSubTitle = `${DateType.Daily} average of calories`;
        this.foodDataArr$ = this.calDataService.foodData$.pipe(
          map((foodDataArr: IFoodDataByDate[]) => {
            const dailyFoodDataArr = foodDataArr.map((foodData) => {
              const calories =foodData.lastThirtyDaysCalories[foodData.lastThirtyDaysCalories.length-1] ?? 0;
              this.caloriesData.push(calories);
              return {
                foodType: foodData.foodType,
                typeName: FoodTypeName[foodData.foodType],
                typeColor: FoodTypeColor[foodData.foodType],
                calories: foodData.lastThirtyDaysCalories[foodData.lastThirtyDaysCalories.length-1] ?? 0
              } as IFood;
            });
            this.isLoading = false;
            return dailyFoodDataArr;
          })
        );
        break;
      case DateType.Weekly:
        this.cardTitle = DateType.Weekly;
        this.cardSubTitle = `${DateType.Weekly} average of calories`;
        this.foodDataArr$ = this.calDataService.foodData$.pipe(
          map((foodDataArr: IFoodDataByDate[]) => {
            const weeklyFoodDataArr = foodDataArr.map((foodData) => {
              const lastSevenDaysCalories= foodData.lastThirtyDaysCalories.slice(-7);
              const daysCount = lastSevenDaysCalories.length || 1;
              const caloriesSum = lastSevenDaysCalories.reduce(((prev, curr) => prev + curr), 0);
              const calories = Math.round(caloriesSum / daysCount);
              this.caloriesData.push(calories);
              return {
                foodType: foodData.foodType,
                typeName: FoodTypeName[foodData.foodType],
                typeColor: FoodTypeColor[foodData.foodType],
                calories
              } as IFood;
            });
            this.isLoading = false;
            return weeklyFoodDataArr;
          })
        );
        break;
      case DateType.Monthly:
        this.cardTitle = DateType.Monthly;
        this.cardSubTitle = `${DateType.Monthly} average of calories`;
        this.foodDataArr$ = this.calDataService.foodData$.pipe(
          map((foodDataArr: IFoodDataByDate[]) => {
            const monthlyFoodDataArr = foodDataArr.map((foodData) => {
              const caloriesSum = foodData.lastThirtyDaysCalories.reduce(((prev, curr) => prev + curr), 0);
              const daysCount = foodData.lastThirtyDaysCalories.length || 1;
              const calories = Math.round(caloriesSum / daysCount);
              this.caloriesData.push(calories);
              return {
                foodType: foodData.foodType,
                typeName: FoodTypeName[foodData.foodType],
                typeColor: FoodTypeColor[foodData.foodType],
                calories
              } as IFood;
            });
            this.isLoading = false;
            return monthlyFoodDataArr;
          })
        );
        break;
    }
  }

  submit() {
    if (!this.caloriesForm.valid) {
      return;
    }
    const food: IFood = this.caloriesForm.value;
    this.isLoading = true;
    this.calDataService.updateFoodData({
      calories: food.calories,
      foodType: FoodType[food.typeName]
    });
  }
}
