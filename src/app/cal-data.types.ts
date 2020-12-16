export enum FoodType {
    Fruit = "F",
    Meat = "M",
    Vegetable = "V",
    Drink = "D",
    Snack = "S",
    Other = "O",
}

export const FoodTypeName = {
    'F': 'Fruit',
    'M': 'Meat',
    'V': 'Vegetable',
    'D': 'Drink',
    'S': 'Snack',
    'O': 'Other'
}

export const FoodTypeColor = {
    'F': 'ct-fruit-color',
    'M': 'ct-meat-color',
    'V': 'ct-vegetable-color',
    'D': 'ct-drink-color',
    'S': 'ct-snack-color',
    'O': 'ct-other-color'
}

export const ChartColorTheme = [
    '#FF4081',
    '#FF5252',
    '#e91e63',
    '#ffab40',
    '#f48fb1',
    '#ef9a9a'
];

export enum DateType {
    Daily = 'Daily',
    Weekly = 'Weekly',
    Monthly = 'Monthly',
}

export interface IFood {
    name?: string;
    typeName?: string;
    calories: number;
    foodType: FoodType;
    typeColor?: string;
}



export interface IFoodDataByDate {
    foodType: FoodType;
    lastThirtyDaysCalories: number[];
}

export const sampleDataForamt = '2054/F300:300:300:300:300;M300:300:300:300:300;V300:300:300:300:300;D300:300:300:300:300;S300:300:300:300:300;O300:300:300:300:300';

export const initData = 'F0;M0;V0;D0;S0;O0';