import { Serie } from './../models/series.model';
import { SeriesService } from './../services/series.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  viewFormAdd: boolean = false
  idSearch: string = ""
  serie: Serie = new Serie()

  constructor(private router: Router, private activateRoute: ActivatedRoute, private seriesService: SeriesService) {
    this.router.events.subscribe(route => {
      if (route instanceof NavigationEnd) {
        if (route.url.includes("new")) {
          this.viewFormAdd = true
        }
      }
    })
  }

  ngOnInit() {

    this.activateRoute.params.subscribe(value => {
      this.idSearch = value.id
      if (this.idSearch != "new")
        this.getSerie()
    })


  }

  getSerie() {
    this.seriesService.getSerie(this.idSearch).subscribe(data => {
      this.serie = data
      console.log(data)
    },
      error => {
        console.log("Error:", error);
      }
    );
  }

  updateSerie(name: string, type: string) {
    const serie: Serie = new Serie()
    serie._id = this.idSearch
    serie.name = name
    serie.type = type
    serie.platform = ""
    this.seriesService.updateSerie(serie).subscribe(data => {
      console.log(data)
    },
      error => {
        console.log("Error:", error);
      }
    );
  }

  deleteSerie() {
    this.seriesService.deleteSerie(this.idSearch).subscribe(data => {
      console.log(data)
    },
      error => {
        console.log("Error:", error);
      }
    );
  }
}

