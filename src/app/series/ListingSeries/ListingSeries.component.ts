import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ListingSeries',
  templateUrl: './ListingSeries.component.html',
  styleUrls: ['./ListingSeries.component.css']
})
export class ListingSeriesComponent implements OnInit {

  series: Serie[];

  constructor(private serieService: SerieService) {}

  ngOnInit() {
    this.serieService.getSeries().subscribe(series => {
      this.series = series;
    });

}
