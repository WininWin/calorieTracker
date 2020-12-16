import { Component, ElementRef, Input, OnInit, SimpleChanges } from '@angular/core';

import * as d3 from 'd3';
import { ChartColorTheme, IFood } from '../cal-data.types';

@Component({
  selector: 'app-cal-chart',
  templateUrl: './cal-chart.component.html',
  styleUrls: ['./cal-chart.component.scss']
})
export class CalChartComponent implements OnInit {

  @Input() data: IFood[];
  hostElement; // Native element hosting the SVG container
  svg: d3.Selection<any, unknown, null, undefined>; // Top level SVG element
  g: d3.Selection<SVGGElement, unknown, null, undefined>; // SVG Group element
  arc: d3.Arc<any, any>; // D3 Arc generator
  innerRadius: number; // Inner radius of donut chart
  radius: number; // Outer radius of donut chart
  slices: d3.Selection<d3.BaseType, unknown, SVGGElement, unknown>; // Donut chart slice elements
  labels: any; // SVG data label elements
  totalLabel: any; // SVG label for total
  foodTypeLabel: any; 
  rawData: number[]; // Raw chart values array
  total: number; // Total of chart values
  colorScale: any; // D3 color provider
  pieData: any; // Arc segment parameters for current data set
  pieDataPrevious: any; // Arc segment parameters for previous data set - used for transitions

  pie = d3.pie()
  .sort(null)
  .value((d: number) => d);

  constructor(private elRef: ElementRef) {
    this.hostElement = this.elRef.nativeElement;
}

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges) {
      if (changes.data) {
          this.updateChart(changes.data.currentValue);
      }
  }

  private createChart(data: IFood[]) {

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


  private setChartDimensions() {
      let viewBoxHeight = 200;
      let viewBoxWidth = 200;
      this.svg = d3.select(this.hostElement).append('svg')
          .attr('width', '100%')
          .attr('height', '100%')
          .attr('viewBox', '0 0 ' + viewBoxWidth + ' ' + viewBoxHeight);
  }

  private addGraphicsElement() {
      this.g = this.svg.append('g')
          .attr('transform', 'translate(100,90)');
  }

  private setColorScale() {
      this.colorScale = d3.scaleOrdinal().domain(['0','1','2','3','4','5']).range(ChartColorTheme);
  }

  private processPieData(data: IFood[], initial = true) {
      const calDataArray = data.map((food) => food.calories);
      this.rawData = calDataArray;
      this.total = this.rawData.reduce((sum, next) => sum + next, 0);

      this.pieData = this.pie(calDataArray);
      if (initial) {
          this.pieDataPrevious = this.pieData;
      }
  }


  private setupArcGenerator() {
      this.innerRadius = 50;
      this.radius = 80;
      this.arc = d3.arc()
          .innerRadius(this.innerRadius)
          .outerRadius(this.radius);
  }

  private addSlicesToTheDonut() {
      const chart = this;
      this.slices = this.g.selectAll('slice')
          .data(this.pieData)
          .enter()
          .append('path')
          .each((d: any) => { d.outerRadius = this.radius; })
          .attr('d', this.arc)
          .on('mouseover', function(datum: any, index) {
            chart.totalLabel.text(datum.value);
            chart.foodTypeLabel.text(chart.data[index].typeName);
            d3.select(this).transition().delay(0)
                .attr('d', d3.arc()
                    .innerRadius((chart.innerRadius))
                    .outerRadius(chart.radius + 10)
                );
          })
          .on('mouseout', function(datum: any, index) {
            chart.totalLabel.text(chart.total);
            chart.foodTypeLabel.text('Total');
            d3.select(this).transition().duration(500)
            .attr('d', d3.arc()
                .innerRadius((chart.innerRadius))
                .outerRadius(chart.radius)
            );
          })
          .attr('fill', (datum, index) => {
              return this.colorScale(`${index}`);
          })
          .style('opacity', 1);
  }

  private addDonutTotalLabel() {
      this.totalLabel = this.svg
          .append('text')
          .text(this.total)
          .attr('id', 'total')
          .attr('x', 100)
          .attr('y', 100)
          .style('font-size', '10px')
          .style('text-anchor', 'middle');

      this.foodTypeLabel = this.svg
        .append('text')
        .text('Total')
        .attr('id', 'food-type-text')
        .attr('x', 100)
        .attr('y', 80)
        .style('font-size', '10px')
        .style('text-anchor', 'middle');
  }

  // Creates an 'interpolator' for animated transition for arc slices
  //   given previous and new arc shapes,
  //   generates a series of arc shapes (be)tween start and end state
  arcTween = (datum, index) => {
      const interpolation = d3.interpolate(this.pieDataPrevious[index], datum);
      this.pieDataPrevious[index] = interpolation(0);
      return (t) => {
        datum.outerRadius = this.radius
        return this.arc(interpolation(t));
      }
  }

  // Creates an 'interpolator' for animated transition for arc labels
  //   given previous and new label positions,
  //   generates a series of arc states (be)tween start and end state
  labelTween = (datum, index) => {
      const interpolation = d3.interpolate(this.pieDataPrevious[index], datum);
      this.pieDataPrevious[index] = interpolation(0);
      return (t) => {
            datum.outerRadius = this.radius
          return 'translate(' + this.arc.centroid(interpolation(t)) + ')';
      }
  }

  public updateChart(data: IFood[]) {
      if (!this.svg) {
          this.createChart(data);
          return;
      }

      this.processPieData(data, false);

      this.updateSlices();

      this.updateLabels();

  }

  private updateSlices() {
      this.slices = this.slices.data(this.pieData);
      this.slices.transition().duration(750).attrTween('d', this.arcTween);
  }

  private updateLabels() {
      this.totalLabel.text(this.total);
      this.labels.data(this.pieData);
      this.labels.each((datum, index, n) => {
          d3.select(n[index]).text(this.labelValueFn(this.rawData[index]));
      });
      this.labels.transition().duration(750).attrTween('transform', this.labelTween);
  }

  private removeExistingChartFromParent() {
      d3.select(this.hostElement).select('svg').remove();
  }

  private addLabelsToTheDonut() {
      this.labels = this.g
          .selectAll('label')
          .data(this.pieData)
          .enter()
          .append('text')
          .text(this.labelValueGetter)
          .attr('transform', (datum, index) => {
              return 'translate(' + this.arc.centroid(datum) + ')';
          })
          .style('font-size', '8px')
          .style('text-anchor', 'middle');

  }

  private labelValueGetter = (datum, index) => {
      return this.labelValueFn(this.rawData[index]);
  }

  private labelValueFn(val) {
      const pct = Math.floor(val * 100 / this.total);
      return (pct < 4) ? '' : '' + val;
  }
}
