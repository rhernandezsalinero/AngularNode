import { SeriesService } from './../services/series.service';
import { Serie } from './../models/series.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  series: Array<Serie> = []


  constructor(private seriesService: SeriesService, private router: Router) { }

  ngOnInit() {
    this.loadSeries("")
  }

  loadSeries(name: string) {
    const params = name
    this.seriesService.getSeries(params).subscribe(
      (data: Serie[]) => {
        this.series = data
        console.log(data)
      },
      error => {
        console.log("Error:", error);
      }
    );
  }

  setFiltro(name: string) {
    this.loadSeries(name)
  }

  newSerie() {
    this.router.navigate(["/detail/new"])
  }
}
