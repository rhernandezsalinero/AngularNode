import { Serie } from './models/series.model';
import { SeriesService } from './services/series.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'serviceAngular';

  series: Array<Serie> = []

  constructor(private seriesService: SeriesService) { }

  ngOnInit() {
    /* this.deleteSerie()
    this.getSerie()*/

  }

 /*  loadSeries() {
    const params = ""
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

  saveSerie() {
    const serie: Serie = new Serie()
    serie.name = "The Expanse"
    serie.type = "Scifi"
    this.seriesService.saveSerie(serie).subscribe(data => {
      console.log(data)
    },
      error => {
        console.log("Error:", error);
      }
    );
  }

  getSerie() {
    const id = "6077fb4ac4f2b84fdc59b587"
    this.seriesService.getSerie(id).subscribe(data => {
      console.log(data)
    },
      error => {
        console.log("Error:", error);
      }
    );
  }

  updateSerie() {
    const serie: Serie = new Serie()
    serie._id = "60587d2df743f350acafe905"
    serie.name = "One piece"
    serie.type = "Anime"
    serie.platform = "6059cfd59486848b0b6d2d94"
    this.seriesService.updateSerie(serie).subscribe(data => {
      console.log(data)
    },
      error => {
        console.log("Error:", error);
      }
    );
  }

  deleteSerie() {
    const id = "6077fb4ac4f2b84fdc59b587"
    this.seriesService.deleteSerie(id).subscribe(data => {
      console.log(data)
    },
      error => {
        console.log("Error:", error);
      }
    );
  } */
}



