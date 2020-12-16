(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\Yeonsung Kim\Desktop\calTracker\calorieTracker\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "5ZAU":
    /*!***********************************!*\
      !*** ./src/app/cal-data.types.ts ***!
      \***********************************/

    /*! exports provided: FoodType, FoodTypeName, FoodTypeColor, ChartColorTheme, DateType, sampleDataForamt, initData */

    /***/
    function ZAU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FoodType", function () {
        return FoodType;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FoodTypeName", function () {
        return FoodTypeName;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FoodTypeColor", function () {
        return FoodTypeColor;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChartColorTheme", function () {
        return ChartColorTheme;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DateType", function () {
        return DateType;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "sampleDataForamt", function () {
        return sampleDataForamt;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "initData", function () {
        return initData;
      });

      var FoodType;

      (function (FoodType) {
        FoodType["Fruit"] = "F";
        FoodType["Meat"] = "M";
        FoodType["Vegetable"] = "V";
        FoodType["Drink"] = "D";
        FoodType["Snack"] = "S";
        FoodType["Other"] = "O";
      })(FoodType || (FoodType = {}));

      var FoodTypeName = {
        'F': 'Fruit',
        'M': 'Meat',
        'V': 'Vegetable',
        'D': 'Drink',
        'S': 'Snack',
        'O': 'Other'
      };
      var FoodTypeColor = {
        'F': 'ct-fruit-color',
        'M': 'ct-meat-color',
        'V': 'ct-vegetable-color',
        'D': 'ct-drink-color',
        'S': 'ct-snack-color',
        'O': 'ct-other-color'
      };
      var ChartColorTheme = ['#FF4081', '#FF5252', '#e91e63', '#ffab40', '#f48fb1', '#ef9a9a'];
      var DateType;

      (function (DateType) {
        DateType["Daily"] = "Daily";
        DateType["Weekly"] = "Weekly";
        DateType["Monthly"] = "Monthly";
      })(DateType || (DateType = {}));

      var sampleDataForamt = '2054/F300:300:300:300:300;M300:300:300:300:300;V300:300:300:300:300;D300:300:300:300:300;S300:300:300:300:300;O300:300:300:300:300';
      var initData = 'F0;M0;V0;D0;S0;O0';
      /***/
    },

    /***/
    "6x/Z":
    /*!*************************************!*\
      !*** ./src/app/cal-data.service.ts ***!
      \*************************************/

    /*! exports provided: CalDataService */

    /***/
    function xZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CalDataService", function () {
        return CalDataService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _cal_data_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./cal-data.types */
      "5ZAU");

      var CalDataService = /*#__PURE__*/function () {
        function CalDataService() {
          _classCallCheck(this, CalDataService);

          this.localStorageKey = 'cal-tracker';
          this.foodType = {
            "F": _cal_data_types__WEBPACK_IMPORTED_MODULE_2__["FoodType"].Fruit,
            "M": _cal_data_types__WEBPACK_IMPORTED_MODULE_2__["FoodType"].Meat,
            "V": _cal_data_types__WEBPACK_IMPORTED_MODULE_2__["FoodType"].Vegetable,
            "D": _cal_data_types__WEBPACK_IMPORTED_MODULE_2__["FoodType"].Drink,
            "S": _cal_data_types__WEBPACK_IMPORTED_MODULE_2__["FoodType"].Snack,
            "O": _cal_data_types__WEBPACK_IMPORTED_MODULE_2__["FoodType"].Other
          };
          this.currentFoodData = this.foodDataArr.slice();
          this.foodDataSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.currentFoodData);
          this.foodData$ = this.foodDataSource.asObservable();
        }

        _createClass(CalDataService, [{
          key: "updateLocalStorage",
          value: function updateLocalStorage(foodDataArr) {
            var currentData = this.changeFoodDataArrToString(foodDataArr);
            localStorage.setItem(this.localStorageKey, currentData);
          }
        }, {
          key: "changeFoodDataArrToString",
          value: function changeFoodDataArrToString(foodDataArr) {
            var foodDataToStr = foodDataArr.reduce(function (result, foodDataByArr, index) {
              var currentCalData = foodDataByArr.lastThirtyDaysCalories.join(':');
              return "".concat(result).concat(foodDataByArr.foodType).concat(currentCalData).concat(index !== foodDataArr.length - 1 ? ';' : '');
            }, '');
            return "".concat(this.currentDateAsSum, "/").concat(foodDataToStr);
          }
        }, {
          key: "parseDataFromLocalStorage",
          value: function parseDataFromLocalStorage(data) {
            var _this = this;

            var dateAndFoodData = data.split('/');
            this.lastUpdatedDate = parseInt(dateAndFoodData[0]);
            var foodArrByDate = dateAndFoodData[1].split(';').map(function (item) {
              var currentFoodDate = {
                foodType: _this.foodType[item.charAt(0)],
                lastThirtyDaysCalories: item.substring(1).split(':').map(function (foodCal) {
                  return parseInt(foodCal);
                })
              };

              if (_this.currentDateAsSum !== _this.lastUpdatedDate) {
                currentFoodDate.lastThirtyDaysCalories.push(0);
              }

              return currentFoodDate;
            });
            return foodArrByDate;
          }
        }, {
          key: "updateFoodData",
          value: function updateFoodData(food) {
            var _this2 = this;

            var hasFoodType = this.currentFoodData.some(function (item) {
              return item.foodType === food.foodType;
            });
            var needUpdateForFoodType = hasFoodType ? this.currentFoodData.find(function (item) {
              return item.foodType === food.foodType;
            }) : {
              lastThirtyDaysCalories: [],
              foodType: food.foodType
            };

            if (!hasFoodType) {
              this.currentFoodData.push(needUpdateForFoodType);
            }

            if (this.currentDateAsSum === this.lastUpdatedDate) {
              needUpdateForFoodType.lastThirtyDaysCalories[needUpdateForFoodType.lastThirtyDaysCalories.length - 1] += food.calories;
            } else {
              this.lastUpdatedDate = this.currentDateAsSum;
              needUpdateForFoodType.lastThirtyDaysCalories.push(food.calories);
            } // maintain data of 30days


            this.currentFoodData.forEach(function (item) {
              if (item.lastThirtyDaysCalories.length > 30) {
                item.lastThirtyDaysCalories.shift();
              }
            });
            setTimeout(function () {
              _this2.updateLocalStorage(_this2.currentFoodData);

              _this2.foodDataSource.next(_this2.currentFoodData);
            }, 750);
          }
        }, {
          key: "foodDataArr",
          get: function get() {
            var foodDataFromLocalStorage = localStorage.getItem(this.localStorageKey);
            var foodInitData = "".concat(this.currentDateAsSum, "/").concat(_cal_data_types__WEBPACK_IMPORTED_MODULE_2__["initData"]);
            var foodDataArr = this.parseDataFromLocalStorage(foodDataFromLocalStorage || foodInitData);
            return foodDataArr;
          }
        }, {
          key: "currentDateAsSum",
          get: function get() {
            var currentDate = new Date();
            var dateToSum = currentDate.getFullYear() + currentDate.getMonth() + currentDate.getDate();
            return dateToSum + 1;
          }
        }]);

        return CalDataService;
      }();

      CalDataService.ɵfac = function CalDataService_Factory(t) {
        return new (t || CalDataService)();
      };

      CalDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: CalDataService,
        factory: CalDataService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalDataService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "DDap":
    /*!******************************************************!*\
      !*** ./src/app/main-layout/main-layout.component.ts ***!
      \******************************************************/

    /*! exports provided: MainLayoutComponent */

    /***/
    function DDap(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MainLayoutComponent", function () {
        return MainLayoutComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _cal_data_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../cal-data.types */
      "5ZAU");
      /* harmony import */


      var _cal_card_cal_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../cal-card/cal-card.component */
      "nmki");

      var MainLayoutComponent = /*#__PURE__*/function () {
        function MainLayoutComponent() {
          _classCallCheck(this, MainLayoutComponent);

          this.dateType = _cal_data_types__WEBPACK_IMPORTED_MODULE_1__["DateType"];
        }

        _createClass(MainLayoutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MainLayoutComponent;
      }();

      MainLayoutComponent.ɵfac = function MainLayoutComponent_Factory(t) {
        return new (t || MainLayoutComponent)();
      };

      MainLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MainLayoutComponent,
        selectors: [["app-main-layout"]],
        decls: 4,
        vars: 3,
        consts: [[1, "food-charts-details-container"], [1, "food-cal-card", 3, "dateType"]],
        template: function MainLayoutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-cal-card", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-cal-card", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-cal-card", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dateType", ctx.dateType.Daily);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dateType", ctx.dateType.Weekly);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dateType", ctx.dateType.Monthly);
          }
        },
        directives: [_cal_card_cal_card_component__WEBPACK_IMPORTED_MODULE_2__["CalCardComponent"]],
        styles: [".food-charts-details-container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 1rem;\n  display: flex;\n  justify-content: space-around;\n}\n\n@media screen and (max-width: 1024px) {\n  .food-charts-details-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .food-charts-details-container[_ngcontent-%COMP%]   .food-cal-card[_ngcontent-%COMP%] {\n    padding-bottom: 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1sYXlvdXQvbWFpbi1sYXlvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtBQUNKOztBQUVBO0VBQ0k7SUFDRSxzQkFBQTtFQUNKO0VBQ0k7SUFDSSxvQkFBQTtFQUNSO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tYWluLWxheW91dC9tYWluLWxheW91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb29kLWNoYXJ0cy1kZXRhaWxzLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gICAgLmZvb2QtY2hhcnRzLWRldGFpbHMtY29udGFpbmVyIHtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAgIC5mb29kLWNhbC1jYXJkIHtcclxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainLayoutComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-main-layout',
            templateUrl: './main-layout.component.html',
            styleUrls: ['./main-layout.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "Q1Gb":
    /*!**************************************************!*\
      !*** ./src/app/cal-chart/cal-chart.component.ts ***!
      \**************************************************/

    /*! exports provided: CalChartComponent */

    /***/
    function Q1Gb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CalChartComponent", function () {
        return CalChartComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! d3 */
      "VphZ");
      /* harmony import */


      var _cal_data_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../cal-data.types */
      "5ZAU");

      var CalChartComponent = /*#__PURE__*/function () {
        function CalChartComponent(elRef) {
          var _this3 = this;

          _classCallCheck(this, CalChartComponent);

          this.elRef = elRef;
          this.pie = d3__WEBPACK_IMPORTED_MODULE_1__["pie"]().sort(null).value(function (d) {
            return d;
          }); // Creates an 'interpolator' for animated transition for arc slices
          //   given previous and new arc shapes,
          //   generates a series of arc shapes (be)tween start and end state

          this.arcTween = function (datum, index) {
            var interpolation = d3__WEBPACK_IMPORTED_MODULE_1__["interpolate"](_this3.pieDataPrevious[index], datum);
            _this3.pieDataPrevious[index] = interpolation(0);
            return function (t) {
              datum.outerRadius = _this3.radius;
              return _this3.arc(interpolation(t));
            };
          }; // Creates an 'interpolator' for animated transition for arc labels
          //   given previous and new label positions,
          //   generates a series of arc states (be)tween start and end state


          this.labelTween = function (datum, index) {
            var interpolation = d3__WEBPACK_IMPORTED_MODULE_1__["interpolate"](_this3.pieDataPrevious[index], datum);
            _this3.pieDataPrevious[index] = interpolation(0);
            return function (t) {
              datum.outerRadius = _this3.radius;
              return 'translate(' + _this3.arc.centroid(interpolation(t)) + ')';
            };
          };

          this.labelValueGetter = function (datum, index) {
            return _this3.labelValueFn(_this3.rawData[index]);
          };

          this.hostElement = this.elRef.nativeElement;
        }

        _createClass(CalChartComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes.data) {
              this.updateChart(changes.data.currentValue);
            }
          }
        }, {
          key: "createChart",
          value: function createChart(data) {
            this.processPieData(data);
            this.removeExistingChartFromParent();
            this.setChartDimensions();
            this.setColorScale();
            this.addGraphicsElement();
            this.setupArcGenerator();
            this.addSlicesToTheDonut();
            this.addLabelsToTheDonut();
            this.addDonutTotalLabel();
          }
        }, {
          key: "setChartDimensions",
          value: function setChartDimensions() {
            var viewBoxHeight = 200;
            var viewBoxWidth = 200;
            this.svg = d3__WEBPACK_IMPORTED_MODULE_1__["select"](this.hostElement).append('svg').attr('width', '100%').attr('height', '100%').attr('viewBox', '0 0 ' + viewBoxWidth + ' ' + viewBoxHeight);
          }
        }, {
          key: "addGraphicsElement",
          value: function addGraphicsElement() {
            this.g = this.svg.append('g').attr('transform', 'translate(100,90)');
          }
        }, {
          key: "setColorScale",
          value: function setColorScale() {
            this.colorScale = d3__WEBPACK_IMPORTED_MODULE_1__["scaleOrdinal"]().domain(['0', '1', '2', '3', '4', '5']).range(_cal_data_types__WEBPACK_IMPORTED_MODULE_2__["ChartColorTheme"]);
          }
        }, {
          key: "processPieData",
          value: function processPieData(data) {
            var initial = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            var calDataArray = data.map(function (food) {
              return food.calories;
            });
            this.rawData = calDataArray;
            this.total = this.rawData.reduce(function (sum, next) {
              return sum + next;
            }, 0);
            this.pieData = this.pie(calDataArray);

            if (initial) {
              this.pieDataPrevious = this.pieData;
            }
          }
        }, {
          key: "setupArcGenerator",
          value: function setupArcGenerator() {
            this.innerRadius = 50;
            this.radius = 80;
            this.arc = d3__WEBPACK_IMPORTED_MODULE_1__["arc"]().innerRadius(this.innerRadius).outerRadius(this.radius);
          }
        }, {
          key: "addSlicesToTheDonut",
          value: function addSlicesToTheDonut() {
            var _this4 = this;

            var chart = this;
            this.slices = this.g.selectAll('slice').data(this.pieData).enter().append('path').each(function (d) {
              d.outerRadius = _this4.radius;
            }).attr('d', this.arc).on('mouseover', function (datum, index) {
              chart.totalLabel.text(datum.value);
              chart.foodTypeLabel.text(chart.data[index].typeName);
              d3__WEBPACK_IMPORTED_MODULE_1__["select"](this).transition().delay(0).attr('d', d3__WEBPACK_IMPORTED_MODULE_1__["arc"]().innerRadius(chart.innerRadius).outerRadius(chart.radius + 10));
            }).on('mouseout', function (datum, index) {
              chart.totalLabel.text(chart.total);
              chart.foodTypeLabel.text('Total');
              d3__WEBPACK_IMPORTED_MODULE_1__["select"](this).transition().duration(500).attr('d', d3__WEBPACK_IMPORTED_MODULE_1__["arc"]().innerRadius(chart.innerRadius).outerRadius(chart.radius));
            }).attr('fill', function (datum, index) {
              return _this4.colorScale("".concat(index));
            }).style('opacity', 1);
          }
        }, {
          key: "addDonutTotalLabel",
          value: function addDonutTotalLabel() {
            this.totalLabel = this.svg.append('text').text(this.total).attr('id', 'total').attr('x', 100).attr('y', 100).style('font-size', '10px').style('text-anchor', 'middle');
            this.foodTypeLabel = this.svg.append('text').text('Total').attr('id', 'food-type-text').attr('x', 100).attr('y', 80).style('font-size', '10px').style('text-anchor', 'middle');
          }
        }, {
          key: "updateChart",
          value: function updateChart(data) {
            if (!this.svg) {
              this.createChart(data);
              return;
            }

            this.processPieData(data, false);
            this.updateSlices();
            this.updateLabels();
          }
        }, {
          key: "updateSlices",
          value: function updateSlices() {
            this.slices = this.slices.data(this.pieData);
            this.slices.transition().duration(750).attrTween('d', this.arcTween);
          }
        }, {
          key: "updateLabels",
          value: function updateLabels() {
            var _this5 = this;

            this.totalLabel.text(this.total);
            this.labels.data(this.pieData);
            this.labels.each(function (datum, index, n) {
              d3__WEBPACK_IMPORTED_MODULE_1__["select"](n[index]).text(_this5.labelValueFn(_this5.rawData[index]));
            });
            this.labels.transition().duration(750).attrTween('transform', this.labelTween);
          }
        }, {
          key: "removeExistingChartFromParent",
          value: function removeExistingChartFromParent() {
            d3__WEBPACK_IMPORTED_MODULE_1__["select"](this.hostElement).select('svg').remove();
          }
        }, {
          key: "addLabelsToTheDonut",
          value: function addLabelsToTheDonut() {
            var _this6 = this;

            this.labels = this.g.selectAll('label').data(this.pieData).enter().append('text').text(this.labelValueGetter).attr('transform', function (datum, index) {
              return 'translate(' + _this6.arc.centroid(datum) + ')';
            }).style('font-size', '8px').style('text-anchor', 'middle');
          }
        }, {
          key: "labelValueFn",
          value: function labelValueFn(val) {
            var pct = Math.floor(val * 100 / this.total);
            return pct < 4 ? '' : '' + val;
          }
        }]);

        return CalChartComponent;
      }();

      CalChartComponent.ɵfac = function CalChartComponent_Factory(t) {
        return new (t || CalChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      CalChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CalChartComponent,
        selectors: [["app-cal-chart"]],
        inputs: {
          data: "data"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
        decls: 1,
        vars: 0,
        template: function CalChartComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "svg");
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbC1jaGFydC9jYWwtY2hhcnQuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalChartComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-cal-chart',
            templateUrl: './cal-chart.component.html',
            styleUrls: ['./cal-chart.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./header/header.component */
      "fECr");
      /* harmony import */


      var _main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./main-layout/main-layout.component */
      "DDap");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'calorieTracker';
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 2,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-main-layout");
          }
        },
        directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_2__["MainLayoutComponent"]],
        styles: ["[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/list */
      "kEI4");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button */
      "Fwaw");
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/grid-list */
      "FVPZ");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/card */
      "igqZ");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      "HsOI");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/input */
      "ZwOa");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "W5yJ");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./main-layout/main-layout.component */
      "DDap");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./header/header.component */
      "fECr");
      /* harmony import */


      var _cal_card_cal_card_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./cal-card/cal-card.component */
      "nmki");
      /* harmony import */


      var _cal_chart_cal_chart_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./cal-chart/cal-chart.component */
      "Q1Gb");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/select */
      "JjoW");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"], _main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_12__["MainLayoutComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"], _cal_card_cal_card_component__WEBPACK_IMPORTED_MODULE_14__["CalCardComponent"], _cal_chart_cal_chart_component__WEBPACK_IMPORTED_MODULE_15__["CalChartComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"], _main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_12__["MainLayoutComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"], _cal_card_cal_card_component__WEBPACK_IMPORTED_MODULE_14__["CalCardComponent"], _cal_chart_cal_chart_component__WEBPACK_IMPORTED_MODULE_15__["CalChartComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "fECr":
    /*!********************************************!*\
      !*** ./src/app/header/header.component.ts ***!
      \********************************************/

    /*! exports provided: HeaderComponent */

    /***/
    function fECr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return HeaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _cal_data_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../cal-data.types */
      "5ZAU");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function HeaderComponent_span_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var food_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", food_r1.color);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", food_r1.name, " ");
        }
      }

      var HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent() {
          _classCallCheck(this, HeaderComponent);

          this.foodTypeWithColor = [{
            name: _cal_data_types__WEBPACK_IMPORTED_MODULE_1__["FoodTypeName"][_cal_data_types__WEBPACK_IMPORTED_MODULE_1__["FoodType"].Fruit],
            color: _cal_data_types__WEBPACK_IMPORTED_MODULE_1__["FoodTypeColor"][_cal_data_types__WEBPACK_IMPORTED_MODULE_1__["FoodType"].Fruit]
          }, {
            name: _cal_data_types__WEBPACK_IMPORTED_MODULE_1__["FoodTypeName"][_cal_data_types__WEBPACK_IMPORTED_MODULE_1__["FoodType"].Meat],
            color: _cal_data_types__WEBPACK_IMPORTED_MODULE_1__["FoodTypeColor"][_cal_data_types__WEBPACK_IMPORTED_MODULE_1__["FoodType"].Meat]
          }, {
            name: _cal_data_types__WEBPACK_IMPORTED_MODULE_1__["FoodTypeName"][_cal_data_types__WEBPACK_IMPORTED_MODULE_1__["FoodType"].Vegetable],
            color: _cal_data_types__WEBPACK_IMPORTED_MODULE_1__["FoodTypeColor"][_cal_data_types__WEBPACK_IMPORTED_MODULE_1__["FoodType"].Vegetable]
          }, {
            name: _cal_data_types__WEBPACK_IMPORTED_MODULE_1__["FoodTypeName"][_cal_data_types__WEBPACK_IMPORTED_MODULE_1__["FoodType"].Drink],
            color: _cal_data_types__WEBPACK_IMPORTED_MODULE_1__["FoodTypeColor"][_cal_data_types__WEBPACK_IMPORTED_MODULE_1__["FoodType"].Drink]
          }, {
            name: _cal_data_types__WEBPACK_IMPORTED_MODULE_1__["FoodTypeName"][_cal_data_types__WEBPACK_IMPORTED_MODULE_1__["FoodType"].Snack],
            color: _cal_data_types__WEBPACK_IMPORTED_MODULE_1__["FoodTypeColor"][_cal_data_types__WEBPACK_IMPORTED_MODULE_1__["FoodType"].Snack]
          }, {
            name: _cal_data_types__WEBPACK_IMPORTED_MODULE_1__["FoodTypeName"][_cal_data_types__WEBPACK_IMPORTED_MODULE_1__["FoodType"].Other],
            color: _cal_data_types__WEBPACK_IMPORTED_MODULE_1__["FoodTypeColor"][_cal_data_types__WEBPACK_IMPORTED_MODULE_1__["FoodType"].Other]
          }];
        }

        _createClass(HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var today = new Date();
            this.currentDate = "".concat(today.getFullYear(), "/").concat(today.getMonth() + 1, "/").concat(today.getDate());
          }
        }]);

        return HeaderComponent;
      }();

      HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
        return new (t || HeaderComponent)();
      };

      HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HeaderComponent,
        selectors: [["app-header"]],
        decls: 8,
        vars: 2,
        consts: [[1, "app-title"], [1, "mat-h1"], [1, "food-type-desc"], ["class", "food-type", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "food-type", 3, "ngClass"]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Calories Tracker");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\nFood Types: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HeaderComponent_span_7_Template, 2, 2, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Date: ", ctx.currentDate, "\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.foodTypeWithColor);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]],
        styles: [".food-type-desc[_ngcontent-%COMP%]   .food-type[_ngcontent-%COMP%] {\n  padding: 1rem;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtBQUFSIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb29kLXR5cGUtZGVzYyB7XHJcbiAgICAuZm9vZC10eXBlIHtcclxuICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "nmki":
    /*!************************************************!*\
      !*** ./src/app/cal-card/cal-card.component.ts ***!
      \************************************************/

    /*! exports provided: CalCardComponent */

    /***/
    function nmki(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CalCardComponent", function () {
        return CalCardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _cal_data_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../cal-data.types */
      "5ZAU");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _cal_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../cal-data.service */
      "6x/Z");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/card */
      "igqZ");
      /* harmony import */


      var _cal_chart_cal_chart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../cal-chart/cal-chart.component */
      "Q1Gb");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/list */
      "kEI4");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/form-field */
      "HsOI");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/select */
      "JjoW");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/input */
      "ZwOa");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/core */
      "j14s");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/button */
      "Fwaw");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "W5yJ");

      function CalCardComponent_mat_card_0_mat_list_item_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var food_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", food_r7.typeColor);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](food_r7.typeName + ": " + food_r7.calories);
        }
      }

      function CalCardComponent_mat_card_0_div_14_mat_option_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var typeName_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", typeName_r10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](typeName_r10);
        }
      }

      function CalCardComponent_mat_card_0_div_14_button_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CalCardComponent_mat_card_0_div_14_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function CalCardComponent_mat_card_0_div_14_Template_form_submit_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r11.submit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Select Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-select", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CalCardComponent_mat_card_0_div_14_mat_option_6_Template, 2, 2, "mat-option", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Enter calories");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CalCardComponent_mat_card_0_div_14_button_11_Template, 3, 0, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r6.caloriesForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.foodTypeName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r6.isLoading)("ngIfElse", _r1);
        }
      }

      function CalCardComponent_mat_card_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-cal-chart", 5, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-list", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CalCardComponent_mat_card_0_mat_list_item_12_Template, 3, 2, "mat-list-item", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card-actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CalCardComponent_mat_card_0_div_14_Template, 12, 4, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var foodDataArr_r3 = ctx.ngIf;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.cardTitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.cardSubTitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", foodDataArr_r3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", foodDataArr_r3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.dateType === "Daily");
        }
      }

      function CalCardComponent_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-spinner", 21);
        }
      }

      var CalCardComponent = /*#__PURE__*/function () {
        function CalCardComponent(calDataService, formBuilder) {
          _classCallCheck(this, CalCardComponent);

          this.calDataService = calDataService;
          this.formBuilder = formBuilder;
          this.foodTypeName = Object.values(_cal_data_types__WEBPACK_IMPORTED_MODULE_1__["FoodTypeName"]);
          this.isLoading = false;
          this.caloriesData = [];
        }

        _createClass(CalCardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this7 = this;

            this.caloriesForm = this.formBuilder.group({
              typeName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
              calories: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            });

            switch (this.dateType) {
              case _cal_data_types__WEBPACK_IMPORTED_MODULE_1__["DateType"].Daily:
                this.cardTitle = _cal_data_types__WEBPACK_IMPORTED_MODULE_1__["DateType"].Daily;
                this.cardSubTitle = "".concat(_cal_data_types__WEBPACK_IMPORTED_MODULE_1__["DateType"].Daily, " average of calories");
                this.foodDataArr$ = this.calDataService.foodData$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (foodDataArr) {
                  var dailyFoodDataArr = foodDataArr.map(function (foodData) {
                    var _a, _b;

                    var calories = (_a = foodData.lastThirtyDaysCalories[foodData.lastThirtyDaysCalories.length - 1]) !== null && _a !== void 0 ? _a : 0;

                    _this7.caloriesData.push(calories);

                    return {
                      foodType: foodData.foodType,
                      typeName: _cal_data_types__WEBPACK_IMPORTED_MODULE_1__["FoodTypeName"][foodData.foodType],
                      typeColor: _cal_data_types__WEBPACK_IMPORTED_MODULE_1__["FoodTypeColor"][foodData.foodType],
                      calories: (_b = foodData.lastThirtyDaysCalories[foodData.lastThirtyDaysCalories.length - 1]) !== null && _b !== void 0 ? _b : 0
                    };
                  });
                  _this7.isLoading = false;
                  return dailyFoodDataArr;
                }));
                break;

              case _cal_data_types__WEBPACK_IMPORTED_MODULE_1__["DateType"].Weekly:
                this.cardTitle = _cal_data_types__WEBPACK_IMPORTED_MODULE_1__["DateType"].Weekly;
                this.cardSubTitle = "".concat(_cal_data_types__WEBPACK_IMPORTED_MODULE_1__["DateType"].Weekly, " average of calories");
                this.foodDataArr$ = this.calDataService.foodData$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (foodDataArr) {
                  var weeklyFoodDataArr = foodDataArr.map(function (foodData) {
                    var lastSevenDaysCalories = foodData.lastThirtyDaysCalories.slice(-7);
                    var daysCount = lastSevenDaysCalories.length || 1;
                    var caloriesSum = lastSevenDaysCalories.reduce(function (prev, curr) {
                      return prev + curr;
                    }, 0);
                    var calories = Math.round(caloriesSum / daysCount);

                    _this7.caloriesData.push(calories);

                    return {
                      foodType: foodData.foodType,
                      typeName: _cal_data_types__WEBPACK_IMPORTED_MODULE_1__["FoodTypeName"][foodData.foodType],
                      typeColor: _cal_data_types__WEBPACK_IMPORTED_MODULE_1__["FoodTypeColor"][foodData.foodType],
                      calories: calories
                    };
                  });
                  _this7.isLoading = false;
                  return weeklyFoodDataArr;
                }));
                break;

              case _cal_data_types__WEBPACK_IMPORTED_MODULE_1__["DateType"].Monthly:
                this.cardTitle = _cal_data_types__WEBPACK_IMPORTED_MODULE_1__["DateType"].Monthly;
                this.cardSubTitle = "".concat(_cal_data_types__WEBPACK_IMPORTED_MODULE_1__["DateType"].Monthly, " average of calories");
                this.foodDataArr$ = this.calDataService.foodData$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (foodDataArr) {
                  var monthlyFoodDataArr = foodDataArr.map(function (foodData) {
                    var caloriesSum = foodData.lastThirtyDaysCalories.reduce(function (prev, curr) {
                      return prev + curr;
                    }, 0);
                    var daysCount = foodData.lastThirtyDaysCalories.length || 1;
                    var calories = Math.round(caloriesSum / daysCount);

                    _this7.caloriesData.push(calories);

                    return {
                      foodType: foodData.foodType,
                      typeName: _cal_data_types__WEBPACK_IMPORTED_MODULE_1__["FoodTypeName"][foodData.foodType],
                      typeColor: _cal_data_types__WEBPACK_IMPORTED_MODULE_1__["FoodTypeColor"][foodData.foodType],
                      calories: calories
                    };
                  });
                  _this7.isLoading = false;
                  return monthlyFoodDataArr;
                }));
                break;
            }
          }
        }, {
          key: "submit",
          value: function submit() {
            if (!this.caloriesForm.valid) {
              return;
            }

            var food = this.caloriesForm.value;
            this.isLoading = true;
            this.calDataService.updateFoodData({
              calories: food.calories,
              foodType: _cal_data_types__WEBPACK_IMPORTED_MODULE_1__["FoodType"][food.typeName]
            });
          }
        }]);

        return CalCardComponent;
      }();

      CalCardComponent.ɵfac = function CalCardComponent_Factory(t) {
        return new (t || CalCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cal_data_service__WEBPACK_IMPORTED_MODULE_4__["CalDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]));
      };

      CalCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CalCardComponent,
        selectors: [["app-cal-card"]],
        inputs: {
          dateType: "dateType"
        },
        decls: 4,
        vars: 3,
        consts: [["class", "food-data-card", 4, "ngIf"], ["loading", ""], [1, "food-data-card"], [1, "food-data-header"], [1, "food-data-chart"], [3, "data"], ["appCalChart", ""], ["role", "list"], ["role", "listitem", 4, "ngFor", "ngForOf"], ["class", "cal-input-container", 4, "ngIf"], ["role", "listitem"], [3, "ngClass"], [1, "cal-input-container"], [3, "formGroup", "submit"], ["appearance", "fill"], ["formControlName", "typeName"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "formControlName", "calories", "type", "number"], ["mat-raised-button", "", "color", "primary", "type", "submit", 4, "ngIf", "ngIfElse"], [3, "value"], ["mat-raised-button", "", "color", "primary", "type", "submit"], ["mode", "indeterminate", "diameter", "30", 1, "spinner"]],
        template: function CalCardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CalCardComponent_mat_card_0_Template, 15, 5, "mat-card", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CalCardComponent_ng_template_2_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.foodDataArr$));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], _cal_chart_cal_chart_component__WEBPACK_IMPORTED_MODULE_7__["CalChartComponent"], _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatList"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardActions"], _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListItem"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatOption"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__["MatProgressSpinner"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]],
        styles: [".food-data-card[_ngcontent-%COMP%] {\n  min-width: 24rem;\n  background: #FEDBD0;\n}\n.food-data-card[_ngcontent-%COMP%]   .food-data-chart[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.food-data-card[_ngcontent-%COMP%]   .cal-input-container[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] {\n  max-width: 8rem;\n  margin: 0.5rem;\n}\n.food-data-card[_ngcontent-%COMP%]   .cal-input-container[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FsLWNhcmQvY2FsLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFDSTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtBQUNSO0FBR1E7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQURaO0FBSVE7RUFDSSxxQkFBQTtBQUZaIiwiZmlsZSI6InNyYy9hcHAvY2FsLWNhcmQvY2FsLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vZC1kYXRhLWNhcmQge1xyXG4gICAgbWluLXdpZHRoOiAyNHJlbTtcclxuICAgIGJhY2tncm91bmQ6ICNGRURCRDA7XHJcblxyXG4gICAgLmZvb2QtZGF0YS1jaGFydCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuY2FsLWlucHV0LWNvbnRhaW5lciB7XHJcbiAgICAgICAgLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA4cmVtO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAuNXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLnNwaW5uZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalCardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-cal-card',
            templateUrl: './cal-card.component.html',
            styleUrls: ['./cal-card.component.scss']
          }]
        }], function () {
          return [{
            type: _cal_data_service__WEBPACK_IMPORTED_MODULE_4__["CalDataService"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
          }];
        }, {
          dateType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map